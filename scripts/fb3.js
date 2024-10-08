document.getElementById("name-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let firstName = document.getElementById("first-name").value.trim();
    let middleInitial = document.getElementById("middle-initial").value.trim();
    let lastName = document.getElementById("last-name").value.trim();

    if (!firstName || !lastName) {
        alert("First Name and Last Name are required!");
        return;
    }

    let greetingMessage = `Hello, ${firstName} ${middleInitial ? middleInitial + "." : ""} ${lastName}!`;
    document.getElementById("greeting").innerText = greetingMessage;

    let countTo = prompt(`${firstName}, how high do you want to count?`);

    countTo = parseInt(countTo);
    if (isNaN(countTo) || countTo <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    function generateList(count) {
        const list = document.getElementById("fizz-buzz-list");
        list.innerHTML = ""; // Clear the previous list

        const rules = [
            { divisor: 3, output: "Venomous" },
            { divisor: 5, output: "Arachnids" },
            { divisor: 7, output: "BANG!" }
        ];

        const specialCombinations = [
            { divisors: [3, 5, 7], output: "FizzBuzz 3" },
            { divisors: [3, 5], output: "FizzBuzz 3" },
            { divisors: [3, 7], output: "FizzBuzz 3" },
            { divisors: [5, 7], output: "FizzBuzz 3" }
        ];

        function checkSpecialCombinations(num) {
            for (let combo of specialCombinations) {
                if (combo.divisors.every((divisor) => num % divisor === 0)) {
                    return combo.output;
                }
            }
            return null;
        }

        for (let i = 1; i <= count; i++) {
            let listItem = document.createElement("li");
            let result = checkSpecialCombinations(i);

            if (!result) {
                result = rules.reduce((acc, rule) => {
                    if (i % rule.divisor === 0) {
                        return acc + (acc ? " " : "") + rule.output;
                    }
                    return acc;
                }, "");
            }

            result = result || "Jumpy Tarantula".toString(); 

            listItem.innerHTML = `<span class="number">${i}.</span> ${result}`;
            list.appendChild(listItem);
        }
    }

    generateList(countTo);
});
