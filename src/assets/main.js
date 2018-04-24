let answer = document.getElementById('answer');
let input = document.getElementById('attempt');



function guess() {
  //let input = document.getElementById('user-guess');
  //add functionality to guess function here
  if (answer.value == '') {
  setHiddenFields();
  }

  if (validateInput(attempt)) {
    attempt++;

  } else {
    return false;
  }

  if (getResults(input.value)) {
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

    answer.value = (Math.floor((Math.random() * 10000))).toString();
    while (answer.value.length < 4) {
      answer.value = '0' + answer.value;
    }
      let attempt = 0


  console.log('set ' + answer.value + ' - ' + (answer.value).length);
  ///Math.floor(Math.random()*1000,4);
  //add functionality to guess function here
}

function setMessage(value) {
  document.getElementById('message').innerHTML = value;
}

function validateInput(value) {
  console.log('check ' + value + ' - ' + value.length);
  setMessage("");
  if (value.length == 4) {
    return true;
  } else {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
}

function getResults(input) {
  res = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
  let correct = 0;
  console.log('result ' + input + ' vs ' + answer.value);
  for (i = 0; i < 4; i++) {
    if (answer.value[i] == input[i]) {
      res += '<span class="glyphicon glyphicon-ok"></span>';
      correct++;
    } else {
      if (answer.toString().includes(input[i])) {
        res += '<span class="glyphicon glyphicon-transfer"></span>';
      } else {
        res += '<span class="glyphicon glyphicon-remove"></span>';
      }
    }


    //
    //
  }
  res += '</div>';
  console.log('result: ' + res);
  results.innerHTML += res;
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


function test() {
  for (i = 0; i < 10; i++) {
    setHiddenFields();
  }
  setHiddenFields();
  // setMessage('test');
  validateInput('9090');
  validateInput('y');
  validateInput('12334');
  validateInput('9090');
  getResults('8888');
  showAnswer(true);
}

//test();

// Tests
//mocha.setup('bdd');
//var assert = chai.assert;
