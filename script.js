// All variables
let inputfield = document.querySelector('input');
let text = document.querySelector('.text');
let button = document.querySelector('button');
let restertbtn = document.querySelector('.restert');
let chances = document.querySelector('.Chances');
let chancesnumber = 3;
chances.innerHTML = chancesnumber;

let correct_ans = Math.floor(Math.random() * 10) + 1;


// start game
button.addEventListener('click', () => {
    
    
    let inputnumber = document.querySelector('.userinput').value;
    
    chancesnumber = chancesnumber - 1;
    chances.innerHTML = chancesnumber;

    
    console.log(correct_ans);
    console.log(inputnumber);


    if(chancesnumber == 0){
        inputfield.style.display = "none";
        text.innerHTML = 'Your chances is over!';
        button.style.display = "none";
        restertbtn.style.display = "block";
    }else{
        if(inputnumber > correct_ans){
            text.innerHTML = "The number is smaller";
        }else if(inputnumber < correct_ans){
            text.innerHTML = "The number is bigger";
        }else if(inputnumber == correct_ans){
            text.innerHTML = "wow! you win";
            inputfield.style.display = "none";
            button.style.display = "none";
            restertbtn.style.display = "block";
            restertbtn.innerHTML = "play again";
        }

        
    }

    inputfield.value = "";
});


// chances over
restertbtn.addEventListener('click', (e) => {
    restertbtn.setAttribute('href', 'index.html');
})