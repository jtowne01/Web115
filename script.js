document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let firstName = document.getElementById("first_name").value;
    let middleInitial = document.getElementById("middle_initial").value;
    let lastName = document.getElementById("last_name").value;

    if (!firstName || !lastName) {
        alert("First Name and Last Name are required!");
        return;
    }

    let greetingMessage = `Hello, ${firstName} ${middleInitial ? middleInitial + "." : ""} ${lastName}!`;
    document.getElementById("userGreeting").innerText = greetingMessage;

    generateFizzBuzz();
});

function generateFizzBuzz() {
    const fizzBuzzList = document.getElementById("fizzBuzzList");
    fizzBuzzList.innerHTML = ""; 

    for (let i = 1; i <= 100; i++) {
        let listItem = document.createElement("li");
        let result = "";

        if (i % 3 === 0) result += "Jumpy";
        if (i % 5 === 0) result += "Tarantula";
        if (result === "") result = i;

        listItem.innerHTML = `<span class="fizzbuzz-number">${i}.</span>${result}`;
        fizzBuzzList.appendChild(listItem);
    }
}