export default function modalScripts() {
  const modalButtons = document.querySelectorAll(".js-modal-button");
  const modals = document.querySelectorAll(".js-modal");
  const menu = document.querySelector(".js-menu");

  const closeModal = modal => () => {
    modal.classList.remove("is-active");
  };

  const handleButtonClick = e => {
    e.preventDefault();

    const modal = document.querySelector(
      `.js-modal[data-modal="${e.currentTarget.dataset.modal}"]`,
    );

    menu.classList.remove("is-active");
    modal.classList.add("is-active");
  };

  modals.forEach(modal => {
    const overlay = modal.querySelector(".js-modal-overlay");
    const close = modal.querySelector(".js-modal-close");

    overlay.addEventListener("click", closeModal(modal));
    close.addEventListener("click", closeModal(modal));
  });

  modalButtons.forEach(button => {
    button.addEventListener("click", handleButtonClick);
  });
}
