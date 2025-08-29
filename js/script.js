// Heart Click
const heartIcons = document.getElementsByClassName("heart-icon");
// console.log(heartIcons);
let heartCount = 0;
// console.log(heartCount);
const updateHeartCount = document.getElementById("update-heart");
// console.log(updateHeartCount);
for (const icon of heartIcons) {
  icon.addEventListener("click", function () {
    heartCount++;
    updateHeartCount.innerText = heartCount;
  });
}

// Coin Count
const coinCounts = document.getElementById("coin-count");
// console.log(coinCount);
const callButtons = document.getElementsByClassName("btn-success");
// console.log(callButtons);
let updateCoin = 100;
// console.log(updateCoin);
for (const callButton of callButtons) {
  callButton.addEventListener("click", function () {
    if (updateCoin < 20) {
      alert("Not enough coins");
      return;
    }
    updateCoin = updateCoin -20;
    coinCounts.innerText = updateCoin
    
  });
}
