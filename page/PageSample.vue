<template>
  <div class="container mt-10">
    <h1 class="text-3xl font-medium text-gray-800">這裡是 {{ route.path }}</h1>
  </div>
</template>

<script setup>
const route = useRoute()
</script>
