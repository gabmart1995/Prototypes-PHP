// funcion main
(() => {
    const inputFile = document.querySelector('#image-input');
    if (!inputFile) return;

    const itemsSection = document.querySelector('#selector-items');
    if (!itemsSection) return;

    const rows = document.querySelectorAll('.row');
    if (rows.length === 0) return;

    const resetButton = document.querySelector('#reset-button');
    if (!resetButton) return;

    const saveButton = document.querySelector('#save-button');
    if (!saveButton) return;

    /** @type {HTMLImageElement | null} */
    let draggedElement = null;

    /** @type {HTMLElement | null} */
    let sourceContainer = null;

    /**
     * manejador del drag start
     * @param {DragEvent} event evento de arrastre
     */
    const handleDragStart = event => {
        draggedElement = event.target;
        sourceContainer = draggedElement.parentNode;

        event.dataTransfer.setData('text/plain', draggedElement.src);
    };

    /**
     * manejador del drag end
     * @param {DragEvent} event evento de arrastre
     */
    const handleDragEnd = event => {
        // console.log('ha terminado el evento', event.target);
        event.preventDefault();
        
        draggedElement = null; 
        sourceContainer = null;
    };

    /**
     * manejador de desplazamiento
     * @param {DragEvent} event evento de desplazamiento
     */
    const handleDrop = event => {
        event.preventDefault();

        const {currentTarget, dataTransfer} = event;
        
        // eliminamos la imagen del container
        if (sourceContainer && draggedElement) {
            sourceContainer.removeChild(draggedElement);
        }

        // recogemos la data transfer del evento
        if (draggedElement) {
            const src = dataTransfer.getData('text/plain');
            const imgElement = createItem(src);

            currentTarget.appendChild(imgElement);
        }

        currentTarget.classList.remove('drag-over');

        // eliminamos el preview
        currentTarget.querySelector('.drag-preview')?.remove();
    };

    /**
     * evento cuando termina el drop    
     * @param {DragEvent} event evento de arrastre
     */
    const handleDragOver = event => {
        event.preventDefault();

        const {currentTarget, dataTransfer} = event;

        // evita el desplazamiento si el contenedores son iguales
        if (currentTarget === sourceContainer) return;

        currentTarget.classList.add('drag-over');

        // creamos una copia preview, solo si existe en el DOM
        const dragPreviewElement = document.querySelector('.drag-preview');

        if (draggedElement && !dragPreviewElement) {
            const previewElement = draggedElement.cloneNode(true);
            previewElement.classList.add('drag-preview');
            currentTarget.appendChild(previewElement);
        }
    };

    /**
     * manejador del drag cuando finaliza el arrastre
     * @param {DragEvent} event evento de arrastre
     */
    const handleDragLeave = event => {
        event.preventDefault();

        const {currentTarget} = event;

        currentTarget.classList.remove('drag-over');

        // eliminamos el preview con opcional chaining
        currentTarget.querySelector('.drag-preview')?.remove();
    };

    /**
     * carga archivos desde el escritorio
     * @param {DragEvent} event evento de arrastre
     */
    const handleDragOverFromDesktop = event => {
        event.preventDefault();

        const {currentTarget, dataTransfer} = event;
        
        // nos aseguremos que sean archivos
        if (dataTransfer.types.includes('Files')) {
            currentTarget.classList.add('drag-files');
        }
    };


    /**
     * carga archivos desde el escritorio
     * @param {DragEvent} event evento de arrastre
     */
    const handleDropFromDesktop = event => {
        event.preventDefault();

        const {currentTarget, dataTransfer} = event;

        // nos aseguremos que sean archivos
        if (dataTransfer.types.includes('Files')) {
            currentTarget.classList.remove('drag-files');

            // extramemos los archivos
            if (!dataTransfer) return;

            const {files} = dataTransfer;
            
            useFilesToCreateItems(files);
        }
    };

    /**
     * Crea el elemento de la imagen
     * @param {string} src url de la imagen
     * @returns {HTMLImageElement}
     */
    const createItem = src => {
        const imageEl = document.createElement('img');
        imageEl.src = src;
        imageEl.className = 'item-image';
        imageEl.draggable = true; // indicamos que la imagen es arrastrable

        // le colocamos un event listener para los eventos de arrastre
        imageEl.addEventListener('dragstart', handleDragStart);
        imageEl.addEventListener('dragend', handleDragEnd);

        itemsSection.appendChild(imageEl);

        return imageEl;
    };

    /**
     * Carga los archivos en el listado tier
     * @param {FileList} files lista de archivos
     */
    const useFilesToCreateItems = files => {
        (Array.from(files)).forEach(file => {
            const reader = new FileReader();
            reader.onload = eventReader => {
                createItem(eventReader.target.result);   
            };
            
            reader.readAsDataURL(file);
        });
    };

    /** limpia el tier */
    const clearTier = () => {
        const items = document.querySelectorAll('.tier .item-image');
        if (items.length === 0) return;

        items.forEach(item => {
            item.remove();
            itemsSection.appendChild(item);
        });
    }

    const saveTier = async () => {
        const tierElement = document.querySelector('.tier');
        if (!tierElement) return;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        try {
            // realizamos el import dinamico para generar la imagen
            const {default: html2canvas} = await import('./js/htmltocanvas.esm.js');
            const cv = await html2canvas(tierElement)
            
            ctx.drawImage(cv, 0, 0);
            
            // una vez dibujado creamos la url de la imagen
            const imageURL = cv.toDataURL('image/png');
            const downloadLink = document.createElement('a');

            downloadLink.download = 'tier.png';
            downloadLink.href = imageURL;

            downloadLink.click();
            
        } catch (error) {
            console.error(error);
        }

    }

    inputFile.addEventListener('change', event => {
        const {files} = event.target;
        
        if (!files || files.length === 0) return; 

        useFilesToCreateItems(files);
    });

    // rows events
    rows.forEach(row => {
        row.addEventListener('drop', handleDrop);
        row.addEventListener('dragover', handleDragOver);
        row.addEventListener('dragleave', handleDragLeave);
    });

    // eventos del items section
    itemsSection.addEventListener('drop', handleDrop);
    itemsSection.addEventListener('dragover', handleDragOver);
    itemsSection.addEventListener('dragleave', handleDragLeave);

    itemsSection.addEventListener('drop', handleDropFromDesktop);
    itemsSection.addEventListener('dragover', handleDragOverFromDesktop);

    // limpia la lista
    resetButton.addEventListener('click', clearTier);

    // guarda las imagenes
    saveButton.addEventListener('click', saveTier);
})();