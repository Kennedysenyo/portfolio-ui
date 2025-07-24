const mobileMenuButton = document.querySelector(".menu-icon");

mobileMenuButton.addEventListener("click", () => {
  const linkElements = document.querySelectorAll("a");

  linkElements.forEach((element) => {
    element.classList.toggle("show");
  });
  if (linkElements[0].classList.contains("show")) {
    mobileMenuButton.innerHTML = `<i class='fa fa-close' style='padding: 5px;'><i>`;
  } else {
    mobileMenuButton.innerHTML = `<i class='fa fa-bars'><i>`;
  }
});
