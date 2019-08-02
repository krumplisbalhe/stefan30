const stefan = document.getElementById('stefan')
const speechBubble = document.getElementById('speechBubble')
const speechP = document.getElementById('speechP')
const pia = document.getElementById('pia')
const level = document.getElementById('level')
const options = document.getElementById('options')
const bambi = document.getElementById('bambi')
const title = document.getElementById('title')

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
	await piaTalks6()
	await piaStops()
	await checkCode()
}

const startSpeaking = () => {
	stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanSpeaking.gif)'
	speechBubble.style.opacity = '1'
	speechP.innerHTML = 'How can I help you, Pia?'
  return waiter(timeLength*4)
}

const piaTalks1 = () => {
	stefan.style.backgroundImage = 'url(../Characters/Stefan/Stefan-mild.png)'
	pia.style.backgroundImage = 'url(../Characters/Pia/PiaSpeaking.gif)'
	speechBubble.style.right = '0px'
	speechP.innerHTML = 'Tell me what happened'
  return waiter(timeLength*4)
}

const piaTalks2 = () => {
	speechP.innerHTML = 'to Bambi\'s mother FOR REAL'
  return waiter(timeLength*4)
}

const piaTalks3 = () => {
	speechP.innerHTML = 'in the Disney movie.'
  return waiter(timeLength*4)
}

const piaTalks4 = () => {
  speechP.innerHTML = 'If you answer correctly,'
  return waiter(timeLength*4)
}

const piaTalks5 = () => {
  speechP.innerHTML = 'You are one challange away'
  return waiter(timeLength*4)
}

const piaTalks6 = () => {
  speechP.innerHTML = 'from saving the Princess!'
  return waiter(timeLength*4)
}

const piaStops = () => {
	pia.style.backgroundImage = 'url(../Characters/Pia/PiaSpeaks1.png)'
	stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanThinking.gif)'
	speechP.style.opacity = '0'
	speechBubble.style.opacity = '0'
	speechBubble.style.pointerEvents = 'none'
	options.style.opacity = '1'
	bambi.style.opacity = '1'
	title.style.opacity = '1'
	document.body.style.cursor = 'pointer'
  return waiter(timeLength*4)
}

function checkCode() {
	document.getElementById('options').addEventListener('click', function(evt) {
		var target = evt.target
		if (target.id === 'option1') {
			level.style.left = '50%'
			level.style.transform = "translateX(-262px)"
			level.textContent = "LEVEL COMPLETED"
			level.classList.add('blinkMe')
			pia.style.backgroundImage = 'url(../Characters/Pia/PiaHappy.png)'
			stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanLooksUpHappy.png)'
			setTimeout(toLevel9, timeLength*6)
		} else {
			level.textContent = 'WRONG'
			level.classList.add('wrongBlinking')
			pia.style.backgroundImage = 'url(../Characters/Pia/PiaSad.png)'
			stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanLooksUpSad.png)'
		}
	}, false)
}

toLevel9 = () => {
	window.location.href = 'level9.html'
}
