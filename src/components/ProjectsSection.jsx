import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Green Cleaner",
    description:
      "A carpet and upholstery cleaning business based in Los Angeles focused on eco-friendly solutions. I developed a clean, responsive website to showcase their services, improve local SEO, and enable easy customer inquiries through a lead-generating contact form, all by using WordPress, Figma and multiple WordPress Plugins.",
    image: "/projects/project1.png",
    tags: ["WordPress", "Figma", "WordPress Plugins", "Canva"],
    demoUrl: "https://greencleanercarpetcleaning.com/",
    githubUrl: "#",
  },

  {
    id: 2,
    title: "Impact Home Builders",
    description:
      "A trusted residential construction company from California specializing in quality home building solutions. I designed and developed a responsive, user-friendly website that highlights their services, builds credibility, and drives inquiries through an optimized contact system. The site was crafted using WordPress, Figma, and a range of essential WordPress plugins, with a focus on clean design, functionality, and local SEO.",
    image: "/projects/project2.png",
    tags: ["WordPress", "Figma", "WordPress Plugins", "Canva"],
    demoUrl: "https://sunb1.sg-host.com/",
    githubUrl: "#",
  },

  {
    id: 3,
    title: "Metadvanced",
    description:
      "A digital marketing agency specializing in branding, web development, and online strategy for growth-driven businesses. I designed and developed a modern, conversion-focused website that reflects their expertise, strengthens brand identity, and supports lead generation. The project was built using WordPress, Figma, and various advanced plugins, with a strong emphasis on UI/UX, performance, and scalable structure.",
    image: "/projects/project3.png",
    tags: ["WordPress", "Figma", "WordPress Plugins", "Canva", "CSS"],
    demoUrl: "https://metadvanced.com/",
    githubUrl: "#",
  },

  {
    id: 4,
    title: "Playmakers Hub",
    description:
      "A web-based events management system built for USTP’s Playmakers music organization, designed to streamline event coordination, member management, and internal communication. I developed a responsive platform that centralizes event creation, attendance tracking, and profile handling—tailored to the organization's unique structure and creative culture. The system was built using React, Tailwind CSS, and Supabase, with a strong focus on usability, data consistency, and scalable functionality.",
    image: "/projects/project4.png",
    tags: ["React", "Tailwind", "Figma", "Supabase"],
    demoUrl: "https://www.playmakershub.org/",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="project" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was customized
          accordingly to clients description and developed through constant back
          and forth brainstorming of ideas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink />
                    </a>

                    {/* <a
                      href=""
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/jhrocales"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check my Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

// stopped @2:11:41
