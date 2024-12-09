import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Required'),
  height: Yup.number().required('Required'),
  weight: Yup.number().required('Required'),
  fitnessGoal: Yup.string().required('Required'),
});

export const workoutSchema = Yup.object().shape({
  exercise: Yup.string().required('Required'),
  duration: Yup.number().required('Required'),
  intensity: Yup.string().required('Required'),
  caloriesBurned: Yup.number().required('Required'),
});

export const nutritionSchema = Yup.object().shape({
  mealType: Yup.string().required('Required'),
  food: Yup.string().required('Required'),
  calories: Yup.number().required('Required'),
  protein: Yup.number().required('Required'),
  carbs: Yup.number().required('Required'),
  fats: Yup.number().required('Required'),
});