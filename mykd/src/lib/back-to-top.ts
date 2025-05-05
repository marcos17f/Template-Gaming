export default function BackToTop(value: string) {
  const result = document.querySelector(value) as HTMLElement;
  if (result) {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        result.classList.add('open')
      } else {
        result.classList.remove('open')
      }
    });
    result.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}
