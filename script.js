// More API functions here:
    // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

    // the link to your model provided by Teachable Machine export panel
const URL = "https://teachablemachine.withgoogle.com/models/ZgOwQ17MG/";
// var max = 0;
// var bestFit = "";
var sentenceArray = [];
var final = [];
sentenceArray.push("");
var indexCount = 0;
var count = 0;

let model, webcam, labelContainer, maxPredictions;

// Load the image model and setup the webcam
async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    webcam = new tmImage.Webcam(350, 350, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    // append elements to the DOM
    document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) { // and class labels
        labelContainer.appendChild(document.createElement("div"));
    }
}

async function loop() {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
}

// run the webcam image through the image model
async function predict() {
  // predict can take in an image, video or canvas html element
  const prediction = await model.predict(webcam.canvas);

  var max = 0;
  var bestFit = "";
  for (let i = 0; i < maxPredictions; i++) {
    const classPrediction = prediction[i].className + ": " + prediction[i].probability.toFixed(2);

    if (prediction[i].probability.toFixed(2) > max){
      max = prediction[i].probability.toFixed(2);
      bestFit = prediction[i].className; 

      if(prediction[i].probability.toFixed(2) > .08 && bestFit != "NULL"){
        sentenceArray.push(bestFit);
        if(sentenceArray[indexCount] == bestFit){
          count++;
        }
        indexCount++;

        if(count >= 100){
          final.push(bestFit);
          if(bestFit == " "){
            speak();
          }
          count = 0;
        }
        // if(final[indexCount-1] == " "){ //change to space later on
        //   speak();
        // }
      }
    }
    // labelContainer.childNodes[i].innerHTML = classPrediction;
    document.getElementById("bestFitForLetter").innerHTML = final.join("");
  }
}

function speak(){
  var u = new SpeechSynthesisUtterance();
  for(var i = 0; i < final.length; i++){
    u.text += final[i];
  }

  speechSynthesis.speak(u);
}