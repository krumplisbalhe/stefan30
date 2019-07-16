const stefan = document.getElementById('stefan')
const speechBubble = document.getElementById('speechBubble')
const speechP = document.getElementById('speechP')
const stina = document.getElementById('stina')
const level = document.getElementById('level')

const letterO = document.getElementById('O')
const solutionO = document.getElementById('SO')

const lettern = document.getElementById('n')
const solutionn = document.getElementById('Sn')

const letterk1 = document.getElementById('k1')
const solutionk1 = document.getElementById('Sk1')

const lettere = document.getElementById('e')
const solutione = document.getElementById('Se')

const letterl = document.getElementById('l')
const solutionl = document.getElementById('Sl')

const letterJ = document.getElementById('J')
const solutionJ = document.getElementById('SJ')

const lettero = document.getElementById('o')
const solutiono = document.getElementById('So')

const lettera = document.getElementById('a')
const solutiona = document.getElementById('Sa')

const letterk2 = document.getElementById('k2')
const solutionk2 = document.getElementById('Sk2')

const letteri = document.getElementById('i')
const solutioni = document.getElementById('Si')

const letterm = document.getElementById('m')
const solutionm = document.getElementById('Sm')

const backgroundBox = document.getElementById('backgroundBox')
const money = document.getElementById('money')

const timeLength = 500  //TODO: TIME

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
	await speechBubbleTextChange6()
	await	speechBubbleTextChange7()
	await	speechBubbleTextChange8()
	await	speechBubbleTextChange9()
	await stinaStopsSpeaking()
	await clickOnLetters1()
}

