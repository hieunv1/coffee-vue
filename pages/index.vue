<template>
  <div class="flex flex-col h-full">
    <img class="banner" src="@/assets/images/index.png" />
    <div class="h-full bg-black flex-1 container-content flex flex-col items-center pb-2">
      <p class="title text-center pb-2">Coffee so good, your taste buds will love it.</p>
      <p class="description text-center">The best grain, the finest roast, the powerful flavor.</p>
      <button class="rounded-2xl mt-4" @click="handleDarkTheme">Get Started</button>
    </div>
  </div>
</template>
<script setup>
const { handleDarkTheme } = useTheme();
const meta = useSeoMeta({
  title: "Coffee",
});
</script>

<style scoped>
.banner {
  width: 100%;
}

.title {
  color: #fff;
  text-align: center;
  font-family: Sora;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.34px;
  max-width: 315px;
  margin: 0 auto;
}

.description {
  color: #a9a9a9;
  text-align: center;
  font-family: Sora;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 154%; /* 21.56px */
  letter-spacing: 0.14px;
  max-width: 315px;
  margin: 0 auto;
}
.container-content {
}
.container-content button {
  background: #c67c4e;
  width: 315px;
  padding: 21px 109px;
  align-items: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  color: white;
}
</style>
