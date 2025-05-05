
export const animationCreate = async () => {
  if (typeof window !== "undefined") {
    const wow = await import('wow.js')
    new wow.default().init()
  }
};