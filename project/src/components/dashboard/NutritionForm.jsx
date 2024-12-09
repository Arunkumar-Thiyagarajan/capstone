import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const nutritionSchema = Yup.object().shape({
  mealType: Yup.string().required('Required'),
  food: Yup.string().required('Required'),
  calories: Yup.number().required('Required'),
  protein: Yup.number().required('Required'),
  carbs: Yup.number().required('Required'),
  fats: Yup.number().required('Required'),
});

export default function NutritionForm() {
  const handleSubmit = (values) => {
    console.log(values);
    // TODO: Implement nutrition logging logic
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Log Nutrition</h2>
      <Formik
        initialValues={{
          mealType: '',
          food: '',
          calories: '',
          protein: '',
          carbs: '',
          fats: '',
        }}
        validationSchema={nutritionSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div>
              <Field
                as="select"
                name="mealType"
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select Meal Type</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snack">Snack</option>
              </Field>
              {errors.mealType && touched.mealType && (
                <div className="text-red-500 text-sm">{errors.mealType}</div>
              )}
            </div>

            <div>
              <Field
                name="food"
                type="text"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Food item"
              />
              {errors.food && touched.food && (
                <div className="text-red-500 text-sm">{errors.food}</div>
              )}
            </div>

            <div>
              <Field
                name="calories"
                type="number"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Calories"
              />
              {errors.calories && touched.calories && (
                <div className="text-red-500 text-sm">{errors.calories}</div>
              )}
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <Field
                  name="protein"
                  type="number"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Protein (g)"
                />
                {errors.protein && touched.protein && (
                  <div className="text-red-500 text-sm">{errors.protein}</div>
                )}
              </div>

              <div>
                <Field
                  name="carbs"
                  type="number"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Carbs (g)"
                />
                {errors.carbs && touched.carbs && (
                  <div className="text-red-500 text-sm">{errors.carbs}</div>
                )}
              </div>

              <div>
                <Field
                  name="fats"
                  type="number"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Fats (g)"
                />
                {errors.fats && touched.fats && (
                  <div className="text-red-500 text-sm">{errors.fats}</div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
            >
              Log Nutrition
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}