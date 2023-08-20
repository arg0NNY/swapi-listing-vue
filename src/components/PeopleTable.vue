<template>
  <table>
    <thead>
      <tr>
        <th><code>name</code></th>
        <th><code>height</code></th>
        <th><code>mass</code></th>
        <th><code>hair_color</code></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="p in people" :key="p.id">
        <td>{{ p.name }}</td>
        <td>{{ p.height }}</td>
        <td>{{ p.mass }}</td>
        <td>{{ p.hair_color }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { People } from '@/types'

const props = defineProps<{
  people: People[]
}>()
</script>

<style scoped lang="scss">
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th, td {
  padding: 10px;
}
</style>
