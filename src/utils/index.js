export const toCapitalize = (str) => {
	if (!str) return ''
	
	return str.charAt(0).toUpperCase() + str.slice(1)
}

export const getTime = (timeStamp) => {
	console.log(timeStamp);
	return new Date(timeStamp * 1000).toLocaleTimeString('ru-RU')
}