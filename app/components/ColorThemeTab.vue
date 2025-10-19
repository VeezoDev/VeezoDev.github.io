<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui";

const color = useColorMode();

const items: TabsItem[] = [
  {
    icon: "i-ph-desktop",
    value: "system",
  },
  {
    icon: "i-ph-sun",
    value: "light",
  },
  {
    icon: "i-ph-moon",
    value: "dark",
  },
];

const active = computed({
  get() {
    return color.preference;
  },
  set(tab) {
    color.preference = tab;
  },
});
</script>

<template>
  <UTabs
    v-model="active"
    :content="false"
    :items="items"
    class="w-fulls"
    color="neutral"
  />
</template>
