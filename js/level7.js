const stefan = document.getElementById('stefan')
const speechBubble = document.getElementById('speechBubble')
const speechP = document.getElementById('speechP')
const mormor = document.getElementById('mormor')
const level = document.getElementById('level')
const options = document.getElementById('options')
const pebber = document.getElementById('pebber')

const timeLength = 1000 //TODO: TIME

window.onload = () => sequence()

const waiter = delay => new Promise(resolve => setTimeout(resolve, delay))

const sequence = async () => {
	await startSpeaking()
	await mormorTalks1()
	await mormorTalks2()
	await mormorTalks3()
	await mormorTalks4()
	await mormorTalks5()
	await mormorStops()
	await checkCode()
}

const startSpeaking = () => {
	stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanSpeaking.gif)'
	speechBubble.style.opacity = '1'
	speechP.innerHTML = 'Hi Mormor!'
  return waiter(timeLength*4)
}

const mormorTalks1 = () => {
	stefan.style.backgroundImage = 'url(../Characters/Stefan/Stefan-mild.png)'
	mormor.style.backgroundImage = 'url(../Characters/Mormor/MormorSpeaking.gif)'
	speechBubble.style.right = '0px'
	speechP.innerHTML = 'Hi Stefan, this level'
  return waiter(timeLength*4)
}

const mormorTalks2 = () => {
	speechP.innerHTML = 'you have to answer the'
  return waiter(timeLength*4)
}

const mormorTalks3 = () => {
	speechP.innerHTML = 'question: What is missing'
  return waiter(timeLength*4)
}

const mormorTalks4 = () => {
  speechP.innerHTML = 'from Morfar\'s PC room?'
  return waiter(timeLength*4)
}

const mormorTalks5 = () => {
  speechP.innerHTML = 'Choose the right one!'
  return waiter(timeLength*4)
}

const mormorStops = () => {
	mormor.style.backgroundImage = 'url(../Characters/Mormor/MormorHappy.png)'
	stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanThinking.gif)'
	speechP.style.opacity = '0'
	speechBubble.style.opacity = '0'
	speechBubble.style.pointerEvents = 'none'
	options.style.opacity = '1'
	document.body.style.cursor = 'pointer'
  return waiter(timeLength*1)
}

function checkCode() {
	document.getElementById('options').addEventListener('click', function(evt) {
		var target = evt.target
		if (target.id === 'pebber') {
			level.style.left = '50%'
			level.style.transform = "translateX(-262px)"
			level.textContent = "LEVEL COMPLETED"
			level.classList.add('blinkMe')
			mormor.style.backgroundImage = 'url(../Characters/Mormor/MormorHappy.png)'
			stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanLooksUpHappy.png)'
			setTimeout(toLevel8, timeLength*6)
		} else {
			level.textContent = 'WRONG'
			level.classList.add('wrongBlinking')
			mormor.style.backgroundImage = 'url(../Characters/Mormor/MormorSad.png)'
			stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanLooksUpSad.png)'
		}
	}, false)
}

toLevel8 = () => {
	window.location.href = 'level8.html'
}
