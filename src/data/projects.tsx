import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
  SiJenkins,
  SiGithubactions,
  SiSonarqube,
  SiKubernetes,
  SiArgo,
  SiAmazonaws,
  SiEslint,
  SiNpm,
  SiTerraform,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
  jenkins: {
    title: "Jenkins",
    bg: "black",
    fg: "white",
    icon: <SiJenkins/>,
  },
  githubactions: {
    title: "GitHub Actions",
    bg: "black",
    fg: "white",
    icon: <SiGithubactions/>,
  },
  sonarqube: {
    title: "SonarQube",
    bg: "black",
    fg: "white",
    icon: <SiSonarqube/>,
  },
  kubernetes: {
    title: "Kubernetes",
    bg: "black",
    fg: "white",
    icon: <SiKubernetes/>,
  },
  argocd: {
    title: "Argo CD",
    bg: "black",
    fg: "white",
    icon: <SiArgo/>,
  },
  awseks: {
    title: "AWS EKS",
    bg: "black",
    fg: "white",
    icon: <SiAmazonaws/>,
  },
  eslint: {
    title: "ESLint",
    bg: "black",
    fg: "white",
    icon: <SiEslint/>,
  },
  npm: {
    title: "npm",
    bg: "black",
    fg: "white",
    icon: <SiNpm/>,
  },
  eksctl: {
    title: "eksctl",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        eksctl
      </span>
    ),
  },
  kubectl: {
    title: "kubectl",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        kubectl
      </span>
    ),
  },
  dockerhub: {
    title: "Docker Hub",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        Docker Hub
      </span>
    ),
  },
  yaml: {
    title: "YAML",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        YAML
      </span>
    ),
  },
  awscli: {
    title: "AWS CLI",
    bg: "black",
    fg: "white",
    icon: <SiAmazonaws/>,
  },
  terraform: {
    title: "Terraform",
    bg: "black",
    fg: "white",
    icon: <SiTerraform/>,
  },
  awsec2: {
    title: "AWS EC2",
    bg: "black",
    fg: "white",
    icon: <SiAmazonaws/>,
  },
  awslambda: {
    title: "AWS Lambda",
    bg: "black",
    fg: "white",
    icon: <SiAmazonaws/>,
  },
  awsrds: {
    title: "AWS RDS",
    bg: "black",
    fg: "white",
    icon: <SiAmazonaws/>,
  },
  awss3: {
    title: "AWS S3",
    bg: "black",
    fg: "white",
    icon: <SiAmazonaws/>,
  },
  awsapigateway: {
    title: "AWS API Gateway",
    bg: "black",
    fg: "white",
    icon: <SiAmazonaws/>,
  },
  awssqs: {
    title: "AWS SQS",
    bg: "black",
    fg: "white",
    icon: <SiAmazonaws/>,
  },
  awsdynamodb: {
    title: "AWS DynamoDB",
    bg: "black",
    fg: "white",
    icon: <SiAmazonaws/>,
  },
  awsses: {
    title: "AWS SES",
    bg: "black",
    fg: "white",
    icon: <SiAmazonaws/>,
  },
  awscloudwatch: {
    title: "AWS CloudWatch",
    bg: "black",
    fg: "white",
    icon: <SiAmazonaws/>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  // {
  //   id: "codingducks",
  //   category: "Coding platform",
  //   title: "Coding Ducks",
  //   src: "/assets/projects-screenshots/codingducks/landing.png",
  //   screenshots: ["landing.png"],
  //   skills: {
  //     frontend: [
  //       PROJECT_SKILLS.ts,
  //       PROJECT_SKILLS.next,
  //       PROJECT_SKILLS.chakra,
  //       PROJECT_SKILLS.reactQuery,
  //       PROJECT_SKILLS.firebase,
  //     ],
  //     backend: [
  //       PROJECT_SKILLS.node,
  //       PROJECT_SKILLS.express,
  //       PROJECT_SKILLS.prisma,
  //       PROJECT_SKILLS.python,
  //       PROJECT_SKILLS.postgres,
  //       PROJECT_SKILLS.sockerio,
  //     ],
  //   },
  //   live: "https://www.codingducks.xyz/",
  //   github: "https://github.com/Naresh-Khatri/Coding-Ducks",
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono text-2xl text-center">
  //           Coding ducks = LeetCode + CodePen + CSS Battles
  //         </TypographyP>
  //         <TypographyP className="font-mono ">
  //           Coding Ducks is your coding dojo — where you level up your skills,
  //           battle in real-time code duels, and earn badges like a true code
  //           warrior. Track your progress, flex your brain, and climb the
  //           leaderboard. Ready to quack the code?
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <TypographyH3 className="my-4 mt-8">Problems </TypographyH3>
  //         <p className="font-mono mb-2">
  //           Solve coding problems similar to LeetCode, enhancing your
  //           problem-solving skills across various languages.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/codingducks/problems.png`,
  //             `${BASE_PATH}/codingducks/problem.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 mt-8">Ducklets</TypographyH3>
  //         <p className="font-mono mb-2">
  //           Collaborate in real-time with others in a multiplayer coding
  //           environment, just like CodePen but with a social twist.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/codingducks/ducklets.png`,
  //             `${BASE_PATH}/codingducks/ducklet1.png`,
  //             `${BASE_PATH}/codingducks/ducklet2.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 mt-8">UI Battles </TypographyH3>

  //         <p className="font-mono mb-2">
  //           Challenge yourself to create UI components with HTML/CSS/JS, and get
  //           instant feedback with an automated similarity scoring.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/codingducks/css-battles.png`,
  //             `${BASE_PATH}/codingducks/css-battle.png`,
  //             `${BASE_PATH}/codingducks/css-battle2.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 mt-8">Contests </TypographyH3>
  //         <p className="font-mono mb-2">
  //           Organize or participate in coding competitions. Successfully used to
  //           host three contests during college.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/codingducks/contests.png`]} />
  //         <TypographyH3 className="my-4 mt-8">Playground </TypographyH3>
  //         <p className="font-mono mb-2">
  //           Test and execute your code instantly in my versatile online code
  //           runner.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/codingducks/playground.png`]} />
  //         <TypographyH3 className="my-4 mt-8">Users</TypographyH3>

  //         <p className="font-mono mb-2">
  //           Track your progress, earn badges, and climb the rankings with
  //           detailed user profiles and activity tracking.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/codingducks/users.png`,
  //             `${BASE_PATH}/codingducks/user.png`,
  //           ]}
  //         />
  //       </div>
  //     );
  //   },
  // },
  // {
  //   id: "couponluxury",
  //   category: "Coupon site",
  //   title: "Coupon Luxury",
  //   src: "/assets/projects-screenshots/couponluxury/landing.png",
  //   screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
  //   live: "https://www.couponluxury.com/",
  //   skills: {
  //     frontend: [
  //       PROJECT_SKILLS.js,
  //       PROJECT_SKILLS.next,
  //       PROJECT_SKILLS.chakra,
  //       PROJECT_SKILLS.vue,
  //     ],
  //     backend: [
  //       PROJECT_SKILLS.node,
  //       PROJECT_SKILLS.express,
  //       PROJECT_SKILLS.prisma,
  //       PROJECT_SKILLS.postgres,
  //       PROJECT_SKILLS.docker,
  //     ],
  //   },
  //   get content(): JSX.Element {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           CouponLuxury is your go-to destination for snagging the best deals
  //           without lifting a finger. Whether you&apos;re hunting for the latest
  //           discounts or trying to save a buck at your favorite stores,
  //           CouponLuxury&apos;s got you covered.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <p className="font-mono mb-2 mt-4">
  //           As soon as you land, boom! You&apos;re greeted with the freshest
  //           coupons and top-tier deals that&apos;ll make your wallet happy.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/couponluxury/landing.png`]} />
  //         <TypographyH3 className="my-4 ">Stores</TypographyH3>
  //         <p className="font-mono mb-2">
  //           Dive into a comprehensive list of stores, each packed with exclusive
  //           deals and discounts. It&apos;s like having a VIP pass to every sale
  //           in town.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/couponluxury/stores.png`,
  //             `${BASE_PATH}/couponluxury/store.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 mt-8">Categories</TypographyH3>

  //         <p className="font-mono mb-2">
  //           Whatever you&apos;re into—fashion, tech, food—you&apos;ll find it
  //           neatly organized here. No more endless scrolling; just pick a
  //           category and get the best offers instantly.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/couponluxury/categories.png`]} />
  //         <TypographyH3 className="my-4 mt-8">Custom CMS </TypographyH3>
  //         <p className="font-mono mb-2">
  //           Powered by Vue.js, this bad boy allows us to keep the content
  //           dynamic and up-to-date. From flash sales to limited-time offers, my
  //           CMS ensures everything&apos;s live and relevant.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/couponluxury/cms-1.png`,
  //             `${BASE_PATH}/couponluxury/cms-2.png`,
  //           ]}
  //         />
  //         <p className="font-mono mb-2 mt-5">
  //           Plus, I&apos;ve sprinkled in some extra magic like personalized
  //           deal recommendations, user-friendly search features, and a sleek,
  //           responsive design that works like a charm on any device.
  //         </p>
  //         <p className="font-mono mb-2">
  //           CouponLuxury isn&apos;t just a website; it&apos;s your personal deal-hunting
  //           assistant, ensuring you never miss out on a bargain!
  //         </p>
  //         {/* <TypographyP className="my-4 mt-8">
  //         <strong>Misc:</strong>
  //         Hosted not one, not two, but THREE coding contests (Codemacha) during
  //         college. Safe to say, Coding Ducks passed the vibe check.
  //       </TypographyP>
  //       <TypographyP className="my-4 mt-8">
  //         <strong>Target Audience:</strong>
  //         For all the novice coders out there ready to make their mark.
  //       </TypographyP> */}
  //       </div>
  //     );
  //   },
  // },
  // {
  //   id: "the-booking-desk",
  //   category: "Travel",
  //   title: "The Booking Desk",
  //   src: "/assets/projects-screenshots/the-booking-desk/landing.png",
  //   screenshots: ["1.png"],
  //   live: "https://thebookingdesk.com/",
  //   skills: {
  //     frontend: [
  //       PROJECT_SKILLS.ts,
  //       PROJECT_SKILLS.next,
  //       PROJECT_SKILLS.aceternity,
  //       PROJECT_SKILLS.tailwind,
  //     ],
  //     backend: [PROJECT_SKILLS.sanity],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           The Booking Desk is your ultimate travel consultation hub, designed
  //           to turn your wanderlust dreams into reality. With a focus on smooth
  //           and visually captivating animations, navigating the site feels like
  //           a breeze—it&apos;s almost as if the destinations are calling you.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <p className="font-mono mb-2 mt-8">
  //           A sleek, modern interface greets you, featuring the latest travel
  //           tips, deals, and must-visit spots around the globe.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/the-booking-desk/landing.png`]} />
  //         <TypographyH3 className="my-4 mt-8">Blogs</TypographyH3>
  //         <p className="font-mono mb-2">
  //           Dive into the curated articles written by travel experts. Whether
  //           you&apos;re looking for hidden gems or travel hacks, our blog section has
  //           you covered.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/the-booking-desk/blogs.png`,
  //             `${BASE_PATH}/the-booking-desk/blog.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 mt-8">Sanity CMS</TypographyH3>

  //         <p className="font-mono mb-2">
  //           Keeping everything fresh and up-to-date, I&apos;ve integrated Sanity CMS
  //           to manage all the content with ease, ensuring you always get the
  //           latest and greatest information.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/the-booking-desk/cms-1.png`,
  //             `${BASE_PATH}/the-booking-desk/cms-2.png`,
  //           ]}
  //         />
  //         <p className="font-mono mb-2 my-8">
  //           With a stunning 100% score on Lighthouse, The Booking Desk isn&apos;t
  //           just beautiful—it&apos;s built to perform. Whether you&apos;re planning your
  //           next adventure or just daydreaming, our site delivers a top-notch
  //           experience that&apos;s both informative and enjoyable.
  //         </p>
  //       </div>
  //     );
  //   },
  // },
  // { // Portfolio project
  //   id: "portfolio",
  //   category: "Portfolio",
  //   title: "My Portfolio",
  //   src: "/assets/projects-screenshots/portfolio/landing.png",
  //   screenshots: ["1.png"],
  //   live: "http://nareshkhatri.vercel.app",
  //   github:"https://github.com/Naresh-Khatri/Portfolio",
  //   skills: {
  //     frontend: [
  //       PROJECT_SKILLS.ts,
  //       PROJECT_SKILLS.next,
  //       PROJECT_SKILLS.shadcn,
  //       PROJECT_SKILLS.aceternity,
  //       PROJECT_SKILLS.framerMotion,
  //       PROJECT_SKILLS.tailwind,
  //       PROJECT_SKILLS.spline,
  //     ],
  //     backend: [],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           Welcome to my digital playground, where creativity meets code in the
  //           dopest way possible.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <TypographyH3 className="my-4 mt-8">
  //           Beautiful 3D Objects{" "}
  //         </TypographyH3>
  //         <p className="font-mono mb-2">
  //           Did you see that 3D keyboard modal? Yeah! I made that. That
  //           interactive keyboard is being rendered in 3D on a webpage 🤯, and
  //           pressing each keycap reveals a skill in a goofy way. It&apos;s like
  //           typing, but make it art.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/portfolio/landing.png`,
  //             `${BASE_PATH}/portfolio/skills.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
  //         <p className="font-mono mb-2">
  //           Dark background + floating particles = out-of-this-world cool.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
  //         <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

  //         <p className="font-mono mb-2">
  //           My top personal and freelance projects — no filler, all killer.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/portfolio/projects.png`,
  //             `${BASE_PATH}/portfolio/project.png`,
  //           ]}
  //         />
  //         <p className="font-mono mb-2 mt-8 text-center">
  //           This site&apos;s not just a portfolio — it&apos;s a whole vibe.
  //         </p>
  //       </div>
  //     );
  //   },
  // },
  // { // GhostChat project
  //   id: "ghostchat",
  //   category: "Anonymous chat",
  //   title: "GhostChat",
  //   src: "/assets/projects-screenshots/ghostchat/1.png",
  //   screenshots: ["1.png", "2.png", "3.png", "4.png"],
  //   live: "https://ghostchat.vercel.app",
  //   github:"https://github.com/Naresh-Khatri/GhostChat",
  //   skills: {
  //     frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.chakra],
  //     backend: [PROJECT_SKILLS.supabase],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           Ghostchat is your go-to spot for sending anonymous messages without
  //           leaving a trace. Powered by Supabase, it&apos;s all about keeping things
  //           low-key and secure. Whether you&apos;re sharing secrets, giving feedback,
  //           or just having some fun, Ghostchat ensures your identity stays
  //           hidden, while your voice is heard. Say what you want, without the
  //           worry.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/ghostchat/1.png`,
  //             `${BASE_PATH}/ghostchat/2.png`,
  //             `${BASE_PATH}/ghostchat/3.png`,
  //             `${BASE_PATH}/ghostchat/4.png`,
  //           ]}
  //         />
  //       </div>
  //     );
  //   },
  // },
  // {
  //   id: "jra",
  //   category: "Result analyzer",
  //   title: "JNTUA Results Analyzer",
  //   src: "/assets/projects-screenshots/jra/1.png",
  //   screenshots: ["1.png"],
  //   live: "https://naresh-khatri.github.io/JNTUA-result-analyser-spa/#/",
  //   skills: {
  //     frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.vue],
  //     backend: [
  //       PROJECT_SKILLS.node,
  //       PROJECT_SKILLS.mongo,
  //       PROJECT_SKILLS.express,
  //       PROJECT_SKILLS.docker,
  //     ],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           JNTUA Results Analyzer was a revolutionary tool designed to simplify
  //           and enhance the experience of accessing academic results. It served
  //           as a powerful proxy between the JNTUA university results website and
  //           its users, offering a range of features that made result analysis
  //           faster and more efficient. Here&apos;s what made it stand out:
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <SlideShow images={[`${BASE_PATH}/jra/1.png`]} />
  //         <TypographyH3 className="my-4 mt-8">
  //           Effortless Results Retrieval
  //         </TypographyH3>
  //         {/* Effortless Results Retrieval: */}
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Search all your results using a single roll number, eliminating
  //             the tedious task of sifting through thousands of rows on the
  //             official site.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Class-Wise Results:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             class-wise results effortlessly by entering a roll number range.
  //             No more manual searches or filtering.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Faculty Features:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Faculty members could download batch results in Excel format,
  //             making administrative tasks a breeze.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">
  //           Enhanced Data Insights:
  //         </TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Each result came with additional features including:
  //             <ul className="list-disc font-mono ml-6">
  //               <li>
  //                 <strong>CGPA Calculations: </strong>Easily track your
  //                 cumulative grade point average.
  //               </li>
  //               <li>
  //                 <strong>Charts:</strong> Visualize your academic performance
  //                 with comprehensive charts.
  //               </li>
  //               <li>
  //                 <strong>Future Projections:</strong> Get insights into
  //                 potential future outcomes based on current performance.
  //               </li>
  //               <li>
  //                 <strong> Backlog Counts: </strong>Keep track of your backlog
  //                 subjects at a glance.
  //               </li>
  //             </ul>
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Performance:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             The application was significantly faster and more efficient than
  //             the official site, providing a smoother user experience.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Downfall:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Unfortunately, as of May 2022, the tool stopped working due to the
  //             introduction of CAPTCHA on the official JNTUA results site, which
  //             disrupted the seamless functionality of the app. JNTUA Results
  //             Analyzer transformed the way students and faculty interacted with
  //             academic results, making it a must-have tool until its unexpected
  //             shutdown.
  //           </li>
  //         </ul>
  //       </div>
  //     );
  //   },
  // },

  // +
  { // 01. Jenkins CI/CD Pipeline project
    id: "aidockerfileoptimizer",
    category: "DevOps",
    title: "Jenkins CI/CD Pipeline",
    src: "/assets/projects-screenshots/aidockerfileoptimizer/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"],
    live: "https://www.linkedin.com/posts/bachala-siva-bhargav-2936a2260_jenkins-cicd-cicdpipeline-activity-7372837674786873344-V3NS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAsgQ8BC4ZPIaL5gnYe1hMnjonVL_roH2k",
    github:"https://github.com/SivaBhargav7/freshstart_project",
    skills: {
      frontend: [
        PROJECT_SKILLS.jenkins,
        PROJECT_SKILLS.githubactions,
        PROJECT_SKILLS.maven,
        PROJECT_SKILLS.sonarqube,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.kubernetes,
        PROJECT_SKILLS.argocd,
        PROJECT_SKILLS.awseks,
        PROJECT_SKILLS.eslint,
        PROJECT_SKILLS.npm,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Designed and implemented a Jenkins CI/CD pipeline for a full-stack job portal application. Integrated stages for code checkout, backend/frontend build & test, ESLint code quality checks, and npm audit security scans. Automated Docker image build & push to Docker Hub, and updated Kubernetes manifests stored in GitHub. Configured GitOps with Argo CD to sync Kubernetes manifests with AWS EKS, ensuring continuous deployment.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/aidockerfileoptimizer/1.png`,
              `${BASE_PATH}/aidockerfileoptimizer/2.png`,
              `${BASE_PATH}/aidockerfileoptimizer/3.png`,
              `${BASE_PATH}/aidockerfileoptimizer/4.png`,
              `${BASE_PATH}/aidockerfileoptimizer/5.png`,
              `${BASE_PATH}/aidockerfileoptimizer/6.png`,
              `${BASE_PATH}/aidockerfileoptimizer/7.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 02. Kubernetes Cluster using AWS EKS project
    id: "financeme",
    category: "Container Orchestration in DevOps",
    title: "Kubernetes Cluster using AWS EKS",
    src: "/assets/projects-screenshots/financeme/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
    live: "https://www.linkedin.com/posts/bachala-siva-bhargav-2936a2260_kubernetes-aws-devops-activity-7338767753970884609-dI9M?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAsgQ8BC4ZPIaL5gnYe1hMnjonVL_roH2k",
    github: "https://github.com/SivaBhargav7/git-testing",
    skills: {
      frontend: [
        PROJECT_SKILLS.awseks,
        PROJECT_SKILLS.kubernetes,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.awscli,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            I successfully orchestrated a Kubernetes cluster using AWS Elastic Kubernetes Service (EKS), automating creation and management with eksctl to provide a scalable and highly available environment for hosting a personal portfolio website. I built and pushed a Docker image of the portfolio to Docker Hub, deployed it with 3 replicas for high availability, and configured a LoadBalancer Service with Ingress on AWS ALB, securing access via IAM roles and managing the cluster with kubectl and AWS CLI.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/financeme/1.png`,
              `${BASE_PATH}/financeme/2.png`,
              `${BASE_PATH}/financeme/3.png`,
              `${BASE_PATH}/financeme/4.png`,
              `${BASE_PATH}/financeme/5.png`,
              `${BASE_PATH}/financeme/6.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // Healthcare Hub project
    id: "healthcarehub",
    category: "Infrastructure As a Code in DevOps",
    title: "Infrastructure Automation using Terraform",
    src: "/assets/projects-screenshots/myportfolio/2.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png"],
    live: "https://www.linkedin.com/posts/bachala-siva-bhargav-2936a2260_terraform-aws-amazonwebservices-activity-7311247489490173952-4Vok?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAsgQ8BC4ZPIaL5gnYe1hMnjonVL_roH2k",
    github: "https://github.com/SivaBhargav7/HealthcareHub",
    skills: {
      frontend: [
        PROJECT_SKILLS.terraform,
        PROJECT_SKILLS.awsec2,
        PROJECT_SKILLS.awslambda,
        PROJECT_SKILLS.awsrds,
        PROJECT_SKILLS.awscli,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Automated the deployment of the Healthcare Hub, a highly available appointment booking web application, using Terraform to ensure scalability, fault tolerance, and cost efficiency. Configured EC2 instances with Multi-AZ Auto Scaling, an Application Load Balancer, and an RDS MySQL database with a standby instance, while hosting the application from S3 using the httpd server. Designed a secure VPC architecture, enforced IAM roles and security groups, integrated API Gateway and Lambda for form processing, and enabled CloudWatch for continuous monitoring.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/myportfolio/1.png`,
              `${BASE_PATH}/myportfolio/2.png`,
              `${BASE_PATH}/myportfolio/3.png`,
              `${BASE_PATH}/myportfolio/4.png`,
              `${BASE_PATH}/myportfolio/5.png`,
              `${BASE_PATH}/myportfolio/6.png`,
              `${BASE_PATH}/myportfolio/7.png`,
              `${BASE_PATH}/myportfolio/8.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // Coffee Shop Order System project
    id: "coffeeshop",
    category: "AWS Serverless",
    title: "AWS Serverless Coffee Shop Order System",
    src: "/assets/projects-screenshots/coffee-shop/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png"],
    live: "https://www.linkedin.com/posts/bachala-siva-bhargav-2936a2260_aws-cloudcomputing-serverless-activity-7288873242063249408-0Eve?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAsgQ8BC4ZPIaL5gnYe1hMnjonVL_roH2k",
    github: "https://github.com/SivaBhargav7/Serverless-coffee-shop-order-system",
    skills: {
      frontend: [
        PROJECT_SKILLS.awss3,
        PROJECT_SKILLS.awsapigateway,
        PROJECT_SKILLS.awssqs,
        PROJECT_SKILLS.awslambda,
        PROJECT_SKILLS.awsdynamodb,
        PROJECT_SKILLS.awsses,
        PROJECT_SKILLS.awscloudwatch,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Developed a serverless order processing system for a coffee shop using AWS, ensuring scalability, reliability, and real-time notifications. Implemented API Gateway, SQS, and Lambda for automated order flow, with DynamoDB for data storage and SES for email confirmations. Integrated CloudWatch to monitor performance and maintain operational efficiency.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/coffee-shop/1.png`,
              `${BASE_PATH}/coffee-shop/2.png`,
              `${BASE_PATH}/coffee-shop/3.png`,
              `${BASE_PATH}/coffee-shop/4.png`,
              `${BASE_PATH}/coffee-shop/5.png`,
              `${BASE_PATH}/coffee-shop/6.png`,
              `${BASE_PATH}/coffee-shop/7.png`,
              `${BASE_PATH}/coffee-shop/8.png`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
