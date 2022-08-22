let input = document.querySelector('input');

//This Works
input.addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        console.log(e.target.value);
    }
})