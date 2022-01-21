function compute() //Called when the Compute Interest button is clicked
{
    var principal = document.getElementById("principal").value;
    var years = document.getElementById("years").value;
    var rate = document.getElementById("rate").value; //Values of inputs obtained
    if(principal <= 0) //Checking whether principal entered is positive. If not, alert user
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }    
    var interest = principal * years * rate / 100; //Calculation of interest
    var endyear = new Date().getFullYear() + Number(years); //Obtain the year at which the interest is obtained. Number() is used to ensure years is treated as a numeric value and not a string
    document.getElementById("result").innerHTML = "If you deposit \<mark\>"+principal+"\<\/mark\>,\<br\>at an interest rate of \<mark\>"+rate+"%\<\/mark\>.\<br\>You will receive an amount of \<mark\>"+interest+"\<\/mark\>,\<br\>in the year \<mark\>"+endyear+"\<\/mark\>\<br\>";
    //Change HTML content inside the second span tag to display result. <mark> tag is used to highlight the text.
}

function updateRate()
{
    var rateval = document.getElementById("rate").value; //Obtain value as the rate slider is tweaked
    document.getElementById("rate_val").innerText =  rateval+"%"; //Print the current rate next to slider
}        