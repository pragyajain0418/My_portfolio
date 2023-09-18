const sections = document.querySelectorAll(".section");
const controlls = document.querySelectorAll(".controlls");
const secbtn = document.querySelectorAll(".control");
const allcontent = document.querySelector(".main-content");
function page() {
  for (let i = 0; i < secbtn.length; i++) {
    secbtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn ";
    });
  }

  allcontent.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      secbtn.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

page();
