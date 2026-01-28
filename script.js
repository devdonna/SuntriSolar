function showSidebar() {
  document.querySelector(".sidebar").style.display = "flex";
}

function hideSidebar() {
  document.querySelector(".sidebar").style.display = "none";
}


// ===============================
// EMAILJS CONTACT FORM
// ===============================
(function () {
  emailjs.init("4UpdpwrImvSZVg4EY"); // 🔴 replace with real key
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (!form || !status) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    status.style.color = "#333";
    status.textContent = "Sending message...";

    emailjs
      .sendForm(
        "service_uxpqpu7",   // 🔴 replace
        "template_8cipinu",  // 🔴 replace
        form
      )
      .then(() => {
        status.style.color = "green";
        status.textContent = "Message sent successfully!";
        form.reset();
      })
      .catch((error) => {
        status.style.color = "red";
        status.textContent = "Failed to send message.";
        console.error("EmailJS Error:", error);
      });
  });
});


document.getElementById("year").textContent = new Date().getFullYear();