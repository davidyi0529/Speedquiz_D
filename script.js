function initQuiz() {
        let timeRemaining=0;
    
    
    let questions = [
        {
            title: "Question 1: What tag is used to specify a section of text that provides an example of computer code?",
            choices: ["caption", "code", "!DOCTYPE", "embed"],
            answer: "code"
        },
        {
            title: "Question 2: What tag can be used to insert a line break or blank line in an HTML document?",
            choices: ["br", "body", "head", "title"],
            answer: "br"
        },
        {
            title: "Question 3: What tag is used to define a standard cell inside a table?",
            choices: ["td", "h1", "button", "footer"],
            answer: "td"
        },
        {
            title: "Question 4: What element is a container for all the head elements, and may include the document title, scripts, styles, meta information, and more?",
            choices: ["head", "br", "body", "title"],
            answer: "head"
        },
        {
            title: "Question 5: What is the CSS property that is used to specify the edges of a table?",
            choices: ["Fill", "Boxes", "Margins", "Borders"],
            answer: "Borders"
        },
        {
            title: "Question 6: What is the CSS property that sets the size of the whitespace outside the borders of the content?",
            choices: ["Line", "Spacer", "Margin", "Block-level"],
            answer: "Margin"
        },
        {
            title: "Question 7: What is the name of the property used to specify the effects displayed behind all elements on a page?",
            choices: ["Bottom Layer", "Background", "Border", "Transparency"],
            answer: "Background"
        },
        {
            title: "Question 8: What is the element used – and hidden – in code that explains things and makes the content more readable?",
            choices: ["Comparisons", "Comments", "Quotations", "Notes"],
            answer: "Comments"
        },
        {
            title: "Question 9: What is the object called that lets you work with both dates and time-related data?",
            choices: ["Dates", "Time-warp", "Time field", "Clock"],
            answer: "Dates"
        },
        {
            title: "Question 10: What is a JavaScript element that represents either TRUE or FALSE values?",
            choices: ["Boolean", "RegExp", "Condition", "Event"],
            answer: "Boolean"
        }
        
    ];
        
        let startButtonEl = document.getElementById("start-button");
        let timeRemainingEl = document.getElementById("time-remaining");
        let finalScoreEl = document.getElementById("final-score");
        let numQuestions = questions.length;
        let landingContainerEl = document.getElementById("landing-container");
        let quizContainerEl = document.getElementById("quiz-container");
        let finalContainerEl = document.getElementById("final-container");
        let submitButtonEl = document.getElementById("submit-initials");
        let highscoreButtonEl = document.getElementById("highscore-button");
        let highscoreContainerEl = document.getElementById("highscore-container");
        let highScores = [];
           
        if (JSON.parse(localStorage.getItem('scores')) !== null) {
            highScores = JSON.parse(localStorage.getItem("scores"));
        }
    
        function startQuiz() {
            
            
            landingContainerEl.setAttribute("class","container d-none");
            let rowEl = null;
            let colEl = null;
            let headerEl = null;
            let buttonEl = null;
            quizContainerEl.setAttribute("class","container");
            let currentQuestion = 1;
            let score = 0;
    
            timeRemaining=numQuestions * 15;
            timeRemainingEl.setAttribute("value",timeRemaining);
           
            let myInterval = setInterval(function() {
                if (timeRemaining<1) {
                    clearInterval(myInterval);
                   
                    quizContainerEl.setAttribute("class","container d-none");
                    finalContainerEl.setAttribute("class","container");
                    return;
                }
                timeRemaining = timeRemaining - 1;
                timeRemainingEl.setAttribute("value",timeRemaining);
            },1000);
            let clickTimeout = false;
            function generateQuestion(questionNum) {
                
                quizContainerEl.innerHTML = "";
                rowEl = document.createElement("div");
                rowEl.setAttribute("class","row");
                quizContainerEl.append(rowEl);

                colEl = document.createElement("div");
                colEl.setAttribute("class","col-0 col-sm-2");
                rowEl.append(colEl);

                colEl = document.createElement("div");
                colEl.setAttribute("class","col-12 col-sm-8");
                rowEl.append(colEl);

                colEl = document.createElement("div");
                colEl.setAttribute("class","col-0 col-sm-2");
                rowEl.append(colEl);

                colEl = rowEl.children[1];
                rowEl = document.createElement("div");
                rowEl.setAttribute("class","row mb-3");
                colEl.append(rowEl);

                colEl = document.createElement("div");
                colEl.setAttribute("class","col-12");
                rowEl.append(colEl);

                headerEl = document.createElement("h2");
                headerEl.innerHTML = questions[questionNum-1].title;
                colEl.append(headerEl);

                colEl = quizContainerEl.children[0].children[1];
                for (let i=0; i<4; i++) {
                    let rowEl = document.createElement("div");
                    rowEl.setAttribute("class","row mb-1");
                    colEl.append(rowEl);

                    let colEl2 = document.createElement("div");
                    colEl2.setAttribute("class","col-12");
                    rowEl.append(colEl2);

                    buttonEl = document.createElement("button");
                    buttonEl.setAttribute("class","btn btn-primary");
                    buttonEl.setAttribute("type","button");
                    buttonEl.innerHTML = questions[currentQuestion-1].choices[i];
                    colEl2.append(buttonEl);
                    buttonEl.addEventListener("click",function(){
                        
                        if (clickTimeout) {
                            return;
                        }
                        clickTimeout = true;
                        clearInterval(myInterval);
                        let colEl = quizContainerEl.children[0].children[1];
                        let rowEl = document.createElement("div");
                        rowEl.setAttribute("class","row border-top");
                        colEl.append(rowEl);

                        colEl = document.createElement("div");
                        colEl.setAttribute("class","col-12");
                        rowEl.append(colEl);

                        let parEl = document.createElement("p");
                        colEl.append(parEl);
                        if (this.innerHTML === questions[currentQuestion - 1].answer) {
                            parEl.innerHTML = "Correct!";
                        } else {
                            parEl.innerHTML = "Incorrect";
                            timeRemaining = timeRemaining - 10;
                            if (timeRemaining < 0) {
                                timeRemaining = 0;
                            }
                            timeRemainingEl.setAttribute("value",timeRemaining);
                        }
                        currentQuestion++;
                        if (currentQuestion>questions.length) {
                            score = timeRemaining;
                        }
                        setTimeout(function() {
                            
                            if (currentQuestion>questions.length) {
                                
                                quizContainerEl.setAttribute("class","container d-none");
                                finalContainerEl.setAttribute("class","container");
                                finalScoreEl.setAttribute("value",score);
                            } else {
                                generateQuestion(currentQuestion);
                                clickTimeout = false;
                                myInterval = setInterval(function() {
                                    if (timeRemaining<1) {
                                        clearInterval(myInterval);
                                        quizContainerEl.setAttribute("class","container d-none");
                                        finalContainerEl.setAttribute("class","container");
                                        return;
                                    }
                                    timeRemaining = timeRemaining - 1;
                                    timeRemainingEl.setAttribute("value",timeRemaining);
                                },1000);
                            }
                        },1000);
                    });
                }
                

            }
            function saveHighScore() {
                let initialsEl = document.getElementById("initials-entry");
                let newHighScore = {
                    initials: initialsEl.value,
                    highScore: score
                };
                console.log(newHighScore);
                highScores.push(newHighScore);
                console.log(highScores);
                localStorage.setItem("scores",JSON.stringify(highScores));
            }
            submitButtonEl.addEventListener("click",saveHighScore);
            
            generateQuestion(currentQuestion);
        }

        startButtonEl.addEventListener("click",startQuiz);

        highscoreButtonEl.addEventListener("click",function() {
            landingContainerEl.setAttribute("class","container d-none");
            quizContainerEl.setAttribute("class","container d-none");
            finalContainerEl.setAttribute("class","container d-none");
            highscoreContainerEl.setAttribute("class","container");
            let colEl = document.getElementById("highscore-table");
            for (i=0; i<highScores.length; i++) {
                let rowEl = document.createElement("div");
                rowEl.setAttribute("class","row mb-1");
                colEl.append(rowEl);

                let colEl2 = document.createElement("div");
                colEl2.setAttribute("class","col-12 text-center");
                rowEl.append(colEl2);

                let parEl = document.createElement("div");
                parEl.innerHTML = "Initials: " + highScores[i].initials + "   Score: " + highScores[i].highScore;
                colEl2.append(parEl);
            }
        });
 
    }
    
initQuiz();