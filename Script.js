const ul2 = document.querySelector(".ul2");
const ul3 = document.querySelector(".ul3");
const uls = [ul2, ul3];
const hamBurger = document.querySelector(".hamburger");
const ulsArray = Array.from(uls)

hamBurger.addEventListener("click", ()=>{
    ulsArray.forEach(ul=>{
        if(ul.classList.contains("hide")){
            ul.classList.remove("hide")
            ul.classList.add("unhide")
        }
        else{
            ul.classList.add("hide");
            ul.classList.remove("unhide")
        }
        })
    })
