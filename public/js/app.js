// body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
// ** theme 
let right = document.querySelector(".right")
let square = document.querySelectorAll(".square");
let ellipsis = document.querySelector(".fa-ellipsis");
let theme = document.querySelector(".theme");
let logo = document.querySelector(".logo")


const changeTheme = () => {
    for (let index = 0; index < square.length; index++) {
        let element = square[index];
        element.addEventListener("click", () => {
            let newClass = element.getAttribute("class").slice(7).toString();
            right.removeAttribute("class")
            right.classList.add(newClass);
            right.classList.add("right");
            theme.classList.add("d-none")
            let color =getComputedStyle(element).getPropertyValue("background");
            if (color.length==120) {
                logo.firstElementChild.style.color = `black`;
            }else if (color.length>122) {
                let rgb=color.slice(42,61);
                console.log(rgb.slice(0,rgb.indexOf(")")+1));
                logo.firstElementChild.style.color = `${rgb.slice(0,rgb.indexOf(")")+1)}`;
            }
            else{
                logo.firstElementChild.style.color = `${color.slice(0,15)}`;
            }
        })
    }
}
ellipsis.addEventListener("click", () => {
    theme.classList.remove("d-none")
    changeTheme()
})


// document.addEventListener("click",(e)=>{
//     // console.log(e.target.getAttribute("class"));
//     console.log(getComputedStyle(e.target).getPropertyValue("color"))

// })
