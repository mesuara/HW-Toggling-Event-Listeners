// Create a button that when clicked changes the button’s text from ‘ON’ to ‘OFF’ and vice versa

// Create a box that’s background color is green when the mouse is over it and red when it is not

// The box should only change color when the button’s text is ‘ON’

// Create your event listeners in JavaScript



var buon = document.getElementById('onf')

buon.addEventListener("click", changeText)


function changeText(){
	buon.innerHTML = ( buon.innerHTML == 'ON') ? 'OFF' : 'ON';
}

var color = document.getElementById('box')

color.addEventListener('mouseover', function(){
	if(buon.innerHTML == 'ON'){
      color.style.background = 'green';
    }
})

color.addEventListener('mouseleave', function(){
	if(buon.innerHTML == 'ON'){
		color.style.background = 'red'
	}
})















