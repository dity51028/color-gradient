const gradientBox = document.querySelector(".gradient-box"),
textBox = document.querySelector("textarea"),
copyBtn = document.querySelector(".copy"),
refreshBtn = document.querySelector(".refresh");
selectMenu = document.querySelector(".selectbox select" );
const colorInputs = document.querySelectorAll(".colors input");



    const getRandomColor = () =>{
        const randomhex = Math.floor(Math.random()* 0xffffff).toString(16);
        return `#${randomhex}`;
    }

    const copyCode = () =>{
        navigator.clipboard.writeText(textBox.value);
        copyBtn.innerText = "Code Copied";
        setTimeout(() => {
            copyBtn.innerText = "Copy Code";
        }, 1600);

}
    const generateGradient = (isRandom) =>{
        if(isRandom) {
           /* console.log(getRandomColor());*/
           colorInputs[0].value = getRandomColor();
           colorInputs[1].value = getRandomColor();
           
                }
       const gradient = `linear-gradient(${selectMenu.value},${colorInputs[0].value},${colorInputs[1].value})`;
        gradientBox.style.background = gradient;
        textBox.value = `background : ${gradient}`;
        console.log(gradient);
        }


colorInputs.forEach(input => {
   /* input.addEventListener("input",generateGradient);*/
    /*random colors are generated when othe elements values are updated"
    */
    input.addEventListener("input",()=>generateGradient(false));
   
})
/*selectMenu.addEventListener("change",generateGradient);*/
selectMenu.addEventListener("change",()=>generateGradient(false));
refreshBtn.addEventListener("click",()=>generateGradient(true));
copyBtn.addEventListener("click",copyCode);
