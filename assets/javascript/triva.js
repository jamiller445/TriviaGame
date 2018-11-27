// trivia.js

var wins = 0;
var losses = 0;
var unanswered = 0;
var timer = 10;
var number = timer;

var choice = 0;

var isRunning = false;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
var intervalId;

var ques = 0;
var qNum = 0;

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

    function getQuestion(q) {
      
        qNum = q; 
    
        $("#show-question").html("<h3>" + trivaQ.arrayOfQ[qNum].qText + "</h3>");
        for (mc = 0; mc < 4; mc++){

        $("#show-choices" + mc).html("<button class='button' id='choice' type='button' value=" + mc + ">" + trivaQ.arrayOfQ[qNum].multipleChoices[mc] + "</button>");
        
        };
      };

    function getAnswer(q){
      
        qNum = q;
        
        $("#questionAndChoices").hide();
        $("#show-answer").html("<h4>" + trivaQ.arrayOfQ[qNum].multipleChoices[trivaQ.arrayOfQ[qNum].aText] + "</h4>");
        
      };

    function run() {
      // alert("in run");
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

         //  ...run the stop function.
          stop();
          getAnswer(ques);
          $("#show-status").html("<h4>Out of Time!</h4><h4>The Correct Answer was:</h4>");
          unanswered++;
          $("#show-status").show();
          $("#show-answer").show();

          ques++;

          if (ques < trivaQ.arrayOfQ.length) {

          // wait for a few seconds then show next question

          number = timer;        

          setTimeout(startGame,3000);

          }

          else {

          ques = 0;
          number = timer;

          restartGame();

          }
        }
      }

//  The stop function
    function stop() {

        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.

        clearInterval(intervalId);
      } 

    function startGame() {

      $(document).ready(function() {

      $("#wrong").hide();
      $("#correct").hide();
      $(".show-score").hide();
      $("#restart").hide();
      $("#start-button").hide();
      // $("#questionAndChoices").show();
      console.log("question number in startGame= " + ques);
      run();

      getQuestion(ques);
    
      playGame(ques);
      });
    }

function playGame(q) {

  qNum = q;

  $("#show-status").hide();
  $("#show-answer").hide();
  $("#questionAndChoices").show();
  $(".choices").show();

    $(".button").on("click", function() {
    // dataChoice = parseInt($(this).attr('data'));
    dataChoice = parseInt($(this).attr('value'));

    console.log("data= " + dataChoice);
    console.log("aText= " + trivaQ.arrayOfQ[qNum].aText);
   
  // $(document).on("click", ".choices", function() {})
  
    if ( dataChoice === trivaQ.arrayOfQ[qNum].aText){
      // alert("You have a correct answer");

      // answer is correct

      $("#show-status").show();
      $("#show-answer").show(); 
      
      stop();
      number = timer;
      wins++;
      
      $("#show-status").html("<h4>Correct</h4><h4>The Answer was:</h4>");

      getAnswer(qNum);

      $("#correct").css("display", "block");

      ques++;

      if (ques < trivaQ.arrayOfQ.length) {

        // wait for a few seconds then show next question

        // setTimeout(console.log("we are in timeout for 5 sec"), 1000 * 5);
          setTimeout(startGame,3000);

         }
         else {

          //  display restart game button
          ques = 0;

          $("#correct").css("display", "block");

          restartGame();

         }
      }

    else {

      console.log("wrong answer");

      $("#questionAndChoices").hide();

      stop();
      number = timer;
      losses++;

      $("#show-status").show();
      $("#show-answer").show();
      
      $("#show-status").html("<h4>Wrong Answer</h4><h4>The Correct Answer was:</h4>");

      getAnswer(qNum);

      $("#wrong").css("display", "block");

      ques++;

      if (ques < trivaQ.arrayOfQ.length) {
        
        // setTimeout(console.log("we are in timeout for 5 sec"), 1000 * 5);
          setTimeout(startGame,3000);

         }
         else {

          //  display restart game button
          ques = 0;

          restartGame();

         }
      }
}); 
};

function restartGame() {

  setTimeout(function() {
    $("#wrong").hide();
    $("#correct").hide();
    $("#show-answer").hide();
    $("#show-status").html("<h4>All Done, Here's your score!</h4>");
    $(".show-score").show(); 
    $("#show-wins").html("<h4>Wins: " + wins + "</h4/");
    $("#show-losses").html("<h4>Losses: " + losses + "</h4/");
    $("#show-unanswered").html("<h4>Unanswered: " + unanswered + "</h4>");
    wins = 0;
    losses = 0;
    unanswered = 0;
    $("#restart").show();
  },3000);

}