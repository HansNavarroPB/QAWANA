document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const photoInput = document.getElementById('photo');
    const descriptionInput = document.getElementById('description');

    const file = photoInput.files[0];
    const description = descriptionInput.value;

    if (file && description) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;

            const descElement = document.createElement('p');
            descElement.textContent = description;

            const gallery = document.getElementById('gallery');
            gallery.appendChild(imgElement);
            gallery.appendChild(descElement);
        }
        reader.readAsDataURL(file);
    }
});