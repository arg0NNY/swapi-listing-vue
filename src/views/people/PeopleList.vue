<template>
  <AsyncWrapper :status="status" :error="error">
    <PeopleTable v-if="people" :people="people" />
  </AsyncWrapper>
</template>

<script setup lang="ts">
import useAsyncData from '@/composables/useAsyncData'
import { searchPeople } from '@/api/people'
import PeopleTable from '@/components/PeopleTable.vue'
import AsyncWrapper from '@/components/AsyncWrapper.vue'

const { data: people, status, error } = useAsyncData(searchPeople)
</script>
