export function autoScroll() {
  const container = document.getElementById("welcome-page-img-container");
  let position = 0;
  let isPaused = false;

  function slideImages() {
    if (!isPaused) {
      position -= 0.35; // 이동 속도
      container.style.transform = `translateX(${position}px)`;

      if (Math.abs(position) >= container.scrollWidth / 2) {
        position = 0;
      }
    }
    requestAnimationFrame(slideImages);
  }

  // 클릭 중일 때 멈추기
  container.addEventListener("mousedown", (e) => {
    e.preventDefault(); // 드래그 방지
    isPaused = true;
  });

  // 클릭을 놓으면 재개
  container.addEventListener("mouseup", () => {
    isPaused = false;
  });

  // 컨테이너 밖으로 나가면 재개 (드래그 상태에서 벗어나는 경우 방지)
  container.addEventListener("mouseleave", () => {
    isPaused = false;
  });

  // 이미지 복사본 생성 및 슬라이드 시작
  function createInfiniteScroll() {
    const originalImages = Array.from(container.querySelectorAll("img"));
    originalImages.forEach((img) => {
      const clone = img.cloneNode(true);
      container.appendChild(clone);
    });
    slideImages();
  }

  createInfiniteScroll();
}
