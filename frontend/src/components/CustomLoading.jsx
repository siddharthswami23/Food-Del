import React from "react";

function CustomLoading({ loading }) {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6">
        <div className="mb-4">
          <p className="text-md text-gray-600">
            Your order is being processed. This may take a few minutes
          </p>
        </div>
        <div className="flex flex-col items-center my-6 justify-center">
          <img
            src="/loading.gif"
            alt="Loading animation"
            className="w-24 h-24"
          />
          <h2 className="mt-4 text-xl font-medium text-gray-700">
            Please wait while we prepare your order...
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CustomLoading;
