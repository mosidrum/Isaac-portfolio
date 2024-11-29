import { Card } from '../../components';
import { projects } from '../../utils';
import styles from './project.module.css';

const page = () => (
  <div className="d-flex mt-5 flex-column gap-5">
    <div className="mb-2 text-2xl">Projects</div>
    <div className={styles.container}>
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          description={project.description}
          language={project.language}
          link={project.link}
          githubLink={project.githubLink}
        />
      ))}
    </div>
    <div className="width-50 m-auto text-center mt-5">
      To know more about the projects that I have worked on in various organizations, kindly{' '}
      <span className="text-secondary hover">contact me.</span>
    </div>
  </div>
);

export default page;
