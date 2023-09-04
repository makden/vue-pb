<template>
  <div class="col-md-2">
    <label for="brigada" class="form-label"><slot></slot></label>
    <input
      type="text"
      class="form-control"
      @input="updateInput"
      :value="val"
      autocomplete="off"
      id="brigada"
    />
    <ul class="list_data" v-if="displayListData">
      <li v-for="arrVal in arrVals" @click="selectItem">{{ arrVal }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'inputs',
  props: {
    datalist: Array,
  },
  data() {
    return {
      arrVals: [],
      displayListData: true,
      val: '',
    };
  },
  methods: {
    updateInput(event) {
      if (this.datalist) {
        this.arrVals = this.datalist.filter(function (book) {
          return book.indexOf(event.target.value) !== -1;
        });
        this.displayListData = this.arrVals.length <= 10 ? true : false; // Покать подсказу когда мешьше или = 3
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
}

ul.list_data li {
  line-height: 22px;
  padding: 5px;
}

ul.list_data li:hover {
  background-color: #eee;
}
</style>
