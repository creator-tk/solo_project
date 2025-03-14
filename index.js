const logo = document.getElementById("logo");
const getService = document.getElementById("service");
const mainPage = document.getElementById("main_page");
const servicePage = document.getElementById("service_page");

getService.addEventListener("click", () => {
  mainPage.classList.add("hide_content");
  servicePage.classList.remove("hide_content");
  servicePage.classList.remove("service_page")
});

logo.addEventListener("click", ()=>{
  mainPage.classList.remove("hide_content");
  servicePage.classList.add("hide_content");
})