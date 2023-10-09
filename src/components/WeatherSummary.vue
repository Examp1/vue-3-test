
<script setup>
import { toCapitalize } from '../utils'
defineProps({
	weatherInfo: {
		type: [Object, null],
		required: true
	},
})

const today = new Date().toLocaleString('en-EN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
</script>

<template>
	<div class="summary" v-if="weatherInfo?.weather">
		<div :style="`background-image: url('./src/assets/img/weather-main/${weatherInfo?.weather[0].description}.png')`"
			class="pic-main">
		</div>
		<div class="weather">
			<div class="temp">
				{{ Math.round(weatherInfo?.main.temp) }} °C
			</div>
			<div class="weather-desc text-block">
				{{ toCapitalize(weatherInfo?.weather[0].description) }}
			</div>
		</div>
		<div class="city text-block">
			{{ weatherInfo.name }},
			{{ weatherInfo.sys.country }}
		</div>
		<div class="date text-block">
			{{ today }}
		</div>
	</div>
	<div v-else class="error">
		{{ toCapitalize(weatherInfo?.message) }}
	</div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/weatherSummary.sass';
.error{
	color: red;
	margin-top: 20px;
}
</style>