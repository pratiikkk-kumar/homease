(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false,
    );
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  const desktopFilterItems = document.querySelectorAll(".filter-item");
  const mobileFilterItems = document.querySelectorAll(".mobile-filter-item");

  function handleFilterClick(filterText, element) {
    document.querySelectorAll(".filter-item").forEach((item) => {
      item.classList.remove("active");
    });
    document.querySelectorAll(".mobile-filter-item").forEach((item) => {
      item.classList.remove("active");
    });

    element.classList.add("active");

    if (filterText === "All") {
      window.location.href = "/listings";
    } else {
      window.location.href = `/listings/filter?category=${encodeURIComponent(
        filterText,
      )}`;
    }
  }

  desktopFilterItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const filterText = item.querySelector("p").textContent.trim();
      handleFilterClick(filterText, item);
    });
  });

  mobileFilterItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const filterText = item.textContent.trim();
      handleFilterClick(filterText, item);
    });
  });

  const urlParams = new URLSearchParams(window.location.search);
  const selectedFilter = urlParams.get("category");

  if (selectedFilter) {
    desktopFilterItems.forEach((item) => {
      const filterText = item.querySelector("p").textContent.trim();
      if (filterText === selectedFilter) {
        item.classList.add("active");
      }
    });

    mobileFilterItems.forEach((item) => {
      const filterText = item.textContent.trim();
      if (filterText === selectedFilter) {
        item.classList.add("active");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("auth-modal");
  if (!modal) return;

  const openers = document.querySelectorAll("[data-modal]");
  const closers = modal.querySelectorAll("[data-close]");
  const switchers = modal.querySelectorAll("[data-switch]");

  function openModal(type) {
    if (!modal) return;
    modal.classList.add("auth-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("auth-open");
    modal
      .querySelectorAll(".auth-form")
      .forEach((f) => f.classList.add("d-none"));
    const target = modal.querySelector("#auth-" + type);
    if (target) target.classList.remove("d-none");
    const firstInput = target.querySelector("input, button");
    if (firstInput) firstInput.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("auth-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("auth-open");
  }

  openers.forEach((o) => {
    o.addEventListener("click", function (e) {
      e.preventDefault();
      const t = this.getAttribute("data-modal");
      if (t) openModal(t);
    });
  });

  closers.forEach((c) => c.addEventListener("click", closeModal));

  const backdrop = modal.querySelector(".auth-modal-backdrop");
  if (backdrop) backdrop.addEventListener("click", closeModal);

  switchers.forEach((s) => {
    s.addEventListener("click", function (e) {
      e.preventDefault();
      const t = this.getAttribute("data-switch");
      if (t) openModal(t);
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
  elementsToAnimate.forEach((el) => observer.observe(el));
});

window.addEventListener("load", function () {
  const overlay = document.getElementById("loading-overlay");
  if (overlay) {
    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.style.display = "none";
    }, 500);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.loading = "lazy";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let taxSwitch = document.getElementById("switchCheckDefault");
  if (taxSwitch) {
    taxSwitch.addEventListener("click", () => {
      let taxInfo = document.getElementsByClassName("tax-info");

      for (let i = 0; i < taxInfo.length; i++) {
        if (taxInfo[i].style.display === "none" || !taxInfo[i].style.display) {
          taxInfo[i].style.display = "block";
        } else {
          taxInfo[i].style.display = "none";
        }
      }
    });
  }

  const filtersContainer = document.getElementById("filters-desktop");
  const scrollLeftBtn = document.getElementById("scroll-left");
  const scrollRightBtn = document.getElementById("scroll-right");

  if (filtersContainer) {
    const checkScroll = () => {
      if (filtersContainer.scrollLeft > 0) {
        scrollLeftBtn.style.display = "flex";
      } else {
        scrollLeftBtn.style.display = "none";
      }
      if (
        filtersContainer.scrollLeft + filtersContainer.clientWidth <
        filtersContainer.scrollWidth - 1
      ) {
        scrollRightBtn.style.display = "flex";
      } else {
        scrollRightBtn.style.display = "none";
      }
    };

    checkScroll();
    filtersContainer.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    if (scrollLeftBtn) {
      scrollLeftBtn.addEventListener("click", () => {
        filtersContainer.scrollBy({ left: -200, behavior: "smooth" });
      });
    }

    if (scrollRightBtn) {
      scrollRightBtn.addEventListener("click", () => {
        filtersContainer.scrollBy({ left: 200, behavior: "smooth" });
      });
    }

    const filterItems = document.querySelectorAll(".filter-item");
    filterItems.forEach((item) => {
      item.addEventListener("click", () => {
        document
          .querySelector(".filter-item.active")
          ?.classList.remove("active");
        item.classList.add("active");
      });
    });
  }
});
