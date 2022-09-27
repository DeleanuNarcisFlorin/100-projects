const textareaEl = document.getElementById("textarea")
const totalCounterEl = document.getElementById("total-counter")
const remainingCounterEl = document.getElementById("remaining-counter")

textareaEl.addEventListener("keyup", ()=>{
    updateConter()
});

updateConter()

function updateConter(){
   totalCounterEl.innerText = textareaEl.value.length;
   remainingCounterEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}