document.getElementById("name-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let firstName = document.getElementById("first-name").value.trim();
    let middleInitial = document.getElementById("middle-initial").value.trim();
    let lastName = document.getElementById("last-name").value.trim();

 
    if (!firstName || !lastName) {
        alert("First Name and Last Name are required!");
        return;
    }


    let greetingMessage = `Welcome to Jumpy Tarantula, ${firstName} ${middleInitial ? middleInitial + "." : ""} ${lastName}!`;
    document.getElementById("greeting").innerText = greetingMessage;


function generateFizzBuzz() {
    const fizzBuzzList = document.getElementById("fizz-buzz-list");
    fizzBuzzList.innerHTML = ""; 

  
    for (let i = 1; i <= 125; i++) {
        let listItem = document.createElement("li");
        let result = "Jumpy Tarantulas";

        if (result === "") result = i;

       
        listItem.innerHTML = `<span class="fizzbuzz-number">${i}.</span>${result}`;
        fizzBuzzList.appendChild(listItem);
    }
}



    generateFizzBuzz();
});

