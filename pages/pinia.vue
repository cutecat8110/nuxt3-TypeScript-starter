<template>
  <div class="container mt-10 flex flex-col items-center gap-4">
    <h1 class="text-3xl font-medium text-gray-800">這裡是 /pinia</h1>
    <div>
      {{ store.count }}
    </div>
    <div class="space-x-4">
      <button type="button" class="rounded border px-4 py-2" @click="store.decrement">減少</button>
      <button type="button" class="rounded border px-4 py-2" @click="store.increment">增加</button>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
</script>
