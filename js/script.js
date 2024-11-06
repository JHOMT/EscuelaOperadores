const descriptions = [
    "Estudiante aplicando técnicas con minirodillo en el sitio de obra, poniendo en práctica los conocimientos adquiridos en el taller especializado en maquinaria pesada.",
    "Promoción de medias becas en colegios de la región, fomentando la formación en operación de maquinaria pesada y contribuyendo a mejorar la calidad de vida de los jóvenes locales.",
    "Charlas técnicas sobre manejo seguro de maquinaria pesada, donde los instructores enfatizan las mejores prácticas para prevenir accidentes en el campo.",
    "Clases teóricas sobre operación de maquinaria pesada, en las que los estudiantes aprenden a fondo sobre sistemas y controles de los equipos.",
    "Demostración en obra de excavación con retroexcavadora, mostrando la habilidad y destreza de los operadores en el manejo de maquinaria pesada.",
    "Estudiantes cargando material con volquete en obra, aplicando las técnicas de manejo y seguridad aprendidas en el curso de maquinaria pesada.",
    "Estudiantes realizando limpieza de pista con retroexcavadora, demostrando su habilidad y destreza en el manejo de maquinaria pesada.",
    "Prácticas de corte de pista con retroexcavadora, donde los estudiantes perfeccionan técnicas de excavación y nivelación de terrenos.",
    "Estudiantes realizando mantenimiento de minicargador, aplicando los conocimientos en conservación y reparación de maquinaria pesada.",
    "Clases prácticas con rodillo compactador, donde los estudiantes adquieren experiencia en compactación de suelos para aplicaciones en obra.",
    "Excavación de zanja para tuberías de gas con minicargador equipado con brazo hidráulico, demostrando precisión en la colocación de infraestructura subterránea."
];

document.addEventListener("DOMContentLoaded", function() {
    try {
        if (!Array.isArray(descriptions) || descriptions.length < 11) {
            throw new Error("El array 'descriptions' no está definido o no contiene suficientes elementos.");
        }

        let imagesContainer = document.getElementById("images");
        if (!imagesContainer) {
            throw new Error("El contenedor de imágenes no se encontró en el DOM.");
        }

        for (let i = 0; i < 11; i++) {
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

var videoCarousel = document.getElementById('videoCarousel');
var videos = videoCarousel.querySelectorAll('video');

videoCarousel.addEventListener('slide.bs.carousel', function () {
    videos.forEach(function(video) {
        video.pause();
    });
});

let yearResponse = document.getElementById("year");
yearResponse.textContent = new Date().getFullYear();