//script for completing score
function submitQuiz() {
    console.log(submitted);
}

//get the answers to the quiz
function answerScore(qName) {
    var radiosNo =
        document.getElementById(qName);

    let qName = 0;
    for (var i = 0, length =
            radioNo.length; i < length; i++) {
        if (radiosNo[i].checked) {


            //do something with radios
            var answerValue =
                Number(radiosNo[i].value);
        }
    }

    //change NaNs to zero
    if (isNaN)
}