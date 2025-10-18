<template>
  <div>
    <div class="w-full h-210 lg:h-172 absolute -z-10">
      <Plasma
        color="#0055af"
        :speed="1"
        direction="forward"
        :scale="1.1"
        :opacity="0.5"
        :mouse-interactive="false"
        class="mask-b-from-30 -mt-28 hidden lg:block"
      />
      <NuxtImg
        src="/m-back.png"
        class="block mt-8 lg:hidden w-full opacity-50 mask-y-from-80"
      />
    </div>
    <div class="m-auto max-w-96 lg:max-w-340">
      <HomeHero />
      <HomeCards />
      <HomeContent />
      <div>
        <TrueFocus
          sentence="چسی چسی چسی"
          :manual-mode="false"
          :blur-amount="10"
          border-color="blue"
          :animation-duration="1"
          :pause-between-animations="1"
        />
      </div>
      <HomeContent2 />
      <USeparator />
      <HomeStepper />
      <USeparator />
      <HomeFaq />
      <HomeStart />
    </div>
  </div>
</template>
