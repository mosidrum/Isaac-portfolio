import { PostCard } from '../../components';
import { blogPosts } from '../../utils/blogPosts';

const page = () => (
  <div className="d-flex flex-column gap-3">
    <div className="mb-2 text-2xl">Blog Posts</div>
    <div>
      I write about web development, software engineering, and other topics on{' '}
      <a className="text-secondary text-decoration-none" href="https://medium.com/">
        medium
      </a>
      .
    </div>
    <div className="d-flex flex-column gap-3 max-with900 m-auto">
      {blogPosts.map((blogPost, index) => (
        <PostCard
          key={index}
          title={blogPost.title}
          description={blogPost.description}
          seen={blogPost.seen}
          read={blogPost.read}
          comment={blogPost.comment}
          datePublished={blogPost.published}
          link={blogPost.link}
        />
      ))}
    </div>
  </div>
);

export default page;
