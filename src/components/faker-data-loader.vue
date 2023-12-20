<script setup >
import {ref} from 'vue'

const loading = ref(false)
const data = ref('')
const load = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    data.value = crypto.getRandomValues(new Uint8Array(10)).join('')
  }, 1000)
}

load()

</script>

<template>
  random data:
  <template v-if="loading">
    loading...
  </template>
  <template v-else>
    {{ data }}
  </template>
</template>

<style scoped>

</style>
