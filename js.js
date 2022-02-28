let list = document.querySelectorAll(".list");
  let indicator = document.querySelector(".indicator");
  function addActiveClass() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  }
  list.forEach((item) => item.addEventListener("mouseover", addActiveClass));
  
  function removeActiveClass(){
    list.forEach((item) => item.classList.remove("active"));
    this.classList.remove("active");
  }
  list.forEach((item) => item.addEventListener("mouseout", removeActiveClass));