// DESPLAZAMIENTO SUAVE A LAS SECCIONES DE LA PÁGINA
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene todos los elementos del menú
    var menuItems = document.querySelectorAll('.menu a')
    
    // Recorre cada elemento del menú
    menuItems.forEach(function(item) {
        // Agrega un event listener para el evento click
        item.addEventListener('click', function(event) {
            event.preventDefault()
            
            // Obtiene el identificador de la sección hacia la que se va a desplazar
            var targetId = this.getAttribute('href').substring(1)
            
            // Obtiene la posición vertical de la sección
            var targetPosition = document.getElementById(targetId).offsetTop
            
            // Desplazamiento suave
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            })
        })
    })
})
