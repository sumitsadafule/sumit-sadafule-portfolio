type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: { title: string; fullName: string; email: string };
  hero: { name: string; p: string[] };
  contact: {
    form: {
      name: { span: string; placeholder: string };
      email: { span: string; placeholder: string };
      message: { span: string; placeholder: string };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Sumit Sadafule — Portfolio",
    fullName: "Sumit Sadafule",
    email: "sumitsadafule0303@gmail.com",
  },
  hero: {
    name: "Sumit Sadafule",
    p: ["Computer Science Engineer & Full Stack Developer", "Java • MERN • React • Web Development"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: { span: "Your Name", placeholder: "What's your name?" },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: { span: "Your Message", placeholder: "What do you want to say?" },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm Sumit Sadafule, a Computer Science Engineering graduate focused on software engineering, full-stack web development, Java, React and the MERN stack. I enjoy building responsive, user-friendly applications and solving practical problems with modern technologies. I have completed full-stack internships and hands-on projects including food delivery, recipe sharing and task management applications.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Internships & Experience.",
    },
    feedbacks: {
      p: "Highlights",
      h2: "Achievements & Certifications.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `A selection of projects that demonstrate my experience with React, MERN, JavaScript, responsive UI and full-stack application development. Live projects are included where available.`,
    },
  },
};
