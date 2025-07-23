document.getElementById("menu-btn").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    // Toggle display
    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });