const certifications = [
  {
    id: 1,
    title: "FreeCodeCamp Responsive Web Design",
    description:
      "Completed FreeCodeCamp's extensive program on building responsive and accessible websites using HTML and CSS. The course included hands-on projects focused on layout, typography, forms, and media queries, aligned with modern web standards.",
    image: "/certificates/webdev.png",
    tags: ["HTML", "CSS", "Responsive Design", "Accessibility"],
  },
  {
    id: 2,
    title: "HubSpot Academy Social Media Marketing",
    description:
      "Finished HubSpot’s official certification on strategic social media marketing. Covered platform-specific tactics, content planning, analytics, and brand engagement to help drive growth and build meaningful online communities.",
    image: "/certificates/socmed.png",
    tags: ["Social Media", "Marketing Strategy", "Content Creation", "HubSpot"],
  },

  {
    id: 3,
    title: "EF SET English Certificate (C2 Proficient)",
    description:
      "Earned a C2 Proficient level in the EF SET English test, demonstrating advanced mastery in English reading and listening comprehension. This level reflects near-native fluency suitable for academic and professional communication.",
    image: "/certificates/english.png",
    tags: ["English Proficiency", "C2", "Reading", "Listening"],
  },

  {
    id: 4,
    title: " Ratatype Typing Certificate (95 WPM)",
    description:
      "Achieved a typing speed of 95 words per minute with high accuracy on Ratatype’s professional typing assessment. This score reflects efficient, error-free keyboarding skills essential for virtual assistance and administrative roles.",
    image: "/certificates/typing.png",
    tags: ["Typing Speed", "95 WPM", "Productivity", "Accuracy"],
  },

  {
    id: 5,
    title: "Wadhwani Foundation: Impactful Writing Skills",
    description:
      "Completed a professional writing course focused on structure, clarity, and tone for business and digital communication. The program emphasized audience targeting, proofreading, and persuasive writing across formats.",
    image: "/certificates/writing.png",
    tags: ["Writing", "Communication", "Professional Skills", "Clarity"],
  },

  {
    id: 6,
    title: "Wadhwani Foundation: Problem Solving and Innovation",
    description:
      "Gained practical training in critical thinking, ideation, and creative problem-solving through structured modules and real-world scenarios. Emphasized innovation frameworks and decision-making under uncertainty.",
    image: "/certificates/problemsolving.png",
    tags: ["Problem Solving", "Creativity", "Innovation", "Critical Thinking"],
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Certifications & <span className="text-primary"> Credentials</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some certifications I’ve earned through structured learning,
          each enhancing my ability to deliver professional, scalable, and
          optimized digital solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certifications.map((cert, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
