import { FC } from 'react'

interface IntroProps {}

const Intro: FC<IntroProps> = ({}) => {
  return (
    <div className='mb-10 md:mb-16'>
      <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>Được Dev Blog</h2>
      <p className='mx-auto max-w-screen-md text-center text-gray-500 md:text-lg'>
        Đừng bao giờ từ bỏ. Hôm nay khó khăn, ngày mai sẽ trở nên tồi tệ. Nhưng ngày mốt sẽ có nắng
      </p>
    </div>
  )
}

export default Intro
