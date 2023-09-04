<script>
import inputs from './UI/inputs.vue';
import radios from './UI/radios.vue';
export default {
  components: {
    inputs,
    radios,
  },
  data() {
    return {
      bregades: this.$store.state.bregades,
      typeWorks: this.$store.state.typeWorks,
      numberBregade: '',
      typeWork: '',
      value: 'dddf',
    };
  },
  methods: {
    getNumberBregade(val) {
      this.numberBregade = val;
    },
    getTypeWork(val) {
      this.typeWork = val;
    },
    vars() {
      console.log(this.numberBregade, this.typeWork);
    },
  },
};
</script>

<template>
  <form
    class="shadow-sm p-3 mb-5"
    style="background-color: #def"
    @submit.prevent="vars"
  >
    <inputs @valueInput="getNumberBregade" :datalist="bregades"
      >№ Бригады</inputs
    >
    <br />
    <inputs>Код объекта</inputs>
    <br />
    <inputs @valueInput="getTypeWork" :datalist="typeWorks">Вид работы</inputs>
    <br />
    <radios :value="value">Выезд</radios>
    <radios>Прибытие</radios>
    <radios>Допуск</radios>
    <radios>Начало</radios>
    <radios>Завершение</radios>
    <radios>Возвращение</radios>
    <radios>Передислокация</radios>
    <radios>Объект не готов</radios>
    <hr />
    <button>Тест</button>
  </form>
</template>

<style scoped></style>
