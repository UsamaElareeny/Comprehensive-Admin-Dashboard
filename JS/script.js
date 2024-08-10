const links = document.querySelectorAll(".links ul li");

links[0].classList.add("active");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        // Prevent the default action of the link
        event.preventDefault();
        links.forEach(function(item) {
            item.classList.remove("active");
        });

        // Add the 'active' class to the clicked list item
        this.classList.add("active");
    });
});

window.onload = function(){
    const viewportWidth = window.innerWidth;
    const LogOut = document.getElementById("log-out");
    if(viewportWidth > 790 && viewportWidth <= 1200){
        LogOut.innerHTML = '<button><i class="fa-solid fa-right-from-bracket"></i></button>'
    }
    else{
        LogOut.innerHTML = '<button><i class="fa-solid fa-right-from-bracket"></i> Log Out</button>'
    }    
}
const DropDownMenu = document.getElementById("menu");
const Menu = document.getElementById("menu-list");
Menu.style.display = "block";
DropDownMenu.addEventListener("click", function(){
    if(Menu.style.display == "none")
        Menu.style.display = "block";
    else
        Menu.style.display = "none";
});