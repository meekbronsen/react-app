import { useState } from 'react';
import usePosts from '../hooks/usePosts';

const PostList = () => {
  const [userId, setUserId] = useState<number>();
  const { data: posts , error} = usePosts(userId);

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select 
        onChange= {(event) => setUserId(parseInt(event.target.value))}
        value={userId}
        className="form-select mb-3">
        <option value=""></option>
        <option value="1">user1</option>
        <option value="2">user2</option>
        <option value="3">user3</option>
      </select>
    <ul className="list-group">
      {posts?.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
    </>
  );
};

export default PostList;
