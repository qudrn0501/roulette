var content = ["1", "2", "3", "4", "5", "6"];
var rolLength = content.length; //해당 룰렛 콘텐츠 갯수
var setNum; //랜덤숫자 담응ㄹ 변수
var hiddenInput = document.createElement("input");
hiddenInput.className = "hidden-input";

//랜덤숫자부여

const rRandom = () => {
  var min = Math.ceil(0);
  var max = Math.floor(rolLength);
  return Math.floor(Math.random() * (max - min)) + min;
};

const rRotate = () => {
  var panel = document.querySelector(".roulette-frame");
  var btn = document.querySelector(".roulette-btn");
  var deg = [];
  // 룰렛 각도 설정(rolLength = 6)
  for (var i = 1; i <= rolLength; i++) {
    deg.push((360 / rolLength) * i);
  }

  // 랜덤 생성된 숫자를 히든 인풋에 넣기
  document.body.append(hiddenInput);
  setNum = hiddenInput.value = rRandom();

  // 애니메이션 설정
  var num = 0; //회전시킬 횟수
  var ani = setInterval(() => {
    num++; //인터벌 수 만큼 증가
    panel.style.transform = "rotate(" + 360 * num + "deg)";
    // 회전 동안 버튼 이벤트 막기
    btn.disabled = true; //button, input
    btn.style.pointerEvents = "none"; //a태그

    // 총 50에 도달했을 때(마지막 바퀴를 돌고나서)
    if (num === 50) {
      clearInterval(ani); //회전 삭제
      panel.style.transform = `rotate(${deg[setNum]}deg)`; //랜덤숫자로 멈춤
    }
  }, 50);
}

// 정해진 alert 띄우기, custom modal 등
const rLayerPopup = (setNum) => {
  if (setNum == 0) {
    console.log("starbucks R");
  } else if (setNum == 1) {
    console.log("starbucks");
  } else if (setNum == 2) {
    console.log("hamR");
  } else if (setNum == 3) {
    console.log("hamburger");
  } else if (setNum == 4) {
    console.log("cuR");
  } else if (setNum == 5) {
    console.log("cu");
  }
}

// reset
const rReset = (ele) => {
  setTimeout(() => {
    ele.disabled = false;
    ele.style.pointerEvents = "auto";
    rLayerPopup(setNum);
    hiddenInput.remove();
  }, 6000);
}

// 룰렛 이벤트 클릭 버튼
document.querySelector('.roulette-btn').addEventListener('click', function(e){
  console.log("포인트 차감");
  var target = e.target;
  rRotate();
  rReset(target);
});