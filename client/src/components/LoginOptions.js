import React from "react";
import { useNavigate } from "react-router-dom";

const LoginOptions = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Onscreen Answersheet Evaluation System
          </h1>
          <p className="mt-2 text-lg text-gray-600 text-center">
            Choose your login option to proceed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"> {/* Modified grid-cols and gap */}
          {/* Admin Card */}
          <div
            className="login-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => navigate("/adminlogin")}
          >
            <div className="px-6 pt-8 pb-2 text-center">
              <div className="icon text-6xl mb-4 text-blue-500">👤</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Admin</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Oversee the evaluation process, manage users, and access analytics dashboards.
              </p>
            </div>
            <div className="bg-gray-50 px-6 py-4 text-center border-t border-gray-200">
              <span className="text-blue-500 font-medium">Login as Admin</span>
            </div>
          </div>

          {/* Evaluator Card */}
          <div
            className="login-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => navigate("/evaluatorlogin")}
          >
            <div className="px-6 pt-8 pb-2 text-center">
              <div className="icon text-6xl mb-4 text-green-500">📋</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Evaluator</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Review answer sheets, add annotations, and calculate scores efficiently.
              </p>
            </div>
            <div className="bg-gray-50 px-6 py-4 text-center border-t border-gray-200">
              <span className="text-green-500 font-medium">Login as Evaluator</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginOptions;