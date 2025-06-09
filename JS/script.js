const answer = document.getElementById("answer");

function calculate(event) {
    event.preventDefault();
    const price = Number(document.getElementById("price").value);
    const discount = Number(document.getElementById("discount").value);
    
    
    const calculate = price - (price * discount / 100);
    answer.textContent = `New price is ${calculate.toFixed(2)}.`;
    answer.style.opacity = "1";
    
    setTimeout(() => {
        answer.style.opacity = "0";
    }, 3000)
    
    document.getElementById("price").value = "";
    document.getElementById("discount").value = "";
}