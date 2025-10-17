<template>
  <div
    class="flex flex-col-reverse items-center lg:flex-row justify-center-safe mt-10"
  >
    <div
      class="flex flex-col gap-8 items-center text-center ml-8 mr-8 lg:text-right lg:items-start"
    >
      <BlurText
        text="ویـــزو"
        :delay="200"
        class-name="text-6xl font-bold text-toned"
        animate-by="words"
        direction="top"
        :threshold="0.1"
      />
      <p class="text-xl text-muted max-w-164">
        ویزو، جایی برای خلق و توسعه اپلیکیشن‌های موبایل و وب. ما تیمی از
        توسعه‌دهندگان و طراحان هستیم که راه‌حل‌های دیجیتال خلاقانه برای کسب‌وکار
        شما ارائه می‌دهیم.
      </p>

      <UButton icon="lucide-rocket" class="pr-4 pl-4 pt-2 pb-2" size="xl">
        شروع همکاری
      </UButton>
    </div>
    <FadeContent
      :blur="true"
      :duration="1000"
      :delay="200"
      :threshold="0.1"
      :initial-opacity="0.1"
      easing="ease-out"
    >
      <img
        src="/logo-hero.png"
        class="h-56 lg:h-96"
        alt="VeezoLogo"
      >
    </FadeContent>
  </div>
</template>
