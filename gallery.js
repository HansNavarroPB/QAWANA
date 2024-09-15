document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo de imágenes con comentarios (puedes reemplazarlo con datos reales).
    const photos = [
        { src: 'photo1.jpg', description: 'Foto de Retina 1' },
        { src: 'photo2.jpg', description: 'Foto de Retina 2' }
    ];

    const photoGallery = document.getElementById('photoGallery');
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.src; // Ruta de la imagen
        img.alt = photo.description; // Descripción alternativa para la imagen

        const desc = document.createElement('p');
        desc.textContent = photo.description; // Descripción de la imagen

        photoGallery.appendChild(img);
        photoGallery.appendChild(desc);
    });

    // Manejo de comentarios
    const commentForm = document.getElementById('commentForm');
    const commentsSection = document.getElementById('commentsSection');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario

        const commentText = document.getElementById('comment').value;
        const commentElement = document.createElement('p');
        commentElement.textContent = commentText; // Añade el comentario

        commentsSection.appendChild(commentElement);

        // Limpiar el textarea
        document.getElementById('comment').value = '';
    });
});
