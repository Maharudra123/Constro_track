import React from "react";
import { Award, Linkedin, GraduationCap, Users } from "lucide-react";

const MentorCard = ({
  name,
  role,
  image,
  linkedin,
  designation,
  department,
}) => {
  return (
    <div className="max-w-4xl mx-auto mb-16">
      {/* Title */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full mb-4">
          <Award className="h-5 w-5" />
          <span className="font-semibold">Project Mentor</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">
          Under the Guidance of
        </h2>
      </div>

      {/* Mentor Card */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-2xl overflow-hidden border-4 border-blue-200">
        <div className="md:flex">
          {/* Left Side - Photo */}
          <div className="md:w-2/5 bg-gradient-to-br from-purple-600 to-blue-700 flex items-center justify-center p-8">
            <div className="relative">
              {image ? (
                <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-purple-500 to-blue-600">
                    <GraduationCap className="h-32 w-32 text-white" />
                  </div>
                </div>
              ) : (
                <div className="w-64 h-64 rounded-full border-8 border-white shadow-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                  <GraduationCap className="h-32 w-32 text-white" />
                </div>
              )}
              {/* Decorative Badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-purple-900 px-6 py-2 rounded-full shadow-lg border-4 border-white">
                <Award className="h-6 w-6 inline mr-2" />
                <span className="font-bold">Mentor</span>
              </div>
            </div>
          </div>

          {/* Right Side - Info */}
          <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
            <div className="space-y-4">
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{name}</h3>

              {/* {designation && (
                <div className="flex items-center gap-2 text-purple-700">
                  <GraduationCap className="h-5 w-5" />
                  <span className="text-lg font-semibold">{designation}</span>
                </div>
              )} */}

              {department && (
                <div className="flex items-center gap-2 text-blue-700">
                  <Users className="h-5 w-5" />
                  <span className="text-lg font-medium">{department}</span>
                </div>
              )}

              <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-purple-600 mt-6">
                <p className="text-gray-700 text-lg italic">
                  "Guiding and mentoring the Smart Build Monitor project with
                  expertise in AI/ML and Computer Vision applications in
                  construction technology."
                </p>
              </div>

              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 mt-6"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="font-semibold">Connect on LinkedIn</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="mt-12 mb-8">
        <div className="h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
      </div>
    </div>
  );
};

export default MentorCard;
