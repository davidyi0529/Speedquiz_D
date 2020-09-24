<img src="https://github.com/davidyi0529/Portfolio_D/blob/master/assets/images/logo.png?raw=true" alt="alt text" title="David Yi">

<br />

# Speedquiz_D

<br />

- [Speedquiz_D direct page Link](https://davidyi0529.github.io/Speedquiz_D/)

<br />

Speedquiz_D is a quiz that asks the user a series of questions about HTML, CSS, & Javascript and times how long it takes to answer them all. The user is given 150 seconds to start with, and each wrong answer results in a 10-second penalty. The user's final score is equal to the number of seconds left on the clock after the final question is answered.

To start the quiz, the user clicks the "Start Quiz" button on the landing page.

### Screenshot of landing page

<img src="https://github.com/davidyi0529/Speedquiz_D/blob/master/assets/images/landing%20page.png?raw=true" width="900" height="400">

<br />
<br />

Once the quiz is started, the user is presented with a question, along with 4 possible answers. Upon clicking one of the possible answers, the app will tell the user whether their answer was correct or not, deduct 10 seconds from the remaining time if incorrect, then load the next question.

### Screenshot of quiz page

<img src="https://github.com/davidyi0529/Speedquiz_D/blob/master/assets/images/quiz%20page.png?raw=true" width="900" height="400">

<br />
<br />

Once the final question is answered, the user's final score is shown, and the user can save their score upon entering their initials. When the "Submit" button is clicked, the initials and score are saved to the local storage, so even after the browser is refreshed the score will be saved. The list of saved scores can be seen by clicking the "View Hichscores" button.

### Screenshot of final page

<img src="https://github.com/davidyi0529/Speedquiz_D/blob/master/assets/images/final%20page.png?raw=true" width="900" height="400">

<br />
<br />

### Screenshot of highscore page

<img src="https://github.com/davidyi0529/Speedquiz_D/blob/master/assets/images/high%20score.png?raw=true" width="900" height="400">

<br />
<br />

---

<br />
<br />

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Credits](#credits)
- [Support](#support)
- [License](#license)

<br />
<br />

---

<br />
<br />

## Installation

<br />

> Below I have shared a link to clone the repo, if perhaps you would like to see or contribute to the code.

<br />

### Clone

<br />

```bash
 Clone this repo to your local machine using 'https://github.com/davidyi0529/Speedquiz_D.git'
```

<br />
<br />

---

<br />
<br />

## Features

<br />
<br />

The following were used for this project.

- `Javascript`
- `HTML`
- `Bootstrap`

<br />

Mainly Javascript was used for this project. This provided good practice in navigating the DOM in javascript, along with the use of `this` when creating a button and defining its on-click behavior to check its own text and compare to the correct answer.

A particularly fustrating problem was storing an array of objects into the local storage and then retrieving them. I was puzzled to get an error when I tried to add elements to this array saying *"myArray.push is not a function."* After doing some research I found that for arrays to behave properly you need to convert them to a string when you save them to the local storage, then convert them from a string back to an array when you retrieve them again.

<br />
<br />

---

<br />
<br />

## Credits

<br />

><a href="https://bootcamp.berkeley.edu/coding/" target="_blank">`UCB-Coding-Bootcamp`</a> 

><a href="w3schools.com" target="_blank">`W3Schools`</a> 

><a href="https://shields.io/ " target="_blank">`Shields.io`</a> 

<br />
<br />

---

<br />
<br />

## Support

<br />

Reach out to me at one of the following places!

> Linkedin @ <a href="www.linkedin.com/in/davidyi0529" target="_blank">`davidyi0529`</a> 

> Github @ <a href="https://github.com/davidyi0529" target="_blank">`davidyi0529`</a>

<br />
<br />

---

<br />
<br />

## License

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

 - **[MIT license](http://opensource.org/licenses/mit-license.php)**