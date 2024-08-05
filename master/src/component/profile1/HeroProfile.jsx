import React from 'react';
import pg from "./assets/bg.jpg";
import israa from "./assets/israa.jpg";

const TeacherProfile = () => {
  return (
    <div className="bg-gray-100 min-h-screen mt-20">
      {/* Main Content */}
      <div className="ml-16 p-6 flex">
        <div className="w-2/3 pr-6">
          {/* Profile Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <img src={pg} alt="Background" className="w-full h-full object-cover" />
              <img src={israa} alt="Teacher" className="absolute -bottom-10 left-6 w-24 h-24 rounded-full border-4 border-white" />
            </div>
            <div className="pt-16 px-6 pb-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h1 className="text-2xl font-bold">إسراء أبو سيف</h1>
                  <p className="text-gray-600">مستشارة ومدربة معلمين</p>
                  <p className="text-gray-500">Location</p>
                </div>
                <button className="bg-[#6f2646] text-white px-4 py-2 rounded-md hover:bg-indigo-700">Send Message</button>
              </div>
              <div className="flex space-x-2 mb-4">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Teaching</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Consulting</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Training</span>
              </div>
            </div>
          </div>

          {/* About Me */}
          <div className="mt-6 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">About Me</h2>
            <p className="mb-4">إسمي إسراء أبو سيف، وأنا مستشارة ومدربة معلمين شغوفة بمهنة التدريس.</p>
            <p className="mb-4">أعمل كمعلمة في الصف الأول حيث أدرس اللغة الإنجليزية ولدي تجربة تعليمية واسعة تشمل جميع الصفوف والمراحل العمرية بدءاً من البستان وحتى المرحلة الجامعية، باستثناء التوجيهي. أتمتع بخبرة ممتازة في العمل التربوي والثقافي وكذلك في العمل التطوعي. العمل مع الطلاب ورؤية تأثير التعليم على حياتهم هو المحفز الأكبر لي للاستمرار في تطوير مهنتي. أستمتع بالعمل مع جميع مستويات الطلاب، وأخص بالذكر الطلاب ذوي المستوى الضعيف، حيث أشعر أنهم جزء من رحلتي مع اللغة وأحب رؤية تقدمهم من ضعف إلى تميز. بما أنني كنت طالبة ضعيفة في اللغة الإنجليزية سابقاً، فإنني أعتبر نفسي قادرة على فهم تحديات الطلاب الضعاف ومساعدتهم في تجاوزها. ألتزم بمبدأ "Pay it forward" حيث أقدم الدعم والمساعدة للطلاب الضعاف في اللغة الإنجليزية دون تقاضي أجر، وذلك بمساعدة من طالب إلى ثلاث طلاب ضعاف في كل عام دراسي. رحلتي التعليمية تبدأ بتقييم مستوى الطالب وتقديم الدعم اللازم لتمكينه من التعامل مع اللغة بنجاح. شغفي بالتعلم والتعليم يدفعني دائماً للتطور ومواصلة تقديم أفضل ما لدي.</p>
            <button className="text-[#6f2646] hover:underline">Read More ...</button>
          </div>
        </div>

        <div className="w-1/3">
          {/* Location */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-lg font-semibold mb-2">Location</h2>
            <p className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              School Network
            </p>
          </div>

          {/* Connect */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-lg font-semibold mb-2">Connect</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-indigo-600 hover:underline">teacher.network/israa</a></li>
              <li><a href="#" className="text-indigo-600 hover:underline flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                Educational Twitter
              </a></li>
              <li><a href="#" className="text-indigo-600 hover:underline flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S15.523 0 10 0z" clipRule="evenodd" />
                </svg>
                Professional Instagram
              </a></li>
            </ul>
          </div>

          {/* Similar profiles */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Similar profiles</h2>
            <ul className="space-y-4">
              {['Vicente Reyes', 'Marc Brooks', 'Ronald Bailey', 'Fannie Waters'].map((name, index) => (
                <li key={index} className="flex items-center">
                  <img src={`https://i.pravatar.cc/40?img=${index + 1}`} alt={name} className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-gray-500 text-sm">Math Teacher</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
