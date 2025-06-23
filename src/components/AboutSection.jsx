import { Code, Headset, PenLine } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Hard Working Web Developer & Virtual Assistant
            </h3>

            <p className="text-muted-foreground">
              Willing to learn Cum Laude IT Graduate with 3 years of experience
              in web development and a year of experience in social media
              management. Currently has over 5 full blown business clients
              website created as part of my freelance web developer and virtual
              assistant journey.
            </p>

            <p className="text-muted-foreground">
              I specialize in building responsive, accessible, and professional
              web applications that work seamlessly across devices. Using modern
              technologies like React, Tailwind CSS, Supabase, and WordPress. I
              create scalable and user-friendly solutions—while also leveraging
              SEO tools and best practices to boost visibility and performance
              online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    With 3+ years of experience and 5 business websites built, I
                    develop scalable, professional sites using React, Tailwind
                    CSS, Supabase, and WordPress.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Headset className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Virtual Assistant</h4>
                  <p className="text-muted-foreground">
                    With a year of Virtual Assistant experience, I manage
                    content, SEO, accessibility checks, and audits using
                    WordPress, Google Workspace, and Lighthouse.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <PenLine className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Creative Writing</h4>
                  <p className="text-muted-foreground">
                    Published 10+ poems and prose pieces with 1–3K reactions and
                    wide reach, crafting emotionally rich content shared across
                    creative and visual platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
