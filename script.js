const toggleButtons = document.querySelectorAll(".toggle-password");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const wrapper = button.parentElement;
    const input = wrapper.querySelector("input");
    const icon = button.querySelector("img");

    const isHidden = input.type === "password";

    input.type = isHidden ? "text" : "password";

    icon.src = isHidden ? "images/eye-closed.svg" : "images/eye.svg";
  });
});

const form = document.querySelector(".signup-form");

const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

const button = document.querySelector(".create-account-btn");
const passwordError = document.querySelector(".password-error");

function validateForm() {
  const allFilled =
    firstName.value.trim() !== "" &&
    lastName.value.trim() !== "" &&
    email.value.trim() !== "" &&
    phone.value.trim() !== "" &&
    password.value.trim() !== "" &&
    confirmPassword.value.trim() !== "";

  const passwordsMatch = password.value === confirmPassword.value;

  const shouldShowPasswordError =
    confirmPassword.value.trim() !== "" && !passwordsMatch;

  if (shouldShowPasswordError) {
    confirmPassword.classList.add("input-error");
    passwordError.style.display = "block";
  } else {
    confirmPassword.classList.remove("input-error");
    passwordError.style.display = "none";
  }

  button.disabled = !(allFilled && passwordsMatch);
}

form.addEventListener("input", validateForm);
