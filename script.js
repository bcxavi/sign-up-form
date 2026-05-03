const toggleButtons = document.querySelectorAll(".toggle-password");
const form = document.querySelector(".signup-form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const createButton = document.querySelector(".create-account-btn");
const passwordError = document.querySelector(".password-error");

toggleButtons.forEach((toggleButton) => {
  toggleButton.addEventListener("click", () => {
    const wrapper = toggleButton.parentElement;
    const input = wrapper.querySelector("input");
    const icon = toggleButton.querySelector("img");

    const isHidden = input.type === "password";

    input.type = isHidden ? "text" : "password";
    icon.src = isHidden ? "images/eye-closed.svg" : "images/eye.svg";
  });
});

function validateForm() {
  const passwordsMatch = password.value === confirmPassword.value;

  const showError = confirmPassword.value.trim() !== "" && !passwordsMatch;

  confirmPassword.classList.toggle("input-error", showError);
  passwordError.classList.toggle("show", showError);

  createButton.disabled = !(form.checkValidity() && passwordsMatch);
}

form.addEventListener("input", validateForm);
