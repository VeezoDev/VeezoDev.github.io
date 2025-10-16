<template>
  <div
    class="flex flex-col-reverse justify-between items-center mt-24 mb-24 lg:flex-row-reverse"
  >
    <div>
      <div
        class="flex flex-col text-center gap-5 mb-5 lg:text-right lg:max-w-170"
      >
        <p class="text-4xl font-bold text-toned">
          قدرت گرفته از کامپوننت‌های رابط کاربری Nuxt
        </p>
        <p class="text-xl text-muted">
          کتابخانه کامل کامپوننت‌های رابط کاربری Nuxt با بیش از ۱۰۰ کامپوننت Vue
          با استایل زیبا، قابل دسترس و قابل تنظیم دسترسی داشته باشید. هر آنچه
          برای ساخت برنامه‌های حرفه‌ای SaaS نیاز دارید.
        </p>
      </div>
      <div class="flex flex-col gap-3">
        <div class="flex gap-3">
          <UIcon name="lucide-package-open" class="bg-primary size-6" />
          <p class="text-muted max-w-84 lg:max-w-150">
            از دکمه‌ها گرفته تا ماژول‌ها، از جداول داده گرفته تا فرم‌ها - همه با
            Tailwind CSS استایل‌بندی شده‌اند و به صورت آماده در دسترس هستند.
          </p>
        </div>
        <div class="flex gap-3">
          <UIcon name="lucide-shield" class="bg-primary size-6" />
          <p class="text-muted">به خدا قسم.</p>
        </div>
        <div class="flex gap-3">
          <UIcon name="lucide-code-xml" class="bg-primary size-6" />
          <p class="text-muted lg:mb-0">همه رو با Tailwind زدن.</p>
        </div>
      </div>
    </div>
    <USkeleton class="h-64 w-90 mb-10 lg:mb-0 lg:h-106 lg:w-140 rounded-2xl" />
  </div>
</template>
