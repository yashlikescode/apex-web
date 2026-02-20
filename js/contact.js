/**
 * contact.js — Contact form validation, submission, and toast notifications
 */

window.ApexApp = window.ApexApp || {};

ApexApp.initContact = function initContact() {
  const form = document.getElementById("contact-form");
  const toast = document.getElementById("toast");

  if (!form) return;

  form.addEventListener("submit", handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) return;

    // Simulate sending — replace with real endpoint / EmailJS / Formspree
    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
      form.reset();
      showToast(
        "✅ Message sent! We'll get back to you within 24 hours.",
        "success",
      );
    }, 1400);
  }

  function validateForm() {
    const fields = form.querySelectorAll("[required]");
    let valid = true;

    fields.forEach((field) => {
      clearError(field);
      if (!field.value.trim()) {
        showError(field, "This field is required.");
        valid = false;
      } else if (field.type === "email" && !isValidEmail(field.value)) {
        showError(field, "Please enter a valid email address.");
        valid = false;
      } else if (field.type === "tel" && !isValidPhone(field.value)) {
        showError(field, "Please enter a valid phone number.");
        valid = false;
      }
    });

    if (!valid) {
      showToast("⚠️ Please fill in all required fields correctly.", "error");
    }

    return valid;
  }

  function showError(field, message) {
    field.style.borderColor = "#EF4444";
    const msg = document.createElement("span");
    msg.className = "field-error";
    msg.style.cssText =
      "display:block;color:#EF4444;font-size:0.75rem;margin-top:0.25rem;";
    msg.textContent = message;
    field.parentNode.appendChild(msg);
  }

  function clearError(field) {
    field.style.borderColor = "";
    const existing = field.parentNode.querySelector(".field-error");
    if (existing) existing.remove();
  }

  // Real-time clear on input
  form.querySelectorAll(".form-input").forEach((input) => {
    input.addEventListener("input", () => clearError(input));
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  function isValidPhone(phone) {
    return /^[+]?[\d\s\-().]{7,15}$/.test(phone.trim());
  }

  function showToast(message, type = "info") {
    toast.textContent = "";
    toast.className = "";
    toast.textContent = message;
    toast.classList.add("show", type);

    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove("show");
    }, 4500);
  }
};
