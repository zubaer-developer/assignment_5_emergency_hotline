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

    // for heart icon color change
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
    icon.style.color = "red";
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
    // console.log(callButton);

    if (updateCoin < 20) {
      alert("Not enough coins");
      return;
    }
    const card = callButton.parentElement.parentElement;
    console.log(card);

    const serviceName = card.getElementsByClassName("card-title")[0].innerText;
    const serviceNumber =
      card.getElementsByClassName("card-number")[0].innerText;
    // console.log(serviceNumber);
    alert("ServiceName: " + serviceName + "\n" + "Number: " + serviceNumber);

    // update coin
    updateCoin = updateCoin - 20;
    coinCounts.innerText = updateCoin;
    // call history empty
    document.getElementById("no-call-history").style.display = "none";

    // get current time
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const timeString = hours + ":" + minutes + ":" + seconds;

    // call history entry

    // call history section
    const callHistorySection = document.getElementById("call-history");
    const historyEntry = document.createElement("div");
    historyEntry.innerText =
      serviceName + " - " + serviceNumber + "  |  Called at: " + timeString;
    callHistorySection.appendChild(historyEntry);
    historyEntry.className = "new-history p-2 border-b border-gray-300";
  });
}

// History Clear
const clearButton = document.getElementById("clear-button");

clearButton.addEventListener("click", function () {
  const callHistorySection = document.getElementById("call-history");

  const historyEntries =
    callHistorySection.getElementsByClassName("new-history");

  for (let i = historyEntries.length - 1; i >= 0; i--) {
    historyEntries[i].remove();
  }

  document.getElementById("no-call-history").style.display = "block";
});

// Copy Button Click
const copyButtons = document.getElementsByClassName("copy-btn");

const copyCountSpan = document
  .getElementsByClassName("copy")[0]
  .getElementsByTagName("span")[0];
let copyCount = 2;

for (const button of copyButtons) {
  if (button.innerHTML.includes("fa-copy")) {
    button.addEventListener("click", function () {
      const card = button.parentElement.parentElement;
      const number = card.getElementsByClassName("card-number")[0].innerText;

      navigator.clipboard.writeText(number);

      alert("Number " + number + " copied!");

      // copy count increase
      copyCount++;
      copyCountSpan.innerText = copyCount;
    });
  }
}