const showStefan = () => {
  return new Promise(resolve => {
    TweenLite.to(stefan, 2, {
      bottom: '0px',
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
  speechP.innerHTML = 'the pengekasse!'
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
	speechP.innerHTML = 'your childhood nickname...'
	stina.style.backgroundImage = 'url(../Characters/Stina/Stina.png)'
  return waiter(timeLength*4)
}

const stinaStopsSpeaking = () => {
	speechP.style.opacity = '0'
	speechBubble.style.opacity = '0'
	speechBubble.style.pointerEvents = 'none'
	stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanThinking.gif)'
	document.body.style.cursor = 'pointer'
	backgroundBox.style.display = 'flex'
}

const clickOnLetters1 = () => {
document.getElementById('letters').addEventListener('click', function(evt) {
  var target = evt.target
  if (target.id === 'O') {
		level.textContent = 'GOOD'
		letterO.style.opacity = 0
		solutionO.style.opacity = 1
		clickOnLetters2()
  } else {
		level.textContent = 'WRONG'
		level.classList.add('wrongBlinking')
  }
}, false)
}

const clickOnLetters2 = () => {
	level.classList.remove('wrongBlinking')
	document.getElementById('letters').addEventListener('click', function(evt) {
		var target = evt.target
		if (target.id === 'n') {
			level.textContent = 'GOOD'
			lettern.style.opacity = 0
			solutionn.style.opacity = 1
			clickOnLetters3()
		} else {
			level.textContent = 'WRONG'
			level.classList.add('wrongBlinking')
		}
	}, false)
}

const clickOnLetters3 = () => {
	level.classList.remove('wrongBlinking')
	document.getElementById('letters').addEventListener('click', function(evt) {
		var target = evt.target
		if (target.id === 'k1') {
			level.textContent = 'GOOD'
			letterk1.style.opacity = 0
			solutionk1.style.opacity = 1
			clickOnLetters4()
		} else {
			level.textContent = 'WRONG'
			level.classList.add('wrongBlinking')
		}
	}, false)
}

const clickOnLetters4 = () => {
	level.classList.remove('wrongBlinking')
	document.getElementById('letters').addEventListener('click', function(evt) {
		var target = evt.target
		if (target.id === 'e') {
			level.textContent = 'GOOD'
			lettere.style.opacity = 0
			solutione.style.opacity = 1
			clickOnLetters5()
		} else {
			level.textContent = 'WRONG'
			level.classList.add('wrongBlinking')
		}
	}, false)
}

const clickOnLetters5 = () => {
	level.classList.remove('wrongBlinking')
	document.getElementById('letters').addEventListener('click', function(evt) {
		var target = evt.target
		if (target.id === 'l') {
			level.textContent = 'GOOD'
			letterl.style.opacity = 0
			solutionl.style.opacity = 1
			clickOnLetters6()
		} else {
			level.textContent = 'WRONG'
			level.classList.add('wrongBlinking')
		}
	}, false)
}

const clickOnLetters6 = () => {
	level.classList.remove('wrongBlinking')
	document.getElementById('letters').addEventListener('click', function(evt) {
		var target = evt.target
		if (target.id === 'J') {
			level.textContent = 'GOOD'
			letterJ.style.opacity = 0
			solutionJ.style.opacity = 1
			clickOnLetters7()
		} else {
			level.textContent = 'WRONG'
			level.classList.add('wrongBlinking')
		}
	}, false)
}

const clickOnLetters7 = () => {
	level.classList.remove('wrongBlinking')
	document.getElementById('letters').addEventListener('click', function(evt) {
		var target = evt.target
		if (target.id === 'o') {
			level.textContent = 'GOOD'
			lettero.style.opacity = 0
			solutiono.style.opacity = 1
			clickOnLetters8()
		} else {
			level.textContent = 'WRONG'
			level.classList.add('wrongBlinking')
		}
	}, false)
}

const clickOnLetters8 = () => {
	level.classList.remove('wrongBlinking')
	document.getElementById('letters').addEventListener('click', function(evt) {
		var target = evt.target
		if (target.id === 'a') {
			level.textContent = 'GOOD'
			lettera.style.opacity = 0
			solutiona.style.opacity = 1
			clickOnLetters9()
		} else {
			level.textContent = 'WRONG'
			level.classList.add('wrongBlinking')
		}
	}, false)
}

const clickOnLetters9 = () => {
	level.classList.remove('wrongBlinking')
	document.getElementById('letters').addEventListener('click', function(evt) {
		var target = evt.target
		if (target.id === 'k2') {
			level.textContent = 'GOOD'
			letterk2.style.opacity = 0
			solutionk2.style.opacity = 1
			clickOnLetters10()
		} else {
			level.textContent = 'WRONG'
			level.classList.add('wrongBlinking')
		}
	}, false)
}

const clickOnLetters10 = () => {
	level.classList.remove('wrongBlinking')
	document.getElementById('letters').addEventListener('click', function(evt) {
		var target = evt.target
		if (target.id === 'i') {
			level.textContent = 'GOOD'
			letteri.style.opacity = 0
			solutioni.style.opacity = 1
			clickOnLetters11()
		} else {
			level.textContent = 'WRONG'
			level.classList.add('wrongBlinking')
		}
	}, false)
}

const clickOnLetters11 = () => {
	level.classList.remove('wrongBlinking')
	document.getElementById('letters').addEventListener('click', function(evt) {
		var target = evt.target
		if (target.id === 'm') {
			level.textContent = 'GOOD'
			letterm.style.opacity = 0
			solutionm.style.opacity = 1
			levelCompleted()
		} else {
			level.textContent = 'WRONG'
			level.classList.add('wrongBlinking')
		}
	}, false)
}

const levelCompleted = () => {
	level.classList.remove('wrongBlinking')
	stefan.style.backgroundImage = 'url(../Characters/Stefan/StefanLooksUpHappy.png)'
	stina.style.backgroundImage = 'url(../Characters/Stina/StinaHappy.png)'
	money.style.opacity = 1
	level.textContent = 'LEVEL COMPLETED'
	level.classList.add('blinkMe')
	level.style.left = '50%'
	level.style.transform = "translateX(-262px)"
	setTimeout(toLevel3, timeLength*6)
}

toLevel3 = () => {
	window.location.href = 'level3.html'
}
