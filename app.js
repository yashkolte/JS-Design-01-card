var button = document.querySelector("button");
var fact = 0;
button.addEventListener("click", () => {
  if (fact === 0) {
    var timer = setTimeout(function () {
      document.querySelector("p").textContent = "Friend";
      document.querySelector("p").style.color = "rgb(66, 221, 69)";
      document.querySelector("button").textContent = "Cancel";
    }, 2000);

    document.querySelector("p").textContent = "Request Pending";
    document.querySelector("button").textContent = "Send Request";
    fact = 1;
  } else {
    document.querySelector("p").textContent = "Stranger";
    document.querySelector("p").style.color = "rgb(221, 66, 66)";
    document.querySelector("button").textContent = "Send Request";
    clearTimeout(timer);
    fact = 0;
  }
});
