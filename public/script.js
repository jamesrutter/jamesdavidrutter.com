// Mobile navigation toggle
document.addEventListener("DOMContentLoaded", function () {
  const nav_toggle = document.querySelector(".nav_toggle");
  const nav_menu = document.querySelector(".nav_menu");

  if (nav_toggle && nav_menu) {
    nav_toggle.addEventListener("click", function () {
      nav_menu.classList.toggle("nav_menu_active");
      nav_toggle.classList.toggle("nav_toggle_active");
    });
  }

  // Close mobile menu when clicking on a link
  const nav_links = document.querySelectorAll(".nav_link");
  nav_links.forEach((link) => {
    link.addEventListener("click", function () {
      nav_menu.classList.remove("nav_menu_active");
      nav_toggle.classList.remove("nav_toggle_active");
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    const isClickInsideNav =
      nav_toggle.contains(event.target) || nav_menu.contains(event.target);

    if (!isClickInsideNav && nav_menu.classList.contains("nav_menu_active")) {
      nav_menu.classList.remove("nav_menu_active");
      nav_toggle.classList.remove("nav_toggle_active");
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        const offset = 60; // Account for fixed navigation
        const targetPosition = target.offsetTop - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Update active navigation link based on scroll position
  const sections = document.querySelectorAll("section[id]");
  const nav_links_all = document.querySelectorAll(".nav_link");

  function updateActiveNavLink() {
    let current = "";
    const scrollPos = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    nav_links_all.forEach((link) => {
      link.classList.remove("nav_link_active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("nav_link_active");
      }
    });
  }

  // Throttled scroll event listener
  let throttleTimer;
  window.addEventListener("scroll", function () {
    if (throttleTimer) return;

    throttleTimer = setTimeout(function () {
      updateActiveNavLink();
      throttleTimer = null;
    }, 100);
  });

  // Initial call to set active link
  updateActiveNavLink();
});
