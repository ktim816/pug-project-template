export default function anchor() {
  const links = document.querySelectorAll(".js-anchor");

  links.forEach(link => {
    const element = document.querySelector(link.hash);

    if (element) {
      link.addEventListener("click", e => {
        e.preventDefault();
        element.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      });
    }
  });

  const prevents = document.querySelectorAll(".js-prevent");

  prevents.forEach(prevent => {
    prevent.addEventListener("click", e => {
      e.preventDefault();
    });
  });
}
