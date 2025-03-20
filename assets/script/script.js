function dragoverhandler(event) {
  event.preventDefault();
  const uploadElement = document.querySelector(".upload");
  uploadElement.classList.add("dragover");
}

function drophandler(event) {
  event.preventDefault();
  const uploadElement = document.querySelector(".upload");
  uploadElement.classList.remove("dragover");

  const files = event.dataTransfer.files;
  if (files.length > 0) {
    const file = files[0];

    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = function (e) {
        uploadElement.innerHTML = `<img src="${e.target.result}" alt="Preview da imagem" style="max-width: 100%; max-height: 100%; border-radius: 0.625rem;">`;
      };
      reader.readAsDataURL(file);
    } else {
      uploadElement.innerHTML = `<p style="color: red;"> Apenas imagens são permitidas.</p>`;
    }
  } else {
    uploadElement.innerHTML = `<p>Nenhum arquivo encontrado.</p>`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("Script carregado!");

  document.querySelector("button").addEventListener("click", gerarTicket);
});

function gerarTicket() {
  console.log("Botão clicado!");

  let nome = document.getElementById("nome").value.trim();
  let email = document.getElementById("email").value.trim();
  let github = document.getElementById("github").value.trim();

  if (!nome || !email || !github) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  console.log("Nome:", nome, "Email:", email, "GitHub:", github);

  document.getElementById("ticket-nome").textContent = nome;
  document.getElementById("ticket-email").textContent = email;
  document.getElementById("ticket-username").textContent = github;

  let ticket = document.getElementById("ticket");
  ticket.style.display = "block";
}
