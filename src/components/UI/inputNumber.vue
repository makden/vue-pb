<template>
  <div class="row mt-2 justify-content-md-center">
    <div class="input-group mb-2">
      <span class="input-group-text">Кол-во</span>
      <input
        type="number"
        class="form-control"
        @input="$emit('inputNum', $event)"
        aria-label="Amount (to the nearest dollar)"
      />
      <span class="input-group-text">шт. / км.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'inputNumber',
  props: {},
  data() {
    return {};
  },
};
</script>

<style scoped></style>
