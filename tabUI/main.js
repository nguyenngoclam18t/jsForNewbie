const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

tabs.forEach((element, index) => {
  const pane = panes[index];
  element.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");
    this.classList.add("active");
    pane.classList.add("active");
    const tabActive = $(".tab-item.active");
    const line = $(".tabs .line");
    line.style.left = tabActive.offsetLeft + "px";
    line.style.width = tabActive.offsetWidth + "px";
  };
});
var a = 1,
  b = 2;

console.log(a + b);
