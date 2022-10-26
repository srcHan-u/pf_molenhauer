const a = document.querySelector(".controls-slider-benefits__tabs");
const buttonsBox = document.querySelector(".controls-slider-benefits__buttons")
const button = {
   next: document.querySelector(".controls-slider-benefits__buttons > .controls-slider-benefits__button-next"),
   prev: document.querySelector(".controls-slider-benefits__buttons > .controls-slider-benefits__button-prev"),
}
const slides = Array.from(document.querySelectorAll(".slide-slider-benefits"));

buttonsBox.addEventListener("click", (e) => {
   let index = Array.from(a.children).findIndex(e => e.hasAttribute("data-active"))
   
   if (e.target === button.next) {
      if (index !== (a.children.length - 1)) {
         a.children[index].removeAttribute("data-active")
         a.children[index + 1].setAttribute("data-active", "true")
         slides[index].removeAttribute("data-active")
         slides[index + 1].setAttribute("data-active", "true")
      }
   }else if(e.target === button.prev){
      if (index !== 0) {
         a.children[index].removeAttribute("data-active")
         slides[index].removeAttribute("data-active")
         a.children[index - 1].setAttribute("data-active", "true")
         slides[index - 1].setAttribute("data-active", "true")
      }
   }
})

