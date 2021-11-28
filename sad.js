// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// https://webdesign.tutsplus.com/tutorials/animate-on-scroll-with-javascript--cms-36671

// https://www.digitalocean.com/community/tutorials/implementing-a-scroll-based-animation-with-javascript

const items = document.querySelectorAll(".item")



observer = new IntersectionObserver((entries) => {

    console.log(entries)

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0.30) {
            entry.target.classList.add("scrolled")
        } else {
            entry.target.classList.remove("scrolled")
        }
    })


}, {threshold: 0.30})

items.forEach(item => {
    observer.observe(item)
})
