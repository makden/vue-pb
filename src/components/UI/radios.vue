<template>
  <div class="row mt-2 justify-content-md-center">
    <input
      type="radio"
      name="status"
      class="btn-check"
      :id="labforid"
      :value="val"
      @click="$emit('checked', $event)"
      autocomplete="off"
    />

    <label class="btn btn-outline-primary" :for="labforid"><slot></slot></label>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
  name: 'radios',
  props: {
    val: String,
  },
  data() {
    return {
      labforid: uuidv4(),
    };
  },
  // mounted() {
  //   // this.labforid = uuidv4();
  // },
  methods: {
    checkedss() {
      alert('wwww');
    },
  },
};
</script>

<style scoped></style>
