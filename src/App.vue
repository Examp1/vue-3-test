<script setup>
import { API_KEY, BASE_URL } from './constants'
import WeatherSummary from './components/WeatherSummary.vue';
import HiglitesSections from './components/higlites-sections.vue';
import { ref, onMounted } from 'vue';
// ?q={city name}&appid={API key}

const city = ref('Paris')
const weatherInfo = ref(null)

const getWeather = () => {
  fetch(`${BASE_URL}?q=${city.value}&units=metric&appid=${API_KEY}`)
    .then((response) => {
      return response.json()
    }).then((data) => {
      weatherInfo.value = data
    })
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
                  <input v-model="city" type="text" class="search" @keypress.enter="getWeather">
                </div>
                <WeatherSummary :weatherInfo="weatherInfo"></WeatherSummary>
              </div>
            </section>
            <section class="section section-right">
              <HiglitesSections></HiglitesSections>
            </section>
          </div>
          <div class="sections">
            <section class="section-bottom">
              <div class="block-bottom">
                <div class="block-bottom-inner">
                  <div class="block-bottom-pic pic-coords"></div>
                  <div class="block-bottom-texts">
                    <div class="block-bottom-text-block">
                      <div class="block-bottom-text-block-title">
                        Longitude: 2.3488
                      </div>
                      <div class="block-bottom-text-block-desc">
                        Longitude measures distance east or west of the prime meridian.
                      </div>
                    </div>
                    <div class="block-bottom-text-block">
                      <div class="block-bottom-text-block-title">
                        Latitude: 48.8534
                      </div>
                      <div class="block-bottom-text-block-desc">
                        Latitude lines start at the equator (0 degrees latitude) and run east and west, parallel to the
                        equator.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="section-bottom">
              <div class="block-bottom">
                <div class="block-bottom-inner">
                  <div class="block-bottom-pic pic-humidity"></div>
                  <div class="block-bottom-texts">
                    <div class="block-bottom-text-block">
                      <div class="block-bottom-text-block-title">
                        Humidity: 60 %
                      </div>
                      <div class="block-bottom-text-block-desc">
                        Humidity is the concentration of water vapor present in the air. Water vapor, the gaseous state of
                        water, is generally invisible to the human eye.
                        <br /><br />
                        The same amount of water vapor results in higher relative humidity in cool air than warm air.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<style lang="scss" scoped></style>
