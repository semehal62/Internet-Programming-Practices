function operations(){
    let Number_1 = prompt("Enter the first number: ");
    let Number_2 = prompt("Enter the second number: ");
    
    let sums = document.getElementById("sum").innerHTML = "The sum of " + Number_1 + " and " + Number_2+ " : "+ (Number(Number_1)+Number(Number_2));
    let differ = document.getElementById("differences").innerHTML = "The differences of " + Number_1 + " and " + Number_2+ " : "+ (Number_1-Number_2);
    let product = document.getElementById("product").innerHTML = "The product of " + Number_1 + " and " + Number_2+ " : "+ (Number_1*Number_2);
    if (Number_1 != 0){
        let divison = document.getElementById("division").innerHTML = "The division of " + Number_1 + " by " + Number_2+ " : "+ (Number_1/Number_2);
        console.log("Division:", divison);
    }else if( Number_2 != 0){
        let divison = document.getElementById("division").innerHTML = "The division of " + Number_2 + " by " + Number_1+ " : "+ (Number_2/Number_1);
        console.log("Division:", divison);
    }

    console.log("sum:", sums);
    console.log("Differnces:", differ);
    console.log("Product:", product);
    

}
document.getElementById("btn").addEventListener("click",function(){operations()});