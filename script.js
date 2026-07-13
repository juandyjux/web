"use strict";

const TECNODENT = {
  whatsappNumber: "593963071055",
  businessName: "TECNODENT SOLUTIONS",
};

function updateCurrentYear() {
  const yearElements = document.querySelectorAll("#year, [data-current-year]");
  const currentYear = new Date().getFullYear();

  yearElements.forEach((element) => {
    element.textContent = currentYear;
  });
}

function configureWhatsAppForm() {
  const form = document.getElementById("whatsapp-form");

  if (!form) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("contact-name")?.value.trim() ?? "";
    const phone = document.getElementById("contact-phone")?.value.trim() ?? "";
    const equipment =
      document.getElementById("contact-equipment")?.value.trim() ?? "";
    const message =
      document.getElementById("contact-message")?.value.trim() ?? "";

    if (!name || !equipment || !message) {
      window.alert(
        "Completa el nombre, el equipo y la descripción antes de continuar.",
      );
      return;
    }

    const whatsappMessage = [
      `Hola, ${TECNODENT.businessName}.`,
      "",
      "Deseo solicitar asistencia técnica.",
      "",
      `Nombre o clínica: ${name}`,
      `Teléfono: ${phone || "No indicado"}`,
      `Equipo: ${equipment}`,
      `Falla o servicio requerido: ${message}`,
      "",
      "Mensaje enviado desde la página web.",
    ].join("\n");

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${TECNODENT.whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}

function closeMobileMenuAfterNavigation() {
  const navigationWrapper = document.querySelector(".nav-wrap");

  if (!navigationWrapper) {
    return;
  }

  const navigationLinks = navigationWrapper.querySelectorAll(".nav a");

  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navigationWrapper.removeAttribute("open");
    });
  });
}

function configureExternalWhatsAppLinks() {
  const links = document.querySelectorAll(
    'a[href^="https://wa.me/593963071055"]',
  );

  links.forEach((link) => {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}

function initializePage() {
  updateCurrentYear();
  configureWhatsAppForm();
  closeMobileMenuAfterNavigation();
  configureExternalWhatsAppLinks();
}

document.addEventListener("DOMContentLoaded", initializePage);
