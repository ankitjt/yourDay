let sectionButton = document.querySelectorAll(".sectionButton"),
    content = document.querySelector(".content"),
    downArrow = document.querySelector(".downArrow")

// sectionButton.onclick = () => {
//     content.classList.toggle("hidden")
//     downArrow.classList.toggle("rotate-180")
// }

for(let thisSection of sectionButton) {
    thisSection.onclick = () => {
        downArrow.classList.toggle("rotate-180")
        var panel = thisSection.nextElementSibling
        if(panel.style.display === 'block') {
            panel.style.display = 'none'
        }
        else {
            panel.style.display = "block"
        }
       
    }
}