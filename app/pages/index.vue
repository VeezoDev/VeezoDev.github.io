<template>
  <div class="m-auto max-w-96 lg:max-w-360">
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
  </div>
</template>
