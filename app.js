let tipAmount=0;
let numOfPeople=0;
let billAmount=0;

let billPerPerson=0;
let tipPerPerson=0;
let totalPerPerson=0;



// selects tip amount from regular buttons
$( ".tip_buttom_not_active" ).click(function() {
  $( ".tip_buttom_active" ).removeClass("tip_buttom_active").addClass("tip_buttom_not_active");
  $(this).addClass("tip_buttom_active");
  tipAmount=  $( this ).text();
  tipAmount=(tipAmount.substring(0, tipAmount.length - 1)*0.01);
  console.log("tip: " + tipAmount);
  calculate(billAmount, numOfPeople, tipAmount);
});

// selects tip amount from regular buttons
$( "tip_buttom_active" ).click(function() {
  $( this ).animate({
                          'borderWidth': '4px',
                      },
                      200);
});

// selects the bill amount
$( "#billAmount" ).on('input', function() {
billAmount= $( this).val();
console.log("bill " + billAmount);
calculate(billAmount, numOfPeople, tipAmount);
});

// selects the people amount
$( "#numOfPeople" ).on('input', function() {
numOfPeople= $( this).val();
console.log("number of people " + numOfPeople);
calculate(billAmount, numOfPeople, tipAmount);
});


function calculate(billAmount, numOfPeople, tipAmount){
  billPerPerson=billAmount/numOfPeople;
  tipPerPerson=billPerPerson*tipAmount;
  totalPerPerson=billPerPerson+tipPerPerson;

  console.log("bill:" + billPerPerson + " tip: " + tipPerPerson  + " total: " + totalPerPerson)

  if(Number.isFinite(tipPerPerson) &&  Number.isFinite(totalPerPerson)){
    $("#tipPerPerson").text(tipPerPerson.toFixed(2) + "$");
    $("#totalPerPerson").text(totalPerPerson.toFixed(2) + "$");
  }


}
