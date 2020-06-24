async function getData(nbr) {
    nbr = nbr.toString()
    let url = `http://localhost:3000/digitPi/${nbr}`;
    
    let response = await fetch(url);
    
    let data = await response.json();
    
    if (data.result !== null) {
        document.querySelector("#result").innerHTML = `<h2>Your number was found at the</h2><h1><strong>${data.result}</strong>th</h1><h2>position of the 1 000 000 decimals of PI !</h2>`;
    }

    else {
        document.querySelector("#result").innerHTML = "<h2>Your number is not in the 1 000 000 first decimals of PI...</h2>"
    }
    
    
}

document.querySelector("#peek").addEventListener("input", function() {
    let search = document.querySelector("#peek").value;
    
    getData(search)

});