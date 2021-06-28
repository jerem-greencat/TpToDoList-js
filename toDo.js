let clear=document.querySelector("#clear");
let add=document.querySelector("#add");



let div = document.querySelector("#list");

let wanaDo=document.querySelector("#wanaDo");
let input= document.querySelector("input");
let label=document.querySelector("label");
input.focus();

input.addEventListener("keyup", function(k){
    let wanaK= wanaDo.value;
    console.log(wanaK);
    if(wanaK != ""){
        add.removeAttribute("disabled");
    }
});

add.addEventListener("click",function(e){
    let newInput= document.createElement("input");
    let newLabel= document.createElement("label");
    newInput.type="checkbox";
    let newDiv=document.createElement("div");
    console.log(e);
    let inputValue=wanaDo.value;
    console.log(inputValue);

    let btn=document.createElement("input");
    btn.type="submit"
    btn.value="Clear the line";


    div.append(newDiv);
    newDiv.append(newLabel);
    newLabel.append(newInput, inputValue,btn);
    wanaDo.value="";
    add.setAttribute("disabled",true);
    input.focus();

    btn.addEventListener("click",function(b){
        newDiv.remove();
        input.focus();
    });
    

    newInput.addEventListener("change", function(c){
        console.log("coucou");
        input.focus();
        newLabel.style.textDecoration= "line-through";
        if(newInput.checked === false){
            newLabel.style.textDecoration="";
            }
    clear.addEventListener("click", function(d){
        input.focus();
        if (newInput.checked===true){
            newInput.remove();
            newLabel.remove();    
        }
    });        

    });

});

input.addEventListener("keyup", function(ent){
    if( ent.key==="Enter" && !add.getAttribute("disabled")){
        add.click();
    }
    input.focus();
});


