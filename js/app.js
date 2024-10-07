let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');




window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })


    let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100 );

menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


document.getElementById('loadMore').addEventListener('click', function() {
    const hiddenProjects = document.querySelectorAll('.portfolio-box.hidden');
    const projectsToShow = 3; 
  
    for (let i = 0; i < projectsToShow && i < hiddenProjects.length; i++) {
      hiddenProjects[i].classList.remove('hidden');
    }
  
    
    if (document.querySelectorAll('.portfolio-box.hidden').length === 0) {
      this.style.display = 'none'; 
    }
  
    
    document.getElementById('loadLess').classList.remove('hidden');
  });
  
  document.getElementById('loadLess').addEventListener('click', function() {
    const shownProjects = document.querySelectorAll('.portfolio-box:not(.hidden)');
    const projectsToHide = 3; 
  
    for (let i = shownProjects.length - 1; i >= shownProjects.length - projectsToHide && i >= 0; i--) {
      shownProjects[i].classList.add('hidden');
    }
  
    
    if (shownProjects.length <= projectsToHide) {
      this.classList.add('hidden'); 
    }
  
    
    document.getElementById('loadMore').style.display = 'inline-block';
  });

  
  
const openModalButtons = document.querySelectorAll('.open-modal');
const closeModalButtons = document.querySelectorAll('.close');
const modals = document.querySelectorAll('.modal');


openModalButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault(); 
    const modalId = this.getAttribute('data-modal'); 
    const modal = document.getElementById(modalId); 
    modal.style.display = 'flex'; 
  });
});


closeModalButtons.forEach(button => {
  button.addEventListener('click', function() {
    const modal = this.closest('.modal');
    modal.style.display = 'none'; 
  });
});


window.addEventListener('click', function(event) {
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none'; 
    }
  });
});


var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    
    
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    
  });


let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
} 

