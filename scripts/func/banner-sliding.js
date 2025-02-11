export function bannerSlider() {
  let currentBannerIndex = 0;
  const banners = document.querySelectorAll(".banner");

  // 첫 번째 배너만 표시
  banners[currentBannerIndex].style.display = "block";

  // 일정 시간마다 배너 교체
  setInterval(() => {
    banners[currentBannerIndex].style.display = "none"; // 현재 배너 숨기기
    currentBannerIndex = (currentBannerIndex + 1) % banners.length; // 다음 배너 인덱스 계산
    banners[currentBannerIndex].style.display = "block"; // 다음 배너 표시
  }, 3000); // 3초마다 교체
}
