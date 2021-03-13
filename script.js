function compute()
{
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    result = document.getElementById("result");
    result.innerHTML = "If you deposit " + principal + "," +
"at an interest rate of " + rate +
"You will receive an amount of " + (principal * years * rate / 100) +"," +
"in the year " + (2021+years);
    
}
        
