const tabs =  document.querySelectorAll('.tab');
const panels =  document.querySelectorAll('.panel');
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const logo = document.getElementById('logo')
//Tabs Menu event listener 

tabs.forEach((tab) => {
  tab.addEventListener("click",(e) => {
    // deactivate all tabs
    tabs.forEach((tab) => {
    tab.children[0].classList.remove('border-softRed','border-b-4','md:border-b-0');
  })
  // hide all panels
  panels.forEach(panel=>panel.classList.add('hidden'));

    //Activate a new panel depand of the target 
    e.target.classList.add('border-softRed','border-b-4');
    const classString = e.target.getAttribute('data-target');
    document.getElementsByClassName(classString)[0].classList.remove('hidden');
  })

});

// Hamburger button listener
btn.addEventListener('click', navToggle)



function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')

  if (menu.classList.contains('flex')) {
    logo.setAttribute('src', './images/logo-bookmark-footer.svg')
  } else {
    logo.setAttribute('src', './images/logo-bookmark.svg')
  }
}
