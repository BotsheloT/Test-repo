/*The aim of this code is to get the value of the key entered by the
user and print evidence of the key entered*/

let input = document.querySelector('input');

//Begin operation
//This Works
input.addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        console.log(e.target.value);        
    }
})
//End operation