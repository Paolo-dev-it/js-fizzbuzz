
for (let x = 1; x <= 100; x++) {

    let ul = document.getElementById("list");
    let li = document.createElement('li');

    if (x % 3 == 0 && x % 5 == 0){ // SE IL NUMERO E MULTIPLO DI ENTRAMBI
        // console.log(`${i} FIZZBUZZ`);
        li.innerText += "FIZZBUZZ";
        li.style.backgroundColor = "red";
        
    }else if(x % 3 == 0){ // SE IL NUMERO E MULTIPLO DI 3
        // console.log(`${i} FIZZ`);
        li.innerText += "FIZZ";
        li.style.backgroundColor = "Green";
    } else if (x % 5 == 0){ // SE IL NUMERO E MULTIPLO DI 5
        // console.log(`${i} BUZZ`);
        li.innerText += "BUZZ";
        li.style.backgroundColor = "yellow";
    }else{ 
        // console.log(`${i}`);
        li.innerText += x;
        li.style.backgroundColor = "lightblue";
    }
     ul.append(li);

}
