const ageSpan = document.getElementById('age');

setInterval(() => {
	let time = dayjs().diff(dayjs(1148169600000), 'year', true);
	ageSpan.innerText = time.toString().substring(0, 12);
}, 50);