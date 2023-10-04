<script setup>
import axios from "axios";
import { reactive } from "vue";

const review = reactive({
  author: "",
  stars: null,
  text: "",
  photo: null,
  isRecomended: null,
});

const submitForm = () => {
  axios.post("/api/review", review, {
    headers: {
      "Content-type": "multipart/form-data",
    },
  });
};
</script>

<template>
  <form class="container pt-5 pb-5" ref="mainForm">
    <u-input v-model="review.author" placeholder="Как вас зовут?" type="text" />
    <u-input
      v-model="review.text"
      placeholder="Что понраивлось?"
      type="textarea"
    />

    <h4>Оценка</h4>
    <u-radio
      v-for="i in 5"
      :key="i"
      name="stars"
      :val="i"
      :label="i"
      v-model="review.stars"
    ></u-radio>

    <!-- <div class="star">
      <input
        class="form-check-input"
        type="checkbox"
        id="'star'+i"
        :true-value="i"
        v-model="review.stars"
      />
      <label class="form-check-label" for="'star'+i" type="checkbox">
        {{ i }}
      </label>
    </div> -->

    <u-file v-model="review.photo" label="Photo" />

    <u-radio
      name="recomended"
      :val="true"
      :label="'Советую'"
      v-model="review.isRecomended"
    ></u-radio>
    <u-radio
      name="recomended"
      :val="false"
      :label="'Не советую'"
      v-model="review.isRecomended"
    ></u-radio>
    
    <!-- <div class="form-check">
      <input
        class="form-check-input"
        name="recomended"
        :value="true"
        type="radio"
        id="adv1"
        v-model="review.isRecomended"
      />
      <label class="form-check-label" for="adv1"> Советую </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        name="recomended"
        :value="false"
        type="radio"
        id="adv2"
        v-model="review.isRecomended"
      />
      <label class="form-check-label" for="adv2"> Не советую </label>
    </div> -->
    <u-btn @click.prevent="submitForm">Отправить</u-btn>
  </form>
</template>