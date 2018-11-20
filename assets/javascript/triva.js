// game.js

var wins;
var losses;
var unanswerd;
// var time = 30;

var number = 30;
var isRunning = false;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
var intervalId;

var ques = 0;


var trivaQ = { 
        arrayOfQ: [
                    {
                    qText: "What does HTML stand for?",
                    aText: 2,
                    multipleChoices: ["wrong1,1", 
                                      "wrong1,2",
                                      "Hyper Text Markup Language", 
                                      "wrong1,3"]
                    },
                    {
                    qText: "What does CSS stand for?",
                    aText: 0,
                    multipleChoices: ["Casscading Style Sheet",
                                      "wrong2,1", 
                                      "wrong2,2", 
                                      "wrong2,3"]
                    },
                    {
                    qText: "What is your best source of help during Coding BootCamp?",
                    aText: 3,
                    multipleChoices: ["wrong3,1", 
                                      "wrong3,2",
                                      "wrong3,3",
                                      "Your neighbor siting next to you"]
                    }
                ]
        
    }

//     for (i = 0; i<3 ; i++){
//         n = i + 1;
// console.log("question " +  n + " = "  + trivaQ.arrayOfQ[i].qText);
// console.log("multiple choices: " + trivaQ.arrayOfQ[i].multipleChoices);
// console.log("answer to question" +  n + "= " + trivaQ.arrayOfQ[i].aText);
// }

// run();
// decrement();

    // ********************  function definitions  ********************************

    function getQuestion(q) {
      i = q;
      console.log("qNum is type= " + typeof i);
      console.log("qNum = " + i);
        
        
        $("#show-question").html("<h3>" + trivaQ.arrayOfQ[i].qText + "</h3>");
        for (mc = 0; mc < 4; mc++){
            
        // console.log("choices= " + trivaQ.arrayOfQ[i].multipleChoices[mc])

        $("#show-choices" + mc).html("<h3 class='choices' data=" + mc + ">" + trivaQ.arrayOfQ[i].multipleChoices[mc] + "</h3>");
        // $(".choices").html("<h3>" + trivaQ.arrayOfQ[i].multipleChoices[mc] + "</h3>");
        };
      };

    function getAnswer(q){
        i = q;
        console.log("question number in getAnswer= " + i);
        $("#show-answer").html("<h4>" + trivaQ.arrayOfQ[i].multipleChoices[trivaQ.arrayOfQ[i].aText] + "</h4>");
        // $("#show-status").show();
        // $("#show-answer").show();
        // $("#").html("<h4>" + trivaQ.arrayOfQ[i].multipleChoices[trivaQ.arrayOfQ[i].aText] + "</h4>")
      };

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        isRunning = true;
        $("#show-number").html("<h4>Time Remaining: " + number + "</h4>");
      }

    //  The decrement function.
    function decrement() {

        //  Decrease number by one.
        number--;
  
        //  Show the number in the #show-number tag.
        $("#show-number").html("<h4>Time Remaining: " + number + "</h4>");
  
  
        //  Once number hits zero...
        if (number === 0) {  

            // console.log("answer index= " + i);
            
          $("#show-status").html("<h4>Out of Time!</h4><h4>The Correct Answer was:</h4>");
        //   $("#show-answer").html("<h6>" + trivaQ.arrayOfQ[i].multipleChoices[trivaQ.arrayOfQ[i].aText] + "</h6>")
        
               
           //  ...run the stop function.
          stop();
  
          //  Alert the user that time is up.
          alert("Time Up! The game has ended");
          isRunning = false;
        }
      }
  
      //  The stop function
    function stop() {
  
        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
        $("#questionAndChoices").hide()
        $("#show-status").html("<h4>Out of Time!</h4><h4>The Correct Answer was:</h4>");
        getAnswer(ques);
        isRunning = false;
        console.log("isRunning in stop= " + isRunning);

      }
  




// *********************************************************  
function startGame() {
    // alert("Game has started");
    
    $("#start-button").hide();
    
    run();
    // isRunning=true;

    // do {
    getQuestion(ques);
    playGame(ques);
    // } while ( isRunning);

  //   do {
  //     isRunning = true;
      
  //     getQuestion(ques);

  // } while ( isRunning );

    // run();
    // decrement();
    // getQuestion(ques);
};

function playGame(q) {
  i = q;
  console.log("isRunning in playGame= " + isRunning);
  $(document).on("click", ".choices", function() {
    dataChoice = parseInt($(this).attr('data'));

    if ( dataChoice === trivaQ.arrayOfQ[i].aText){
      alert("You have a correct answer");
      nextq = i + 1;
      getQuestion(nextq);
    }
    else {
      
      $("#questionAndChoices").hide();
      $("#show-status").html("<h4>Wrong Answer</h4><h4>The Correct Answer was:</h4>");

      getAnswer(i);
  
      $("#show-answer").hide();
      $("#show-status").hide();
      
      alert("builtin wait before next question");
      nextq = i + 1;
      getQuestion(nextq);
      $("#questionAndChoices").show();
      
    }
  console.log("answer selected= " + typeof dataChoice + " correct answer= " + typeof trivaQ.arrayOfQ[i].aText);
  console.log("the correct answer is= " + trivaQ.arrayOfQ[i].multipleChoices[trivaQ.arrayOfQ[i].aText]);
  });

};



