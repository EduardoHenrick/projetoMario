const botaoTrailer = document.querySelector(`.botao-trailer`);
const botaoFecharModal = document.querySelector(`.fecharModal`);
const modal = document.querySelector(`.conteinerModal`);
const video = document.getElementById(`video`);
const srcDoVideo = video.src;

function alternarClassModal() {
  modal.classList.toggle(`aberto`);
}

botaoTrailer.addEventListener(`click`, () => {
  alternarClassModal();
  video.setAttribute(`src`, srcDoVideo);
});

botaoFecharModal.addEventListener(`click`, () => {
  alternarClassModal();
  video.setAttribute(`src`, ``);
});


