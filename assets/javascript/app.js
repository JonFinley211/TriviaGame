

        //  Interval Demonstration
        //  Set our number counter to 100.
        var number = 100;
        
        var intervalId;

        //  When the stop button gets clicked, run the stop function.
        $("#submit").on("click", stop);

        //  When the resume button gets clicked, execute the run function.


        //  The run function sets an interval
        //  that runs the decrement function once a second.
        //  *****BUG FIX******** 
        //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }

        //  The decrement function.
        function decrement() {

            //  Decrease number by one.
            number--;

            //  Show the number in the #show-number tag.
            // DONE: Get the current time, pass that into the timeConverter function,
            //       and save the result in a variable.
            var converted = timeConverter(number);
            //   console.log(converted);

            // DONE: Use the variable we just created to show the converted time in the "display" div.
            $("#display").text(converted);


            //  Once number hits zero...
            if (number === 0) {

                //  ...run the stop function.
                stop();

                //  Alert the user that time is up.
                alert("correct answers= " + numCorrect);
            }
        }

        //  The stop function
        function stop() {

            //  Clears our intervalId
            //  We just pass the name of the interval
            //  to the clearInterval function.
            clearInterval(intervalId);
        }
        function timeConverter(t) {

            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            if (minutes === 0) {
                minutes = "00";
            }
            else if (minutes < 10) {
                minutes = "0" + minutes;
            }

            return minutes + ":" + seconds;
        }

        //  Execute the run function.
        run();


        (function () {
            function buildQuiz() {
                // we'll need a place to store the HTML output
                const output = [];

                // for each question...
                myQuestions.forEach((currentQuestion, questionNumber) => {
                    // we'll want to store the list of answer choices
                    const answers = [];

                    // and for each available answer...
                    for (letter in currentQuestion.answers) {
                        // ...add an HTML radio button
                        answers.push(
                            `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
                        );
                    }

                    // add this question and its answers to the output
                    output.push(
                        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
                    );
                });

                // finally combine our output list into one string of HTML and put it on the page
                quizContainer.innerHTML = output.join("");
            }

            function showResults() {
                stop();
                // gather answer containers from our quiz
                const answerContainers = quizContainer.querySelectorAll(".answers");

                // keep track of user's answers
                let numCorrect = 0;

                // for each question...
                myQuestions.forEach((currentQuestion, questionNumber) => {
                    // find selected answer
                    const answerContainer = answerContainers[questionNumber];
                    const selector = `input[name=question${questionNumber}]:checked`;
                    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

                    // if answer is correct
                    if (userAnswer === currentQuestion.correctAnswer) {
                        // add to the number of correct answers
                        numCorrect++;

                        // color the answers green
                        answerContainers[questionNumber].style.color = "lightgreen";
                    } else {
                        // if answer is wrong or blank
                        // color the answers red
                        answerContainers[questionNumber].style.color = "red";
                    }
                });

                // show number of correct answers out of total
                resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
            }

            const quizContainer = document.getElementById("quiz");
            const resultsContainer = document.getElementById("results");
            const submitButton = document.getElementById("submit");
            const myQuestions = [
                {
                    question: "In 1993, Justin Timberlake, Britney Spears, Christina Aguilera, and Ryan Gosling joined what variety show?",
                    answers: {
                        a: "Mickey Mouse Club",
                        b: "Fight Club",
                        c: "The Voice"
                        
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Name the largest freshwater lake in the world?",
                    answers: {
                        a: "Table Rock Lake",
                        b: "Lake Tahoe",
                        c: "Lake Superiorn",
                    },
                    correctAnswer: "c"
                },
                {
                    question: "What kind of weapon is a falchion? A sword.",
                    answers: {
                        a: "a spear",
                        b: "a shield",
                        c: "a whip",
                        d: "a sword"
                    },
                    correctAnswer: "d"
                }
            ];

            // display quiz right away
            buildQuiz();

            // on submit, show results
            submitButton.addEventListener("click", showResults);
        })();

//  function quest() {


//                 // Next we create a for loop to create crystals for every numberOption.
//                 for (var i = 0; i < questions.length; i++) 
//                 for (var i = 0; i < answers.length; i++) 
//                 var questionsdiv= $("#question");
//                 var ansdiv= $("#arrdd")
//                 questionsdiv.append("<div>"+questionsdiv+"<div><br><'input type='checkbox'>"+answers+"</span>");

//                         //     var questionsdiv= $("#question");
//                         //     $.each(questionslist, function(i, drink){
//                         //         // for (i=0;i<questionslist.length;i++)
//                         //         questionsdiv.append("<div>"+drink+"</div><div id=arrdd></div");


//                         //     var ansdiv= $("#arrdd")
//                         //     $.each(answerslist, function(i, drunk){
//                         //         ansdiv.a("<input type='checkbox'>"+  drunk +"</span>");
//                         //     });
//                         // });

//                     // For each iteration, we will create an imageCrystal
//                     // var imageCrystal = $("<img>");

//                     // First each crystal will be given the class ".crystal-image".
//                     // This will allow the CSS to take effect.
//                     // imageCrystal.addClass("crystal-image");

//                     // Each imageCrystal will be given a src link to the crystal image
//                     // imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

//                     // Each imageCrystal will be given a data attribute called data-crystalValue.
//                     // This data attribute will be set equal to the array value.
//                     // imageCrystal.attr("data-crystalvalue", numberOptions[i]);

//                     // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
//                     // $("#question").html(questions);






//                 }

//             quest()


// var CoAns= ["Acorrect answerA","Bcorrect answerB", "Ccorrect answerC"];

// var inCoAns= ["1wong answerA","2wrong answerA","3wong answerA"]
// var inCoAns= ["1Bwrong answerb,


// $("#question").text(questions);

