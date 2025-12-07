
function myfunc(){
    let name = prompt("what is you name?","Samrawit Abebe")
    if (name != null){
        document.getElementById("now").innerHTML= "Hello "+ name + "! How are you doing today?";
        let answer = window.confirm("Do you like Java Script?");
        console.log(answer, name);
    }
}
let button = document.getElementById("btn");
button.addEventListener("click",function(){myfunc()});

