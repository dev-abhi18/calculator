const mainDisplay = document.getElementById('display-2');
const secDisplay = document.getElementById('display-1')
const tempDisplay = document.getElementById('temp-result')
const buttons = document.querySelectorAll('.button');
let mainValue = '';
let secValue = '';


for(var i = 0 ; i< buttons.length ; i++){
    buttons[i].addEventListener('click' , function(){
        var value = this.getAttribute('data-value');
        console.log(value);
        if(value=='X'){
            value = '*';
            mainValue += value;
            secValue = mainValue
            mainDisplay.innerText = mainValue;
            console.log(value); 
        }
       
        else if(value=='AC'){
            mainDisplay.innerText = '';
            secDisplay.innerText = '';
            tempDisplay.innerText = '';
            mainValue = '';
            secValue = '';
        }
        else if(value=='='){
            mainDisplay.innerText = eval(secValue);
        }
        else{
            secValue += value;
            mainValue = secValue;
            secDisplay.innerText = secValue

            mainDisplay.innerText = value;

            tempDisplay.innerText = eval(secValue);
       
        }

    })
}


