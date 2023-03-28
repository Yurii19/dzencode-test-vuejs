<template lang="html">
  <ul class="nav flex-column text-left p-5">
    <li class="nav-item" v-for="item in menuItems" :key="item.name">
      <a class="nav-link active h5" href="#"
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

<style scoped>
a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 600;
}
.router-link-active,
.router-link-exact-active {
  border-bottom: 3px solid green;
}
</style>
