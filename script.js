// Button click
document.getElementById("magicBtn").addEventListener("click", function () {
  this.textContent = "You clicked me!";
  this.style.backgroundColor = "green";
});

// Double-click bonus
document.getElementById("magicBtn").addEventListener("dblclick", function () {
  alert("You double-clicked the button!");
});

// Keypress detection
document.addEventListener("keydown", function (e) {
  document.getElementById("keyDisplay").textContent = You pressed: ${e.key};
});

// Change image in gallery
function changeImage(img) {
  document.getElementById("mainImg").src = img.src;
}

// Tabs
function showTab(id) {
  document.querySelectorAll(".tab-content").forEach(tab => {
    tab.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
}

// Form validation
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const feedback = document.getElementById("formFeedback");

  if (!username  !email  password.length < 8) {
    feedback.textContent = "Please fill out all fields correctly.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Form submitted successfully!";
    feedback.style.color = "green";
  }
}); 