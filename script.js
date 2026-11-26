// 1. Contact Form Submission via FormSubmit
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (contactForm) {
  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    formStatus.style.color = "#94a3b8";
    formStatus.innerText = "Sending message...";

    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        formStatus.style.color = "#22c55e";
        formStatus.innerText = "Thank you! Your message has been sent.";
        contactForm.reset();
      } else {
        formStatus.style.color = "#ef4444";
        formStatus.innerText = "Oops! Something went wrong. Please try again.";
      }
    } catch (error) {
      formStatus.style.color = "#ef4444";
      formStatus.innerText = "Network error. Please check your connection.";
    }
  });
}

// 2. Highlight Active Navigation Link on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});
