const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents")

function openTab(tab) {
    let i = 0;
    for (let index = 0; index < tabLinks.length; index++) {
        tabLinks[index].classList.remove("active-link");
        tabContents[index].classList.remove("active-tab");
        if (tab == index) {
            i = index;
        }
    }

    if(tab == i) {
        tabLinks[tab].classList.add("active-link");
        tabContents[tab].classList.add("active-tab");    
    }
}

function closeMenu() {
    document.getElementById("side-menu").style.right = '-200px';
}

function openMenu() {
    document.getElementById("side-menu").style.right = '0';
}