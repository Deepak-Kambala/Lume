//Check if each element exists before adding event listeners to getrid from this error : Uncaught TypeError TypeError: Cannot read properties of null (reading 'addEventListener')
document.addEventListener("DOMContentLoaded", function () {
  // Pulse animation for notification icon
  const notificationIcon = document.querySelector(".nav-item:nth-child(5) i");
  function pulseNotification() {
    if (notificationIcon) {
      notificationIcon.style.transform = "scale(1.2)";
      notificationIcon.style.color = "var(--primary-color)";
      setTimeout(() => {
        notificationIcon.style.transform = "scale(1)";
        notificationIcon.style.color = "";
      }, 500);
    }
  }
  // Pulse every 10 seconds
  setInterval(pulseNotification, 10000);

  // Like button interaction
  const likeButtons = document.querySelectorAll(".feed-action:nth-child(1)");
  likeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const icon = this.querySelector("i");
      if (icon.classList.contains("far")) {
        icon.classList.remove("far");
        icon.classList.add("fas");
        icon.style.color = "var(--primary-color)";
      } else {
        icon.classList.remove("fas");
        icon.classList.add("far");
        icon.style.color = "";
      }
    });
  });

  // Post input focus
  const postInput = document.querySelector(".post-input");
  if (postInput) {
    postInput.addEventListener("focus", function () {
      this.style.backgroundColor = "white";
      this.style.boxShadow = "0 0 0 2px var(--secondary-color)";
    });

    postInput.addEventListener("blur", function () {
      this.style.backgroundColor = "#f5f5f5";
      this.style.boxShadow = "none";
    });
  }

  // Create group button
  const createGroup = document.querySelector(".create-group");
  if (createGroup) {
    createGroup.addEventListener("click", function () {
      alert(
        "Group creation feature coming soon! You will be able to create custom research communities with inbuilt video calling for collaboration."
      );
    });
  }

  // View all opportunities
  const viewAll = document.querySelector(".view-all");
  if (viewAll) {
    viewAll.addEventListener("click", function (e) {
      e.preventDefault();
      alert(
        "This will show all available research opportunities from universities that have partnered with our platform."
      );
    });
  }
});
