const stefan = document.getElementById('stefan')
const speechBubble = document.getElementById('speechBubble')
const speechP = document.getElementById('speechP')
const rie = document.getElementById('rie')
const level = document.getElementById('level')
const code = document.getElementById('code')
const codeBtn = document.getElementById('codeBtn')
const divorce = document.getElementById('divorce')

const timeLength = 500  //TODO: TIME

window.onload = () => sequence()

const waiter = delay => new Promise(resolve => setTimeout(resolve, delay))

const sequence = async () => {
	await startSpeaking()
	// await waiter(500)
	await rieTalks1()
	await rieTalks2()
	await rieTalks3()
	await rieTalks4()
	await rieTalks5()
	await rieTalks6()
	await rieTalks7()
	await rieStops()
}

const startSpeaking = () => {
	stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanSpeaking.gif)'
	speechBubble.style.opacity = '1'
	speechP.innerHTML = 'Hi Rie!'
  return waiter(timeLength*4)
}

const rieTalks1 = () => {
	stefan.style.backgroundImage = 'url(../Characters/Stefan/Stefan-mild.png)'
	rie.style.backgroundImage = 'url(../Characters/Rie/RieTalking.gif)'
	speechBubble.style.right = '0px'
	speechP.innerHTML = 'Hi Stefan! To continue to'
  return waiter(timeLength*4)
}

const rieTalks2 = () => {
	speechP.innerHTML = 'the next level, and save'
  return waiter(timeLength*4)
}

const rieTalks3 = () => {
	speechP.innerHTML = 'the princess, you have to'
  return waiter(timeLength*4)
}

const rieTalks4 = () => {
  speechP.innerHTML = ' divorce from your first'
  return waiter(timeLength*4)
}

const rieTalks5 = () => {
  speechP.innerHTML = 'wife... In order to do it,'
  return waiter(timeLength*4)
}

const rieTalks6 = () => {
  speechP.innerHTML = 'you need to get a'
  return waiter(timeLength*4)
}

const rieTalks7 = () => {
  speechP.innerHTML = 'secret code from her...'
  return waiter(timeLength*4)
}

const rieStops = () => {
	rie.style.backgroundImage = 'url(../Characters/Rie/Rie1.png)'
	stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanThinking.gif)'
	speechP.style.opacity = '0'
	speechBubble.style.opacity = '0'
	speechBubble.style.pointerEvents = 'none'
	code.style.opacity = '1'
	codeBtn.style.opacity = '1'
  return waiter(timeLength*4)
}

function checkCode() {
	let correctCode = new RegExp('cucumber')
	const answer = document.getElementById("code").value;
	if (!correctCode.test(answer)) {
		level.textContent = "WRONG"
		level.classList.add('wrongBlinking')
		rie.style.backgroundImage = 'url(../Characters/Rie/RieSad.png)'
		stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanLooksUpSad.png)'
	} else {
		level.style.left = '50%'
		level.style.transform = "translateX(-262px)"
		level.textContent = "LEVEL COMPLETED"
		level.classList.add('blinkMe')
		divorce.style.opacity = 1;
		rie.style.backgroundImage = 'url(../Characters/Rie/RieHappy.png)'
		stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanLooksUpHappy.png)'
		setTimeout(toLevel4, timeLength*6)
	}
}

toLevel4 = () => {
	// window.location.href = 'level4.html'
}
