// Cookie popup
const popup = document.getElementById("cookie-popup");
const acceptBtn = document.getElementById("accept-cookies");

if (!localStorage.getItem("cookiesAccepted")) {
  popup.classList.remove("hidden");
}

acceptBtn.addEventListener("click", () => {
  localStorage.setItem("cookiesAccepted", "true");
  popup.classList.add("hidden");
});