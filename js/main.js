 
const text = "QR kodu skan et";
const speed = 100; // hərflər açılma sürəti (ms)
const textElement = document.getElementById('text');
let index = 0;
let isDeleting = false;

function typeEffect() {
  if (!isDeleting) {
    textElement.textContent = text.substring(0, index + 1);
    index++;
    if (index === text.length) {
      setTimeout(() => {
        isDeleting = true;
      }, 1000); // tam yazıldıqdan sonra 1 saniyə dayanır
    }
  } else {
    textElement.textContent = text.substring(0, index - 1);
    index--;
    if (index === 0) {
      isDeleting = false;
    }
  }
  setTimeout(typeEffect, speed);
}
typeEffect();
  const textPath = document.getElementById("scrolling-text");
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;
    const offset = scrollPercent * 100; // soldan sağa
    textPath.setAttribute("startOffset", `${offset}%`);
  });

// footer
let bulvar1 = document.getElementById("bulvar1")
let statistika1 = document.getElementById("statistika1")
let ataturk1 = document.getElementById("ataturk1")
let khatai1 = document.getElementById("khatai1")
let dede1 = document.getElementById("dede1")
let sumqayit1 = document.getElementById("sumqayit1")
 
function bulvar(){
  bulvar1.style.display= "block"
  statistika1.style.display="none"
  ataturk1.style.display="none"
  khatai1.style.display="none"
  dede1.style.display="none"
  sumqayit1.style.display="none"
   
}

function statistika(){
  bulvar1.style.display= "none"
  statistika1.style.display="block"
  ataturk1.style.display="none"
  khatai1.style.display="none"
  dede1.style.display="none"
  sumqayit1.style.display="none"
}

function ataturk(){
  bulvar1.style.display= "none"
  statistika1.style.display="none"
  ataturk1.style.display="block"
  khatai1.style.display="none"
  dede1.style.display="none"
  sumqayit1.style.display="none"
}

function khatai(){
  bulvar1.style.display= "none"
  statistika1.style.display="none"
  ataturk1.style.display="none"
  khatai1.style.display="block"
  dede1.style.display="none"
  sumqayit1.style.display="none"
}

function dede(){
  bulvar1.style.display= "none"
  statistika1.style.display="none"
  ataturk1.style.display="none"
  khatai1.style.display="none"
  dede1.style.display="block"
  sumqayit1.style.display="none"
}

function sumqayit(){
  bulvar1.style.display= "none"
  statistika1.style.display="none"
  ataturk1.style.display="none"
  khatai1.style.display="none"
  dede1.style.display="none"
  sumqayit1.style.display="block"
}

function switchMainTab(evt, tabId) {
  document.querySelectorAll('.main-tab').forEach(btn => btn.classList.remove('active'));
  evt.currentTarget.classList.add('active');

  document.querySelectorAll('.tab-section').forEach(section => {
    section.classList.remove('active');
  });

  document.getElementById(tabId).classList.add('active');

   
  const firstTab = document.querySelector(`#${tabId} .category-tab`);
  if (firstTab) firstTab.click();
}

function openTab(evt, tabId) {
  const parent = evt.currentTarget.closest('.tab-section');

  const tabs = parent.querySelectorAll('.category-tab');
  const contents = parent.querySelectorAll('.menu-content');

  tabs.forEach(tab => tab.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));

  evt.currentTarget.classList.add('active');
  parent.querySelector(`#${tabId}`).classList.add('active');
}

// footer end

 
// marque
  const marqueeContainer = document.getElementById("marquee");
  const popupOverlay = document.getElementById("popup-overlay");
  const popupImg = document.getElementById("popup-img");
  const marqueeTrack = document.getElementById("marquee-track");
  let popupOpen = false;

  marqueeTrack.querySelectorAll("img").forEach(img => {
    img.addEventListener("mouseenter", () => {
      if (!popupOpen) marqueeContainer.classList.add("paused");
    });
    img.addEventListener("mouseleave", () => {
      if (!popupOpen) marqueeContainer.classList.remove("paused");
    });
    img.addEventListener("click", () => {
      popupImg.src = img.src;  
      popupOverlay.style.display = "flex";
      popupOpen = true;
      marqueeContainer.classList.add("paused");
    });
  });
  popupOverlay.addEventListener("click", (e) => {
    if (e.target === popupOverlay) {
      popupOverlay.style.display = "none";
      popupOpen = false;
      marqueeContainer.classList.remove("paused");
    }
  });
// marque end
 

document.addEventListener("DOMContentLoaded", function () {
  const modalTitles = document.querySelectorAll(".open-modal-title");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close");

  modalTitles.forEach(title => {
    title.addEventListener("click", () => {
      const modalId = title.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    });
  });

  closeButtons.forEach(closeBtn => {
    closeBtn.addEventListener("click", () => {
      closeAllModals();
    });
  });

  window.addEventListener("click", (e) => {
    modals.forEach(modal => {
      if (e.target === modal) {
        closeAllModals();
      }
    });
  });

  function closeAllModals() {
    modals.forEach(modal => {
      modal.style.display = "none";
    });
    document.body.style.overflow = "auto";
  }
});


function closeAllModals() {
  modals.forEach(modal => {
    modal.style.display = "none";
  });
  document.body.style.overflow = "auto";
}



 


window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  const logo = document.getElementById('logo');

  if (window.scrollY > 0) {
    navbar.classList.add('fixed');
    logo.src = 'img/Logo.svg'; 
    logo.style.width = '70px'; 

  } else {
    navbar.classList.remove('fixed');
    logo.src = 'img/logo-esas.svg'; 
    logo.style.width = '40px'; 

  }
});
