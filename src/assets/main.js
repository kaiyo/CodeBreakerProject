let answer = document.getElementById('answer');
let input = document.getElementById('attempt');
let attempt = 0


function guess() {
  //let input = document.getElementById('user-guess');
  //add functionality to guess function here
  //setMessage("");
  if (answer.value == '') {
     setHiddenFields();
  }

  if (validateInput(input.value)) {
    attempt++;
  } else {
      return false;
  }

  if (getResults(input.value)) {
    console.log("You Win! :)");
    setMessage("You Win! :)");
    showAnswer(true);
    showReplay();
  } else {
      console.log("attempt:" + attempt);
    if (attempt >= 10)
    {
      console.log("attempt: Lost");
      setMessage('You Lose! :(');
    }else{
      console.log("attempt: try");
      setMessage("Incorrect, try again.");
    }
  }


}


//implement new functions here

function setHiddenFields() {

    answer.value = (Math.floor((Math.random() * 10000))).toString();
    while (answer.value.length < 4) {
      answer.value = '0' + answer.value;
    }
    attempt = 0


  console.log('set ' + answer.value + ' - ' + (answer.value).length);
  ///Math.floor(Math.random()*1000,4);
  //add functionality to guess function here
}

function setMessage(msg) {
  document.getElementById('message').innerHTML = msg;
  console.log('message: '+msg)
}

function validateInput(value) {
  console.log('check ' + value + ' - ' + value.length +'-'+ (value.length == 4));
  if (value.length == 4) {
    setMessage("");
    return true;
  } else {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
}

function getResults(input) {
  res = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
  let correct = 0;

  for (i = 0; i < 4; i++) {
    if (answer.value.charAt(i) == input.charAt(i)) {
      res += '<span class="glyphicon glyphicon-ok"></span>';
      correct++;
    } else {
      if (answer.value.includes(input[i])) {
        console.log(answer.value+' includes '+(input.charAt(i)));
        res += '<span class="glyphicon glyphicon-transfer"></span>';
      } else {
        console.log(answer.value+' does not includes '+input.charAt(i));
        res += '<span class="glyphicon glyphicon-remove"></span>';
      }
    }

    //
    //
  }
  res += '</div>';
  console.log('result: ' + res);
  results.innerHTML += res;

   console.log('result ' + input + ' vs ' + answer.value + ' >> ' + correct);

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
  setMessage('test');
  validateInput('9090');
 // validateInput('y');
 // validateInput('12334');
  validateInput('9090');
  getResults('1234');
  showAnswer(true);

}

function test2(){
    answer.value='0123'
    input.value='0127'
    guess();

}

//test();
//test2();


function test3(){
    validateInput('2344');
    console.log('2344 ' + document.getElementById('message').innerHTML)
    validateInput('23443');
    console.log('23443 ' + document.getElementById('message').innerHTML)
     validateInput('2343');
    console.log('23443 ' + document.getElementById('message').innerHTML)

}

//test3();

// Tests
//mocha.setup('bdd');
//var assert = chai.assert;
