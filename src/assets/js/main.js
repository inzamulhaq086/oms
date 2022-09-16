// ===============
// start side menu
// ===============
let getMainSection = document.getElementById('main-section')
window.addEventListener("resize", function (event) {
    if (document.body.clientWidth < 768) {
        getMainSection.classList.remove('ml-32')
        document.getElementById('menu-sidebar').classList.add('-ml-32')
        document.getElementById('menu-sidebar').classList.remove('customShadow')
    } else {
        document.getElementById('menu-sidebar').classList.remove('-ml-32')
        document.getElementById('menu-sidebar').classList.add('customShadow')
        if (!document.getElementById('menu-sidebar').classList.contains('-ml-32')) {
            getMainSection.classList.add('ml-32')
        }
    }
})

function reload() {
    if (screen.availWidth >= 768) {
        getMainSection.classList.toggle('ml-32')
    }else{
        getMainSection.classList.remove('ml-32')
    }
}

reload()

window.addEventListener('load',()=>{
    if (screen.availWidth < 768) {
        document.getElementById('menu-sidebar').classList.add('-ml-32')
    }
})
window.addEventListener('click',(e)=>{
    if(!e.target.closest('#menu-sidebar') && e.target != document.getElementById('menu-toggler') && screen.availWidth < 768){
        document.getElementById('menu-sidebar').classList.add('-ml-32')
    }
})
let getSidebarItem = document.querySelectorAll('.menu-sidebar-item')
document.getElementById('menu-toggler').addEventListener('click', function () {
    document.querySelectorAll('.sub-sidebar-menu').forEach((e) => {
        e.classList.add('-ml-92')
    });
    document.getElementById('menu-sidebar').classList.toggle('-ml-32')
    if (screen.availWidth >= 768) {
        getMainSection.classList.toggle('ml-32')
    }
})
let oldMenuItem = ''
getSidebarItem.forEach(function (menuItem) {
    menuItem.addEventListener('click', function (e) {
        let clickChildSection = e.target.closest('.sub-sidebar-menu')
        if (!clickChildSection) {
            if (menuItem.children[1] && (oldMenuItem === '' || oldMenuItem === menuItem)) {
                menuItem.children[1].classList.toggle('-ml-92')
                oldMenuItem = menuItem
            } else if (menuItem.children[1]) {
                oldMenuItem.children[1].classList.add('-ml-92')
                menuItem.children[1].classList.remove('-ml-92')
                oldMenuItem = menuItem
            } else {
                if (oldMenuItem !== '') {
                    oldMenuItem.children[1].classList.add('-ml-92')
                    oldMenuItem = ''
                }
            }
        }
    })
})


document.addEventListener('click', function (event) {
    // for sidebar
    if (!event.target.closest('.menu-sidebar-item')) {
        document.querySelectorAll('.sub-sidebar-menu').forEach((e) => {
            e.classList.remove('-ml-92')
            e.classList.add('-ml-92')
        })
    }
    // for dropdown
    let clickDropdownButton = event.target.closest('.dropdown-click-item')
    let dropdownButtonBox = event.target.closest('.dropdown-menu')
    if (!clickDropdownButton && !dropdownButtonBox) {
        prevDropdown = ''
        document.querySelectorAll('.dropdown-menu').forEach(function (event) {
            event.classList.add('hidden');
        })
    }
    // for modal
    let getShowButton = event.target.closest('.modal-show-button')
    let getShowModalContent = event.target.closest('.modal-content')
    if(!getShowButton && !getShowModalContent){
        document.querySelectorAll('.modal-box').forEach(function (event) {
            event.classList.add('hidden')
        })
    }
})

// ===============
//  end side menu
// ===============

// navbar frop down


            let hoverDropdownBox = document.querySelectorAll('.hover-dropdown-box')
            let hoverDropdownShowBox = document.querySelectorAll('.hover-dropdown-show-box')
            let lang = document.querySelectorAll('.language')
            let b = '';
            hoverDropdownBox.forEach(function(el,ind){
                el.addEventListener('click', function(ss){
                    for(let i=0; i<hoverDropdownShowBox.length; i++){
                        hoverDropdownShowBox[i].classList.add('hidden')
                    }
                    hoverDropdownShowBox[ind].classList.remove('hidden')
                    if(b == hoverDropdownShowBox[ind]){
                        hoverDropdownShowBox[ind].classList.add('hidden')
                    }
                    b = hoverDropdownShowBox[ind]
                    if(hoverDropdownShowBox[ind].classList.contains('hidden')){
                        b = ''
                    }
                })
            })
            
            let langDiv = document.querySelectorAll('.customScroll>li')

            lang.forEach(el=>{
                el.addEventListener('click',(ev)=>{
                    document.querySelector('.country-flag').innerHTML = ev.target.children[0].children[0].innerHTML
                    langDiv.forEach(el=>{
                        el.classList.remove('bg-TextColor40')
                    })
                    ev.target.classList.add('bg-TextColor40')
                    if(langDiv[0].classList.contains('bg-TextColor40')){
                        document.querySelector('.customScroll').previousElementSibling.children[0].classList.remove('bg-white')
                        document.querySelector('.customScroll').previousElementSibling.children[0].classList.add('bg-TextColor40')
                    }else{
                        document.querySelector('.customScroll').previousElementSibling.children[0].classList.add('bg-white')
                        document.querySelector('.customScroll').previousElementSibling.children[0].classList.remove('bg-TextColor40')
                    }
                    for(let i=0; i<hoverDropdownShowBox.length; i++){
                        hoverDropdownShowBox[i].classList.add('hidden')
                    }
                    b = ''
                })
            })


            window.addEventListener('click', function(e){
                if(!e.target.classList.contains('hover-dropdown-box') && !e.target.closest('.hover-dropdown-show-box')){
                    for(let i = 0; i < hoverDropdownBox.length; i++){
                        hoverDropdownShowBox[i].classList.add('hidden')
                        b = ''
                    }
                }
            })
