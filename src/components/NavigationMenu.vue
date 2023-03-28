<template lang="html">
  <ul class="nav flex-column text-left">
    <li class="nav-item" v-for="item in menuItems" :key="item.name">
      <a class="nav-link active" href="#"
        ><router-link :to="item.linkTo">{{ item.name }}</router-link></a
      >
    </li>
  </ul>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  //console.log(dayjs)
});

//const menuItems = ['Orders', 'Groups', 'Products', 'Users', 'Settings'];
const menuItems = [
  { name: 'Orders', linkTo: '/orders' },
  { name: 'Groups', linkTo: '/groups' },
  { name: 'Products', linkTo: '/products' },
  { name: 'Users', linkTo: '/users' },
  { name: 'Settings', linkTo: '/settings' },
];
</script>

<style scoped></style>
