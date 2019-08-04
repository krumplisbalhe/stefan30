const stefan = document.getElementById('stefan')
const speechBubble = document.getElementById('speechBubble')
const speechP = document.getElementById('speechP')
const peter = document.getElementById('peter')
const level = document.getElementById('level')
const circle = document.getElementById('circle')
const spark = document.getElementById('fireworks')

const timeLength = 500  //TODO: TIME

window.onload = () => sequence()

const waiter = delay => new Promise(resolve => setTimeout(resolve, delay))

const sequence = async () => {
	await startSpeaking()
	await peterTalks1()
	await peterTalks2()
	await peterTalks3()
	await peterTalks4()
	await stopTalking()
}

const startSpeaking = () => {
	stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanSpeaking.gif)'
	speechBubble.style.opacity = '1'
	speechP.innerHTML = 'Hi Peter, I came to help!'
  return waiter(timeLength*4)
}

const peterTalks1 = () => {
	stefan.style.backgroundImage = 'url(../Characters/Stefan/Stefan-mild.png)'
	peter.style.backgroundImage = 'url(../Characters/Peter/PeterSpeaking.gif)'
	speechBubble.style.opacity = '1'
	speechBubble.style.right = '0px'
	speechP.innerHTML = 'Clean the boat with'
  return waiter(timeLength*4)
}

const peterTalks2 = () => {
	speechP.innerHTML = 'the soap: Hover the'
  return waiter(timeLength*4)
}

const peterTalks3 = () => {
	speechP.innerHTML = 'circle and follow it'
  return waiter(timeLength*4)
}

const peterTalks4 = () => {
  speechP.innerHTML = 'with the cursor!'
  return waiter(timeLength*4)
}

const stopTalking = () => {
	peter.style.backgroundImage = 'url(../Characters/Peter/PeterSmiling.png)'
	stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanLooksUp.png)'
	speechP.style.opacity = '0'
	speechBubble.style.opacity = '0'
	circle.style.opacity = '1'
	$('#circle').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
		circle.style.opacity = '0'
		boat.style.backgroundImage = 'url(../images/boat.png)'
		stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanLooksUpHappy.png)'
		spark.style.opacity = '1'
		spark.style.width = '400px'
		spark.style.height = '400px'
		setTimeout(toLevel7, timeLength*6)
	})
}

toLevel7 = () => {
	window.location.href = 'level7.html'
}
