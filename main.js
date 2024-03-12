function startClassification()
{
    navigator.mediaDevices.getUserMedia({  audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/rdn0gevn8/', modelReady);
}

function modelReady(){
classifier.classify(gotResults);
}