const stefan = document.getElementById('stefan')
const speechBubble = document.getElementById('speechBubble')
const speechP = document.getElementById('speechP')
const lightBulb = document.getElementById('lightBulb')
const level = document.getElementById('level')
const SkiFree = document.getElementById('SkiFree')
const level1Container = document.getElementById('level1Container')
const pernille = document.getElementById('pernille')
const timeContainer = document.getElementById('timeContainer')

const timeLength = 50 //TODO: TIME

window.onload = () => sequence()

const waiter = delay => new Promise(resolve => setTimeout(resolve, delay))

const sequence = async () => {
  await showStefan()
  await waiter(500)
  await startSpeaking()
	await speechBubbleAppear()
	await speechBubbleTextChange()
	await speechBubbleTextChange2()
	await speechBubbleTextChange3()
	await speechBubbleTextChange4()
	await stefanStopsSpeaking()
	await stefanIdea()
	await startGame()
}

const showStefan = () => {
  return new Promise(resolve => {
    TweenLite.to(stefan, 2, {
      bottom: '20px',
      onComplete: resolve
    })
  })
}

const startSpeaking = () => {
  stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanSpeaking.gif)'
  return waiter(timeLength)
}

const speechBubbleAppear = () => {
  speechBubble.style.opacity = '1'
  return waiter(timeLength*4)
}

const speechBubbleTextChange = () => {
  speechP.innerHTML = 'It\'s my 30th birthday'
  return waiter(timeLength*4)
}

const speechBubbleTextChange2 = () => {
  speechP.innerHTML = 'and I have so much to do!'
  return waiter(timeLength*4)
}

const speechBubbleTextChange3 = () => {
  speechP.innerHTML = 'Help me solve the tasks'
  return waiter(timeLength*4)
}

const speechBubbleTextChange4 = () => {
	speechP.innerHTML = 'and rescue the Princess!'
	return waiter(timeLength*4)
}

const stefanStopsSpeaking = () => {
	stefan.style.backgroundImage = 'url(../Characters/Stefan/Stefan1.png)'
	speechBubble.style.opacity = '0'
	speechBubble.pointerEvents = 'none'
	return waiter(timeLength*2)
}

const stefanIdea = () => {
	TweenLite.to(lightBulb, 0.5, {opacity: 1, onComplete:function(){
		TweenMax.to(this.target, 0.5, {boxShadow:'0px 0px 10px 5px rgba(255,255,255)',repeat:-1, yoyo: true})
	}})
	stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanScreaming.png)'
	lightBulb.style.cursor = 'pointer'
}

const startGame = () => {
	lightBulb.addEventListener('click', levelOne)
}

const levelOne = () => {
	stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanWorried.gif)'
	level.style.opacity = '1'
	lightBulb.style.opacity = '0'
	lightBulb.style.pointerEvents = 'none'
	speechBubble.style.opacity = '1'
	speechP.innerHTML = 'Oh no! My sister is in'
	setTimeout(speechBubbleTextChange5, timeLength*4)
}

const speechBubbleTextChange5 = () => {
	speechP.innerHTML = 'trouble! She is stuck in'
	setTimeout(speechBubbleTextChange6, timeLength*4)
}

const speechBubbleTextChange6 = () => {
	speechP.innerHTML = 'the PC room, I have to'
	setTimeout(speechBubbleTextChange7, timeLength*4)
}

const speechBubbleTextChange7 = () => {
	speechP.innerHTML = 'save her!'
	stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanScreaming.png)'
	setTimeout(playFreeSki, timeLength*4)
}

const playFreeSki = () => {
	level1Container.style.backgroundImage = 'none'
	level1Container.style.backgroundColor = '#F3F5F4'
	stefan.style.opacity = '0'
	stefan.style.pointerEvents = 'none'
	speechBubble.style.opacity = '0'
	speechBubble.style.pointerEvents = 'none'
	SkiFree.style.opacity = '1'
	SkiFree.style.pointerEvents = 'auto'
	setTimeout(speechBubbleTextChange8, timeLength*2)
}

const speechBubbleTextChange8 = () =>{
	speechP.style.opacity = '1'
	speechP.style.pointerEvents = 'none'
	pernille.style.opacity = '1'
	speechBubble.style.opacity = '1'
	speechBubble.style.right = '0px'
	speechP.innerHTML = 'Play FreeSki for 30 seconds'
	setTimeout(speechBubbleTextChange9, timeLength*4)
}


const speechBubbleTextChange9 = () => {
	speechP.innerHTML = 'and I\'m free!'
	pernille.style.backgroundImage = 'url(../Characters/Pernille/PernilleSmile.png)'
	setTimeout(pernilleStopsSpeaking, timeLength*4)
}

startTimer = (duration, display) => {
	var timer = duration, minutes, seconds;
	setInterval(function () {
			minutes = parseInt(timer / 60, 10)
			seconds = parseInt(timer % 60, 10);
			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;
			display.textContent = minutes + ":" + seconds;
			if (--timer < 0) {
					timer = 0;
					levelCompleted()
			}
	}, 1000);
}

const pernilleStopsSpeaking = () => {
	speechP.style.opacity = '0'
	speechBubble.style.opacity = '0'
	timeContainer.style.opacity = '1'
	var halfMinute = 60 * 0.5,
	display = document.querySelector('#time')
	startTimer(halfMinute, display)
}

const levelCompleted = () => {
	timeContainer.style.opacity = '0'
	level.textContent = 'LEVEL COMPLETED'
	level.classList.add('blinkMe')
	level.style.left = '50%'
		level.style.transform = "translateX(-262px)"
	setTimeout(toLevel2, timeLength*6)
}

toLevel2 = () => {
	window.location.href = 'level2.html'
}
