function detectKeywords(text) {
    if (text.includes('compra', 'comprar')) {
        return 'compra';
    } else if (text.includes('venta')) {
        return 'venta';
    } else {
        return '';
    }
}

function updateSelectField(selectField, keyword) {
    if (keyword) {
        selectField.value = keyword;
    }
}

function handleTextInput(event) {
    const messageField = event.target;
    const selectField = document.getElementById('tipo-solicitud');
    const keyword = detectKeywords(messageField.value.toLowerCase());

    updateSelectField(selectField, keyword);
}

function addTextInputListener() {
    const messageField = document.getElementById('mensaje');
    messageField.addEventListener('input', handleTextInput);
}

addTextInputListener();
