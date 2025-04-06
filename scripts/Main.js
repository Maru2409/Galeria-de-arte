document.addEventListener('DOMContentLoaded', function () {
    let imageGrid = document.getElementById('image-grid');

    function displayImages() {
        let images = [
            { src: "images/Universo-1.jpg", description: "Nebulosa" },
            { src: "images/Universo-2.webp", description: "Ojo de Sauron" },
            { src: "images/Universo-3.jpg", description: "Nebulosa del tiempo" },
            { src: "images/Universo-4.jpg", description: "Espiral espacial" },
            { src: "images/universo.webp", description: "Via lactea" }
        ];

        images.forEach((image, index) => {
            let imgWrapper = document.createElement('div');
            imgWrapper.className = "col-md-3 mb-3 position-relative";
            
            let imgElement = document.createElement('img');
            imgElement.src = image.src;
            imgElement.alt = `Obra de arte ${index + 1}`;
            imgElement.className = "img-fluid";
            imgElement.dataset.description = image.description;
            
            imgElement.addEventListener('click', function () {
                document.getElementById('modalImage').src = this.src;
                document.getElementById('modalDescription').innerText = this.dataset.description;
                let artModal = new bootstrap.Modal(document.getElementById('artModal'));
                artModal.show();
            });

            let deleteButton = document.createElement('button');
            deleteButton.className = "btn btn-danger btn-sm position-absolute top-0 end-0 m-1";
            deleteButton.innerText = "Eliminar";
            deleteButton.addEventListener('click', function () {
                imgWrapper.remove();
            });

            imgWrapper.appendChild(imgElement);
            imgWrapper.appendChild(deleteButton);
            imageGrid.appendChild(imgWrapper);
        });
    }

    displayImages();
});