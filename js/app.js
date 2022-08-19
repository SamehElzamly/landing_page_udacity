/**
 * Define Global Variables
 * 
 */
let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");
let sections = document.querySelectorAll("section");
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
let nav0 = document.querySelector(".navbar__menu").classList.add("navstyles");
let navEle = document.querySelector("#navbar__list")
navEle.classList.add("nav_ele_styles")
let links = document.querySelectorAll(" ul a")
for (let i = 0; i < sections.length; i++) {
    let li = document.createElement("li");
    let link = document.createElement("a");
    link.setAttribute("href", `#section${i+1}`);
    link.innerText = `section${i+1}`;
    navEle.appendChild(li);
    li.appendChild(link)
    link.addEventListener('click', (e) => {
        e.preventDefault();
        sections[i].scrollIntoView({
            behavior: "smooth"
        })
    })
}
// Add class 'active' to section when near top of viewport
// Set sections as active
window.onscroll = () => {
    //avtive sections and link
    sections.forEach(section => {
        const sectionTop0 = section.getBoundingClientRect().top;
        const activeLink0 = document.querySelector(`a[href="#${section.id}"]`);
        if (sectionTop0 > 200 - section.offsetHeight && sectionTop0 < 200) {
            section.classList.add("your_active_class");
            activeLink0.classList.add("active");
        } else {
            section.classList.remove("your_active_class");
            activeLink0.classList.remove("active");
        }
    }, )
}