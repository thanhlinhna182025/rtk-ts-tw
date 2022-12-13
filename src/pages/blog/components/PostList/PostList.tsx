import { FC, useEffect, useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { deletePost, startEditPost } from 'store/blog.reducer'
import { RootState } from 'store/store'
import Intro from '../Intro'
import PostItem from '../PostItem'

interface PostListProps {}

const PostList: FC<PostListProps> = ({}) => {
  const postList = useSelector((state: RootState) => state.blog.postList)
  const [posts, setPosts] = useState(postList)
  const dispatch = useDispatch()
  useEffect(() => {
    setPosts(postList)
  }, [postList])
  const handleDelete = (postId:string)=>{
    dispatch(deletePost(postId))
  }
  const handleEditStart = (postId:string)=>{
    dispatch(startEditPost(postId))
  }
  
  return (
    <div>
      <div className='bg-white py-6 sm:py-8 lg:py-12'>
        <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
          <Intro />
          <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8'>
            {posts.map((post) => (
              <PostItem key={post.id} post={post} handleDelete={handleDelete} handleEditStart={handleEditStart} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostList
