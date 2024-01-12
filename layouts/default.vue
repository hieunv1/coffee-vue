<template>
  <div class="flex flex-col items-center">
    <div class="w-96 bg-white shadow-xl rounded-2xl height">
      <div class="h-10 flex justify-between items-center px-4 header">
        <p class="time">{{ time }}</p>
        <div class="flex gap-1">
          <img src="@/assets/svg/black/mobile-signal.svg" />
          <img src="@/assets/svg/black/wifi.svg" />
          <img src="@/assets/svg/black/battery.svg" />
        </div>
      </div>
      <slot />
      <div :class="{ 'bg-black': isDark, 'p-3 flex justify-center': true }">
        <div class="end" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { isDark } = useTheme();

const time = new Date().getHours() + ":" + new Date().getMinutes();
</script>

<style scoped>
.height {
  /* height: 812px; */
}

.header {
  height: 44px;
}

.time {
  font-size: 14px;
  font-weight: bold;
}

.end {
  width: 134px;
  height: 5px;
  flex-shrink: 0;
  border-radius: 2.5px;
  background: rgba(255, 255, 255, 0.5);
}
</style>
