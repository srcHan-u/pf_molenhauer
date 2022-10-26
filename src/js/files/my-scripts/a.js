const listOfCases = document.querySelector(".list-cases");
const cards = Array.from(document.querySelectorAll(".card-case__body"));
const images = Array.from(document.querySelectorAll(".card-case__image"));


listOfCases.addEventListener("click", (e) => {
   cards.forEach(element => {
      if (e.target === element) {
         const image = element.parentElement.querySelector(".card-case__image");
         if (image !== null) {
            if(image.style.display === 'block'){
               image.style.display = 'none'
               element.parentElement.classList.remove("_isActive")
            }else{
               image.style.display = 'block'
               element.parentElement.classList.add("_isActive")
            }  
         }else{
            console.log("dont't have image")
         }
      }else{
         const image = element.parentElement.querySelector(".card-case__image");
         if(image !== null){
            image.style.display = 'none';
            element.parentElement.classList.remove("_isActive")
         }else{
            console.log("sorry")
         }
      }
   })
})


