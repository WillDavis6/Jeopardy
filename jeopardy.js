// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]
class JeopardyGame {
    constructor(element, options = {}) {
        this.useCategoryIds = options.useCategoryIds || [1892, 4483, 88, 218, 400];

        //Database
        this.categories = [1892, 4483, 88, 218, 400];
        this.clue = {};

        //State
        this.currentClue = null;

    }

    startGame() {
        $('body').prepend(`<div class = "board">` + `</div>`)
        $('.board').append(`<div class = "row ${this.categories[0]}">` + `</div>` + `<div class = "row ${this.categories[1]}">` + `</div>` + `<div class = "row ${this.categories[2]}">`
            + `</div>` + `<div class = "row ${this.categories[3]}">` + `</div>` + `<div class = "row ${this.categories[4]}">` + `</div>`)
        $('.row').append('<ul>' + '<li class = "question">' + '</li>' + '<li class = "question">' + '</li>' + '<li class = "question">' + '</li>'
        + '<li class = "question">' + '</li>' + '<li class = "question">' + '</li>' + '<li class = "question">' + '</li>' + '</ul>')
        this.getCategoryIds();


    }
}

const game = new JeopardyGame(document.querySelector(".game"), {});
game.startGame();





/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds(entry) {
    const res = await axios.get(`http://jservice.io/api/random`)
    console.log(res);
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

function getCategory(catId) {
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
}
$('.will_blow_up').on('click', function () {
    $('.PEW').remove()
})
/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {

}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
}

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO


//https://stackoverflow.com/quesitons/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}