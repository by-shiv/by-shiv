  document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    if (menuIcon && navbar) {
      menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("active");
        menuIcon.classList.toggle("active");
      });

      // Close nav on link click (good for mobile)
      const navLinks = navbar.querySelectorAll("a");
      navLinks.forEach(link => {
        link.addEventListener("click", function () {
          navbar.classList.remove("active");
          menuIcon.classList.remove("active");
        });
      });
    } else {
      console.error("menu-icon or navbar not found in the DOM.");
    }
  });