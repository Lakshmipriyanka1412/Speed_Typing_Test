let subBtn = document.getElementById("submitBtn");
let reBtn = document.getElementById("resetBtn");
let timer = document.getElementById("timer");
let qupa = document.getElementById("quoteDisplay");
let midCon = document.getElementById("midCon");
let quoteIn = document.getElementById("quoteInput");
let result = document.getElementById("result");
let spinner = document.getElementById("spinner");
let interval;
let count = 0

function startTimer() {
    count = 0
    if (interval) clearInterval(interval);
    interval = setInterval(function() {
        count = count + 1;
        timer.textContent = `${count} seconds`;
    }, 1000);
}

function reDisplay() {
    spinner.classList.remove("d-none")
    startTimer();
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET"
    }

    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsondata) {
            qupa.textContent = jsondata.content;
            spinner.classList.add("d-none");
            midCon.classList.remove("d-none");
        })
}

reBtn.addEventListener("click", reDisplay);
subBtn.addEventListener("click", function() {
    if (quoteIn.value === qupa.textContent) {
        clearInterval(interval);
        result.textContent = `you typed in ${count} seconds`;
    } else {
        result.textContent = "You typed incorrect sentence";
    }
});
