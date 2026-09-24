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
loadComponent('header.html', 'header-container');

loadComponent('journalnav-component.html', 'journal-nav');

loadComponent('aboutme-component.html', 'aboutme-card');

loadComponent('socials-component.html', 'socials-card');

loadComponent('footer-component.html', 'footer-container');	 
//Left: the html file being called.
//right: the name of the dv being replaced with html file
     };