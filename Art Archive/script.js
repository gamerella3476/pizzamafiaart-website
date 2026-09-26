// Function to load components

     function loadComponent(url, elementId) {
         fetch(url)
             .then(response => response.text())
             .then(data => {
                 document.getElementById(elementId).innerHTML = data;
             });
     }
     
     // Load components when the page loads

     window.onload = function() {
loadComponent('../components/header.html', 'header-container');

loadComponent('../components/journalnav-component.html', 'journal-nav');

loadComponent('../components/aboutme-component.html', 'aboutme-card');

loadComponent('../components/socials-component.html', 'socials-card');

loadComponent('../components/footer-component.html', 'footer-container');	 
//Left: the html file being called.
//right: the name of the dv being replaced with html file
     };