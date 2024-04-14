const userInput = document.querySelector(".text p");

const numbers = document.querySelectorAll(".numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
        if (userInput.innerText === "NaN") {
            userInput.innerText = "";
        }
        if (userInput.innerText === "0") {
            userInput.innerText = "";
        }
        userInput.innerText += e.target.innerHTML.trim();
    });
});

const keyOperations = document.querySelectorAll(".keyOperations").forEach(function (item) {
    item.addEventListener("click", function (e) {
        console.log(e.target.innerHTML);
        let lastValue = userInput.innerText.substring(userInput.innerText.length - 1);
        if (!isNaN(lastValue) && e.target.innerHTML === "=") {
            userInput.innerText = eval(userInput.innerText);
        } else if (e.target.innerHTML === "AC") {
            userInput.innerText = 0;
        } else if (e.target.innerHTML === "DEL") {
            userInput.innerText = userInput.innerText.substring(0, userInput.innerText.length - 1);
            if (userInput.innerText.length === 0) {
                userInput.innerText = 0;
            }
        } else {
            if (!isNaN(lastValue)) {
                userInput.innerText += e.target.innerHTML;
            }
        }
    });
});
