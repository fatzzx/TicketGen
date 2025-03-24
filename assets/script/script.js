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
        uploadElement.dataset.image = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      uploadElement.innerHTML = `<p style="color: red;">Apenas imagens são permitidas.</p>`;
    }
  } else {
    uploadElement.innerHTML = `<p>Nenhum arquivo encontrado.</p>`;
  }
}

function gerarTicket() {
  let nome = document.getElementById("nome").value.trim();
  let email = document.getElementById("email").value.trim();
  let github = document.getElementById("github").value.trim();
  let uploadElement = document.querySelector(".upload");
  let avatarSrc = uploadElement.dataset.image || "";

  if (!nome || !email || !github || !avatarSrc) {
    alert("Por favor, preencha todos os campos e faça o upload de uma imagem!");
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Por favor, insira um email válido!");
    return;
  }

  document.getElementById("ticket-nome").textContent = nome;
  document.getElementById("ticket-username").textContent = github;
  document.getElementById("ticket-avatar").src = avatarSrc;

  document.getElementById("confirmation-email").textContent = email;

  let headerContent = document.getElementById("header-content");
  let confirmationMessage = document.getElementById("confirmation-message");
  headerContent.style.display = "none";
  confirmationMessage.classList.add("mostrar");

  let formulario = document.querySelector(".formulario");
  let ticket = document.getElementById("ticket");
  formulario.style.display = "none";
  ticket.classList.add("mostrar");
}
