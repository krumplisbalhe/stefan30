const stefan = document.getElementById('stefan')
const speechBubble = document.getElementById('speechBubble')
const speechP = document.getElementById('speechP')
const mama = document.getElementById('mama')
const level = document.getElementById('level')
const foods = document.getElementById('foods')
const coin = document.getElementById('coin')
const timeContainer = document.getElementById('timeContainer')

const timeLength = 500  //TODO: TIME

window.onload = () => sequence()

const waiter = delay => new Promise(resolve => setTimeout(resolve, delay))

const sequence = async () => {
	await startSpeaking()
	await mamaTalks1()
	await mamaTalks2()
	await mamaTalks3()
	await mamaTalks4()
	await mamaTalks5()
	await mamaStops()
}

const startSpeaking = () => {
	stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanSpeaking.gif)'
	speechBubble.style.opacity = '1'
	speechP.innerHTML = 'Yummy, Mama\'s food!'
  return waiter(timeLength*4)
}

const mamaTalks1 = () => {
	stefan.style.backgroundImage = 'url(../Characters/Stefan/Stefan-mild.png)'
	mama.style.backgroundImage = 'url(../Characters/Mama/MamaSpeaking.gif)'
	speechBubble.style.right = '0px'
	speechP.innerHTML = 'Peter is waiting for you'
  return waiter(timeLength*4)
}

const mamaTalks2 = () => {
	speechP.innerHTML = 'to fix up the boat for your'
  return waiter(timeLength*4)
}

const mamaTalks3 = () => {
	speechP.innerHTML = 'birthday party, so you only'
  return waiter(timeLength*4)
}

const mamaTalks4 = () => {
  speechP.innerHTML = 'have 15 seconds to eat...'
  return waiter(timeLength*4)
}

const mamaTalks5 = () => {
  speechP.innerHTML = 'Hurry up!'
  return waiter(timeLength*4)
}

let called = false

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
					if(
						$('#bacon').css('opacity') == '0' &&
						$('#chicken').css('opacity') == '0' &&
						$('#eggs').css('opacity') == '0' &&
						$('#melone').css('opacity') == '0' &&
						$('#shrimp').css('opacity') == '0' &&
						$('#pepperoni').css('opacity') == '0' &&
						$('#pie').css('opacity') == '0' &&
						$('#steak').css('opacity') == '0' &&
						$('#pie2').css('opacity') == '0' &&
						$('#fish').css('opacity') == '0' &&
						$('#cookie').css('opacity') == '0'
					) {
						timeContainer.style.opacity = '0'
						level.textContent = 'LEVEL COMPLETED'
						level.classList.add('blinkMe')
						level.style.left = '50%'
						level.style.transform = "translateX(-262px)"
						mama.style.backgroundImage = 'url(../Characters/Mama/MamaHappy.png)'
						stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanLooksUpHappy.png)'
						speechP.style.opacity = '1'
						speechBubble.style.opacity = '1'
						speechP.innerHTML = 'Velbekomme!'
						setTimeout(toLevel6, timeLength*6)
					}
					else{
						if( called == false){
							called = true
							mamaGoodbye()
						}
					}
			}
	}, 1000);
}

const mamaStops = () => {
	mama.style.backgroundImage = 'url(../Characters/Mama/MamaSmiling.png)'
	stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanThinking.gif)'
	speechP.style.opacity = '0'
	speechBubble.style.opacity = '0'
	speechBubble.style.pointerEvents = 'none'
	foods.style.opacity = '1'
	document.body.style.cursor = 'pointer'
	timeContainer.style.opacity = '1'
	var time = 15,
	display = document.querySelector('#time')
	startTimer(time, display)
	animateDiv('#bacon')
	animateDiv('#chicken')
	animateDiv('#eggs')
	animateDiv('#melone')
	animateDiv('#shrimp')
	animateDiv('#pepperoni')
	animateDiv('#pie')
	animateDiv('#steak')
	animateDiv('#pie2')
	animateDiv('#fish')
	animateDiv('#cookie')
	eatFood('#bacon')
	eatFood('#chicken')
	eatFood('#eggs')
	eatFood('#melone')
	eatFood('#shrimp')
	eatFood('#pepperoni')
	eatFood('#pie')
	eatFood('#steak')
	eatFood('#pie2')
	eatFood('#fish')
	eatFood('#cookie')
}

function makeNewPosition(){
	var height = $('#foods').height() - 50
	var width = $('#foods').width() - 50

	var nh = Math.floor(Math.random() * height)
	var nw = Math.floor(Math.random() * width)

	return [nh,nw]
}

function animateDiv(myclass){
	var newq = makeNewPosition();
	$(myclass).animate({ top: newq[0], left: newq[1] }, 1800,   function(){
		animateDiv(myclass);
	})
}

const eatFood = (food) => {
	$( food ).click(function() {
		$( food ).css('opacity', '0')
		$( food ).css('pointer-events','none')
	})
}

const mamaGoodbye = () => {
	timeContainer.style.opacity = '0'
	level.textContent = 'LEVEL COMPLETED'
	level.classList.add('blinkMe')
	level.style.left = '50%'
	level.style.transform = "translateX(-262px)"
	mama.style.backgroundImage = 'url(../Characters/Mama/MamaHappy.png)'
	stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanLooksUpSad.png)'
	speechP.style.opacity = '1'
	speechBubble.style.opacity = '1'
	foods.style.opacity = '0'
	speechP.innerHTML = 'Lol, you were slow! You'
	setTimeout(mamaGoodbye2, timeLength*4)
}


const mamaGoodbye2 = () => {
	speechP.innerHTML = 'can eat the rest later!'
	setTimeout(toLevel6, timeLength*6)
}

toLevel6 = () => {
	window.location.href = 'level6.html'
}
