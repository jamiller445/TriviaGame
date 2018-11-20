// game.js

var wins;
var losses;
var unanswerd;
// var time = 30;

var number = 10;
var isRunning = false;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
var intervalId;

var ques = 1;


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
                    aText: "Your neighbor siting next to you",
                    multipleChoices: ["wrong3,1", "wrong3,2", "wrong3,3"]
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

    function getQuestion(ques) {
      console.log("qNum is type= " + typeof ques);
      console.log("qNum = " + ques);
        i = ques;
        
        $("#show-question").html("<h3>" + trivaQ.arrayOfQ[i].qText + "</h3>");
        for (mc = 0; mc < 4; mc++){
            
        // console.log("choices= " + trivaQ.arrayOfQ[i].multipleChoices[mc])

        $("#show-choices" + mc).html("<h3 class='choices' data=" + mc + ">" + trivaQ.arrayOfQ[i].multipleChoices[mc] + "</h3>");
        // $(".choices").html("<h3>" + trivaQ.arrayOfQ[i].multipleChoices[mc] + "</h3>");
        };
      };

    function getAnswer(ques){
        i = ques;
        console.log("question number in getAnswer= " + i);
        $("#show-answer").html("<h4>" + trivaQ.arrayOfQ[i].multipleChoices[trivaQ.arrayOfQ[i].aText] + "</h4>")
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
          alert("Time Up!");
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

      }
  




// *********************************************************  
function startGame() {
    // alert("Game has started");

    $("#start-button").hide()
    run();
    // decrement();
    getQuestion(ques);
    playGame(ques);

  //   do {
  //     isRunning = true;
      
  //     getQuestion(ques);

  // } while ( isRunning );

    // run();
    // decrement();
    // getQuestion(ques);
};

function playGame(ques) {
  i = ques;
  $(document).on("click", ".choices", function() {
    dataChoice = $(this).attr('data')
    console.log("answer selected= " + dataChoice + " correct answer= " + trivaQ.arrayOfQ[i].aText);
    console.log("the correct answer is= " + trivaQ.arrayOfQ[i].multipleChoices[trivaQ.arrayOfQ[i].aText]);
  });
};

// ************  main  ******************

