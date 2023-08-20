<template>
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

const { data: people, status, error } = useAsyncData(searchPeople)
const favorite = useFavorite()
</script>
