<template>
  <div class="container">
    <h1>Hello Vue!</h1>
    <p>This is a simple Vue.js app.</p>
  </div>
</template>

<script setup>
onMounted(async () => {
  GlobalNotification.success('欢迎', '加载成功')
})
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
  width: 100%;
}

.devBg {
  background-color: rgb(246, 245, 245);
}
</style>
