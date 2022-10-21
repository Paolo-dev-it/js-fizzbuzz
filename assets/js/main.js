
let container = document.getElementById("container");

let element = document.createElement("div");

element.classList.add('text-red',"fs-4", "p-5", "bg-success");

container.classList.add("bg-red")

container.append(element);


for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0){
        // console.log(`${i} FIZZBUZZ`);
        element.innerHTML += `<p class="bg-danger">${i} FIZZBUZZ</p>`;
        
        
    }else if(i % 3 == 0){
        // console.log(`${i} FIZZ`);
        element.innerHTML += `<p class="bg-success">${i} FIZZ</p>`;

    }else if (i % 5 == 0){
        // console.log(`${i} BUZZ`);
        element.innerHTML += `<p class="bg-warning">${i} BUZZ</p>`;

    }else{
        // console.log(`${i}`);
        element.innerHTML += `<p class="bg-primary">${i}</p>`;
    }
}

