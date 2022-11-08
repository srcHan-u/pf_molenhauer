const tabs = document.querySelector(".controls-slider-benefits__tabs");
const buttonsBox = document.querySelector(".controls-slider-benefits__buttons")
const button = {
   next: document.querySelector(".controls-slider-benefits__buttons > .controls-slider-benefits__button-next"),
   prev: document.querySelector(".controls-slider-benefits__buttons > .controls-slider-benefits__button-prev"),
}
const slides = Array.from(document.querySelectorAll(".slide-slider-benefits"));

buttonsBox.addEventListener("click", (e) => {
   let index = Array.from(tabs.children).findIndex(e => e.hasAttribute("data-active"))
   
   if (e.target === button.next) {
      if (index !== (tabs.children.length - 1)) {
        tabs.children[index].removeAttribute("data-active")
        tabs.children[index + 1].setAttribute("data-active", "true")
         slides[index].removeAttribute("data-active")
         slides[index + 1].setAttribute("data-active", "true")
      }
   }else if(e.target === button.prev){
      if (index !== 0) {
        tabs.children[index].removeAttribute("data-active")
         slides[index].removeAttribute("data-active")
         tabs.children[index - 1].setAttribute("data-active", "true")
         slides[index - 1].setAttribute("data-active", "true")
      }
   }
})

tabs.addEventListener("click", (e) => {
    let index;
    const tabsClidren = Array.from(tabs.children); 
    tabsClidren.forEach(tab => {
        if (e.target === tab) {
            tab.setAttribute("data-active", "true")
            index = tabsClidren.findIndex(e => e === tab);
            slides[index].setAttribute("data-active", "true")
        }else{
            tab.removeAttribute('data-active')
            for (const iterator of slides) {
                if (iterator !== slides[index]) {
                    iterator.removeAttribute("data-active")
                }
            }
        }
    })
})