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
    class="border-1 rounded-full shadow-sm max-w-320 mr-1 ml-1 xl:m-auto xl:mb-2"
  >
    <template #title>
      <NuxtLink to="/" class="flex flex-row self-center">
        <NuxtImg src="/logo-hero.png" class="size-8" />
        <p class="text-2xl font-bold text-toned">ویـــــزو</p>
      </NuxtLink>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2" />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UTooltip text="Open on GitHub">
        <UButton
          variant="ghost"
          class="text-toned"
          to="https://github.com/VeezoDev"
          target="_blank"
          icon="lucide-github"
          aria-label="GitHub"
        />
      </UTooltip>

      <UColorModeButton class="text-toned" />
    </template>
  </UHeader>
</template>
