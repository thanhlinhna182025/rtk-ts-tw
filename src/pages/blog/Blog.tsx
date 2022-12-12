import { FC } from 'react'
import CreateForm from './components/CreateForm'
import PostList from './components/PostList'

interface BlogProps {}

const Blog: FC<BlogProps> = ({}) => {
  return (
    <div className='p-5'>
      <CreateForm />
      <PostList />
    </div>
  )
}

export default Blog
