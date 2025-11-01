document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const forgotForm = document.getElementById("forgotForm");

  const showMessage = (message, type = "error") => {
    const messageBox = document.getElementById("formMessage");
    messageBox.textContent = message;
    messageBox.className = `message ${type}`;
  };

  /* ===== PASSWORD TOGGLE ===== */
  document.querySelectorAll(".toggle-password").forEach((icon) => {
    icon.addEventListener("click", () => {
      const input = icon.previousElementSibling;
      input.type = input.type === "password" ? "text" : "password";
      icon.textContent = input.type === "password" ? "👁️" : "🙈";
    });
  });

  /* ===== PASSWORD STRENGTH METER ===== */
  const passwordInput = document.getElementById("password");
  const strengthBar = document.getElementById("strength-bar");
  const strengthText = document.getElementById("strength-text");

  if (passwordInput) {
    passwordInput.addEventListener("input", () => {
      const value = passwordInput.value;
      let strength = 0;

      if (value.match(/[a-z]+/)) strength++;
      if (value.match(/[A-Z]+/)) strength++;
      if (value.match(/[0-9]+/)) strength++;
      if (value.match(/[$@#&!]+/)) strength++;
      if (value.length > 8) strength++;

      switch (strength) {
        case 0:
          strengthBar.style.width = "0";
          strengthText.textContent = "";
          break;
        case 1:
          strengthBar.style.width = "20%";
          strengthBar.style.background = "red";
          strengthText.textContent = "Weak";
          break;
        case 2:
          strengthBar.style.width = "40%";
          strengthBar.style.background = "orange";
          strengthText.textContent = "Fair";
          break;
        case 3:
          strengthBar.style.width = "60%";
          strengthBar.style.background = "yellow";
          strengthText.textContent = "Good";
          break;
        case 4:
          strengthBar.style.width = "80%";
          strengthBar.style.background = "lightgreen";
          strengthText.textContent = "Strong";
          break;
        case 5:
          strengthBar.style.width = "100%";
          strengthBar.style.background = "green";
          strengthText.textContent = "Very Strong";
          break;
      }
    });
  }

  /* ===== REMEMBER ME ===== */
  const rememberMe = document.getElementById("rememberMe");
  const loginEmail = document.getElementById("loginEmail");

  if (rememberMe && loginEmail) {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) loginEmail.value = savedEmail;

    rememberMe.addEventListener("change", () => {
      if (rememberMe.checked) {
        localStorage.setItem("rememberedEmail", loginEmail.value);
      } else {
        localStorage.removeItem("rememberedEmail");
      }
    });
  }

  /* ===== LOGIN FORM ===== */
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = loginEmail.value.trim();
      const password = document.getElementById("loginPassword").value.trim();

      if (!email || !password) {
        showMessage("Please fill in all fields.");
        return;
      }

      showMessage("✅ Login successful! Redirecting...", "success");
      setTimeout(() => (window.location.href = "dashboard.html"), 1500);
    });
  }

  /* ===== REGISTER FORM ===== */
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const password = document.getElementById("password").value.trim();
      const confirmPassword = document.getElementById("confirmPassword").value.trim();
      const terms = document.getElementById("terms").checked;

      if (!username || !email || !phone || !password || !confirmPassword) {
        showMessage("Please fill in all fields.");
        return;
      }

      if (password !== confirmPassword) {
        showMessage("Passwords do not match.");
        return;
      }

      if (!terms) {
        showMessage("Please accept the Terms & Conditions.");
        return;
      }

      showMessage("🎉 Registration successful! Redirecting...", "success");
      setTimeout(() => (window.location.href = "login.html"), 2000);
    });
  }

  /* ===== FORGOT PASSWORD ===== */
  if (forgotForm) {
    forgotForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = forgotForm.querySelector("input[type='email']").value.trim();
      if (!email) {
        showMessage("Please enter your email address.");
        return;
      }
      showMessage("📨 Reset link sent to your email!", "success");
    });
  }
    /* ===== NAVBAR TOGGLE ===== */
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");

  if (menuIcon && navLinks) {
    menuIcon.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  /* ===== NAVBAR TOGGLE ===== */
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

if (menuIcon && navLinks) {
  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

  }


});
