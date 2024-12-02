// let url = "https://catfact.ninja/fact";
// let btn = document.querySelector("#catfbutton");

// btn.addEventListener("click", async () => {
//     let p = document.querySelector("#output");
//     p.innerText = "Loading...";  // Show loading text

//     let fact = await getFacts();
//     console.log(fact);

//     p.innerText = fact;  // Update with fact or error message
// });

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch (error) {
//         console.log("Error - ", error);
//         return "NO FACT FOUND";  // Show error message on failure
//     }
// };


let url = "https://catfact.ninja/fact";
let btn = document.querySelector("#catfbutton");
let p = document.querySelector("#output");

btn.addEventListener("click", async () => {
    p.innerText = "Loading...";  // Loading message

    let fact = await getFacts();
    if (fact) {
        p.innerText = fact;
    } else {
        p.innerText = "No cat fact found. Please try again.";
    }
});

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (error) {
        console.error("Error fetching cat fact: ", error);
        return null;
    }
}


// for random testimonialText
const testimonialTexts = [
    "Adopting Jerry has been the best decision for our family!",
    "Tom is the perfect companion. We love him!",
    "Leo has brought so much joy to our home.",
    "Molly is so sweet. We are so happy with her!"
];

async function fetchTestimonials() {
    let res = await fetch('https://randomuser.me/api/?results=4');
    let data = await res.json();
    let users = data.results;

    let testimonialDiv = document.querySelector(".testimonial-item");
    testimonialDiv.innerHTML = '';  // Clear any existing content

    users.forEach((user, index) => {
        let testimonialHTML = `
            <div class="testimonial-item">
                <img src="${user.picture.medium}" alt="${user.name.first}" class="testimonial-img">
                <p><strong>"${testimonialTexts[index]}"</strong> - ${user.name.first} ${user.name.last}</p>
            </div>`;
        testimonialDiv.innerHTML += testimonialHTML;
    });
}

fetchTestimonials();


// read more section here

// function toogleText() {

//     let moreText=document.getElementById('moreText');
//     let moreBtn=document.getElementById('moreBtn');

//     if (moreText.style.display === 'none') {
//         moreText.style.display='inine';
//         moreBtn.innerHTML='Read less';
//     }else{
//         moreText.style.display='none';
//         moreBtn.innerHTML='Read more';

//     }
    
// }

// moreBtn.addEventListener("click",toogleText)

function toggleText(button) {
    var moreText = button.previousElementSibling.querySelector(".moreText");
  
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      button.innerHTML = "Read less";
    } else {
      moreText.style.display = "none";
      button.innerHTML = "Read more";
    }
  }
  