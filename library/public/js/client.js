$(document).ready(function(){
  $('.button').on('click', buttonClick);
});
  function buttonClick(){
    var inputValue1 = $('#firstNum').val();
    var buttonValue = $(this).attr('name');
    var valuesObj = {
      firstNumber: inputValue1,
      secondNumber: "",
      opperator: buttonValue,

    }
    $('.button').css('background-color', 'lightGrey')
    $(this).css('background-color', 'DimGrey')
    console.log("obejct before equals click: ", valuesObj);
    $('#equalsClick').on('click', function(){
    valuesObj.secondNumber = $('#secondNum').val();

    sendMathData(valuesObj);
    });
  }


    function sendMathData(valuesObj){
      $.ajax({
        type: 'POST',
        url: '/calculations',
        data: valuesObj,
        success: function(thisIsWhatIGetBack) {//the variable within the function is what the POST will send back
          console.log("Posting this obect", valuesObj);
          getMathData();

        }
    });
    }
    function getMathData(){
      $.ajax({
        type: 'GET',
        url: '/calculations',
        success: function(thisIsWhatIGetBack){
          console.log("obect receieved from GET: ", thisIsWhatIGetBack);
          appendDom(thisIsWhatIGetBack);


        }
      })
    }
    function appendDom(thisIsWhatIGetBack) {
        var dataFromPost = thisIsWhatIGetBack;
        $('#result').empty();
        $('#result').append('<div id="resultId">' + dataFromPost.total + '</div>');
        $('#firstNum').val("");
        $('#secondNum').val("");
        $('#resultId').append('<div id="clearButtonDiv"><button id="clearButton">Clear</button></div>');
        $('#clearButton').on('click', function(){
          $('#resultId').empty();
        });
    }
