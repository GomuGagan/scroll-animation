const boxes= document.querySelectorAll(".content");
const container= document.querySelector(".container");


const checkBoxes= ()=>{
    const triggerPoint= window.innerHeight / 5 * 4;

    boxes.forEach((box) =>{
        const boxTop = box.getBoundingClientRect().top

        if ( boxTop < triggerPoint){
            box.classList.add("show")
        }else{
            box.classList.remove("show")
        }
        
    })
};
checkBoxes();

window.addEventListener("scroll", checkBoxes)


