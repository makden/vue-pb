<template>
  <div class="col-md-2 box_input_label">
    <label :for="labforid" class="form-label"><slot></slot></label>
    <input
      type="text"
      class="form-control"
      @input="updateInput"
      :value="val"
      autocomplete="off"
      :id="labforid"
    />
    <ul class="list_data" v-if="displayListData">
      <li v-for="arrVal in arrVals" @click="selectItem">{{ arrVal }}</li>
    </ul>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
  name: 'inputSearch',
  props: {
    datalist: Array,
  },
  data() {
    return {
      arrVals: [],
      displayListData: true,
      val: '',
      labforid: uuidv4(),
    };
  },
  methods: {
    updateInput(event) {
      if (this.datalist) {
        this.arrVals = this.datalist.filter(function (book) {
          return book.indexOf(event.target.value) !== -1;
        });
        this.displayListData = this.arrVals.length <= 10 ? true : false; // Покать подсказу когда мешьше или = 10
        this.val = event.target.value;
      }
    },
    selectItem(e) {
      this.val = e.target.innerText;
      this.displayListData = false;
      this.$emit('valueInput', this.val);
    },
  },
};
</script>

<style scoped>
.box_input_label {
  position: relative;
}

.list_data {
  position: absolute;
  box-shadow: 2px 2px 5px #aaa;
  width: 100%;
}

.input_search {
  border: solid 1px #def;
  display: inline-block;
}

.input_search input[type='text'] {
  border: solid 1px #aaa;
  border-bottom: none;
  background-color: #eee;
  padding: 5px 10px;
}

ul.list_data {
  margin: 0px;
  padding: 0px;
  list-style: none;
  background-color: #fff;
  cursor: default;
  border-radius: 5px;
  z-index: 1000;
}

ul.list_data li {
  line-height: 22px;
  padding: 5px;
}

ul.list_data li:hover {
  background-color: #eee;
}
</style>
