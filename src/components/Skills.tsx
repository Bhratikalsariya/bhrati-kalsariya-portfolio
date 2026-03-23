
const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: [
        "PHP",
        "Laravel",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Frontend & UI",
      skills: [
        "jQuery",
        "AJAX",
        "Bootstrap",
        "Drag & Drop Interfaces",
        "Konva.js",
        "Masonry Layout",
        "Toastr",
        "SweetAlert",
        "Pintura Editor"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Backend & APIs",
      skills: [
        "RESTful APIs",
        "API Integration",
        "API Documentation",
        "Multiple Database Connections",
        "JWT Authentication",
        "Role-Based Access Control (RBAC)",
        "Socialite (Google Login)",
        "Socket.io"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Payments & Integrations",
      skills: [
        "Stripe Payment Gateway",
        "Razorpay Integration",
        "Map API Integration",
        "Dynamic Map Markers (Lat/Lng)",
        "Push Notifications",
        "Facebook / Instagram / Twitter Integration",
        "Post Scheduling System"
      ],
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Admin & Platform Features",
      skills: [
        "Admin Panel Development",
        "Dashboard Management",
        "Cron Jobs",
        "PDF Generation (mPDF, DOMPDF)",
        "Excel Export",
        "Localization",
        "AWS S3 File Handling"
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Databases & Cloud",
      skills: [
        "MySQL",
        "MongoDB",
        "AWS S3"
      ],
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "DevOps & Environment",
      skills: [
        "Apache",
        "Nginx",
        "Ubuntu",
        "Windows",
        "XAMPP",
        "Laragon",
        "PuTTY",
        "Termius"
      ],
      color: "from-gray-500 to-gray-600"
    },
    {
      title: "Version Control",
      skills: [
        "Git",
        "GitHub",
        "GitLab",
        "Bitbucket"
      ],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Design & Tools",
      skills: [
        "Figma",
        "Canva",
        "Adobe XD",
        "Kittl"
      ],
      color: "from-yellow-500 to-yellow-600"
    }
  ];


  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 animate-gradient"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and
            creating engaging user experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`bg-white dark:bg-gray-950 rounded-xl shadow-lg dark:shadow-gray-950/40 border border-gray-100 dark:border-gray-800 p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 transform hover-lift opacity-0 animate-fade-in-up delay-${index * 200}`}
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 transform transition-all duration-300 hover:scale-110 hover:rotate-12`}
              >
                <span className="text-white font-bold text-lg">
                  {category.title.charAt(0)}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
                {category.title}
              </h3>

              <div className="space-y-2 max-h-40 overflow-y-auto pr-1 custom-scrollbar">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className={`flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-300 transform hover:scale-105 opacity-0 animate-fade-in-right delay-${index * 200 + skillIndex * 50}`}
                  >
                    <span className="text-gray-700 dark:text-gray-200 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                      {skill}
                    </span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center opacity-0 animate-scale-in delay-800">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 animate-pulse-glow">
            <span className="mr-2 animate-bounce">💼</span>
            4.5+ Years of Professional Experience
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
