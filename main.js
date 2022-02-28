function startToclassify(){
    navigator.mediaDevices.getUserMedia({ audio: true }); 
    Classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Y645G-3p4/model.json", modelReady);
}
function modelReady() {
    Classifier.classify(gotResults);
}