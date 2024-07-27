 const max = 10;
 const min = 1;
 let answer = Math.floor(Math.random()*(max-min+1))+min;
 let attempts = 0;
 let guess;
 let runnig = true;

 while(runnig){

    guess =  window.prompt("Guess Any number from 1 to 10");

    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("please Enter a Valid Number")
    }
    else if(guess < min || guess > max){
        window.alert("please Enter a Valid Number")
    }
    else{
        attempts++;
        if(guess < answer ){
            window.alert("TOO LOW Try agian!")
        }
         else if(guess > answer ){
            window.alert("TOO High Try agian!")
        }
        else{
            window.alert(`CORRECT the answer is ${answer} it tooks you ${attempts}`)
            runnig =false;
        }
    }

    
 }