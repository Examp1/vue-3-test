import UInput from './u-input.vue'
import UFile from './u-file.vue'

import URadio from './u-radio.vue'
import UBtn from './u-btn.vue'

const components = [
	{name: 'UInput', component: UInput},
	{name: 'UFile', component: UFile},
	{name: 'URadio', component: URadio},
	{name: 'UBtn', component: UBtn},
]

export default {
	install(app) {
		components.forEach(({name, component}) => {
			app.component(name, component)
		})
	}
}