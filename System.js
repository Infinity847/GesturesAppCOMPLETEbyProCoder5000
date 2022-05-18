camera = document.getElementById("camera");

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });
  function snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id = "captured_image" src = "' + data_uri + '"/>';
            });
        
  }
  function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = 'The first prediction is' + prediction_1;
    speak_data_2 = 'The second prediction is' + prediction_2;
synth.speak(utterThis);
  }
  console.log('ML5.JS VERSION : ' + ml5.version);
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/S-2pWREQ6/',modelLoaded);
  function modelLoaded() {
    console.log('MODEL LOADED!');
  }
function speak() {
  var synth = window.speechSyntheses;
  speak_data_1 = 'The first prediction is ' + prediction_1;
  speak_data_2 = 'The second prediction is ' + prediction_2;
}
function check() {
  img = document.getElementById("captured_image");
  classifier.classify(img, gotResult);
}
function gotResult(error, results) {
if (error) {
console.error(error);
}else {
  console.log(results); 
}
// Best gesture : &#128076;
//Victory gesture :	&#9996;
//Amazing gesture :	&#128077;
document.getElementById("Prediction1").innerHTML = results[0].label;
document.getElementById("Prediction2").innerHTML = results[1].label;
  if (results[0].label == 'Victory') {
    document.getElementById("Prediction1").innerHTML = 'Prediction 1 -	&#9996;';
  }
  if (results[0].label == 'Best') {
    document.getElementById("Prediction1").innerHTML = 'Prediction 1 -	&#128076;';
  }
  if (results[0].label == 'Amazing') {
    document.getElementById("Prediction1").innerHTML = 'Prediction 1 -	&#128077;';
  }
  if (results[1].label == 'Victory') {
    document.getElementById("Prediction2").innerHTML = 'Prediction 2 -	&#9996;';
  }
  if (results[1].label == 'Best') {
    document.getElementById("Prediction2").innerHTML = 'Prediction 2 -	&#128076;';
  }
  if (results[1].label == 'Amazing') {
    document.getElementById("Prediction2").innerHTML = 'Prediction 2 -	&#128077;';
  }

}