<script setup lang="ts">
import type { StepperItem } from "@nuxt/ui";
import { onMounted, ref } from "vue";

const items: StepperItem[] = [
  {
    title: "ایده پردازی",
    icon: "lucide-lightbulb",
    slot: "idea" as const,
  },
  {
    title: "طراحی",
    icon: "lucide-brush",
    slot: "design" as const,
  },
  {
    title: "توسعه",
    icon: "lucide-file-json",
    slot: "develop" as const,
  },
  {
    title: "انتشار",
    icon: "lucide-book-check",
    slot: "publish" as const,
  },
];

const active = ref(0);

onMounted(() => {
  setInterval(() => {
    active.value = (active.value + 1) % items.length;
  }, 2000);
});
</script>

<template>
  <div class="flex flex-col mx-3.5 gap-8 mb-20 mt-20 text-center">
    <p class="text-4xl font-bold text-toned">مسیر خلق محصول در ویـــزو</p>
    <p class="text-xl text-muted">
      کتابخانه کامل کامپوننت‌های رابط کاربری Nuxt با بیش از ۱۰۰ کامپوننت Vue.
    </p>
    <UStepper
      v-model="active"
      :items="items"
      class="flex justify-center"
      size="lg"
    >
      <template #idea>
        <UCard
          class="text-center mt-8 lg:h-40 lg:flex lg:justify-center lg:items-center lg:text-xl lg:font-bold"
          variant="subtle"
          >الان داریم ایده میدیم
        </UCard>
      </template>
      <template #design>
        <UCard
          class="text-center mt-8 lg:h-40 lg:flex lg:justify-center lg:items-center lg:text-xl lg:font-bold"
          variant="subtle"
          >الانم داریم طراحی میکنیم
        </UCard>
      </template>
      <template #develop>
        <UCard
          class="text-center mt-8 lg:h-40 lg:flex lg:justify-center lg:items-center lg:text-xl lg:font-bold"
          variant="subtle"
          >الانم که دست و پا میزنیم
        </UCard>
      </template>
      <template #publish>
        <UCard
          class="text-center mt-8 lg:h-40 lg:flex lg:justify-center lg:items-center lg:text-xl lg:font-bold"
          variant="subtle"
          >دیگه وقت پول گرفتنه
        </UCard>
      </template>
    </UStepper>
  </div>
</template>
