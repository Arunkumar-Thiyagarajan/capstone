export const nutritionRecommendations = {
  weightLoss: {
    dailyCalories: 1800,
    macros: {
      protein: { min: 130, max: 150 },
      carbs: { min: 150, max: 200 },
      fats: { min: 40, max: 60 },
    },
    mealPlan: [
      { type: 'breakfast', suggestions: ['Oatmeal with berries', 'Greek yogurt with nuts'] },
      { type: 'lunch', suggestions: ['Grilled chicken salad', 'Quinoa bowl with vegetables'] },
      { type: 'dinner', suggestions: ['Baked fish with vegetables', 'Turkey and sweet potato'] },
    ],
  },
  muscleGain: {
    dailyCalories: 3000,
    macros: {
      protein: { min: 180, max: 200 },
      carbs: { min: 300, max: 350 },
      fats: { min: 65, max: 80 },
    },
    mealPlan: [
      { type: 'breakfast', suggestions: ['Protein smoothie with oats', 'Eggs and whole grain toast'] },
      { type: 'lunch', suggestions: ['Chicken rice bowl', 'Tuna pasta'] },
      { type: 'dinner', suggestions: ['Steak with potatoes', 'Salmon with quinoa'] },
    ],
  },
  endurance: {
    dailyCalories: 2500,
    macros: {
      protein: { min: 150, max: 170 },
      carbs: { min: 250, max: 300 },
      fats: { min: 55, max: 70 },
    },
    mealPlan: [
      { type: 'breakfast', suggestions: ['Banana pancakes', 'Overnight oats'] },
      { type: 'lunch', suggestions: ['Mediterranean bowl', 'Whole grain wrap'] },
      { type: 'dinner', suggestions: ['Lean protein with rice', 'Pasta with vegetables'] },
    ],
  },
};