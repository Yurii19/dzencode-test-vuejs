<template lang="html">
  <!-- <h2>Orders component</h2> -->
  <div class="card">
    <div class="card-body d-flex justify-content-around align-items-center p-1">
      <span class="h4 d-block w-25 m-0 order-name">{{ theOrder.title }}</span>
      <span class="px-4"><ListIcon /></span>

      <div class="d-flex flex-column align-items-start">
        <span class="h4 p-0 m-0">23</span>
        <span class="p-0 opacity-25">Products</span>
      </div>
      <div class="d-flex flex-column align-items-start">
        <span class="p-0 m-0">4 / 12</span>
        <span class="p-0 opacity-25">{{
          dayjs(theOrder.date).format('DD / MMM / YYYY')
        }}</span>
      </div>
      <div class="d-flex flex-column align-items-start">
        <span class="p-0 m-0">prise usd</span>
        <span class="p-0 opacity-25">prise uah</span>
      </div>
      <span class="delete-button"  @click="removeOrder">
        <DeleteIcon
      /></span>
      <div class="d-flex flex-column align-items-start"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import ListIcon from '@/icons/ListIcon.vue';
import DeleteIcon from '@/icons/DeleteIcon.vue';
import dayjs from 'dayjs';

onMounted(() => {});

//const orderName = ' Oreder name ';

const theOrder = {
  id: 1,
  title: 'Order 1',
  date: '2017-06-29 12:09:33',
  description: 'desc',
  get products() {
    return products;
  },
};

const products = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 1,
    date: '2017-06-29 12:09:33',
  },
  {
    id: 2,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 2,
    date: '2017-06-29 12:09:33',
  },
];

const removeOrder = () => {
  alert('Are you shure ?');
};
</script>

<style scoped>

.delete-button {
    opacity: .5;
    cursor: pointer;
}
.order-name {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
