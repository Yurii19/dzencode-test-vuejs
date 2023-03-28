<template lang="html">
  <div style="background-color: #dff9fb">
    <h2>Orders</h2>
    <OrdersComponent />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import OrdersComponent from '../components/OrdersComponent.vue';

onMounted(() => {});
</script>

<style scoped></style>
