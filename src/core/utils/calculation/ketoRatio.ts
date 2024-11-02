const calculateKetoRatio =
  (quantity: number) =>
  ({
    carbs,
    fats,
    proteins,
  }: {
    carbs: number
    fats: number
    proteins: number
  }) => {
    if (fats === quantity) return "∞"
    if (fats === 0) return "0"

    const ratio = Math.round(100 * (fats / (carbs + proteins))) / 100

    return `${ratio}:1`
  }

export default calculateKetoRatio
