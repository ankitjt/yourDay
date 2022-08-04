let sectionButton = document.querySelectorAll(".sectionButton"),
    content = document.querySelector(".content"),
    downArrow = document.querySelector(".downArrow")

// Display reports by name 

for(let thisSection of sectionButton) {
    thisSection.onclick = () => {
        let thisSectionParent = thisSection.parentElement
        let sectionButtonWrapper = thisSection.childNodes[1];
        let downArrowChild = thisSection.childNodes[1].childNodes[3]
        let panel = thisSection.nextElementSibling

        downArrowChild.classList.toggle("rotate-180")
        if(panel.style.display === 'block') {
            panel.style.display = 'none'
            sectionButtonWrapper.classList.remove("border-b-2")
            thisSectionParent.classList.add("lg:hover:scale-95", "lg:transition-all", "lg:ease-in-out")
        }
        else {
            sectionButtonWrapper.classList.add("border-b-2")
            panel.style.display = "block"
            thisSectionParent.classList.remove("lg:hover:scale-95", "lg:transition-all", "lg:ease-in-out")
        }
       
    }
}