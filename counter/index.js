
let count = 0;
let countEl = document.getElementById("counter");

function increment() {
    count += 1;
    countEl.innerHTML = `${count}`
};

let saveEl = document.getElementById("count-history"); 

function logReset() {
    saveEl.innerHTML += `<tr><td>${count} clicks</td></tr>`
    count = 0
    countEl.innerHTML = `${count}`
};

function resetHistory() {
    saveEl.innerHTML = ``
}