const stefan = document.getElementById('stefan')
const speechBubble = document.getElementById('speechBubble')
const speechP = document.getElementById('speechP')
const level = document.getElementById('level')
const tinder = document.getElementById('tinder')
const name = document.getElementById('nameContainer')
const image = document.getElementById('imageContainer')
const rita = document.getElementById('rita')
const hearts = document.getElementById('hearts')

const timeLength = 500 //TODO: TIME

window.onload = () => sequence()

const waiter = delay => new Promise(resolve => setTimeout(resolve, delay))

const sequence = async () => {
	await startSpeaking()
	await stefanSpeaking()
	await tinder1()
	await checkFirst()
}

const startSpeaking = () => {
	stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanSpeaking.gif)'
	speechBubble.style.opacity = '1'
	speechP.innerHTML = 'Phew! I made it to'
  return waiter(timeLength*4)
}

const stefanSpeaking = () => {
	speechP.innerHTML = 'the last challange...'
  return waiter(timeLength*4)
}

const tinder1 = () => {
	stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanLooksUp.png)'
	tinder.style.opacity = '1'
	speechP.style.opacity = '0'
	speechBubble.style.opacity = '0'
	speechBubble.style.pointerEvents = 'none'
	name.textContent = "Susan"
  return waiter(timeLength*4)
}

function checkFirst() {
	document.getElementById('tinder').addEventListener('click', function(evt) {
		var target = evt.target
		if (target.id === 'heart') {
			level.style.left = '50%'
			level.style.transform = "translateX(-262px)"
			level.textContent = "VERY VERY BAD"
			level.classList.add('blinkMe')
			stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanLooksUpSad.png)'
		}
		if (target.id === 'star') {
			level.style.left = '50%'
			level.style.transform = "translateX(-262px)"
			level.textContent = "VERY VERY VERY BAD"
			level.classList.add('blinkMe')
			stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanLooksUpSad.png)'
		}
		if (target.id === 'cross') {
			level.style.left = '20px'
			level.style.transform = "translateX(0px)"
			level.textContent = "LEVEL 9"
			level.classList.remove('blinkMe')
			setTimeout(tinder2(), timeLength*4)
		}
	}, false)
}

const tinder2 = () => {
	image.style.backgroundImage = 'url(../images/pinup2.gif)'
	name.textContent = "Mary"
  setTimeout(checkSecond(), timeLength*4)
}

function checkSecond() {
	document.getElementById('tinder').addEventListener('click', function(evt) {
		var target = evt.target
		if (target.id === 'heart') {
			level.style.left = '50%'
			level.style.transform = "translateX(-262px)"
			level.textContent = "BAD"
			level.classList.add('blinkMe')
			stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanLooksUpSad.png)'
		}
		if (target.id === 'star') {
			level.style.left = '50%'
			level.style.transform = "translateX(-262px)"
			level.textContent = "VERY BAD"
			level.classList.add('blinkMe')
			stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanLooksUpSad.png)'
		}
		if (target.id === 'cross') {
			level.style.left = '20px'
			level.style.transform = "translateX(0px)"
			level.textContent = "LEVEL 9"
			level.classList.remove('blinkMe')
			setTimeout(tinder3(), timeLength*4)
		}
	}, false)
}

const tinder3 = () => {
	image.style.backgroundImage = 'url(../Characters/Rita/Rita1.png)'
	name.textContent = "Rita"
	stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanPillango.png)'
  setTimeout(checkThird(), timeLength*4)
}

function checkThird() {
	document.getElementById('tinder').addEventListener('click', function(evt) {
		var target = evt.target
		if (target.id === 'heart') {
			level.style.left = '50%'
			level.style.transform = "translateX(-262px)"
			level.textContent = "LEVEL COMPLETED"
			level.classList.add('blinkMe')
			stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanPillango.png)'
			setTimeout(toFinal, timeLength*4)
		}
		if (target.id === 'star') {
			level.style.left = '50%'
			level.style.transform = "translateX(-262px)"
			level.textContent = "LEVEL COMPLETED"
			level.classList.add('blinkMe')
			stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanLooksUpSad.png)'
			setTimeout(toFinal, timeLength*6)
		}
		if (target.id === 'cross') {
			level.style.left = '20px'
			level.style.transform = "translateX(0px)"
			level.textContent = "GAME OVER"
			level.classList.remove('blinkMe')
			setTimeout(toReStart, timeLength*4)
		}
	}, false)
}

toReStart = () => {
	window.location.href = 'index.html'
}

toFinal = () => {
	stefan.style.backgroundImage = 'url(../Characters/Stefan/Stefan1.png)'
	tinder.style.opacity = '0'
	rita.style.opacity = '1'
	level.style.opacity = '0'
	hearts.style.opacity = '1'
	setTimeout(jump, timeLength*10)
}

jump = () => {
	window.location.href = 'final.html'
}
