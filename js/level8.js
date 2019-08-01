const stefan = document.getElementById('stefan')
const speechBubble = document.getElementById('speechBubble')
const speechP = document.getElementById('speechP')
const pia = document.getElementById('pia')
const level = document.getElementById('level')
const options = document.getElementById('options')
const pebber = document.getElementById('pebber')

const timeLength = 50 //TODO: TIME

window.onload = () => sequence()

const waiter = delay => new Promise(resolve => setTimeout(resolve, delay))

const sequence = async () => {
	await startSpeaking()
	await piaTalks1()
	await piaTalks2()
	await piaTalks3()
	await piaTalks4()
	await piaTalks5()
	await piaStops()
	await checkCode()
}

const startSpeaking = () => {
	stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanSpeaking.gif)'
	speechBubble.style.opacity = '1'
	speechP.innerHTML = 'Hi pia!'
  return waiter(timeLength*4)
}

const piaTalks1 = () => {
	stefan.style.backgroundImage = 'url(../Characters/Stefan/Stefan-mild.png)'
	pia.style.backgroundImage = 'url(../Characters/Pia/PiaSpeaking.gif)'
	speechBubble.style.right = '0px'
	speechP.innerHTML = 'Hi Stefan, this level'
  return waiter(timeLength*4)
}

const piaTalks2 = () => {
	speechP.innerHTML = 'you have to answer the'
  return waiter(timeLength*4)
}

const piaTalks3 = () => {
	speechP.innerHTML = 'question: What is missing'
  return waiter(timeLength*4)
}

const piaTalks4 = () => {
  speechP.innerHTML = 'from the PC room?'
  return waiter(timeLength*4)
}

const piaTalks5 = () => {
  speechP.innerHTML = 'Choose the right one!'
  return waiter(timeLength*4)
}

const piaStops = () => {
	pia.style.backgroundImage = 'url(../Characters/Pia/PiaHappy.png)'
	stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanThinking.gif)'
	speechP.style.opacity = '0'
	speechBubble.style.opacity = '0'
	speechBubble.style.pointerEvents = 'none'
	options.style.opacity = '1'
	document.body.style.cursor = 'pointer'
  return waiter(timeLength*4)
}

function checkCode() {
	document.getElementById('options').addEventListener('click', function(evt) {
		var target = evt.target
		if (target.id === 'pebber') {
			level.style.left = '50%'
			level.style.transform = "translateX(-262px)"
			level.textContent = "LEVEL COMPLETED"
			level.classList.add('blinkMe')
			pia.style.backgroundImage = 'url(../Characters/Pia/PiaHappy.png)'
			stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanLooksUpHappy.png)'
			setTimeout(toLevel5, timeLength*6)
		} else {
			level.textContent = 'WRONG'
			level.classList.add('wrongBlinking')
			pia.style.backgroundImage = 'url(../Characters/Pia/PiaSad.png)'
			stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanLooksUpSad.png)'
		}
	}, false)
}

toLevel5 = () => {
	window.location.href = 'level9.html'
}
