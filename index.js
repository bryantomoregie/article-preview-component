/* Display non eon image and on text*/

const shareIcon = document.querySelector(".img-wrapper");

const details = document.querySelector(".details__image");
const info = document.querySelector(".info");
const toggleArray = [details, info];

console.log(info.style.display);

const theSwap = () => {
  toggleArray.forEach((element) => {
    if (element.style.display !== "none") {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  });
};

shareIcon.addEventListener("click", theSwap);
