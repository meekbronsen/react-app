import { useInfiniteQuery } from '@tanstack/react-query';
import usePosts from '../hooks/usePosts';
import React from 'react';

const PostList = () => {
  const pageSize = 10;
  // the useInfiniteQuery returns fetchNextPage and isFetchingNextPage from it's object
  // The fetchNextPage function below will execute getNextPageParam
  // isFetchingNextPage is boolean returned from useInfiniteQuery
  const { data: posts, error, fetchNextPage, isFetchingNextPage} = usePosts({pageSize});

  if (error) return <p>{error.message}</p>;

  return (
    <>
    <ul className="list-group">
      {posts?.pages.map((page, index) => ( 
        <React.Fragment key={index}>
          {page.map((post) => (
            <li key={post.id} className='list-group-item'>
              {post.title}
            </li>
          ))}
        </React.Fragment>
      ))}
    </ul>
    <button disabled={isFetchingNextPage} onClick={()=> fetchNextPage()} className="btn btn-primary">{
      isFetchingNextPage ? <div className="spinner-border text-light" role="status"><span className="visually-hidden"> Loading... </span></div> : "Load More"}
    </button>
    </>
  );
};

export default PostList;
