const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");
const stepsEl = document.querySelectorAll(".step");
const progressEl = document.querySelector(".progress-bar-front");

let curentChecked = 1;



nextEl.addEventListener("click",()=>{
    curentChecked++;
    if(curentChecked > stepsEl.length){
        curentChecked = stepsEl.length;
    }
    updateStepProgress()
});
prevEl.addEventListener("click",()=>{
    curentChecked--;
    if(curentChecked < 1 ){
        curentChecked = 1;
    }
    updateStepProgress()
});

function updateStepProgress(){
    stepsEl.forEach((stepEl, idx) =>{
        if(idx < curentChecked){
            stepEl.classList.add("checked");
            stepEl.innerHTML = ` <i class="fa-solid fa-check"></i> <small>${idx === 0 ? "Start" : idx === stepsEl.length - 1 ? "Final" : "Step " + idx}</small>`;
        }else{
            stepEl.classList.remove("checked")
            stepEl.innerHTML = `<i class="fas fa-times"></i>`
        }
    });
    const checkedNumber = document.querySelectorAll(".checked")

    progressEl.style.width = ((checkedNumber.length - 1) / (stepsEl.length -1)) * 100 + "%";

    if(curentChecked === 1){
        prevEl.disabled = true;
    }else if(curentChecked === stepsEl.length){
        nextEl.disabled = true;
    }else{
        prevEl.disabled = false;
        nextEl.disabled = false;
    }
}