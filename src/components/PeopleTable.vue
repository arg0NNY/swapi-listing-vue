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
        <td v-if="favorite">
          <button
            class="star-btn"
            :class="{ 'star-btn--starred': isStarred(p) }"
            @click="star(p)"
            data-test="star-btn"
          >⭐</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { People } from '@/types'
import { computed } from 'vue'

const props = defineProps<{
  people: People[],
  favorite?: People[]
}>()
const emit = defineEmits<{
  'update:favorite': [People[] | undefined]
}>()

const favorite = computed({
  get: () => props.favorite,
  set: value => emit('update:favorite', value)
})

const isStarred = (p: People) => !!favorite.value?.some(f => f.id === p.id)

function star (p: People) {
  if(!favorite.value) return

  if (isStarred(p)) favorite.value = favorite.value!.filter(f => f.id !== p.id)
  else favorite.value = favorite.value!.concat(p)
}
</script>

<style scoped lang="scss">
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th, td {
  padding: 10px;
}

.star-btn {
  filter: grayscale(1);
  &--starred {
    filter: none;
  }
}
</style>
