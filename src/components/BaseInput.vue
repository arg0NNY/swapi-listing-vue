<template>
  <input type="text" class="input" v-model="model">
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: string
}>()
const emit = defineEmits<{
  'update:modelValue': [string]
}>()

const model = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value)
})
</script>

<style scoped lang="scss">
.input {
  width: 100%;
  border: 1px solid #000;
  border-radius: 16px;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 400;
  line-height: 120%; /* 14.4px */
  cursor: auto;
}
</style>
