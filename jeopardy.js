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


//https://www.youtube.com/watch?v=fYMBkayHmUo&t=384s
class JeopardyGame {
    constructor(element, options = {randomA, randomB, randomC, randomD, randomE}) {
        this.useCategoryIds = options.useCategoryIds || [1892, 4483, 88, 218, 400];

        //Database
        this.categories = [randomA, randomB, randomC, randomD, randomE];
        this.clue = {};

        //State
        this.currentClue = null;

    }

    startGame() {
        $('body').prepend(`<table class = "board">` + `</table>`)
        $('.board').append(`<thead>` + `<tr>` + `<th class = "row ">` + `</th>` + `<th class = "row ">` + `</th>` + `<th class = "row ">`
            + `</th>` + `<th class = "row ">` + `</th>` + `<th class = "row ">` + `</th>` + `</tr>` + `</thead>`)
        $('.board').append(`<tbody>` + `<tr>` + `<td id ="0-0">` + `</td>` + `<td id ="0-1">` + `</td>`
            + `<td id ="0-2">` + `</td>` + `<td id ="0-3">` + `</td>` + `<td id ="0-4">` + `</td>` + `</tr>`
            + `<tr>` + `<td id ="1-0">` + `</td>` + `<td id ="1-1">` + `</td>`
            + `<td id ="1-2">` + `</td>` + `<td id ="1-3">` + `</td>` + `<td id ="1-4">` + `</td>` + `</tr>`
            + `<tr>` + `<td id ="2-0">` + `</td>` + `<td id ="2-1">` + `</td>`
            + `<td id ="2-2">` + `</td>` + `<td id ="2-3">` + `</td>` + `<td id ="2-4">` + `</td>` + `</tr>`
            + `<tr>` + `<td id ="3-0">` + `</td>` + `<td id ="3-1">` + `</td>`
            + `<td id ="3-2">` + `</td>` + `<td id ="3-3">` + `</td>` + `<td id ="3-4">` + `</td>` + `</tr>`
            + `<tr>` + `<td id ="4-0">` + `</td>` + `<td id ="4-1">` + `</td>`
            + `<td id ="4-2">` + `</td>` + `<td id ="4-3">` + `</td>` + `<td id ="4-4">` + `</td>` + `</tr>`
            + `<tr>` + `<td id ="5-0">` + `</td>` + `<td id ="5-1">` + `</td>`
            + `<td id ="5-2">` + `</td>` + `<td id ="5-3">` + `</td>` + `<td id ="5-4">` + `</td>` + `</tr>`+ `</tbody>`)
        
        let random = Math.floor(Math.random() * 1000 + 1);
        
        this.getCategoryIds(random);


    }
}

const game = new JeopardyGame(document.querySelector(".game"), {});

$('.button').on('click', function () {
    $('body').empty('body');
    $('body').prepend('<button class="button">restart again?</button>')
    game.startGame();
})






/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

//WILL HAVE TO ACCESS THE API IN TWO DIFFERENT WAYS 1.) THE CATEGORIES API 2.) THE CLUES API. THEN MATCH THEM IN THE 
//HEADER AND BODY OF THE JEOPARDY GAME

async function getCategoryIds(entry) {
    const res = await axios.get(`http://jservice.io/api/categories`)
    console.log(res);
   

    getCategory(res)
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

    for (let line of catId.data) {
        console.log(`the category is: ${line.title}. The number of clues are: ${line.clues_count}. And the category id is: ${line.id} `)
    }

}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
    const res2 = await axios.get(`http://jservice.io/api/clues`)
    console.log(res2);
    $('#0-0').innerText(res2.data)
    $('#0-1').innerText(res2.data)
    $('#0-2').innerText(res2.data)
    $('#0-3').innerText(res2.data)
    $('#0-4').innerText(res2.data)
    $('#1-0').innerText(res2.data)
    $('#1-1').innerText(res2.data)
    $('#1-2').innerText(res2.data)
    $('#1-3').innerText(res2.data)
    $('#1-4').innerText(res2.data)
    $('#2-0').innerText(res2.data)
    $('#2-1').innerText(res2.data)
    $('#2-2').innerText(res2.data)
    $('#2-3').innerText(res2.data)
    $('#2-4').innerText(res2.data)
    $('#3-0').innerText(res2.data)
    $('#3-1').innerText(res2.data)
    $('#3-2').innerText(res2.data)
    $('#3-3').innerText(res2.data)
    $('#3-4').innerText(res2.data)
    $('#4-0').innerText(res2.data)
    $('#4-1').innerText(res2.data)
    $('#4-2').innerText(res2.data)
    $('#4-3').innerText(res2.data)
    $('#4-4').innerText(res2.data)
    $('#5-0').innerText(res2.data)
    $('#5-1').innerText(res2.data)
    $('#5-2').innerText(res2.data)
    $('#5-3').innerText(res2.data)
    $('#5-4').innerText(res2.data)
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

    handleClick(evt)
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