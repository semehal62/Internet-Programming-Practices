function multi(){
    let Number = prompt("Enter a number: ");
    document.getElementById("r1").innerHTML = Number +" * "+"1 ="+Number *1;
    document.getElementById("r2").innerHTML = Number +" * "+"2 ="+Number *2;
    document.getElementById("r3").innerHTML = Number +" * "+"3 ="+Number *3;
    document.getElementById("r4").innerHTML = Number +" * "+"4 ="+Number *4;
    document.getElementById("r5").innerHTML = Number +" * "+"5 ="+Number *5;
    document.getElementById("r6").innerHTML = Number +" * "+"6 ="+Number *6;
    document.getElementById("r7").innerHTML = Number +" * "+"7 ="+Number *7;
    document.getElementById("r8").innerHTML = Number +" * "+"8 ="+Number *8;
    document.getElementById("r9").innerHTML = Number +" * "+"9 ="+Number *9;
    

}
function multipliation_for(){
    let Number = prompt("Enter a number: ");
    for(i= 1; i <10; i++){
        let ids = "r"+i;
        document.getElementById(ids).innerHTML = Number +" * "+i+" ="+Number *i;
    }
}
function multipliation_while(){
    let Number = prompt("Enter a number: ");
    let i = 1;
    while((Number * i) < 50 && i < 10){
        let ids = "r"+i;
        document.getElementById(ids).innerHTML = Number + " * " + i + " =" + Number * i;
        i++;
    }
}

document.getElementById("click").addEventListener("click",function(){multipliation_while()})