let monthlyIncome = [];
let monthlyOutgoing = [];
// The first function takes the inputs with id income, parse it into numbers with decimals and then push to monthlyIncome variable
function Income() {
    let dataIncome = document.getElementById("income").value;
    let numericalDataIncome = parseFloat(dataIncome);
    
    if(!isNaN(numericalDataIncome)) {
        monthlyIncome.push(numericalDataIncome);     
    }
}
// The Second function takes the inputs with id outgoing, parse it into numbers with decimals and then push to monthlyOutgoing variable
function Outgoings() {
    let dataOutgoing = document.getElementById("outgoing").value;
    let numericalDataOutgoing = parseFloat(dataOutgoing);

    if(!isNaN(numericalDataOutgoing)) {
        monthlyOutgoing.push(numericalDataOutgoing);  
    }
}
// The final function goes through each array and sums each one in two variables for incomes and outgoings, then calculates the result and show to the user the result
function resultBudget() {
    let resultIncome = 0;
    let resultOutgoing = 0;
    for(let i = 0; i < monthlyIncome.length; i++){
        resultIncome = resultIncome + monthlyIncome[i];
    };
    for(let j = 0; j < monthlyOutgoing.length; j++) {
        resultOutgoing = resultOutgoing + monthlyOutgoing[j];
    };
    const resultBudget = resultIncome - resultOutgoing;
    const result = document.getElementById("result");
    result.textContent = "Your budget for this month is: " + resultBudget;
}