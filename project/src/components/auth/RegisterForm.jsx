import { Formik, Form, Field } from 'formik';
import { Link, Navigate } from 'react-router-dom';
import { registerSchema } from '../../utils/validation';
import { useAuth } from '../../context/AuthContext';

export default function RegisterForm() {
  const { user, register } = useAuth();

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = (values, { setSubmitting }) => {
    register(values);
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            height: '',
            weight: '',
            fitnessGoal: '',
          }}
          validationSchema={registerSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm space-y-4">
                <div>
                  <Field
                    name="name"
                    type="text"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Full name"
                  />
                  {errors.name && touched.name && (
                    <div className="text-red-500 text-sm mt-1">{errors.name}</div>
                  )}
                </div>
                <div>
                  <Field
                    name="email"
                    type="email"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Email address"
                  />
                  {errors.email && touched.email && (
                    <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                  )}
                </div>
                <div>
                  <Field
                    name="password"
                    type="password"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Password"
                  />
                  {errors.password && touched.password && (
                    <div className="text-red-500 text-sm mt-1">{errors.password}</div>
                  )}
                </div>
                <div>
                  <Field
                    name="height"
                    type="number"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Height (cm)"
                  />
                  {errors.height && touched.height && (
                    <div className="text-red-500 text-sm mt-1">{errors.height}</div>
                  )}
                </div>
                <div>
                  <Field
                    name="weight"
                    type="number"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Weight (kg)"
                  />
                  {errors.weight && touched.weight && (
                    <div className="text-red-500 text-sm mt-1">{errors.weight}</div>
                  )}
                </div>
                <div>
                  <Field
                    as="select"
                    name="fitnessGoal"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Select Fitness Goal</option>
                    <option value="weightLoss">Weight Loss</option>
                    <option value="muscleGain">Muscle Gain</option>
                    <option value="endurance">Endurance</option>
                  </Field>
                  {errors.fitnessGoal && touched.fitnessGoal && (
                    <div className="text-red-500 text-sm mt-1">{errors.fitnessGoal}</div>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                  Sign up
                </button>
              </div>

              <div className="text-center">
                <Link to="/login" className="text-indigo-600 hover:text-indigo-500">
                  Already have an account? Sign in
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}