<script setup lang="ts">
import type { AccordionItem } from "@nuxt/ui";

const items = ref<AccordionItem[]>([
  {
    label: "آیا شما یک دوره آزمایشی رایگان دارید؟",
    content: "مگه مسخره شماییم که مفتی کار کنیم؟",
  },
  {
    label: "آیا می‌توانم از Nuxt UI Pro برای پروژه‌های متن باز استفاده کنم؟",
    content: "حاجی کصخلی؟ این همه پول بدی بعد اوپن سورس بزنی؟",
  },
  {
    label: "به‌روزرسانی‌های جزئی و پچ نامحدود شامل چه مواردی است؟",
    content: "هیچی دادا، مارکتینگه",
  },
  {
    label: 'منظور از "دسترسی مادام‌العمر" چیست؟',
    content: "ینی تا عمر داری برده مایی",
  },
  {
    label: "آیا برای دانشجویان یا سازمان‌های غیرانتفاعی تخفیف دارید؟",
    content: "تخفیفم داریم خوشگله. شما یه توک پا بیای منزل ما بقیش حل میشه",
  },
  {
    label: "آیا پشتیبانی فنی ارائه می‌دهید؟",
    content:
      "البته که نه. مگه عمرمو از سر راه آوردم به یه گاگولی مثه تو توضیحات بدم؟ خودت یاد بگیر به من چه",
  },
]);
</script>

<template>
  <div class="flex flex-col gap-7 mx-4 mt-24 mb-24 items-center">
    <p class="text-4xl font-bold text-primary">سوالات متداول</p>
    <p class="text-base text-muted mb-8">
      اگر چیزی که دنبالش هستید را پیدا نکردید، به تیم پشتیبانی ما ایمیل بزنید و
      امیدوار باشید که کسی به شما پاسخ دهد.
    </p>
    <UAccordion :items="items" class="max-w-260" />
  </div>
</template>
