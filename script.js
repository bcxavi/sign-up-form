const toggleButtons = document.querySelectorAll(".toggle-password");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const wrapper = button.parentElement;
    const input = wrapper.querySelector("input");
    const icon = button.querySelector("img");

    const isHidden = input.type === "password";

    input.type = isHidden ? "text" : "password";

    icon.src = isHidden
      ? "images/eye-closed.svg"
      : "images/eye.svg";
  });
});