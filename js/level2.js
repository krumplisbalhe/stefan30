const stefan = document.getElementById('stefan')
const speechBubble = document.getElementById('speechBubble')
const speechP = document.getElementById('speechP')
const stina = document.getElementById('stina')
const letterA = document.getElementById('A')
const level = document.getElementById('level')


const timeLength = 50

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
	await speechBubbleTextChange5()
	await stefanStopsSpeaking()
	await  speechBubbleTextChange6()
	await	speechBubbleTextChange7()
	await	speechBubbleTextChange8()
	await	speechBubbleTextChange9()
	await stinaStopsSpeaking()
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
  stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanWorried.gif)'
  return waiter(timeLength)
}

const speechBubbleAppear = () => {
  speechBubble.style.opacity = '1'
  return waiter(timeLength*4)
}

const speechBubbleTextChange = () => {
  speechP.innerHTML = 'the secret password to'
  return waiter(timeLength*4)
}

const speechBubbleTextChange2 = () => {
  speechP.innerHTML = 'access my savings in'
  return waiter(timeLength*4)
}

const speechBubbleTextChange3 = () => {
  speechP.innerHTML = 'the safe box!'
  return waiter(timeLength*4)
}

const speechBubbleTextChange4 = () => {
  speechP.innerHTML = 'Help me figuring out'
  return waiter(timeLength*4)
}

const speechBubbleTextChange5 = () => {
  speechP.innerHTML = 'the password!'
  return waiter(timeLength*4)
}

const stefanStopsSpeaking = () => {
	stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanLineLips.png)'
	speechBubble.style.opacity = '0'
	speechBubble.pointerEvents = 'none'
	return waiter(timeLength*4)
}

const speechBubbleTextChange6 = () =>{
	speechP.style.opacity = '1'
	speechP.style.pointerEvents = 'none'
	stina.style.opacity = '1'
	speechBubble.style.opacity = '1'
	speechBubble.style.right = '0px'
	speechP.innerHTML = 'Click on the letters in'
	return waiter(timeLength*4)
}

const speechBubbleTextChange7 = () => {
  speechP.innerHTML = 'the right order to figure'
  return waiter(timeLength*4)
}

const speechBubbleTextChange8 = () => {
  speechP.innerHTML = 'out the password! Hint:'
  return waiter(timeLength*4)
}

const speechBubbleTextChange9 = () => {
	speechP.innerHTML = 'your nickname...'
	stina.style.backgroundImage = 'url(../Characters/Pernille/PernilleSmile.png)'
  return waiter(timeLength*4)
}

const stinaStopsSpeaking = () => {
	speechP.style.opacity = '0'
	speechBubble.style.opacity = '0'
	stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanThinking.gif)'
}

const clickOnLetters = () => {
	if(letterA.click()){
		level.textContent = 'ERROR'
	}
	else{
		level.textContent = 'GOOD'
	}
}
