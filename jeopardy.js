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
    constructor(element, options = {}) {
  
        this.categories = [];
        this.clue = {};
    }

    fillCategoryArrWithIds() {
   
        for (let i = 0; i < 5; i++) {
            let random = Math.floor(Math.random() * 2000 + 1);
    
            this.categories.push(random);
        }
       
    }
    
    insertCategoriesIntoHtml() {
            this.categories.forEach(function (id, index) {
                getClues(id, index)
            })
    
     }

    // insertCategoriesIntoHtml() {
    //     this.categories.forEach(function (id) {
    //         console.log(getClues(id))
    //     })
    // }

    buildClueObject() {
        this.categories.forEach(function (catId) {
            this.clue.clue  
        })
    }

    // addEventListener() {
    //     let all = document.querySelectorAll("td");
    //     all.addEventListener('click', handleClick)
    // }

    startGame() {
        $('body').prepend(`<table class = "board">` + `</table>`)
        $('.board').append(`<thead>` + `<tr>` + `<th class = "row 0">` + `</th>` + `<th class = "row 1">` + `</th>` + `<th class = "row 2">`
            + `</th>` + `<th class = "row 3">` + `</th>` + `<th class = "row 4">` + `</th>` + `</tr>` + `</thead>`)
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
            + `<td id ="5-2">` + `</td>` + `<td id ="5-3">` + `</td>` + `<td id ="5-4">` + `</td>` + `</tr>` + `</tbody>`)
        // let clues = shuffle(category.clues).splice(0, 5).forEach((clue, index) => {
        //     let clueId = categoryIndex + "-" + index;
        //     newCategory.clues.push(clueId);
    
        //     this.clues[clueId] = {
        //         quesiton: clue.question,
        //         answer: clue.answer
        //     }

        // })

        // this.categories.push(newCategory)
        // console.log(this)
    }


addAllEventListeners() {

    const work = document.querySelectorAll(".game")
    work.addEventListener('click', handleClick);


}
    


}
const game = new JeopardyGame(document.querySelector(".game"), {});

$('.button').on('click', function () {
    $('body').empty('body');
    $('body').prepend('<button class="button">kaJiga tHis?</button>');
    game.fillCategoryArrWithIds();
    game.insertCategoriesIntoHtml();
    game.startGame();
    game.addAllEventListeners();
    // fillCategoryArrWithIds();
    // insertCategoriesIntoHtml();


});


/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

//WILL HAVE TO ACCESS THE API IN TWO DIFFERENT WAYS 1.) THE CATEGORIES API 2.) THE CLUES API. THEN MATCH THEM IN THE 
//HEADER AND BODY OF THE JEOPARDY GAME







// buildClueObject() {
//     this.categories.forEach(function (catId) {
//         this.clue.clue  
//     })
// }

async function getClues(entry, index) {
    console.log(entry);
    const res = await axios.get(`http://jservice.io/api/category`, {
        params: {
            id: entry
        }
    })
    let fill = `${index}`;
    $(`.${fill}`).text(res.data.title);
    $(`#0-${fill}`).addClass(`${res.data.clues[0].answer}`).text(`${res.data.clues[0].question}`);
    $(`#1-${fill}`).addClass(`${res.data.clues[1].answer}`).text(`${res.data.clues[1].question}`);
    $(`#2-${fill}`).addClass(`${res.data.clues[2].answer}`).text(`${res.data.clues[2].question}`);
    $(`#3-${fill}`).addClass(`${res.data.clues[3].answer}`).text(`${res.data.clues[3].question}`);
    $(`#4-${fill}`).addClass(`${res.data.clues[4].answer}`).text(`${res.data.clues[4].question}`);
    $(`#5-${fill}`).addClass(`${res.data.clues[5].answer}`).text(`${res.data.clues[5].question}`)
   
    
    // $('.row').text(res.data.title);
   

    // for (let line of res.data.clues) {
    //     console.log(`the category is: ${res.data.title}. The number of clues are: ${res.data.clues_count}. Here are 5 clues and their answers:
    //      Clue 1: ${res.data.clues[0].question} Answer: ${res.data.clues[0].answer} 
    //      Clue 2: ${res.data.clues[1].question} Answer: ${res.data.clues[1].answer}
    //      Clue 3: ${res.data.clues[2].question} Answer: ${res.data.clues[2].answer}
    //      Clue 4: ${res.data.clues[3].question} Answer: ${res.data.clues[3].answer}
    //      Clue 5: ${res.data.clues[4].question} Answer: ${res.data.clues[4].answer}
    //      `)
    //     let firstCategory = line.title;
    //     return firstCategory;
    // }

   
  
}

// fillTable(line.data) {

// }

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



/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

// async function fillTable(fill) {
//     const res2 = await axios.get(`http://jservice.io/api/clues`)
//     console.log(res2);
    
    
//     $('#0-0').innerText(fill)
//     $('#0-1').innerText(fill)
//     $('#0-2').innerText(fill)
//     $('#0-3').innerText(fill)
//     $('#0-4').innerText(fill)
    
// }

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
// function shuffle(a) {
//     var j, x, i;
//     for (i = a.length - 1; i > 0; i--) {
//         j = Math.floor(Math.random() * (i + 1));
//         x = a[i];
//         a[i] = a[j];
//         a[j] = x;
//     }
//     return a;
// }

// function insertCategoriesIntoHtml() {
//     let categories = [1888, 2000, 750, 674, 545]
//     categories.forEach(function (id) {
//         console.log(getClues(id))
//     })
// }
