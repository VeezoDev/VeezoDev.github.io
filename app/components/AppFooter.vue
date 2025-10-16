<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items1 = computed<NavigationMenuItem[]>(() => [
  {
    label: "خانه",
    to: "/",
    class: "p-2.5",
  },
  {
    label: "محصولات",
    to: "/products",
    class: "p-2.5",
  },
  {
    label: "درباره ما",
    to: "/about-us",
    class: "p-2.5",
  },
  {
    label: "تماس با ما",
    to: "/contact-us",
    class: "p-2.5",
  },
]);
const items2 = computed<NavigationMenuItem[]>(() => [
  {
    label: "مشاغل",
    to: "/404",
    class: "p-2.5",
  },
  {
    label: "گیت‌هاب",
    to: "https://github.com/VeezoDev",
    target: "_blank",
    class: "p-2.5",
  },
  {
    label: "کانال تلگرام",
    to: "https://telegram.org/",
    target: "_blank",
    class: "p-2.5",
  },
  {
    label: "لینکدین",
    to: "https://www.linkedin.com/",
    target: "_blank",
    class: "p-2.5",
  },
]);
</script>

<template>
  <USeparator class="mt-10" />

  <UFooter>
    <div class="flex flex-col lg:flex-row lg:mb-5">
      <div
        class="flex flex-col justify-center items-center text-center gap-5 lg:text-right lg:items-start"
      >
        <p class="text-2xl font-bold text-toned">ویـــزو</p>
        <p class="text-base text-muted max-w-2xl m-5 lg:m-0">
          ویزو، جایی برای خلق و توسعه اپلیکیشن‌های موبایل و وب. ما تیمی از
          توسعه‌دهندگان و طراحان هستیم که راه‌حل‌های دیجیتال خلاقانه برای
          کسب‌وکار شما ارائه می‌دهیم.
        </p>
      </div>
      <div class="flex justify-center mt-8 gap-20">
        <UNavigationMenu
          :items="items1"
          variant="link"
          orientation="vertical"
          color="neutral"
        />
        <UNavigationMenu
          :items="items2"
          variant="link"
          orientation="vertical"
          color="neutral"
        />
      </div>
    </div>
  </UFooter>

  <USeparator />

  <UFooter>
    <template #left>
      <p class="text-muted text-sm">
        Copyright © {{ new Date().getFullYear() }}. All rights reserved
      </p>
    </template>

    <template #right>
      <UColorModeSelect variant="subtle" />
      <UButton
        icon="i-simple-icons-telegram"
        color="neutral"
        variant="ghost"
        target="_blank"
        aria-label="Telegram"
      />
      <UButton
        icon="i-simple-icons-x"
        color="neutral"
        variant="ghost"
        target="_blank"
        aria-label="X"
      />
      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        target="_blank"
        aria-label="GitHub"
      />
    </template>
  </UFooter>
</template>
