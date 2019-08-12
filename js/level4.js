const stefan = document.getElementById('stefan')
const speechBubble = document.getElementById('speechBubble')
const speechP = document.getElementById('speechP')
const anette = document.getElementById('anette')
const level = document.getElementById('level')
const options = document.getElementById('options')
const coin = document.getElementById('coin')

const timeLength = 1000  //TODO: TIME

window.onload = () => sequence()

const waiter = delay => new Promise(resolve => setTimeout(resolve, delay))

const sequence = async () => {
	await startSpeaking()
	await stefanTalks()
	await anetteTalks1()
	await anetteTalks2()
	await anetteTalks3()
	await anetteTalks4()
	await anetteTalks5()
	await anetteStops()
	await checkCode()
}

const startSpeaking = () => {
	stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanSpeaking.gif)'
	speechBubble.style.opacity = '1'
	speechP.innerHTML = 'Uh-oh, Anette needs my'
  return waiter(timeLength*4)
}

const stefanTalks = () => {
	speechP.innerHTML = 'help now!'
	return waiter(timeLength*4)
}

const anetteTalks1 = () => {
	stefan.style.backgroundImage = 'url(../Characters/Stefan/Stefan-mild.png)'
	anette.style.backgroundImage = 'url(../Characters/Anette/AnetteTalking.gif)'
	speechBubble.style.right = '0px'
	speechP.innerHTML = 'This level you have to'
  return waiter(timeLength*4)
}

const anetteTalks2 = () => {
	speechP.innerHTML = 'remember the magic'
  return waiter(timeLength*4)
}

const anetteTalks3 = () => {
	speechP.innerHTML = 'trick I taught you'
  return waiter(timeLength*4)
}

const anetteTalks4 = () => {
  speechP.innerHTML = 'to win scratch cards!'
  return waiter(timeLength*4)
}

const anetteTalks5 = () => {
  speechP.innerHTML = 'Choose the right one!'
  return waiter(timeLength*4)
}

const anetteStops = () => {
	anette.style.backgroundImage = 'url(../Characters/Anette/Anette1.png)'
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
		if (target.id === 'coin') {
			level.style.left = '50%'
			level.style.transform = "translateX(-262px)"
			level.textContent = "LEVEL COMPLETED"
			level.classList.add('blinkMe')
			anette.style.backgroundImage = 'url(../Characters/Anette/AnetteHappy.png)'
			stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanLooksUpHappy.png)'
			coin.style.transform = 'scale(2.5)'
			setTimeout(toLevel5, timeLength*6)
		} else {
			level.textContent = 'WRONG'
			level.classList.add('wrongBlinking')
			anette.style.backgroundImage = 'url(../Characters/Anette/AnetteSad.png)'
			stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanLooksUpSad.png)'
		}
	}, false)
}

toLevel5 = () => {
	window.location.href = 'level5.html'
}
