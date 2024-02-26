let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    // let inp = document.querySelector("input");
    // console.log(inp); 
    // console.dir(inp);


/* another way to submitting info

    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");

    console.log(user.value);
    console.log(pass.value);
     */


    console.dir(form);
    let user = this.elements[0]; // form.elements[0];
    let pass = this.elements[1];

    console.log(user.value);
    console.log(pass.value);

})