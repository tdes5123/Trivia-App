var jokes = [
    {
        riddle: 'What kind of band never plays music?',
        answer: 'A rubber band.'
    },
    {
        riddle: 'I can be cracked, I can be made. I can be told, I can be played. What am I?',
        answer: 'A joke.'
    },
    {
        riddle: 'The more you take, the more you leave behind. What are they?',
        answer: 'Footsteps'
    },
    {
        riddle: 'When is a door no longer a door?',
        answer: "When it's ajar."
    },
    {
        riddle: 'What can you catch but never throw?',
        answer: 'A cold.'
    }
],
    ansTimer = '';

function hideAnswer(editBtn, toggAns, idx) {
    editBtn.innerHTML = '<i class="far fa-angry"></i>' + "Show Answer";
    editBtn.classList.remove("btn-hide");
    editBtn.classList.add("btn-show");
    editBtn.value = 0;

    toggAns.hidden = true;
    toggAns.value = 0;

    clearTimeout(ansTimer);
}

function showAnswer(editBtn, toggAns, idx) {
    console.log(idx);
    var icon = document.getElementById('btnIcon' + idx);

    editBtn.innerHTML = '<i class="far fa-grin"></i>' + "Hide Answer";
    editBtn.classList.remove("btn-show");
    editBtn.classList.add("btn-hide");
    editBtn.value = 1;

    toggAns.hidden = false;
    toggAns.value = 1;

    ansTimer = setTimeout(() => {
        console.log('THE TIMER');
        hideAnswer(editBtn, toggAns, idx);
    }, 5000);
}

function addButtonListeners() {
    jokes.forEach(function (joke, idx) {
        document.getElementById('jokeBtn' + idx).addEventListener("click", function () {
            var editButton = document.getElementById('jokeBtn' + idx),
                toggleAnswer = document.getElementById('jokeAns' + idx);

            if (editButton.value == 0 && toggleAnswer.value == 0)
                showAnswer(editButton, toggleAnswer, idx);
            else
                hideAnswer(editButton, toggleAnswer, idx);
        });
    });
}

function addButton(jokeIdx) {
    var btnElmAdd = document.createElement("div"),
        btnAdd = document.createElement("button"),
        node = document.createTextNode('Show Answer'),
        element = document.getElementById('joke' + jokeIdx),
        icon = document.createElement("i");

    // Create Icon
    icon.classList.add("far");
    icon.classList.add("fa-angry");
    icon.setAttribute('id', 'btnIcon' + jokeIdx);


    // Create button
    btnAdd.appendChild(icon);
    btnAdd.appendChild(node);
    btnAdd.classList.add("btn-show");
    btnAdd.classList.add("btn-div");
    btnAdd.setAttribute('id', 'jokeBtn' + jokeIdx);
    btnAdd.value = 0;

    // Add button to div 
    btnElmAdd.appendChild(btnAdd);

    // Add div to individual joke
    element.appendChild(btnElmAdd);
}

function addAnswer(answer, jokeIdx) {
    var ansAdd = document.createElement("div"),
        node = document.createTextNode(answer),
        element = document.getElementById('joke' + jokeIdx);


    // Create div with answer
    ansAdd.appendChild(node);
    ansAdd.classList.add("ans-text");
    ansAdd.setAttribute('id', 'jokeAns' + jokeIdx);
    ansAdd.value = 0;
    ansAdd.hidden = true;

    // Add div to individual joke
    element.appendChild(ansAdd);

}

function loopJokes() {
    var divAdd = '',
        node = '',
        element = '';

    jokes.forEach((joke, idx) => {
        //console.log('joke', joke);

        divAdd = document.createElement("div");
        node = document.createTextNode(joke.riddle);
        divBackground = document.createElement("div");
        divBackground.classList.add("joke-background");
        divAdd.classList.add("joke-elm");
        divAdd.classList.add("joke-text");

        divAdd.appendChild(divBackground);
        divAdd.appendChild(node);
        divAdd.setAttribute('id', 'joke' + idx)

        element = document.getElementById("jokesBox");
        element.appendChild(divAdd);

        addButton(idx);
        addAnswer(joke.answer, idx);
    });

    addButtonListeners();
}

loopJokes();