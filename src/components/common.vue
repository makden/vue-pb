<script>
import inputSearch from './UI/inputSearch.vue';
import inputNumber from './UI/inputNumber.vue';
import radios from './UI/radios.vue';

export default {
  components: {
    inputSearch,
    radios,
    inputNumber,
  },
  data() {
    return {
      bregades: this.$store.state.bregades,
      typeWorks: this.$store.state.typeWorks,
      numberBregade: '',
      typeWork: '',
      dataforsend: {
        codeobject: null,
        bregade: null,
        typeWork: null,
        compwork: 0,
        typeEvent: null,
      },
      compwork: false,
    };
  },
  methods: {
    getNumberBregade(val) {
      this.dataforsend.bregade = val;
    },
    getTypeWork(val) {
      this.dataforsend.typeWork = val;
    },
    getCodeObject(val) {
      this.dataforsend.codeobject = val;
    },
    vars() {
      console.log(this.dataforsend);
    },
    checkedRadioBtn(e) {
      this.compwork = e.target.value == 'Завершение' ? true : false;
      this.dataforsend.typeEvent = e.target.value;
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
    <inputSearch @valueInput="getNumberBregade" :datalist="bregades"
      >№ Бригады</inputSearch
    >
    <br />
    <inputSearch @valueInput="getCodeObject">Код объекта</inputSearch>
    <br />
    <inputSearch @valueInput="getTypeWork" :datalist="typeWorks"
      >Вид работы</inputSearch
    >
    <br />
    <radios val="Выезд" @checked="checkedRadioBtn">Выезд</radios>
    <radios val="Прибытие" @checked="checkedRadioBtn">Прибытие</radios>
    <radios val="Допуск" @checked="checkedRadioBtn">Допуск</radios>
    <radios val="Начало" @checked="checkedRadioBtn">Начало</radios>
    <radios val="Завершение" @checked="checkedRadioBtn">Завершение</radios>

    <inputNumber val="" v-if="compwork" />
    <radios val="Возвращение" @checked="checkedRadioBtn">Возвращение</radios>
    <radios val="Передислокация" @checked="checkedRadioBtn"
      >Передислокация</radios
    >
    <radios val="Объект не готов" @checked="checkedRadioBtn"
      >Объект не готов</radios
    >
    <hr />
    <button>Тест</button>
  </form>
</template>

<style scoped></style>
