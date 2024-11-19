import Image from 'next/image';

type ExperienceListProps = {
  image: string;
  title: string;
  position: string;
  duration: string;
};

export const ExperienceList = ({ image, duration, position, title }: ExperienceListProps) => (
  <div>
    <Image src={image} width={400} height={400} alt={title} />
    <div>
      <div>{title}</div>
      <div>
        <div>{position}</div>
        <div>{duration}</div>
      </div>
    </div>
  </div>
);
