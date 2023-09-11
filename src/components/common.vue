<script>
import inputSearch from './UI/inputSearch.vue';
import inputNumber from './UI/inputNumber.vue';
import inputDef from './UI/input-def.vue';
import radios from './UI/radios.vue';
import { TelegramWebAppContainer } from '@telegram-web-app/core';

export default {
  components: {
    inputSearch,
    radios,
    inputNumber,
    inputDef,
  },
  data() {
    return {
      bregades: this.$store.state.bregades,
      typeWorks: this.$store.state.typeWorks,

      dataforsend: {
        codeobject: null,
        bregade: null,
        typeWork: null,
        compwork: 0,
        lat: 0,
        lng: 0,
        cdate: new Date().toJSON().slice(0, 10),
        ctime: new Date().toLocaleTimeString(),
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

    requestLocation() {
      this.$getLocation()
        .then((coordinates) => {
          this.dataforsend.lat = coordinates.lat;
          this.dataforsend.lng = coordinates.lng;
        })
        .catch((error) => {
          alert(error);
        });
    },
    vars() {
      const telegram = new TelegramWebAppContainer();
      telegram.WebApp.ready();
      //telegram.WebApp.MainButton.show();
      //telegram.WebApp.MainButton.text = 'Отправить данные!'; //изменяем текст кнопк
      telegram.WebApp.expand();
      console.log(JSON.stringify(this.dataforsend));
      telegram.WebApp.sendData(JSON.stringify(this.dataforsend));
    },
    checkedRadioBtn(e) {
      this.compwork = e.target.value == 'Завершение' ? true : false;
      this.dataforsend.typeEvent = e.target.value;
    },
    inputVal(e) {
      this.dataforsend.codeobject = e.target.value;
    },
    inputNum(e) {
      this.dataforsend.compwork = e.target.value;
    
    },
  },
};
</script>

<template>
  <form
    class="shadow-sm p-3 mb-5"
    style="background-color: #d9e9f9"
    @submit.prevent="vars"
  >
    <inputSearch @valueInput="getNumberBregade" :datalist="bregades"
      >№ Бригады</inputSearch
    >

    <br />
    <inputDef @inputVal="inputVal">Код объекта</inputDef>
    <br />
    <inputSearch @valueInput="getTypeWork" :datalist="typeWorks"
      >Вид работы</inputSearch
    >
    <br />
    <radios val="Выезд" @checked="checkedRadioBtn">Выезд</radios>
    <radios val="Прибытие" @checked="checkedRadioBtn" @click="requestLocation"
      >Прибытие</radios
    >
    <radios val="Допуск" @checked="checkedRadioBtn">Допуск</radios>
    <radios val="Начало" @checked="checkedRadioBtn" @click="requestLocation"
      >Начало</radios
    >
    <radios val="Завершение" @checked="checkedRadioBtn" @click="requestLocation"
      >Завершение</radios
    >

    <inputNumber @inputNum="inputNum" v-if="compwork" />
    <radios val="Возвращение" @checked="checkedRadioBtn">Возвращение</radios>
    <radios val="Передислокация" @checked="checkedRadioBtn"
      >Передислокация</radios
    >
    <radios val="Объект не готов" @checked="checkedRadioBtn"
      >Объект не готов</radios
    >

    <button style="width: 100%" class="btn mt-4 mb-3 btn-success">
      Отправить данные
    </button>
  </form>
</template>

<style scoped></style>
