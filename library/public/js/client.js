$(document).ready(function(){
  console.log("jquery working");
  $('.button').on('click', buttonClick);


});
  function buttonClick(){
    var inputValue1 = $('#firstNum').val();
    var inputValue2 = $('#secondNum').val();
    var buttonValue = $(this).attr('name');
    var valuesObj = {
      firstNumber: inputValue1,
      secondNumber: inputValue2,
      opperator: buttonValue,
    }
    sendMathData(valuesObj);
  }

    function sendMathData(valuesObj){
      $.ajax({
        type: 'POST',
        url: '/calculations',
        data: valuesObj,
        success: function(thisIsWhatIGetBack) {//the variable within the function is what the POST will send back
          console.log("this is what i get back", thisIsWhatIGetBack);
          console.log(valuesObj);
          getMathData();

        }
    });
    }
    function getMathData(){
      $.ajax({
        type: 'GET',
        url: '/calculations',
        success: function(thisIsWhatIGetBack){
          console.log("got the get");
          appendDom(thisIsWhatIGetBack);
        }
      })
    }
    function appendDom(thisIsWhatIGetBack) {
        var dataFromPost = thisIsWhatIGetBack
        $('#result').empty();
        $('#result').append('<div id="">' + dataFromPost.total + '</div>');
        $('#firstNum').val("")
        $('#secondNum').val("")
    }
