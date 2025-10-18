<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "خانه",
    to: "/",
    icon: "lucide-house",
    class: "p-2.5",
  },
  {
    label: "محصولات",
    to: "/products",
    icon: "lucide-package",
    class: "p-2.5",
  },
  {
    label: "درباره ما",
    to: "/about-us",
    icon: "lucide-users",
    class: "p-2.5",
  },
  {
    label: "تماس با ما",
    to: "/contact-us",
    icon: "lucide-phone-call",
    class: "p-2.5",
  },
]);
</script>

<template>
  <UHeader
    toggle-side="left"
    class="shadow-sm max-w-320 xl:m-auto xl:mb-2 lg:border-1 lg:rounded-full"
  >
    <template #title>
      <NuxtLink to="/" class="flex flex-row self-center">
        <NuxtImg src="/logo-hero.png" class="size-8" />
        <p class="text-2xl font-bold text-toned">ویـــــزو</p>
      </NuxtLink>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="" />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UTooltip text="بریم گیت‌هاب">
        <UButton
          variant="ghost"
          class="text-toned"
          to="https://github.com/VeezoDev"
          target="_blank"
          icon="lucide-github"
          aria-label="GitHub"
        />
      </UTooltip>

      <!-- <UColorModeButton class="text-toned" /> -->
      <ColorModeBtn />
    </template>
  </UHeader>
</template>
