import { FC } from 'react'
import Intro from '../Intro'
import Post from '../Post/Post'

interface PostListProps {}

const PostList: FC<PostListProps> = ({}) => {
  return (
    <div>
      <div className='bg-white py-6 sm:py-8 lg:py-12'>
        <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
          <Intro />
          <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8'>
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostList
