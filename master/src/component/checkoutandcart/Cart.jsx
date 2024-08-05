import React from 'react';

const ShoppingCart = () => {
  return (
    <section className="relative h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-1/2 bg-cover bg-center" 
        style={{ backgroundImage: 'url("https://example.com/hero-background.jpg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Welcome to Our Store</h1>
        </div>
      </div>

      {/* Shopping Cart Section */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-t-lg w-full max-w-4xl mt-40">
        <div className="container py-5">
          <div className="flex justify-center items-center">
            <div className="w-full">
              <div className="p-5">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-2/3">
                    <div className="p-5">
                      <div className="flex justify-between items-center mb-5">
                        <h1 className="text-2xl font-bold">Shopping Cart</h1>
                        <h6 className="text-muted">5 items</h6>
                      </div>
                      <hr className="my-4" />

                      {/* Item 1: Activity */}
                      <div className="flex flex-wrap mb-4 items-center justify-between">
                        <div className="w-1/6 lg:w-1/12">
                          <img
                            src="https://example.com/activity1.jpg"
                            className="w-full h-auto rounded-lg"
                            alt="Activity 1"
                          />
                        </div>
                        <div className="w-1/3 lg:w-1/4">
                          <h6 className="text-gray-500">Activity</h6>
                          <h6 className="font-semibold">Creative Writing Workshop</h6>
                        </div>
                        <div className="w-1/3 lg:w-1/4 flex items-center">
                          <button
                            className="px-2 text-gray-600 hover:text-gray-800"
                            onClick={() => {
                              const input = document.getElementById('quantity1');
                              input.stepDown();
                            }}
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                          <input
                            id="quantity1"
                            min="0"
                            name="quantity"
                            defaultValue="1"
                            type="number"
                            className="w-16 border border-gray-300 rounded-md text-center"
                          />
                          <button
                            className="px-2 text-gray-600 hover:text-gray-800"
                            onClick={() => {
                              const input = document.getElementById('quantity1');
                              input.stepUp();
                            }}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <div className="w-1/3 lg:w-1/6">
                          <h6 className="font-semibold">€ 50.00</h6>
                        </div>
                        <div className="w-1/6 lg:w-1/12 text-right">
                          <a href="#!" className="text-gray-500 hover:text-gray-800">
                            <i className="fas fa-times"></i>
                          </a>
                        </div>
                      </div>

                      {/* Item 2: Resource */}
                      <div className="flex flex-wrap mb-4 items-center justify-between">
                        <div className="w-1/6 lg:w-1/12">
                          <img
                            src="https://example.com/resource1.jpg"
                            className="w-full h-auto rounded-lg"
                            alt="Resource 1"
                          />
                        </div>
                        <div className="w-1/3 lg:w-1/4">
                          <h6 className="text-gray-500">Resource</h6>
                          <h6 className="font-semibold">Mathematics Textbook</h6>
                        </div>
                        <div className="w-1/3 lg:w-1/4 flex items-center">
                          <button
                            className="px-2 text-gray-600 hover:text-gray-800"
                            onClick={() => {
                              const input = document.getElementById('quantity2');
                              input.stepDown();
                            }}
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                          <input
                            id="quantity2"
                            min="0"
                            name="quantity"
                            defaultValue="1"
                            type="number"
                            className="w-16 border border-gray-300 rounded-md text-center"
                          />
                          <button
                            className="px-2 text-gray-600 hover:text-gray-800"
                            onClick={() => {
                              const input = document.getElementById('quantity2');
                              input.stepUp();
                            }}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <div className="w-1/3 lg:w-1/6">
                          <h6 className="font-semibold">€ 30.00</h6>
                        </div>
                        <div className="w-1/6 lg:w-1/12 text-right">
                          <a href="#!" className="text-gray-500 hover:text-gray-800">
                            <i className="fas fa-times"></i>
                          </a>
                        </div>
                      </div>

                      {/* Item 3: Consultation */}
                      <div className="flex flex-wrap mb-4 items-center justify-between">
                        <div className="w-1/6 lg:w-1/12">
                          <img
                            src="https://example.com/consultation1.jpg"
                            className="w-full h-auto rounded-lg"
                            alt="Consultation 1"
                          />
                        </div>
                        <div className="w-1/3 lg:w-1/4">
                          <h6 className="text-gray-500">Consultation</h6>
                          <h6 className="font-semibold">One-on-One Tutoring Session</h6>
                        </div>
                        <div className="w-1/3 lg:w-1/4 flex items-center">
                          <button
                            className="px-2 text-gray-600 hover:text-gray-800"
                            onClick={() => {
                              const input = document.getElementById('quantity3');
                              input.stepDown();
                            }}
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                          <input
                            id="quantity3"
                            min="0"
                            name="quantity"
                            defaultValue="1"
                            type="number"
                            className="w-16 border border-gray-300 rounded-md text-center"
                          />
                          <button
                            className="px-2 text-gray-600 hover:text-gray-800"
                            onClick={() => {
                              const input = document.getElementById('quantity3');
                              input.stepUp();
                            }}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <div className="w-1/3 lg:w-1/6">
                          <h6 className="font-semibold">€ 100.00</h6>
                        </div>
                        <div className="w-1/6 lg:w-1/12 text-right">
                          <a href="#!" className="text-gray-500 hover:text-gray-800">
                            <i className="fas fa-times"></i>
                          </a>
                        </div>
                      </div>

                      {/* Add more items as needed */}
                      {/* ... */}

                      <hr className="my-4" />

                      <div className="pt-5">
                        <h6 className="mb-0">
                          <a href="#!" className="text-blue-500 hover:underline">
                            <i className="fas fa-long-arrow-alt-left mr-2"></i>Back to shop
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/3 bg-gray-100">
                    <div className="p-5">
                      <h3 className="text-2xl font-bold mb-5">Summary</h3>
                      <hr className="my-4" />

                      <div className="flex justify-between mb-4">
                        <h5 className="text-uppercase">Items 5</h5>
                        <h5>€ 330.00</h5>
                      </div>

                      <h5 className="text-uppercase mb-3">Shipping</h5>
                      <div className="mb-4 pb-2">
                        <select className="w-full border border-gray-300 rounded-md p-2">
                          <option value="1">Standard Delivery - €5.00</option>
                          <option value="2">Express Delivery - €10.00</option>
                        </select>
                      </div>

                      <h5 className="text-uppercase mb-3">Give code</h5>
                      <div className="mb-5">
                        <div className="relative">
                          <input
                            type="text"
                            id="discountCode"
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                          <label
                            className="absolute left-3 top-2 text-gray-500"
                            htmlFor="discountCode"
                          >
                            Enter your code
                          </label>
                        </div>
                      </div>

                      <hr className="my-4" />

                      <div className="flex justify-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>€ 335.00</h5>
                      </div>

                      <button
                        type="button"
                        className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
