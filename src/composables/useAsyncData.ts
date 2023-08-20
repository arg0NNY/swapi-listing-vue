import { computed, onMounted, ref } from 'vue'
import type { AxiosError } from 'axios'
import { isAxiosError } from 'axios'

export type AsyncDataStatus = 'pending' | 'success' | 'error'

export default function useAsyncData<T> (fn: (...args: any) => Promise<T>) {
  const data = ref<T>()
  const pending = ref(false)
  const error = ref<AxiosError>()
  const status = computed<AsyncDataStatus>(
    () => pending.value ? 'pending'
      : error.value ? 'error' : 'success'
  )

  const execute = async () => {
    if (pending.value === true) return
    pending.value = true
    error.value = undefined
    try {
      data.value = await fn()
    }
    catch (err) {
      if (isAxiosError(err)) error.value = err
    }
    finally {
      pending.value = false
    }
  }

  onMounted(execute)

  return {
    data,
    pending,
    error,
    status,
    refresh: execute
  }
}
