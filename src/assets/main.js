let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
  //let input = document.getElementById('user-guess');
  //add functionality to guess function here
  if (attempt != '' | answer != '') {
    setHiddenFields();
    console.log('set')
  }

  if (validateInput(input.value)) {
    attempt++;

  } else {
    return false;
  }

  if (getResults()) {
    setMessage('You Win! :)');
    showAnswer(true);
    showReplay();
  } else {

    if (attempt < 10) {
      setMessage("Incorrect, try again.");
    } else {
      setMessage('You Lose! :(');
    }
  }


}


//implement new functions here

function setHiddenFields() {
  let answer = (Math.floor((Math.random() * 10000))).toString(); // random number 0-1000
  while (answer.length < 4) {
    answer = '0' + answer;
  }
  let attempt = 0
  ///Math.floor(Math.random()*1000,4);
  //add functionality to guess function here
}

function setMessage(value) {
  document.getElementById('message').innerHTML = value;
}

function validateInput(value) {
  if (value.length == 4) {
    return true;
  } else {
    setMessage("Guesses must be exactly 4 characters long.")
  }
}

function getResults(input) {
  res = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
  let correct = 0;
  for (i = 0; i++; i < 4) {
    if (answer[i] == input[i]) {
      res.append('<span class="glyphicon glyphicon-ok"></span>');
      correct++;
    } else {
      if (answer.includes(input[i])) {
        res.append('<span class="glyphicon glyphicon-transfer"></span>');
      } else {
        res.append('<span class="glyphicon glyphicon-remove"></span>');
      }
    }

    //
    //
  }
  res.append('</div>');
  results.innerHTML.append(res);
  if (correct == 4) {
    return true
  }
  return false;
}

function showAnswer(win) {
  document.getElementById('code').innerHTML = answer.value;
  if (win) {
    document.getElementById('code').ClassName = 'success';
  } else {
    document.getElementById('code').ClassName = 'failure';
  }

}

function showReplay() {
  document.getElementById('guessing-div').style.display = 'none';
  document.getElementById('replay-div').style.display = 'block';

}
