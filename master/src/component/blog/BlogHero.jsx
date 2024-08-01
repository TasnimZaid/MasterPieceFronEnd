import React from 'react';


const BlogLayout = () => {
  return (
    <div className="container mx-auto  py-8 flex">
      <main className="w-screen pr-12">
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="/path-to-image.jpg" alt="Educational concept" className="w-full h-64 object-cover" />
          <div className="p-6">
            <span className="bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-full">Inspiration</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">5 Easy Ways You Can Improve Student Engagement</h2>
            <p className="text-gray-600">Karen Doe • 29 March 2024</p>
          </div>
        </article>
      </main>
      
      <aside className="w-2/3">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex mb-4">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-l-lg">Popular</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-r-lg">Recent</button>
          </div>
          <div className="space-y-4">
            {['Effective Classroom Management Techniques', 
              'Integrating Technology in Education', 
              'Creating Inclusive Learning Environments', 
              'Strategies for Student-Centered Learning' ,
            "1" ].map((title, index) => (
              <div key={index} className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-gray-600 text-sm">29 March 2024</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default BlogLayout;