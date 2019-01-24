const clickedEl = document.querySelector('.wrapper');

clickedEl.addEventListener('click', (ev) => {

	let clickedBlock = ev.target;

	if(!clickedBlock.classList.contains('live-block')) {
		return;
	}

	if (clickedBlock.classList.contains('left')) {
		let checkLeftClass = document.querySelectorAll('.left');
		let checkRightClass = document.querySelectorAll('.right');
		let checkLeftClass2 = document.querySelector('.left2');
		let checkRightClass2 = document.querySelectorAll('.right2');
		console.log(checkLeftClass);
		if(checkLeftClass2) {
			clickedBlock.classList.add('right');
			clickedBlock.classList.remove('left');
			checkLeftClass2.classList.add('left');
			checkLeftClass2.classList.remove('left2');

		} else {
			clickedBlock.classList.add('right2');
			clickedBlock.classList.remove('left');
		}	
	} 

	else if (clickedBlock.classList.contains('right')) {
		let checkLeftClass = document.querySelector('.left');
		let checkRightClass = document.querySelector('.right');
		let checkLeftClass2 = document.querySelector('.left2');
		let checkRightClass2 = document.querySelector('.right2');
		if(checkRightClass2) {
			clickedBlock.classList.add('left');
			clickedBlock.classList.remove('right');
			checkRightClass2.classList.add('right');
			checkRightClass2.classList.remove('right2');

		} else {
			clickedBlock.classList.add('left2');
			clickedBlock.classList.remove('right');
		}

	}

	else if (clickedBlock.classList.contains('right2')) {
		let checkLeftClass = document.querySelectorAll('.left');
		let checkRightClass = document.querySelectorAll('.right');
		let checkLeftClass2 = document.querySelectorAll('.left2');
		let checkRightClass2 = document.querySelectorAll('.right2');
			clickedBlock.classList.add('left');
			clickedBlock.classList.remove('right2');
	}
	
	else if (clickedBlock.classList.contains('left2')) {
		let checkLeftClass = document.querySelectorAll('.left');
		let checkRightClass = document.querySelectorAll('.right');
		let checkLeftClass2 = document.querySelectorAll('.left2');
		let checkRightClass2 = document.querySelectorAll('.right2');
			clickedBlock.classList.add('right');
			clickedBlock.classList.remove('left2');
	}

})

	

