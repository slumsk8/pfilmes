let pgHome = document.getElementById('home')
let pgAbout = document.getElementById('about')
let pgStories = document.getElementById('stories')
let pgContact = document.getElementById('contact')
let checkMenu = document.getElementById('check-menu')
let pgBgpf = document.getElementById('bg-pf')


lnkHome = document.getElementById('home-link'),
lnkAbout = document.getElementById('about-link'),
lnkStories = document.getElementById('stories-link'),
lnkContact = document.getElementById('contact-link')

lnkHome.addEventListener('click', () => {    
    pgAbout.classList.remove('show')
    pgStories.classList.remove('show')
    pgContact.classList.remove('show')
    checkMenu.checked = false
})
lnkAbout.addEventListener('click', () => {
    pgAbout.classList.add('show')
    pgStories.classList.remove('show')
    pgContact.classList.remove('show')    
    checkMenu.checked = false
})
lnkStories.addEventListener('click', () => {
    pgStories.classList.add('show')
    pgAbout.classList.remove('show')    
    pgContact.classList.remove('show')    
    checkMenu.checked = false
})
lnkContact.addEventListener('click', () => {
    pgContact.classList.add('show')    
    pgStories.classList.remove('show')
    pgAbout.classList.remove('show')
    checkMenu.checked = false
})



// for(let i = 0; i < links.length; i++){
//     console.log(links[i].id)
//     switch (links[i].id){
//         case 'home-link':
//             links[i].addEventListener('click', () => {
//                 pgHome.classList.add('show')                   
//                 checkMenu.checked = false
//             })
//         break;
//         case 'about-link':
//             links[i].addEventListener('click', () => {
//                 pgAbout.classList.add('show')                   
//                 checkMenu.checked = false
//             })
//         break;
//         case 'stories-link':
//             links[i].addEventListener('click', () => {
//                 pgStories.classList.add('show')
//                 checkMenu.checked = false
//             })
//         break;
//         case 'contact-link':
//             links[i].addEventListener('click', () => {
//                 pgContact.classList.add('show')                  
//                 checkMenu.checked = false
//             })
//         break
//     }
// }

