const searchButton = document.querySelector('.searchbutton');
const inputBox = document.querySelector('.inputbox');
const crossicon = document.querySelector('.cross');
const content = document.querySelector('.content');

searchButton.addEventListener('click', function() {
  inputBox.classList.toggle('hidden');
content.classList.toggle('hidden');
});

crossicon.addEventListener('click', function () {
  inputBox.classList.toggle('hidden');
 content.classList.toggle('hidden');
})



const microphone = document.querySelector('.microphone');
const inputboxes = document.querySelector('.inputboxes');


if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
 
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

 
  recognition.lang = 'en-US'; 


  microphone.addEventListener('click', function() {
      recognition.start();
      inputboxes.placeholder = 'Say Anything to Search...';
    microphone.classList.add('recording');
  });

 
  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    inputboxes.value = transcript;
  };

  
  recognition.onerror = function(event) {
    console.error('Speech recognition error:', event.error);
  };
} else {
  console.error('Web Speech API is not supported in this browser.');
}






