<script setup lang="ts">
import { fa_ir } from "@nuxt/ui/locale";
// const colorMode = useColorMode();
// colorMode.preference = "dark";
</script>

<template>
  <UApp :locale="fa_ir">
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </UApp>
</template>
