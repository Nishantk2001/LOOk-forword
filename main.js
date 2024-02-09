document.getElementById("flip").addEventListener("click", function () {
  var about = document.querySelector(".about");
  var mentor = document.querySelector(".mentor");

  about.style.display = "none";
  mentor.style.display = "block";
});

document.getElementById("back").addEventListener("click", function () {
  var about = document.querySelector(".about");
  var mentor = document.querySelector(".mentor");

  about.style.display = "block";
  mentor.style.display = "none";
});
