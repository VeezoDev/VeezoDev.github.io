<template>
  <div>
    <div class="w-full h-full absolute -z-10">
      <div
        class="bg-[radial-gradient(ellipse_50%_100%_at_50.00%_50.00%,_rgba(43,_127,_255,_0.13)_0%,_var(--ui-secondary-10,_rgba(43,_127,_255,_0.0))_100%)] w-full -mt-28 h-full mask-b-from-180"
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
