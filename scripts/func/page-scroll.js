export function scrollEvent() {
  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    let currentIndex = 0;
    let isScrolling = false; // 중복 스크롤 방지

    function scrollToSection(index) {
      if (index >= 0 && index < sections.length && !isScrolling) {
        isScrolling = true; // 스크롤 중 상태로 변경

        sections[index].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        currentIndex = index; // 현재 인덱스 업데이트

        setTimeout(() => {
          isScrolling = false; // 스크롤이 끝난 후 다시 이벤트 허용
        }, 800); // 💡 부드러운 스크롤 후 1초 동안 중복 방지
      }
    }

    function handleScroll(event) {
      if (isScrolling) return; // 중복 스크롤 방지

      if (event.deltaY > 0) {
        scrollToSection(currentIndex + 1);
      } else {
        scrollToSection(currentIndex - 1);
      }
    }

    // 🎯 `debounce` 적용하여 스크롤 이벤트를 조절
    let debounceTimeout;
    document.addEventListener("wheel", (event) => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => handleScroll(event), 30);
    });

    // 키보드 방향키로도 섹션 이동
    document.addEventListener("keydown", (event) => {
      if (isScrolling) return;

      if (event.key === "ArrowDown") {
        scrollToSection(currentIndex + 1);
      } else if (event.key === "ArrowUp") {
        scrollToSection(currentIndex - 1);
      }
    });
  });
}
