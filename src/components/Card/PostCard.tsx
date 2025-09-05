import { IoEyeOutline } from 'react-icons/io5';
import { GoComment } from 'react-icons/go';

type PostCardProps = {
  title: string;
  description: string;
  comment: number;
  seen: number;
  datePublished: string;
  read?: string;
  link: string;
};

export const PostCard = ({
  title,
  description,
  comment,
  seen,
  datePublished,
  read,
  link
}: PostCardProps) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="d-flex flex-column gap-2 post-card-bg pv-3 ph-3 hover text-decoration-none border10"
  >
    <div className="font-bold text-lg text-white">{title}</div>
    <div className="font-light text-white">{description}</div>
    <div className="d-flex gap-3 text-white">
      <div className="d-flex gap-1 align-items-center">
        <IoEyeOutline />
        <span>{seen}</span>
      </div>
      <div className="d-flex gap-1 align-items-center">
        <GoComment />
        <span>{comment}</span>
      </div>
      <div className="d-flex gap-1 align-items-center">{read}</div>
      <div className="d-flex gap-1 align-items-center">{datePublished}</div>
    </div>
  </a>
);
