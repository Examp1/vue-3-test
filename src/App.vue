<script setup>
import { API_KEY, BASE_URL } from './constants'
import WeatherSummary from './components/WeatherSummary.vue';
import HiglitesSections from './components/higlites-sections.vue';
import CoordsSection from './components/coords-section.vue';
import { ref, onMounted } from 'vue';
import HumiditySection from './components/humidity-section.vue';
import { useFetch } from '@vueuse/core'

const city = ref('Paris')
const weatherInfo = ref(null)

const getWeather = async () => {

  const { isFetching, error, data } = await useFetch(`${BASE_URL}?q=${city.value}&units=metric&appid=${API_KEY}`).json()
  // fetch(`${BASE_URL}?q=${city.value}&units=metric&appid=${API_KEY}`)
  //   .then((response) => {
  //     return response.json()
  //   }).then((data) => {
  //     weatherInfo.value = data
  //   })
  weatherInfo.value = data.value
}

onMounted(() => {
  getWeather()
})

</script>

<template>
  <div class="page">
    <main class="main">
      <div class="container">
        <div class="laptop">
          <div class="sections">
            <section class="section section-left">
              <div class="info">
                <div class="city-inner">
                  <input
                    v-model="city"
                    type="text"
                    class="search"
                    @keypress.enter="getWeather"
                  >
                </div>
                <WeatherSummary :weatherInfo="weatherInfo"></WeatherSummary>
              </div>
            </section>
            <section class="section section-right">
              <HiglitesSections :weatherInfo="weatherInfo"></HiglitesSections>
            </section>
          </div>
          <div class="sections">
            <CoordsSection :coords="weatherInfo?.coord"></CoordsSection>
            <HumiditySection :humidity="weatherInfo?.main.humidity"></HumiditySection>
          </div>
        </div>
      </div>
    </main>
</div></template>
<style lang="scss" scoped></style>
