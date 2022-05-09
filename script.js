var initialPriceInput = document.querySelector('#initial-price-input');
var stockQuantity = document.querySelector('#quantity-input');
var currentPriceInput = document.querySelector('#current-price-input');
var checkButton = document.querySelector('#check-button');
var output = document.querySelector('#output-area');


function getAllValues() {
    var initialPrice = Number(initialPriceInput.value);
    var quantityOfStocks = Number(stockQuantity.value);
    var currentPrice = Number(currentPriceInput.value);
    return {initialPrice, quantityOfStocks, currentPrice};
}


function calculateFunction() {
    var allValues = getAllValues();
    var initialInvestmentAmount = (allValues.initialPrice*allValues.quantityOfStocks);
    var currentInvestmentAmount = (allValues.currentPrice*allValues.quantityOfStocks)


    if (currentInvestmentAmount > initialInvestmentAmount) {
        var profit = (currentInvestmentAmount - initialInvestmentAmount)
        var profitPercentage = ((profit/initialInvestmentAmount)*100)
        output.innerText =  "your profit is " + profit + " and your profit percentage is " + profitPercentage+"%";
    }

    if (initialInvestmentAmount > currentInvestmentAmount) {
        var loss = (initialInvestmentAmount - currentInvestmentAmount)
        var lossPercentage = ((loss/initialInvestmentAmount)*100)
        output.innerText = "your loss is " + loss + " and your loss percentage is " + lossPercentage+"%";
    }

    if (initialInvestmentAmount === currentInvestmentAmount) {
        output.innerText = "You have made neither loss nor profit. You are at a break-even point now."
    }
}






checkButton.addEventListener("click", calculateFunction);