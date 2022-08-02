let scheduleGalleryView = document.querySelector(".scheduleGalleryView"),
  scheduleTableView = document.querySelector(".scheduleTableView"),
  tableViewIcon = document.querySelector(".tableViewIcon"),
  galleryViewIcon = document.querySelector(".galleryViewIcon")

tableViewIcon.onclick = () => {
  scheduleGalleryView.classList.add("lg:hidden")
  scheduleTableView.classList.remove("lg:hidden", "hidden")
  }
    
galleryViewIcon.onclick = () => {
  scheduleGalleryView.classList.remove('lg:hidden');
  scheduleTableView.classList.add('lg:hidden', 'hidden');
}
