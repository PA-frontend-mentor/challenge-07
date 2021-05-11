const slideImg = document.querySelector(".writer-img");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const quote = document.querySelector(".quote");
const witerName = document.querySelector(".name");
const writerTitle = document.querySelector(".job-title");

var index = 0;
var len;

fetch("info.json")
  .then((response) => response.json())
  .then((data) => {
    main(data);
  });

const main = ({ data }) => {
  len = data.length;

  leftBtn.addEventListener("click", () => clickHandler("left"));
  rightBtn.addEventListener("click", () => clickHandler("right"));

  const clickHandler = (dir) => {
    if (dir == "right") {
      index++;
      if (index == len) index = 0;
    } else {
      index--;
      if (index < 0) index = len - 1;
    }

    quote.innerText = data[index].quote;
    witerName.innerText = data[index].name;
    writerTitle.innerText = data[index].job;

    slideImg.style.background = `url(${data[index].imgSrc}) no-repeat`;
    slideImg.style.backgroundSize = "cover";
  };
};
