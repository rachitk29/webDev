let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;


    let delBtn = document.createElement("button");
    delBtn.innerText = "deleted";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);

    ul.appendChild(item);
    // console.log(inp.value);
    inp.value = "";
})


// this method is use event bubbling

ul.addEventListener("click", function(event){
    // console.log(event.target.nodeName);
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }

})


/* 

// this method only for existing buttons

// Note : this method called event delegation
// solution : Event Bubbling 

let delBtns = document.querySelectorAll(".delete");
for(delBtn of delBtns) {
    delBtn.addEventListener("click", function(){
        console.log("element deleted");
        let par = this.parentElement;
        console.log(par);
        par.remove();
    });
}
 */