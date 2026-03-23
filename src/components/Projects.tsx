
import { ExternalLink, Github, Code, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
  {
    name: "Hospital Management System",
    role: "Full Stack Developer",
    description:
      "MERN-based healthcare platform for managing patients, appointments, and hospital operations.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
    link: null,
    features: [
      "Developed patient record management system",
      "Implemented appointment scheduling workflow",
      "Built admin dashboard for hospital operations",
      "Designed REST APIs for managing patient and doctor data",
      "Optimized system for scalable healthcare data handling"
    ]
  },
  {
    name: "Paxform",
    role: "Full Stack Developer",
    description:
      "Dynamic form management platform for storing personal data, documents, and digital workflows.",
    technologies: [
      "React.js",
      "Laravel",
      "Stripe",
      "REST APIs",
      "MPDF",
      "DOMPDF"
    ],
    link: null,
    features: [
      "Developed admin and organization panel with role-based access",
      "Built drag-and-drop form builder interface",
      "Integrated Stripe payment gateway for subscriptions",
      "Implemented PDF generation using MPDF and DOMPDF",
      "Enabled digital form filling, signing, and sharing"
    ]
  },
  {
    name: "Pencila (Online Design Platform)",
    role: "Backend Developer",
    description:
      "AI-powered graphic design platform for creating templates, posts, and marketing creatives.",
    technologies: [
      "Laravel",
      "REST APIs",
      "Stripe",
      "AWS S3",
      "Konva.js",
      "MPDF"
    ],
    link: null,
    features: [
      "Developed backend APIs for template and media management",
      "Implemented Stripe-based subscription and payment system",
      "Managed AWS S3 for file storage and media handling",
      "Handled AI credit tracking and user account management",
      "Integrated AI services for design automation"
    ]
  },
  {
    name: "Massttr (Service Marketplace APIs)",
    role: "API Developer",
    description:
      "Backend API system for connecting service providers and users in a marketplace platform.",
    technologies: [
      "Laravel",
      "REST APIs",
      "JavaScript",
      "jQuery",
      "AJAX",
      "Push Notifications"
    ],
    link: null,
    features: [
      "Developed secure REST APIs for mobile application integration",
      "Implemented service provider registration and onboarding APIs",
      "Built map-based location selection using latitude and longitude",
      "Integrated push notifications for real-time updates",
      "Enabled localization for multi-language support"
    ]
  },
  {
    name: "Small Circle (Social & Chat Platform)",
    role: "Backend Developer",
    description:
      "Social and chat-based platform with automated content scheduling features.",
    technologies: ["Laravel", "Cron Jobs", "Bootstrap"],
    link: null,
    features: [
      "Implemented cron-based post scheduling automation",
      "Developed admin panel for content and user management",
      "Optimized content publishing workflow",
      "Built backend logic for scheduled operations"
    ]
  },
  {
    name: "Motogino (Motorcycle Rental Platform)",
    role: "Full Stack Developer",
    description:
      "Web platform for managing motorcycle rentals with admin and user features.",
    technologies: ["Laravel", "React.js", "Bootstrap"],
    link: null,
    features: [
      "Developed admin panel with CRUD functionality",
      "Implemented vehicle listing and filtering system",
      "Built responsive UI for better user experience",
      "Supported backend operations for rental management"
    ]
  },
  {
    name: "Cyber B.A.A.P. (Cyber Awareness Platform)",
    role: "Backend Developer",
    description:
      "Platform focused on cyberbullying awareness, reporting, and support systems.",
    technologies: ["Laravel", "MySQL", "REST APIs", "Firebase"],
    link: null,
    features: [
      "Developed secure reporting system for incidents",
      "Built admin dashboard for case tracking",
      "Integrated Firebase for notifications",
      "Implemented backend workflows for support coordination"
    ]
  }
];


  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 animate-gradient"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing my expertise in building scalable web applications with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-950 rounded-2xl shadow-xl dark:shadow-gray-950/40 border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-2xl transition-all duration-500 hover-lift opacity-0 animate-scale-in delay-200"
            >
              <div className="p-8 lg:p-12">
                <div className="flex items-center justify-between mb-6 group">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 animate-pulse-glow">
                      <Code className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {project.name}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                        {project.role}
                      </p>
                    </div>
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center transform hover:scale-110 hover-glow"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                  {project.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  
                  {/* Features */}
                  <div className="opacity-0 animate-fade-in-left delay-400">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                      <Zap className="mr-2 text-blue-500 animate-pulse" size={20} />
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, index) => (
                        <li
                          key={index}
                          className={`flex items-start opacity-0 animate-fade-in-up delay-${500 + index * 100} group`}
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:animate-ping"></div>
                          <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="opacity-0 animate-fade-in-right delay-600">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                      Technologies Used
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.technologies.map((tech, index) => (
                        <div
                          key={tech}
                          className={`p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-lg text-center hover:from-blue-100 hover:to-purple-100 dark:hover:from-gray-700 dark:hover:to-gray-700 transition-all duration-300 transform hover:scale-105 hover-lift opacity-0 animate-scale-in delay-${700 + index * 100}`}
                        >
                          <span className="text-gray-700 dark:text-gray-200 font-medium text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {project.link && (
                  <div className="border-t border-gray-200 dark:border-gray-800 pt-6 opacity-0 animate-fade-in-up delay-800">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 animate-pulse-glow group"
                    >
                      Visit Project
                      <ExternalLink size={20} className="ml-2 group-hover:animate-bounce" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
