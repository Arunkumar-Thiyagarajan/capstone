import { exerciseRecommendations } from '../../utils/exerciseRecommendations';
import { nutritionRecommendations } from '../../utils/nutritionRecommendations';

export default function RecommendationPanel({ fitnessGoal }) {
  const exercises = exerciseRecommendations[fitnessGoal] || [];
  const nutrition = nutritionRecommendations[fitnessGoal] || {};

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Recommended Exercises</h3>
            <div className="grid gap-4">
              {exercises.map((exercise, index) => (
                <div key={index} className="border rounded-md p-3">
                  <h4 className="font-medium">{exercise.name}</h4>
                  <div className="text-sm text-gray-500">
                    <p>Duration: {exercise.duration} minutes</p>
                    <p>Intensity: {exercise.intensity}</p>
                    {exercise.caloriesBurn && <p>Calories: {exercise.caloriesBurn}</p>}
                    {exercise.sets && <p>Sets: {exercise.sets} × {exercise.reps} reps</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nutrition Guide</h3>
            <div className="space-y-4">
              <div className="border rounded-md p-3">
                <p className="font-medium">Daily Calories Target: {nutrition.dailyCalories}</p>
                <div className="mt-2">
                  <p>Protein: {nutrition.macros?.protein.min}-{nutrition.macros?.protein.max}g</p>
                  <p>Carbs: {nutrition.macros?.carbs.min}-{nutrition.macros?.carbs.max}g</p>
                  <p>Fats: {nutrition.macros?.fats.min}-{nutrition.macros?.fats.max}g</p>
                </div>
              </div>

              <div className="border rounded-md p-3">
                <h4 className="font-medium mb-2">Meal Suggestions</h4>
                {nutrition.mealPlan?.map((meal, index) => (
                  <div key={index} className="mb-2">
                    <p className="font-medium capitalize">{meal.type}:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {meal.suggestions.map((suggestion, idx) => (
                        <li key={idx}>{suggestion}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}