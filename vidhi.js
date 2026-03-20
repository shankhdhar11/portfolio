window.addEventListener("load", () => {
  document.getElementById("photo").classList.add("show");
  document.getElementById("container2").classList.add("disclose");

  document.querySelectorAll(".main").forEach(el => {
    el.classList.add("disclose2");
  });
  document.querySelectorAll(".main2").forEach(el => {
    el.classList.add("disclose2");
  });
  

});
