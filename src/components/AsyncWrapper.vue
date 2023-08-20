<template>
  <h2 v-if="status === 'pending'">Loading...</h2>
  <h2 v-else-if="status === 'error'">{{ errorText }}</h2>
  <slot v-else />
</template>

<script setup lang="ts">
import type { AsyncDataStatus } from '@/composables/useAsyncData'
import type { AxiosError } from 'axios'
import { computed } from 'vue'

const props = defineProps<{
  status: AsyncDataStatus,
  error?: AxiosError
}>()

const errorText = computed(() => {
  switch (props.error?.response?.status) {
    case 404: return 'Not found.'
    default: return 'Something went wrong. Try again later.'
  }
})
</script>
