<template>
  <AsyncWrapper :status="status" :error="error">
    <PeopleTable v-if="people" :people="[people]" :favorite="favorite" />
  </AsyncWrapper>
</template>

<script setup lang="ts">
import useAsyncData from '@/composables/useAsyncData'
import { getPeopleById } from '@/api/people'
import { useRoute } from 'vue-router'
import AsyncWrapper from '@/components/AsyncWrapper.vue'
import PeopleTable from '@/components/PeopleTable.vue'
import useFavorite from '@/composables/useFavorite'

const route = useRoute()

const { data: people, status, error } = useAsyncData(() => getPeopleById(route.params.id as string))
const favorite = useFavorite()
</script>
