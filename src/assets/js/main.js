let menu

window.onload = () => {
  menu = document.getElementById('mobileMenu')
  console.log('loaded')

  menu.onclick = () => {
    toggleMenu();
  }
}

function toggleMenu() {
  if (menu.style.display === "none") {
    show(menu)
  } else {
    hide(menu)
  }
}

function show(item) {
  item.style.display = "block"
  console.log('showing menu')
}

function hide(item) {
  item.style.display = "hidden"
  console.log('hiding menu')
}