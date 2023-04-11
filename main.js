const freeSpace = document.querySelector("#freeSpace");
const buttons = document.querySelectorAll("button");
buttons.forEach((el) => {
  el.addEventListener("click", (e) => {
    const value = e.target.textContent;
    switch (value) {
      case "C":
        freeSpace.textContent = " ";
        break;
      case "DEL":
        freeSpace.textContent = freeSpace.textContent.slice(0, -1);
        break;
      case "=":
        try {
          freeSpace.textContent = eval(freeSpace.textContent);
        } catch (err) {
          freeSpace.textContent = "TOGRI YOZING";
        }
        break
      default:
        freeSpace.textContent += value;
    }
  });
});
