let scoreHomeEl = document.getElementById("home-score")
let scoreGuestEl = document.getElementById("guest-score")
let scoreHome = 0
let scoreGuest = 0
let winnnerEl = document.getElementById("winner-el")
let homeTitleEl = document.getElementById("home-title")
let guestTitleEl = document.getElementById("guest-title")

function add1home() {
    scoreHome += 1
    scoreHomeEl.textContent = scoreHome
}

function add2home() {
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome
}

function add3home() {
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome
}

function add1guest() {
    scoreGuest += 1
    scoreGuestEl.textContent = scoreGuest
}

function add2guest() {
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest
}

function add3guest() {
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest
}

function resetGame() {
    scoreGuest = 0
    scoreHome = 0
    scoreGuestEl.textContent = scoreGuest
    scoreHomeEl.textContent = scoreHome
    winnnerEl.textContent = "Start a new game!"
    homeTitleEl.style.color = "#ffffff"
    guestTitleEl.style.color = "#ffffff"
}

function checkScore() {
    if (scoreHome > scoreGuest)
    {
        winnnerEl.textContent = "Home team is winning!"
        homeTitleEl.style.color = "#16b570"
        guestTitleEl.style.color = "#ffffff"
    }
    else if (scoreGuest > scoreHome)
    {
        winnnerEl.textContent = "Guest team is winning!"
        guestTitleEl.style.color = "#16b570"
        homeTitleEl.style.color = "#ffffff"
    }
    else
    {
        winnnerEl.textContent = "Score is draw right now!"
        homeTitleEl.style.color = "#ffffff"
        guestTitleEl.style.color = "#ffffff"
    }
}