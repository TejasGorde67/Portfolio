import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { Typewriter } from "@/components/ui/typewriter";
import { TimeCounter } from "@/components/time-counter";

import { WorkItem } from "@/components/work-item";
import { ProjectListItem } from "@/components/project-list-item";
import { AchievementItem } from "@/components/achievement-item";
import { Dock } from "@/components/dock";
import { SkillsDraggable } from "@/components/skills-draggable";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  ScrollAnimation,
  FadeInText,
  SlideUp,
  SlideInLeft,
  SlideInRight,
} from "@/components/scroll-animation";

export default function Page() {
  return (
    <main className="min-h-dvh bg-grid pb-32 pt-6 dark:bg-neutral-950">
      <FadeInText>
        <nav className="mx-auto mb-4 flex w-full max-w-xl items-center justify-between px-4 md:px-6 lg:px-8 text-xs text-neutral-600 dark:text-neutral-300">
          <Link
            href="#"
            className="font-semibold text-neutral-900 dark:text-neutral-50"
          >
            tejas.
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="#experience"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 text-xs sm:text-xs"
            >
              experience
            </a>
            <a
              href="#projects"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 text-xs sm:text-xs"
            >
              projects
            </a>
            <a
              href="#skills"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 text-xs sm:text-xs"
            >
              skills
            </a>
            <a
              href="#education"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 text-xs sm:text-xs"
            >
              education
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </FadeInText>

      <div className="mx-auto max-w-xl px-4 md:px-6 lg:px-8">
        <article
          aria-label="Portfolio"
          className="relative rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
        >
          <div className="p-4 md:p-6 lg:p-6">
            {/* Header */}

            <SlideUp>
              <header id="about" className="space-y-2 section-lines p-4">
                <FadeInText delay={0.1}>
                  <div className="flex items-center justify-between">
                    <TextShimmer
                      as="p"
                      className="text-xs"
                      duration={2.2}
                      spread={1.2}
                    >
                      hi there, I'm
                    </TextShimmer>
                    <TimeCounter className="text-xs text-neutral-500 dark:text-neutral-400 font-mono" />
                  </div>
                </FadeInText>
                <SlideInLeft delay={0.2}>
                  <div className="flex items-center gap-3">
                    <div className="h-16 w-16 ring-2 ring-neutral-200 dark:ring-neutral-900 rounded-full overflow-hidden">
                      <img
                        src="/facedemo.jpeg"
                        alt="Tejas Gorde"
                        className="h-full w-full object-cover scale-115 -translate-x-0.5"
                      />
                    </div>
                    <h1 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50">
                      Tejas Gorde
                    </h1>  
                  </div>
                </SlideInLeft>
                <FadeInText delay={0.3}>
                  <div className="flex flex-wrap items-center mt-3 gap-2 sm:gap-4 text-xs text-neutral-600 dark:text-neutral-300">
                    <span>23, he/him</span>
                    <span className="hidden sm:inline">{"||"}</span>
                    <span className="max-w-[38ch]">
                      <Typewriter
                        text={[
                          "React Native Developer",
                          "Mobile App Developer ",
                          "Engineer",
                          "Tech enthusiast",
                        ]}
                        speed={90}
                        waitTime={2000}
                        deleteSpeed={80}
                        className="text-neutral-600 dark:text-neutral-300"
                        cursorChar="|"
                        showCursor={true}
                      />
                      {" from India."}
                    </span>
                  </div>
                </FadeInText>
                <SlideInRight delay={0.4}>
                  <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-4">
                    <Button
                      size="sm"
                      asChild
                      className="h-6 w-20 rounded-sm bg-neutral-900 px-4 text-white shadow-sm hover:bg-neutral-900/90 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
                    >
                      <a
                        href="https://drive.google.com/file/d/1TwR_VN4d047xejmog5qR1VMwK_YQ7_4t/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Resume"
                      >
                        Resume
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="h-6 w-6 rounded-sm border border-neutral-200 p-0 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    >
                      <a
                        href="mailto:tejasgorde87@gmail.com"
                        aria-label="Send email"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="h-6 w-6 rounded-sm border border-neutral-200 p-0 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    >
                      <a
                        href="https://x.com/tejas_87_"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open Twitter"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="h-6 w-6 rounded-sm border border-neutral-200 p-0 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    >
                      <a
                        href="https://github.com/TejasGorde67"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="h-6 w-6 rounded-sm border border-neutral-200 p-0 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    >
                      <a
                        href="https://www.linkedin.com/in/tejas-gorde-63b464256/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </SlideInRight>
              </header>
            </SlideUp>

            {/* Bio */}
            <FadeInText delay={0.5}>
              <section className="mt-4 m-2 justify-center items-center text-[13px] leading-6 text-neutral-600 dark:text-neutral-300">
                <p>
                  
                  {" "}
                  <span className="rounded bg-yellow-200 px-1.5 py-0.5 text-[12px] font-medium text-neutral-900">
                    Mobile App developer
                  </span>{" "}
                   from India who loves building{" "}
                  
                    cross-platform mobile applications
                  
                  using 𝚁𝚎𝚊𝚌𝚝 𝙽𝚊𝚝𝚒𝚟𝚎. 
                   
                  Hands-on experience of  building mobile apps, I am currently working
                  as intern & freelancer and focusing on mobile app development
                  best practices. Open to Work Full-time roles.

                </p>
                
              </section>
            </FadeInText>

            {/* Work Experience */}
            <SlideUp delay={0.5}>
              <section id="experience" className="mt-6 section-lines p-4">
                <FadeInText delay={0.1}>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                    Work Experience.
                  </h3>
                </FadeInText>
                <div className="mt-3 space-y-3">
                  <SlideInLeft delay={0.1}>
                    <WorkItem
                      icon="shield"
                      company="Goanny Technologies"
                      role="React Native Developer Intern"
                      period="Jan 2026 – Present"
                      summary="Built production ready mobile apps using React Native, implementing robust development workflows and maintaining performance optimization. Delivered features under tight timelines while maintaining clean code. Following mobile app development best practices. "
                      logoUrl="/stealth.jpeg"
                    />
                  </SlideInLeft>
                  <SlideInLeft delay={0.1}>
                    <WorkItem
                      icon="building"
                      company="Labmentix"
                      role="Fullstack Developer Intern"
                      period="June 2024 – Dec 2024"
                      summary="worked on the design, development, and maintenance of web & mobile apps, gained hands on experience with frontend technologies,
implemented responsive designs, and collaborated with the development team to deliver functional
and user friendly web solutions."
                      logoUrl="/firstcontact.jpeg"
                    />
                  </SlideInLeft>
                </div>
              </section>
            </SlideUp>



            {/* Projects */}
            <SlideUp delay={0.2}>
              <section id="projects" className="mt-8 section-lines p-4">
                <FadeInText delay={0.1}>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
                    Personal Projects.
                  </h3>
                </FadeInText>
                <div className="space-y-2">
                  <SlideInLeft delay={0.1}>
                    <ProjectListItem
                      title="FlowTrack"
                      links={[
                        {
                          label: "live preview ↗",
                          href: "",
                        },
                        
                      ]}
                      bullets={[
                        "Designed and developed a  React Native mobile application using JavaScript and React Hooks to implement a complete task management system.",
                        "Built multiple UI screens including Login, Signup, Dashboard, Tasks, Profile, and Settings using reusable components",
                        "Implemented full CRUD functionality for tasks with features such as task completion tracking, priority levels, due dates, and search/filter capabilities.",
                        "Developed scalable navigation using React Navigation to manage authentication flows and multi-screen routing."
                      ]}
                      tags={["React Native", "JavaScript", "Context API", "React Navigation", "AsyncStorage"]}
                    />
                  </SlideInLeft>
                  <SlideInRight delay={0.1}>
                    <ProjectListItem
                      title="ACHIEVEr"
                      links={[
                        {
                          label: "Building... ↗",
                          href: "",
                        },
                      ]}
                      bullets={[
                        "Currently in Progress...."
                      ]}
                      tags={[
                        "React Native",
                        "Redux ",
                        "React Navigation",
                        "AsyncStorage ",
                        "UI Libraries"
                      ]}
                    />
                  </SlideInRight>
                  
                </div> 
              </section>
            </SlideUp>

                        {/* Projects */}
            <SlideUp delay={0.2}>
              <section id="projects" className="mt-8 section-lines p-4">
                <FadeInText delay={0.1}>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
                    Client Project.
                  </h3>
                </FadeInText>
                <div className="space-y-2">
                  <SlideInLeft delay={0.1}>
                    <ProjectListItem
                      title="FitnessWiz"
                      links={[
                        {
                          label: "live preview ↗",
                          href: "https://fitnesswizapp.com/",
                        },
                        
                      ]}
                      bullets={[
                        "Built in 24 hours at Call2Code Hackathon (MUJ) and selected as a finalist among 100+ teams.",
                        "Developed 12+ features: real-time charts, multilingual support (English, Hindi, Spanish),voice navigation using Web Speech API.",
                        "Integrated APIs for real-time financial analytics and sentiment analysis across 50+ tickers.",
                      ]}
                      tags={["React", "TypeScript", "TailwindCSS", "Supabase"]}
                    />
                  </SlideInLeft>
                  {/* <SlideInRight delay={0.1}>
                    <ProjectListItem
                      title="ACHIEVEr"
                      links={[
                        {
                          label: "live preview ↗",
                          href: "",
                        },
                      ]}
                      bullets={[
                        "Converts natural language into SQL, reducing query time by 90% and improving accessibility non-tech users.",
                        "Editable SQL previews with live execution on 20+ databases.",
                        "Deployed on Streamlit Cloud with zero‑downtime CI/CD.",
                      ]}
                      tags={[
                        "Python",
                        "Streamlit",
                        "SQLite",
                        "Google Gemini Pro",
                      ]}
                    />
                  </SlideInRight> */}
                  
                </div> 
              </section>
            </SlideUp>



            {/* <SlideUp delay={0.3}>
              <section id="achievements" className="mt-8 section-lines p-4">
                <FadeInText delay={0.1}>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
                    Achievements.
                  </h3>
                </FadeInText>
                <ul className="space-y-2">
                  <SlideInLeft delay={0.1}>
                    <li>
                      <AchievementItem
                        title="Finalist – Call2Code Hackathon, MUJ"
                        date="April 2025"
                        description="AI‑powered stock market dashboard with multilingual voice commands, real‑time analytics, and sentiment analysis. Selected as a finalist among 100+ teams."
                      />
                    </li>
                  </SlideInLeft>
                  <SlideInRight delay={0.1}>
                    <li>
                      <AchievementItem
                        title="Semi‑Finalist – BitBash, NIT Kurukshetra"
                        date="March 2025"
                        description="Developed a real‑world solution under 24‑hour constraints; recognized among the top‑performing teams."
                      />
                    </li>
                  </SlideInRight>
                </ul>
              </section>
            </SlideUp> */}
            {/* Skills */}
            <SlideUp delay={0.3}>
              <section id="skills" className="mt-5 section-lines p-4">
                <SkillsDraggable />
              </section>
            </SlideUp>

            {/* Education */}
            <SlideUp delay={0.3}>
              <section id="education" className="mt-8 section-lines p-4">
                <FadeInText delay={0.1}>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
                    Education.
                  </h3>
                </FadeInText>
                <ul className="space-y-2">
                  <SlideInLeft delay={0.1}>
                    <li>
                      <AchievementItem
                        title="Siddhant College of Engineering"
                        date="2021 – 2024"
                        description="BE in Information Technology"
                      />
                    </li>
                  </SlideInLeft>
                  <SlideInRight delay={0.1}>
                    <li>
                      <AchievementItem
                        title="Pimpri Chinchwad Polytechinc"
                        date="2018 – 2021"
                        description="Diploma in Information Technology"
                      />
                    </li>
                  </SlideInRight>
                </ul>
              </section>
            </SlideUp>

            {/* Get in Touch */}
            <SlideUp delay={0.3}>
              <section className="mt-8 text-center section-lines p-6">
                <FadeInText delay={0.1}>
                  <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                    {"Let's work together."}
                  </h2>
                </FadeInText>
                <FadeInText delay={0.1}>
                  <p className="mx-auto mt-2 max-w-xl text-xs text-neutral-500 dark:text-neutral-400">
                    {
                      "I'm always interested in new opportunities and exciting projects. Whether you have a project in mind or just want to chat about tech, I'd love to hear from you."
                    }
                  </p>
                </FadeInText>

                {/* CTAs */}
                <SlideInLeft delay={0.1}>
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                    <Button
                      size="sm"
                      asChild
                      className="h-9 rounded-md bg-neutral-900 px-4 text-white shadow-sm hover:bg-neutral-900/90 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
                    >
                      <a
                        href="mailto:tejasgorde87@gmail.com"
                        aria-label="Get in touch via email"
                      >
                        <span className="inline-flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          <span>Get in touch</span>
                        </span>
                      </a>
                    </Button>
                  </div>
                </SlideInLeft>

                {/* Social row */}
                <SlideInRight delay={0.1}>
                  <div className="mt-4 flex items-center justify-center gap-2 sm:gap-4 text-neutral-600 dark:text-neutral-300">
                    <a
                      href="https://x.com/tejas_87_"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Twitter"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a
                      href="https://github.com/TejasGorde67"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tejas-gorde-63b464256/"
                      aria-label="Open LinkedIn"
                      target="_blank"
                      rel="noreferrer"
                      // aria-label="Linkedin"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </SlideInRight>

                {/* Availability + response time */}
                <FadeInText delay={0.1}>
                  <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
                    Currently available for freelance work and full‑time
                    opportunities
                  </p>
                  <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                    Response time: Usually within 24 hours
                  </p>
                </FadeInText>

                {/* Divider before footer */}
              </section>
            </SlideUp>
          </div>
        </article>
        <div className="mt-8 flex justify-center rounded-xl py-2  border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950 ">
          <p className="text-xs text-neutral-500 dark:text-neutral-400 section-lines p-2">
            <span className="italic">The go to person....work in progress</span> <span aria-hidden> ❤️</span>
          </p>
        </div>{" "}
      </div>

      {/* Floating Dock */}

      <Dock />
    </main>
  );
}
