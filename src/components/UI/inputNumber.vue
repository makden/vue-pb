<template>
  <div class="row mt-2 justify-content-md-center">
    <div class="input-group mb-2">
      <span class="input-group-text">Кол-во</span>
      <input
        type="number"
        class="form-control"
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
  methods: {
    selectItem(e) {
      this.$emit('valueInput', e.target.value);
    },
  },
};
</script>

<style scoped></style>
