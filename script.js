document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('uploadForm');
    const gallery = document.getElementById('gallery');

    uploadForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener la foto y la descripción del formulario
        const photoInput = document.getElementById('photo');
        const descriptionInput = document.getElementById('description');

        const file = photoInput.files[0];
        const description = descriptionInput.value;

        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                // Crear elementos para la foto y la descripción
                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = description;
                img.style.maxWidth = '100px'; // Ajusta el tamaño según tu diseño

                const desc = document.createElement('p');
                desc.textContent = description;

                // Añadir la foto y la descripción a la galería
                gallery.appendChild(img);
                gallery.appendChild(desc);
            };

            reader.readAsDataURL(file);
        }

        // Limpiar el formulario
        uploadForm.reset();
    });
});
