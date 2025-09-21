const menuIcon = document.getElementsByClassName("menu-icon")[0]
const menuItems = document.getElementsByClassName("menu-items")[0]

menuIcon.addEventListener("click", () => {
    menuItems.classList.toggle("sidebar");
})