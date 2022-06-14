let IMAGE_WIDTH;
function imageWidth() {
    if (window.matchMedia("(max-width: 700px)").matches) {
        IMAGE_WIDTH =150;
   }else {
        IMAGE_WIDTH =250;
  }
}
imageWidth();

// tokyo slide
let curPos = 0;
let positionValue = 0;
const backBtn = document.querySelector(".back")
const nextBtn = document.querySelector(".next")
const images = document.querySelector(".images")

function next() {
  if (curPos< 4) {
    backBtn.removeAttribute('disabled')
    positionValue -= IMAGE_WIDTH;
    images.style.transform = `translateX(${positionValue}px)`;
    curPos += 1;
  }
  if (curPos === 4) {
    nextBtn.setAttribute('disabled', 'true')
  }
}
function back() {
  if (curPos > 0) {
    nextBtn.removeAttribute('disabled')
    positionValue += IMAGE_WIDTH;
    images.style.transform = `translateX(${positionValue}px)`;
    curPos -= 1;
  }
  if (curPos === 0) {
    backBtn.setAttribute('disabled', 'true')
  }
}
function init() {
  backBtn.setAttribute('disabled', 'true');
  backBtn.addEventListener("click", back);
  nextBtn.addEventListener("click", next);
}
init();

//tottori slide
let curPos1 = 0;
let positionValue1 = 0;
const backBtn1 = document.querySelector(".back1")
const nextBtn1 = document.querySelector(".next1")
const images1 = document.querySelector(".images1")
function next1() {
  if (curPos1< 4) {
    backBtn1.removeAttribute('disabled')
    positionValue1 -= IMAGE_WIDTH;
    images1.style.transform = `translateX(${positionValue1}px)`;
    curPos1 += 1;
  }
  if (curPos1 === 4) {
    nextBtn1.setAttribute('disabled', 'true')
  }
}
function back1() {
  if (curPos1 > 0) {
    nextBtn1.removeAttribute('disabled')
    positionValue1 += IMAGE_WIDTH;
    images1.style.transform = `translateX(${positionValue1}px)`;
    curPos1 -= 1;
  }
  if (curPos1 === 0) {
    backBtn1.setAttribute('disabled', 'true')
  }
}
function init1() {
  backBtn1.setAttribute('disabled', 'true');
  backBtn1.addEventListener("click", back1);
  nextBtn1.addEventListener("click", next1);
}
init1();

//danang slide
let curPos2 = 0;
let positionValue2 = 0;
const backBtn2 = document.querySelector(".back2")
const nextBtn2 = document.querySelector(".next2")
const images2 = document.querySelector(".images2")
function next2() {
  if (curPos2< 4) {
    backBtn2.removeAttribute('disabled')
    positionValue2 -= IMAGE_WIDTH;
    images2.style.transform = `translateX(${positionValue2}px)`;
    curPos2 += 1;
  }
  if (curPos2 === 4) {
    nextBtn2.setAttribute('disabled', 'true')
  }
}
function back2() {
  if (curPos2 > 0) {
    nextBtn2.removeAttribute('disabled')
    positionValue2 += IMAGE_WIDTH;
    images2.style.transform = `translateX(${positionValue2}px)`;
    curPos2 -= 1;
  }
  if (curPos2 === 0) {
    backBtn2.setAttribute('disabled', 'true')
  }
}
function init2() {
  backBtn2.setAttribute('disabled', 'true');
  backBtn2.addEventListener("click", back2);
  nextBtn2.addEventListener("click", next2);
}
init2();

//seoul slide
let curPos3 = 0;
let positionValue3 = 0;
const backBtn3 = document.querySelector(".back3")
const nextBtn3 = document.querySelector(".next3")
const images3 = document.querySelector(".images3")
function next3() {
  if (curPos3< 4) {
    backBtn3.removeAttribute('disabled')
    positionValue3 -= IMAGE_WIDTH;
    images3.style.transform = `translateX(${positionValue3}px)`;
    curPos3 += 1;
  }
  if (curPos3 === 4) {
    nextBtn3.setAttribute('disabled', 'true')
  }
}
function back3() {
  if (curPos3 > 0) {
    nextBtn3.removeAttribute('disabled')
    positionValue3 += IMAGE_WIDTH;
    images3.style.transform = `translateX(${positionValue3}px)`;
    curPos3 -= 1;
  }
  if (curPos3 === 0) {
    backBtn3.setAttribute('disabled', 'true')
  }
}
function init3() {
  backBtn3.setAttribute('disabled', 'true');
  backBtn3.addEventListener("click", back3);
  nextBtn3.addEventListener("click", next3);
}
init3();
