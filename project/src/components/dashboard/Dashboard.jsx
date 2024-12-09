import { useAuth } from '../../context/AuthContext';
import WorkoutForm from './WorkoutForm';
import NutritionForm from './NutritionForm';
import RecommendationPanel from './RecommendationPanel';

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Fitness Tracker</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={logout}
                className="ml-4 px-4 py-2 text-sm text-red-600 hover:text-red-900"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Welcome back, {user?.name || 'User'}!</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
                  <dl className="grid grid-cols-2 gap-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Current Weight</dt>
                      <dd className="mt-1 text-2xl font-semibold text-gray-900">{user?.weight || 0} kg</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Height</dt>
                      <dd className="mt-1 text-2xl font-semibold text-gray-900">{user?.height || 0} cm</dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="space-y-8">
                <WorkoutForm />
                <NutritionForm />
              </div>
            </div>

            <div className="lg:col-span-1">
              <RecommendationPanel fitnessGoal={user?.fitnessGoal || 'weightLoss'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}