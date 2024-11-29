type ProjectProps = {
  title: string;
  description: string;
  link: string;
  githubLink: string;
  language: 'typescript' | 'javascript';
};

export const projects: ProjectProps[] = [
  {
    title: 'Portfolio Website',
    description:
      '✨ My current portfolio website, built with Next.js, TypeScript and Tailwind CSS. Hosted on Vercel.',
    link: 'https://isaacayodele.vercel.app/',
    language: 'typescript',
    githubLink: 'https://github.com/mosidrum/Isaac-portfolio'
  },
  {
    title: 'Hilinks Lanfing page',
    description:
      '💫 Beautiful landing page for a travel agency made with React, Typescript and Tailwind Css',
    link: 'https://hilink-landing-page-beta.vercel.app',
    language: 'typescript',
    githubLink: 'https://github.com/mosidrum/hilink_landing_page'
  },
  {
    title: 'URL Shorter',
    description: 'A backend projects that helps shortens a long URL to a short one',
    link: '',
    language: 'typescript',
    githubLink: 'https://github.com/mosidrum/url_shortner'
  },
  {
    title: 'Trivia Quiz',
    description:
      'A Trivia Quiz web app that generates 50 random questions and displays the final score for an engaging user experience.',
    link: 'https://ques-web-app.vercel.app/',
    language: 'typescript',
    githubLink: 'https://github.com/mosidrum/ques_web_app'
  }
];
