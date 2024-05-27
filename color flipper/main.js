const hex = ["#FF0000", "#00FF00","#FFFF00","#0000FF","#008080","#808000"]

const btn = document.querySelector(".btn");
const hexCode = document.querySelector("#hexCode");

const randomNumber = () =>{
    return Math.floor(Math.random()  * hexCode.length);
};

btn.addEventListener("click", ()=>{
    const num = randomNumber();
        document.body.style.backgroundColor = hexCode[num];
    
});