export type Profile = {
  uuid?: string
  userUuid?: string
  firstname: string
  shareCode?: string
  avatarColor?: "blue" | "pink" | "purple" | "green" | "orange"
  caloriesPerDay: number
} & (
  | {
      dietType: "atkins"
      carbsPerDay: number
    }
  | {
      dietType: "ketogenic"
      fatsPerDay: number
      proteinsPerDay: number
      carbsPerDay: number
    }
)
