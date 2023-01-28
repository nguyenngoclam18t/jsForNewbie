function initClock() {
  var time = new Date();
  var hour = time.getHours();
  var dayNight = "AM";
  if (hour >= 12) {
    hour -= 12;
    dayNight = "PM";
  }
  var showtime = `${hour}:${time.getMinutes()}:${time.getSeconds()} ${dayNight} `;
  var clockHere = document.querySelector("#clock");
  clockHere.textContent = showtime;
}
(function btnParty() {
  var btnPartyChange = document.querySelector("#partyTimeButton");
  var changeImg = document.querySelector("#lolcatImage");
  var changeText = document.querySelector("#timeEvent");
  console.log(changeImg);
  btnPartyChange.onclick = (e) => {
    if (btnPartyChange.style.backgroundColor != "lightblue") {
      btnPartyChange.style.backgroundColor = "lightblue";
      btnPartyChange.textContent = "Party Over!";
      changeImg.src =
        "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
      changeText.textContent = "Good Morning!";
    } else {
      btnPartyChange.style.backgroundColor = "black";
      btnPartyChange.textContent = "Party Time!";

      changeImg.src =
        "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
      changeText.textContent = "LET'S PARTY!";
    }
  };
})();
setInterval(initClock, 100);
