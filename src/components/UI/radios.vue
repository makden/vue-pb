<template>
  <div class="row mt-2 justify-content-md-center">
    <input
      type="radio"
      name="status"
      class="btn-check"
      id="{{randStr}}"
      autocomplete="off"
    />

    <label class="btn btn-outline-primary" for="{{randStr}}"
      ><slot>{{ randStr }}</slot></label
    >
  </div>
</template>

<script>
export default {
  name: 'radios',
  props: {
    val: String,
  },
  methods: {},
};
</script>

<style scoped></style>
