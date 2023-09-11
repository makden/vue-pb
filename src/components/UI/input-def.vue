<template>
  <div class="col-md-2 box_input_label">
    <label :for="labforid" class="form-label"><slot></slot></label>
    <input
      type="text"
      class="form-control"
      @input="$emit('inputVal', $event)"
      :value="val"
      autocomplete="off"
      :id="labforid"
    />
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
  name: 'input-def',
  props: {},
  data() {
    return {
      val: '',
      labforid: uuidv4(),
    };
  },
  methods: {},
};
</script>

<style scoped></style>
