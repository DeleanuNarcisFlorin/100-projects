const testimonials = [
    {
        name: "Stevy F",
        photoUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text:"I STRONGLY recommend Apple to EVERYONE interested in running a successful online business! If you want real marketing that works and effective implementation - Apple's got you covered."
    },
    {
        name: "Jack F.",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text:"Fantastic, I'm totally blown away by Testimonial Generator."
    },
    {
        name: "Ollie J.",
        photoUrl: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=700&q=60",
        text:"It's just amazing. The best on the net!"
    },
]

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const userNameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial()

function updateTestimonial(){
    const {name, photoUrl, text} = testimonials[idx]
    imgEl.src = photoUrl;
    textEl.innerText = text;
    userNameEl.innerText = name;
    idx++;
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial()
    }, 10000)
}