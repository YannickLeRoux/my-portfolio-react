window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const switchButton = document.querySelector('#activate');

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

let isOn = false;

const words = document.querySelector('#id_message');

recognition.addEventListener('result', e => {
	let transcript = Array.from(e.results)
		.map(result => result[0])
		.map(result => result.transcript)
		.join('');
	console.log(transcript);

		if (e.results[0].isFinal) {
			transcript = transcript[0].toUpperCase() + transcript.slice(1)+ ". \n";
			words.value += transcript;      }

});

function toggleSpeechRec() {
	if (isOn) {
		recognition.stop();
		switchButton.classList.remove("btn-danger");
		switchButton.classList.add("btn-success");
		switchButton.innerHTML = "<i class='fa fa-microphone mr-2'></i>Activate Speech Recognition";
	} else {
		recognition.start();
		switchButton.classList.remove("btn-success");
		switchButton.classList.add("btn-danger");
		switchButton.innerHTML = "<i class='fa fa-microphone-slash mr-2'></i>Deactivate Speech Recognition";
	}
	isOn = !isOn;
	console.log(isOn);

}

function testEnd() {
	if (isOn) {
		recognition.start();
	}
}

recognition.addEventListener('end', testEnd);

// recognition.start();
switchButton.addEventListener('click', toggleSpeechRec);
