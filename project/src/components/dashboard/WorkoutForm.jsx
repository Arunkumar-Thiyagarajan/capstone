import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const workoutSchema = Yup.object().shape({
  exercise: Yup.string().required('Required'),
  duration: Yup.number().required('Required'),
  intensity: Yup.string().required('Required'),
  caloriesBurned: Yup.number().required('Required'),
});

export default function WorkoutForm() {
  const handleSubmit = (values) => {
    console.log(values);
    // TODO: Implement workout logging logic
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Log Workout</h2>
      <Formik
        initialValues={{
          exercise: '',
          duration: '',
          intensity: '',
          caloriesBurned: '',
        }}
        validationSchema={workoutSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div>
              <Field
                name="exercise"
                type="text"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Exercise name"
              />
              {errors.exercise && touched.exercise && (
                <div className="text-red-500 text-sm">{errors.exercise}</div>
              )}
            </div>

            <div>
              <Field
                name="duration"
                type="number"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Duration (minutes)"
              />
              {errors.duration && touched.duration && (
                <div className="text-red-500 text-sm">{errors.duration}</div>
              )}
            </div>

            <div>
              <Field
                as="select"
                name="intensity"
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select Intensity</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Field>
              {errors.intensity && touched.intensity && (
                <div className="text-red-500 text-sm">{errors.intensity}</div>
              )}
            </div>

            <div>
              <Field
                name="caloriesBurned"
                type="number"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Calories burned"
              />
              {errors.caloriesBurned && touched.caloriesBurned && (
                <div className="text-red-500 text-sm">{errors.caloriesBurned}</div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
            >
              Log Workout
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}