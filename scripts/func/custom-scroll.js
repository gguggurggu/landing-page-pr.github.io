export function customScroll() {
  console.log("customScroll is running");
  window.addEventListener("scroll", () => {
    console.log("scroll event triggered");
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    const indicator = document.querySelector(".scroll-indicator span");
    if (indicator) {
      indicator.style.width = scrollPercent + "%";
    }
  });
}
