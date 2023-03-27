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
      <!-- <span class="input-group-text" id="basic-addon1">@</span> -->
      <input
        type="text"
        class="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>
    <div>
      <span>{{ today }}</span>
      <span>{{ cDate }}<ClockIcon/></span>
    </div>
  </nav>
</template>

<script setup>
import ClockIcon from '@/icons/ClockIcon.vue'

const currentDate = new Date();
const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const today = weekday[currentDate.getDay()];
// const cDate = currentDate;

</script>

<style scoped></style>
