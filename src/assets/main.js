let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
  let input = document.getElementById('user-guess');
   //add functionality to guess function here
  //setMessage("");
  if (answer.value == '') {
     setHiddenFields();
  }

  if (!validateInput(input.value))
  { return false }
  else
  { attempt.value++;}


  result = getResults(input.value);
  if (result)
    { //win
    console.log("You Win! :)");
    setMessage("You Win! :)");
    showAnswer(true);
    showReplay();
    } else { //lost

    console.log("attempt:" + attempt.value);
    if (attempt.value >= 10)
    {
      console.log("attempt: Lost");
      setMessage('You Lose! :(');
      showAnswer(false);
      showReplay();
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
    attempt.value = 0


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
      if (answer.value.includes(input.charAt(i))) {
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
    document.getElementById('code').ClassName ="";
  if (win) {
    document.getElementById('code').ClassName += 'success';
  } else {
    document.getElementById('code').ClassName += 'failure';
  }
  console.log('code class: '+document.getElementById('code').ClassName);
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
    input.value='0128'
    guess();
    input.value='0997'
    guess();
    input.value='0123'
    guess();

}

//test();
//test2();


function test11(){

/*The innerHTML of message should only be set to "Guesses must be exactly 4 characters long." when validateInput returns false, however; this message was set when validateInput returned true.*/
    validateInput('2344');
    console.log('2344 ' + document.getElementById('message').innerHTML)
    validateInput('23443');
    console.log('23443 ' + document.getElementById('message').innerHTML)
     validateInput('2343');
    console.log('23443 ' + document.getElementById('message').innerHTML)

}

//test11();

// Tests
//mocha.setup('bdd');
//var assert = chai.assert;


function test15(){
 showAnswer(true);

}

//test15();
