<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UModal>
      <UButton
        :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
        color="neutral"
        variant="ghost"
      />
      <template #content>
        <div class="p-6 flex flex-col gap-4 text-center">
          <p class="text-xl font-bold text-toned">شرمنده</p>
          <p class="text-toned">انیمیشن داریم، تو لایت مود حیف میشه</p>
        </div>
      </template>
    </UModal>

    <template #fallback>
      <div class="size-8" />
    </template>
  </ClientOnly>
</template>
