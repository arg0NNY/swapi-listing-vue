<template>
  <div ref="anchor" class="select-anchor">
    <slot />

    <div v-if="shown && (options?.length || pending)" class="select">
      <div v-if="pending" class="select__loader"><span>⌛</span></div>
      <button
        v-else
        v-for="(option, i) in options"
        :key="option.id"
        class="select__option"
        @mousedown="emit('select', option, i)"
      >{{ option.name }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface SelectOption {
  id: string | number,
  name: string | number
}

const props = withDefaults(
  defineProps<{
    options: SelectOption[],
    shown?: boolean,
    pending?: boolean
  }>(),
  {
    shown: true,
    pending: false
  }
)
const emit = defineEmits<{
  select: [SelectOption, number]
}>()
</script>

<style scoped lang="scss">
.select-anchor {
  position: relative;
  max-width: 300px;
}
.select {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 1px 5px rgba(0,0,0,.2);
  min-height: 48px;
  display: flex;
  flex-direction: column;

  &__option {
    height: 48px;
    padding: 8px 16px;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    background: none;
    border: none;
    &:hover {
      background: #eeeeee;
    }
  }
  &__loader {
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      animation: loader infinite 1.5s ease;
      translate: 0 -2px;
      transform-origin: 50% calc(50% + 1px);
    }
  }

  @keyframes loader {
    0% {
      transform: rotate(0);
    }
    20% {
      transform: rotate(200deg);
    }
    30%, 50% {
      transform: rotate(180deg);
    }
    70% {
      transform: rotate(380deg);
    }
    80%, 100% {
      transform: rotate(360deg);
    }
  }
}
</style>
