menuButton = document.getElementById("menu_button");
if(menuButton != null){
    menuButton.addEventListener("click",changeMenuIcon);
}
menu = document.getElementById("menu_container");

function changeMenuIcon(e)
{
    e.preventDefault();
    menu.classList.toggle("change");
    list = document.getElementById("menu_list");
    console.log(list);
    if(list.style.display === "block"){
        list.style.display = "none";
    }
    else {
        list.style.display = "block"
    }
}

projects = document.getElementById("projectss");
if(projects!= null){
    projects.addEventListener("click", extendMenu);
}


function extendMenu(e)
{
    e.preventDefault();
    list = document.getElementById("projects_category");
    if(list.style.display === "block"){
        list.style.display = "none";
    }
    else {
        list.style.display = "block"
    }

}

area_expertise = document.getElementById("area_expertise_field");
if(area_expertise != null){
    area_expertise.addEventListener("click", extendExpertise);
}


function extendExpertise(e)
{
    e.preventDefault();
    list = document.getElementById("area_expertise");
    if(list.style.display === "block"){
        list.style.display = "none";
    }
    else {
        list.style.display = "block"
    }

}

unamed = document.getElementById("unamed_field");
if(unamed!= null){
    unamed.addEventListener("click", extendUnamed);
}


function extendUnamed(e)
{
    e.preventDefault();
    list = document.getElementById("unamed");
    if(list.style.display === "block"){
        list.style.display = "none";
    }
    else {
        list.style.display = "block"
    }

}
