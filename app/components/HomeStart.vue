<template>
  <USeparator
    type="dashed"
    :avatar="{
      src: '/logo.png',
      size: 'lg',
    }"
  />
  <div
    class="bg-[radial-gradient(ellipse_40%_100%_at_50.00%_0.00%,_rgba(43,_127,_255,_0.07)_0%,_var(--ui-secondary-10,_rgba(43,_127,_255,_0.0))_100%)] inline-flex flex-col justify-center items-center gap-16 w-full mb-14 lg:mb-20 -mt-4.5"
  >
    <div class="self-stretch text-center text-3xl font-bold pt-14 lg:pt-30">
      <span style="word-wrap: break-word" class="text-highlighted">
        همین امروز با
      </span>
      <span style="word-wrap: break-word" class="text-primary">ویـــزو</span>
      <span style="word-wrap: break-word" class="text-highlighted">
        شروع به همکاری کنید
      </span>
    </div>
    <UButton
      icon="lucide-rocket"
      class="pr-5 pl-5 pt-2 pb-2"
      size="xl"
      variant="subtle"
    >
      شروع همکاری
    </UButton>
  </div>
</template>
