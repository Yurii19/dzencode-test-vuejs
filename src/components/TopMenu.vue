<template lang="html">
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="#" style="color: #7cb342">
      <img
        src="../assets/protection.png"
        width="30"
        height="30"
        class="d-inline-block align-top"
        alt=""
      />
      Inventory
    </a>
    <div class="input-group w-25">
      <input
        type="text"
        class="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>
    <div class="">
      <span class="d-block text-left">{{ today }}</span>
      <span>
        <span class="">{{ cDate }}</span
        >_ <ClockIcon />_
        <span>{{ time }}</span>
      </span>
    </div>
  </nav>
</template>

<script setup>
import ClockIcon from '@/icons/ClockIcon.vue';
import { ref, onMounted } from 'vue';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

dayjs.locale('ru');

onMounted(() => {
  //console.log(dayjs)
  setInterval(() => {
    time.value = dayjs().format('HH:mm');
  }, 30000);
});

const currentDate = new Date();

const today = capitalize(dayjs(currentDate).format('dddd'));
const cDate =
  dayjs().format('DD ') +
  capitalize(dayjs().format('MMM,')) +
  dayjs().format(' YYYY');
let time = ref(dayjs().format('HH:mm'));

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
}
</script>

<style scoped></style>
