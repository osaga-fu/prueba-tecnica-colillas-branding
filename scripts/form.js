document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const name = document.getElementById("name").value;
  const company = document.getElementById("company").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;
  const checkboxTerms = document.getElementById("checkbox-terms").checked;

  if (name.length === 0) {
    alert("Por favor, introduzca su nombre.");
    return;
  }

  if (company.length === 0) {
    alert("Por favor, introduzca el nombre de la empresa.");
    return;
  }

  if (!isValidEmail(email)) {
    alert("Por favor, introduzca un email válido.");
    return;
  }

  if (!isValidPhoneNumber(phone)) {
    alert("Por favor, introduzca un número de teléfono válido.");
    return;
  }

  if (message.length === 0) {
    alert("Por favor, introduzca un mensaje.");
    return;
  }

  if (!checkboxTerms) {
    alert("Debes aceptar los términos y condiciones.");
    return;
  }

  alert("El formulario se envió correctamente.");

  document.getElementById("form").reset();
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {
  return /^\d{9,}$/.test(phone);
}

module.exports = isValidEmail;