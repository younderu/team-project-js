function submitName() {
  const nameInput = document.getElementById("nameInput").value;
  console.log(nameInput);
  if (!localStorage.getItem("userName")) {
    localStorage.setItem("userName", nameInput);
    document.getElementById("userName").textContent = nameInput;
    document.getElementById("greetingModal").style.display = "none";
  } else {
    document.getElementById("userName").textContent =
      localStorage.getItem("userName");
  }
}

const storedName = localStorage.getItem("userName");
document.getElementById("greetingModal").style.display = "none";
if (storedName) {
  document.getElementById("userName").textContent = storedName;
} else {
  document.getElementById("greetingModal").style.display = "flex";
  const submitBtn = document.getElementById("submit-btn");
  submitBtn.addEventListener("click", submitName);
}



