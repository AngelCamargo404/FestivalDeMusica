document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp() {
    crearGaleria();
    // scrollNav();
    fijarNav();
}

function fijarNav(){
    const header = document.querySelector('header');
    const sobreFestival = document.querySelector('.sobre-festival');
    const body = document.querySelector('body');
    
    window.addEventListener( 'scroll', function(){

        if(sobreFestival.getBoundingClientRect().bottom < 0){
            header.classList.add('fijar-header');
            body.classList.add('body-scroll');
        }else{
            header.classList.remove('fijar-header');
            body.classList.remove('body-scroll');
        }
    
    })
    
}

// function scrollNav(){
//     const enlaces = document.querySelectorAll('.navegacion-principal a');

//     enlaces.forEach( enlace => {
//         window.HTMLElement.prototype.scrollIntoView = function() {};

//         enlace.addEventListener('click', function(e){

//             // e.preventDefault();

//             // const valorAtributo = e.target.attributes.href.value;
//             // const seccion = document.querySelector(valorAtributo);
//             // seccion.scrollIntoView({behavior:"smooth"}); // No me funcionó

//             // console.log(seccion);

//         });
//     });

// }

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i <= 12 ; i++){
        const imagen = document.createElement('picture');

        imagen.innerHTML = `
        <source srcset="build/img/thumb/${i}.avif" type="image/avif">
        <source srcset="build/img/thumb/${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="Imagen galeria nro ${i}">
        `;

        imagen.onclick = function(){
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);

    }
}

function mostrarImagen(indice){
    //indice = i
    const imagen = document.createElement('picture');

        imagen.innerHTML = `
        <source srcset="build/img/grande/${indice}.avif" type="image/avif">
        <source srcset="build/img/grande/${indice}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/grande/${indice}.jpg" alt="Imagen galeria nro ${indice}">
        `;

        // Crear el overlay con la imagen
        const overlay = document.createElement('DIV');
        overlay.appendChild(imagen);
        overlay.classList.add('overlay');
        overlay.onclick = function() {
            
            const body = document.querySelector('body');
            body.classList.remove('fijar-body'); // CLASSLIST para quitar el scroll al tener el overlay
            overlay.remove();
        }

        // Botón para cerrar el Modal
        const cerrarModal = document.createElement('P');
        cerrarModal.textContent = 'X';
        cerrarModal.classList.add('btn-cerrar');
        overlay.appendChild(cerrarModal);

        cerrarModal.onclick = function() {

            const body = document.querySelector('body');
            body.classList.remove('fijar-body'); // CLASSLIST para quitar el scroll al tener el overlay
            overlay.remove();
        }

        //Añadirlo al HTML
        const body = document.querySelector('body');
        body.appendChild(overlay);
        body.classList.add('fijar-body'); // CLASSLIST para quitar el scroll al tener el overlay

}