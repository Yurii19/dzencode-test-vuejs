<template lang="html">
  <ul class="nav flex-column text-left">
    <li class="nav-item" v-for="item in menuItems" :key="item">
      <a class="nav-link active" href="#">{{ item }}</a>
    </li>
  </ul>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  //console.log(dayjs)
});

const menuItems = ['Orders', 'Groups', 'Products', 'Users', 'Settings'];
</script>

<style scoped></style>
