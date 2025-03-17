function dragoverhandler(event) {
    event.preventDefault();
    const uploadElement = document.querySelector('.upload');
    uploadElement.classList.add('dragover');
}

function drophandler(event) {
    event.preventDefault();
    const uploadElement = document.querySelector('.upload');
    uploadElement.classList.remove('dragover');

    const files = event.dataTransfer.files; 
    if (files.length > 0) {
        const file = files[0];
        uploadElement.innerHTML = `<p>Arquivo ${file.name} carregado</p>`;
    } else {
        uploadElement.innerHTML = `<p>Nenhum arquivo encontrado.</p>`;
    }
}
