window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
    showNavOnScroll();
    showBackToTopButtonOnScroll()
}

function showNavOnScroll() {
    if (scrollY > 0) {
        navigationID.classList.add("scroll");
    } else {
        navigationID.classList.remove("scroll");
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 550) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
}

function openMenu() {
    document.body.classList.add("menu-expanded");
}

function closeMenu() {
    document.body.classList.remove("menu-expanded");
}

ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: "700",
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .cards,
#services .card,
#about,
#about header,
#about .content
`);
