const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto animate-gradient"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in-left delay-200">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 leading-snug">
              Crafting elegant code & seamless user experiences
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-all duration-300 hover:text-gray-800 dark:hover:text-white">
              I am a Full Stack Developer with{" "}
              <span className="font-semibold text-gray-800 dark:text-gray-100">
                4.5+ years of experience
              </span>{" "}
              building scalable web and mobile applications using Laravel,
              Node.js, React, and MongoDB.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-all duration-300 hover:text-gray-800 dark:hover:text-white">
              I specialize in developing admin dashboards, REST APIs,
              role-based authentication systems, payment integrations (Stripe),
              and cloud-based solutions using AWS S3.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-all duration-300 hover:text-gray-800 dark:hover:text-white">
              I have worked across multiple domains including social platforms,
              service marketplaces, motorcycle rental systems, graphic design
              tools, and healthcare applications.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-all duration-300 hover:text-gray-800 dark:hover:text-white">
              I focus on writing clean, efficient, and secure code while
              delivering user-friendly digital experiences that create real
              impact.
            </p>

            <div className="pt-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Languages I Speak
              </h4>

              <div className="flex flex-wrap gap-3">
                {["Gujarati", "Hindi", "English"].map((language) => (
                  <span
                    key={language}
                    className="px-4 py-2 bg-blue-50 dark:bg-gray-800 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:bg-blue-100 dark:hover:bg-gray-700 cursor-default"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:pl-8 opacity-0 animate-fade-in-right delay-400">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-gray-900/40 p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 dark:border-gray-800">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Quick Facts
              </h4>

              <div className="space-y-4">
                {[
                  { label: "Experience", value: "4.5+ Years" },
                  { label: "Location", value: "Surat, India" },
                  { label: "Specialty", value: "Laravel & MERN Stack" },
                ].map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-center justify-between group"
                  >
                    <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {fact.label}
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-lg transition-all duration-300 hover:from-blue-100 hover:to-purple-100 dark:hover:from-gray-700 dark:hover:to-gray-700">
                <p className="text-sm text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  “Balancing aesthetics with performance, while always keeping
                  the end-user at the center.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;