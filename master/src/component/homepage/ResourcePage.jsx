import React from 'react';
import { useParams } from 'react-router-dom';

function ResourcePage() {
  const { resourceType } = useParams();

  const resourceContent = {
    'lesson-plans': {
      title: 'Lesson Plans',
      description: 'Browse our collection of ready-to-use lesson plans for various subjects and grade levels.',
      content: (
        <div>
          <h3>Featured Lesson Plans:</h3>
          <ul>
            <li>Mathematics: Algebra Basics (Grade 8)</li>
            <li>Science: The Water Cycle (Grade 5)</li>
            <li>Literature: Analyzing Shakespeare's Sonnets (Grade 11)</li>
            <li>History: World War II Overview (Grade 10)</li>
          </ul>
        </div>
      )
    },
    'exam-prep': {
      title: 'Exam Preparation',
      description: 'Access practice tests and study materials for standardized exams.',
      content: (
        <div>
          <h3>Available Exam Resources:</h3>
          <ul>
            <li>SAT Prep Materials</li>
            <li>ACT Study Guides</li>
            <li>AP Exam Practice Tests</li>
            <li>State Standardized Test Preparation</li>
          </ul>
        </div>
      )
    },
    'activities': {
      title: 'Classroom Activities',
      description: 'Discover engaging activities and projects to enhance student learning.',
      content: (
        <div>
          <h3>Popular Activities:</h3>
          <ul>
            <li>Science Fair Project Ideas</li>
            <li>Creative Writing Prompts</li>
            <li>Historical Reenactment Guidelines</li>
            <li>STEM Challenges for All Ages</li>
          </ul>
        </div>
      )
    },
    'consultancy': {
      title: 'Educational Consultancy',
      description: 'Get expert advice on curriculum development and teaching strategies.',
      content: (
        <div>
          <h3>Our Services:</h3>
          <ul>
            <li>Curriculum Assessment and Development</li>
            <li>Teacher Training Workshops</li>
            <li>Educational Technology Integration</li>
            <li>School Improvement Planning</li>
          </ul>
        </div>
      )
    },
    'school-locator': {
      title: 'School Locator',
      description: 'Find schools and educational institutions in your area.',
      content: (
        <div>
          <h3>Search for Schools:</h3>
          <p>Use our interactive map to find schools near you:</p>
          <div className="bg-gray-200 p-4 text-center">
            [Interactive Map Placeholder]
          </div>
        </div>
      )
    }
  };

  const resource = resourceContent[resourceType] || {
    title: 'Resource Not Found',
    description: 'The requested resource does not exist.',
    content: <p>Please check the URL and try again.</p>
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{resource.title}</h1>
      <p className="text-xl mb-6">{resource.description}</p>
      <div className="bg-white shadow-md rounded-lg p-6">
        {resource.content}
      </div>
    </div>
  );
}

export default ResourcePage;
