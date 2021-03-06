 window.onload = () =>{
     
    /* Show and Hide Mobile Menu */

 const mobileMenuButton = document.querySelector(".mobile-menu-button");
 const mobileMenu = document.querySelector(".mobile-menu");
 const mobileMenuLinks = document.querySelectorAll(".mobile-nav-a");
 const logo = document.querySelector(".logo");
 const header = document.querySelector(".header");

 
 const countriesLink = document.querySelector(".countries-link");
 const countriesContainer = document.querySelector(".countries-container");
 
 

 mobileMenuButton.onclick = () => {

  logo.style.color = "#161616";
      mobileMenuButton.style.color = "#161616";
  

     if (mobileMenu.style.display === "flex") {

         document.body.style.overflow = "visible";

         mobileMenu.style.height = "0vh";

         setTimeout(() => {
             for (i = 0; i < mobileMenuLinks.length; i++) {
                 mobileMenuLinks[i].style.display = "none";
             }
             header.style.backgroundColor = "transparent";
         }, 200);

         setTimeout(() => {
             mobileMenu.style.display = "none";
         }, 500);

     }

     else {


         document.body.style.overflow = "hidden";

         mobileMenu.style.display = "flex";

         setTimeout(() => {
             mobileMenu.style.height = "100vh";
         }, 100);

         setTimeout(() => {
             for (i = 0; i < mobileMenuLinks.length; i++) {
                 mobileMenuLinks[i].style.display = "block";
             }
         }, 200);
     }

 }

 /* End of Show and Hide Mobile Menu */

 countriesLink.onclick = () =>{
    if (countriesContainer.style.display === "block"){
    countriesContainer.style.display = "none";
} 
else{
    countriesContainer.style.display = "block";
}
}



 }