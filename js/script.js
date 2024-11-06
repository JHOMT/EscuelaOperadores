/*
const descriptions = [
    "Alumnos realizando el reconocimiento operativo de la retroexcavadora, familiarizándose con los controles y medidas de seguridad antes de iniciar las prácticas de manejo.",
    "Grupo de estudiantes concluyendo su formación en el taller de mecánica, preparados para aplicar sus conocimientos en el campo de trabajo.",
    "Estudiantes revisando el minicargador, verificando los componentes principales y las normas de seguridad antes de las maniobras prácticas.",
    "Práctica de operación de volquete, donde los alumnos maniobran y transportan materiales bajo la supervisión del instructor.",
    "Sesión de mantenimiento preventivo, con los alumnos inspeccionando los equipos para asegurar un funcionamiento óptimo y prolongar la vida útil del maquinario.",
    "El proceso de carga de un volquete utilizando un minicargador, destacando la precisión y eficiencia en la operación.",
    "Charlas técnicas sobre el manejo seguro de maquinaria pesada, donde los instructores destacan las mejores prácticas para evitar accidentes en el campo.",
    "Demostración del circuito de pruebas para montacargas, diseñado para evaluar la destreza y el control de los operadores.",
    "Alumnos participando en el curso de manejo de camionetas 4x4, aprendiendo a maniobrar en terrenos difíciles y accidentados.",
    "Sesión práctica de manejo de montacargas, donde los estudiantes perfeccionan sus habilidades en la carga y descarga de materiales.",
    "Alumnos esperando su turno para practicar con los equipos de maquinaria pesada, listos para demostrar sus habilidades operativas.",
    "Un grupo de estudiantes en plena operación de una retroexcavadora, siguiendo las instrucciones del instructor para tareas de excavación.",
    "Los alumnos realizando el reconocimiento de un volquete, revisando sus sistemas y preparando el equipo para las operaciones de transporte.",
    "Los estudiantes revisando un minicargador, familiarizándose con sus controles y funciones para las prácticas operativas.",
    "Los alumnos en una sesión de reconocimiento de montacargas, revisando su sistema hidráulico y su funcionamiento antes de la práctica.",
    "Estudiantes realizando el reconocimiento de un volquete de 15 cubos, verificando su capacidad de carga y preparación para el manejo seguro.",
    "Alumnos rindiendo su examen práctico de manejo de montacargas, demostrando sus habilidades para operar este equipo de manera eficiente.",
    "Los estudiantes finalizando su examen práctico de manejo de montacargas, satisfechos con los resultados obtenidos.",
    "El Grupo A en la formación de operadores, preparados para realizar sus evaluaciones prácticas en diferentes equipos de maquinaria pesada.",
    "El Grupo B, listo para participar en las evaluaciones de manejo y seguridad en la operación de maquinaria pesada."
];

document.addEventListener("DOMContentLoaded", function() {
    try {
        if (!Array.isArray(descriptions) || descriptions.length < 20) {
            throw new Error("El array 'descriptions' no está definido o no contiene suficientes elementos.");
        }

        let imagesContainer = document.getElementById("images");
        if (!imagesContainer) {
            throw new Error("El contenedor de imágenes no se encontró en el DOM.");
        }

        for (let i = 0; i < 20; i++) {
            let imageWrapper = document.createElement("div");
            imageWrapper.classList.add("gallery-item");

            let image = document.createElement("img");
            image.src = `img/${i + 1}.png`;
            image.alt = `${i + 1}`;
            image.classList.add("img-fluid", "shadow", "rounded");

            let overlay = document.createElement("div");
            overlay.classList.add("overlay");
            overlay.textContent = descriptions[i];

            imageWrapper.appendChild(image);
            imageWrapper.appendChild(overlay);
            imagesContainer.appendChild(imageWrapper);

            image.onerror = function() {
                console.error(`No se pudo cargar la imagen: ${image.src}`);
                image.src = "img/default-image.jpg";
            };
        }
        console.log("Las imágenes se han cargado correctamente.");
    } catch (error) {
        console.error("Error al generar la galería de imágenes:", error.message);
    }
});
*/


document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar .nav-link");

    window.addEventListener("scroll", function() {
        let currentSection = "";
        const scrollPosition = window.pageYOffset;
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 70;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        if (!currentSection) {
            currentSection = sections[0].getAttribute("id");
        }

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    });


    // Control del comportamiento de las pestañas en la sección equipos
    const tabs = document.querySelectorAll('#equipos-nav .nav-link');
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            const panes = document.querySelectorAll('.tab-pane');
            panes.forEach(pane => pane.classList.remove('show', 'active'));

            const targetPane = document.querySelector(this.getAttribute('href'));
            targetPane.classList.add('show', 'active');
        });
    });
});

/*
var videoCarousel = document.getElementById('videoCarousel');
var videos = videoCarousel.querySelectorAll('video');

videoCarousel.addEventListener('slide.bs.carousel', function () {
    videos.forEach(function(video) {
        video.pause();
    });
});

let yearResponse = document.getElementById("year");
yearResponse.textContent = new Date().getFullYear();

 */
