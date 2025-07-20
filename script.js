document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      if (
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        section.style.backgroundColor = "#d1eafb";
      } else {
        section.style.backgroundColor = "white";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get elements for category filtering
  const categoryFilter = document.getElementById("category-filter");
  const galleryItems = document.querySelectorAll(".gallery-item");

  // Category filter functionality
  categoryFilter.addEventListener("change", function () {
    const selectedCategory = this.value;

    galleryItems.forEach((item) => {
      const itemCategory = item.getAttribute("data-category");
      if (selectedCategory === "all" || itemCategory === selectedCategory) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  // Get all gallery images for lightbox
  const galleryImages = document.querySelectorAll(".gallery-item img");

  // Open the lightbox when an image is clicked
  galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
      lightbox.style.display = "block";
      lightboxImg.src = image.dataset.src;
      lightboxImg.classList.add("scrollable"); // Make the image scrollable
    });
  });

  // Close the lightbox when the close button is clicked
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
    lightboxImg.classList.remove("scrollable"); // Remove scrollable class
    lightboxImg.style.transform = "scale(1)"; // Reset the scale to 1
  });

  // Close the lightbox when clicking outside the image (on the overlay)
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      // Check if the clicked area is the overlay
      lightbox.style.display = "none";
      lightboxImg.classList.remove("scrollable");
      lightboxImg.style.transform = "scale(1)";
    }
  });

  // Zoom in functionality
  zoomInBtn.addEventListener("click", () => {
    const currentScale =
      parseFloat(
        lightboxImg.style.transform.replace("scale(", "").replace(")", "")
      ) || 1;
    lightboxImg.style.transform = `scale(${currentScale + 0.2})`;
  });

  // Zoom out functionality
  zoomOutBtn.addEventListener("click", () => {
    const currentScale =
      parseFloat(
        lightboxImg.style.transform.replace("scale(", "").replace(")", "")
      ) || 1;
    if (currentScale > 0.2) {
      lightboxImg.style.transform = `scale(${currentScale - 0.2})`;
    }
  });

  // Enable dragging for zoomed images
  lightboxImg.addEventListener("mousedown", (e) => {
    if (lightboxImg.style.transform !== "scale(1)") {
      // Only allow drag if zoomed
      let isDragging = true;
      let startX = e.clientX;
      let startY = e.clientY;
      let scrollLeft = lightbox.scrollLeft;
      let scrollTop = lightbox.scrollTop;

      const onMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.clientX - startX;
        const y = e.clientY - startY;
        lightbox.scrollLeft = scrollLeft - x;
        lightbox.scrollTop = scrollTop - y;
      };

      const onMouseUp = () => {
        isDragging = false;
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    }
  });

  // Set the current year in the footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Gallery data (same as before)
  const galleryData = [
    { category: "A4", image: "photos/A4/zd-kurban-A4.jpg", title: "A4 Design" },
    { category: "A4", image: "photos/A4/EDL-Women-A3.jpg", title: "A4 Design" },
    {
      category: "A4",
      image: "photos/A4/zd-may-offer-A4.jpg",
      title: "A4 Design",
    },
    {
      category: "A5",
      image: "photos/A5/dina-gen-tests-A5.jpg",
      title: "A5 Design",
    },
    {
      category: "A5",
      image: "photos/A5/Erba-Elan30s-01.jpg",
      title: "A5 Design",
    },
    {
      category: "brochure",
      image: "photos/brochure/zd-trifold-01.jpg",
      title: "Trifold Brochure",
    },
    {
      category: "brochure",
      image: "photos/brochure/zd-trifold-02.jpg",
      title: "Trifold Brochure",
    },
    {
      category: "SMP",
      image: "photos/SMP/dina-dizzy.jpg",
      title: "Social Media",
    },
    {
      category: "SMP",
      image: "photos/SMP/dina-doctors-09.jpg",
      title: "Social Media",
    },
    {
      category: "business",
      image: "photos/mare_businesscards.jpg",
      title: "Business Card",
    },
    {
      category: "poster",
      image: "photos/z-stands-hematology-03.jpg",
      title: "Stand Roll Up",
    },
    { category: "logo", image: "photos/logo/mylogo.jpg", title: "My Logo" },
  ];

  // Load gallery items
  const galleryGrid = document.querySelector(".gallery-grid");
  galleryData.forEach((item, index) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";
    galleryItem.setAttribute("data-category", item.category);
    galleryItem.style.animationDelay = `${index * 0.1}s`;

    galleryItem.innerHTML = `
      <figure>
        <a href="${item.image}" data-lightbox="gallery" data-title="${item.title}">
          <img src="${item.image}" alt="${item.title}" loading="lazy"/>
        </a>
        <figcaption>${item.title}</figcaption>
      </figure>
    `;

    galleryGrid.appendChild(galleryItem);
  });

  // Initialize Lightbox with custom options
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    showImageNumberLabel: false,
    positionFromTop: 100,
    disableScrolling: true,
    alwaysShowNavOnTouchDevices: true,
  });

  // Close lightbox when clicking on overlay (this part handles the closing)
  document.addEventListener("click", function (event) {
    const lightbox = document.querySelector(".lb-overlay");
    if (lightbox && lightbox.style.display === "block") {
      if (!event.target.closest(".lb-container")) {
        const closeButton = document.querySelector(".lb-close");
        if (closeButton) closeButton.click();
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Set current year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Get the modal
  const modal = document.getElementById("gifModal");
  const modalImg = document.getElementById("modalGif");
  const captionText = document.querySelector(".caption");
  const closeBtn = document.querySelector(".close");

  // Get all GIF thumbnails
  const gifThumbnails = document.querySelectorAll(".gif-thumbnail");

  // When user clicks on a GIF thumbnail
  gifThumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.getAttribute("data-full");
      captionText.innerHTML = this.alt;

      // Center the modal image
      centerModalImage();
    });
  });

  // When user clicks on (x) close button
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    modalImg.src = "";
  });

  // When user clicks anywhere outside of the modal image, close it
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      modalImg.src = "";
    }
  });

  // Close modal when pressing Escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
      modalImg.src = "";
    }
  });

  // Center the modal image function
  function centerModalImage() {
    setTimeout(() => {
      const imgHeight = modalImg.naturalHeight;
      const containerHeight = window.innerHeight * 0.8;

      if (imgHeight > containerHeight) {
        modalImg.style.marginTop = "5%";
      } else {
        const margin = (window.innerHeight - imgHeight) / 2 - 40;
        modalImg.style.marginTop = `${margin}px`;
      }
    }, 50);
  }

  // Re-center on window resize
  window.addEventListener("resize", centerModalImage);
});
