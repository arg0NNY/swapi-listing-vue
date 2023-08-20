<template>
  <h1>People</h1>
  <div class="people__search">
    <Search
      placeholder="Search people..."
      :options="peopleOptions"
      :toSelectOption="toSelectOption"
      @select="onSelect"
    />
  </div>
  <AsyncWrapper :status="status" :error="error">
    <PeopleTable v-if="people" :people="people" v-model:favorite="favorite" />
  </AsyncWrapper>
</template>

<script setup lang="ts">
import useAsyncData from '@/composables/useAsyncData'
import { searchPeople } from '@/api/people'
import PeopleTable from '@/components/PeopleTable.vue'
import AsyncWrapper from '@/components/AsyncWrapper.vue'
import useFavorite from '@/composables/useFavorite'
import type { People } from '@/types'
import type { SelectOption } from '@/components/BaseSelect.vue'
import { pick } from '@/utils/object'
import Search from '@/components/Search.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const { data: people, status, error } = useAsyncData(searchPeople)
const favorite = useFavorite()

async function peopleOptions (query: string) {
  try {
    return await searchPeople(query)
  }
  catch {
    return [] as People[]
  }
}
function toSelectOption (p: People): SelectOption {
  return pick(p, ['id', 'name'])
}

function onSelect (p: People) {
  router.push({ name: 'people-single', params: { id: p.id } })
}
</script>

<style scoped lang="scss">
.people__search {
  margin-bottom: 20px;
}
</style>
