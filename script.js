// script.js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("feedbackForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const feedback = form.feedback.value.trim();
      if (feedback) {
        alert("Thank you for your feedback!");
        form.reset();
      } else {
        alert("Please enter your feedback.");
      }
    });
  }
});
