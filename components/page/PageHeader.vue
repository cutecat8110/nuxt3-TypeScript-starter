<template>
  <header class="sticky top-0 bg-white shadow">
    <div class="container flex min-h-[3.5rem] items-center justify-between overflow-hidden">
      <nav class="flex gap-4">
        <NuxtLink to="/">Header</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
        <NuxtLink to="/test404">404</NuxtLink>
        <NuxtLink to="/pinia">pinia</NuxtLink>
      </nav>
      <div class="flex gap-4">
        {{ $t('language') }}
        <button
          v-for="(localeItem, index) in locales"
          :key="index"
          type="button"
          @click="changeLanguage(localeItem.code)"
          class="underline"
        >
          {{ localeItem.code }}
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
const { locale, locales, setLocaleCookie } = useI18n()
const changeLanguage = (localeCode) => {
  locale.value = localeCode
  setLocaleCookie(localeCode)
}
</script>
