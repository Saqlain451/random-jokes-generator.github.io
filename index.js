let button = document.querySelector(".btn");
let jokes = document.getElementById("jokes");

console.log(jokes)
let jokesGenerate=()=>{
    console.log("next joke is ready");

    const setHeader = {
        headers :{
            Accept:'application/json',
        }
    }



    fetch("https://icanhazdadjoke.com/",setHeader)
    .then((res)=>res.json()
    ).then((data)=> jokes.innerHTML=data.joke
    ).then((error)=>console.log(error)
    )
}

button.addEventListener("click",jokesGenerate)
jokesGenerate();