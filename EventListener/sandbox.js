let input = document.querySelector('input');

input.addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        console.log(e.target.value);
    }
})