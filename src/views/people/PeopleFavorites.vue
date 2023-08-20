<template>
  <h1>Favorites</h1>
  <PeopleTable :people="favorite" v-model:favorite="favorite" />
</template>

<script setup lang="ts">
import PeopleTable from '@/components/PeopleTable.vue'
import useFavorite from '@/composables/useFavorite'

const favorite = useFavorite()
</script>
