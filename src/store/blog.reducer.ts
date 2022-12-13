import { createAction, createReducer, current, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { initialBlog } from 'contants/blog'
import { Post } from 'types/post.style'

interface BlogState {
  postList: Post[]
  editPost: Post | null
}
const initialState: BlogState = {
  postList: initialBlog,
  editPost: null
}

export const addPost = createAction('blog/addPost',function (post:Omit<Post,"id">) {
  return {
    payload: {
      ...post,
      id: nanoid()
    }
  }
  
})
export const deletePost = createAction<string>('blog/deletePost')
export const startEditPost = createAction<string>('blog/startEditPost')
export const cancelEditPost = createAction('blog/cancelEditPost')
export const finishEditPost = createAction<Post>('blog/finishEditPost')
// cach dung buider callback cho typescript
const blogReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addPost, (state, action) => {
      const post = action.payload
      state.postList.push(post)
    })
    .addCase(deletePost, (state, action) => {
      const postId = action.payload
      const foundPostIndex = state.postList.findIndex((post) => post.id === postId)
      if (foundPostIndex !== -1) {
        state.postList.splice(foundPostIndex, 1)
      }
    })
    .addCase(startEditPost, (state, action) => {
      const postId = action.payload
      const foundPost = state.postList.find((post) => post.id === postId) || null
      state.editPost = foundPost
    })
    .addCase(cancelEditPost, (state) => {
      state.editPost = null
    })
    .addCase(finishEditPost, (state, action) => {
      console.log(current(state))
      const postId = action.payload.id
      state.postList.some((post, index) => {
        if (post.id === postId) {
          state.postList[index] = action.payload
          return true
        }
        return false
      })
      state.editPost = null
      console.log(current(state))
    })
    .addMatcher(
      (action) => action.type.includes('cancel'),
      (state, action) => {
        console.log(current(state))
      }
    )
    .addDefaultCase((state, action) => {
      console.log(current(state))
    })
})

// Cách dùng match object phù hợp reactjs vì phải thêm vào vào Payload
//  action và cách dùng matcher và default sẽ rờm rà
// const blogReducer = createReducer(
//   initialState,
//   {
//     [addPost.type]: (state, action: PayloadAction<Post>) => {
//       const post = action.payload
//       state.postList.push(post)
//     },
//     [deletePost.type]: (state, action: PayloadAction<string>) => {
//       const postId = action.payload
//       const foundPostIndex = state.postList.findIndex((post) => post.id === postId)
//       if (foundPostIndex !== -1) {
//         state.postList.splice(foundPostIndex, 1)
//       }
//     },
//     [startEditPost.type]: (state, action: PayloadAction<string>) => {
//       const postId = action.payload
//       const foundPost = state.postList.find((post) => post.id === postId) || null
//       state.editPost = foundPost
//     },
//     [cancelEditPost.type]: (state) => {
//       state.editPost = null
//     },
//     [finishEditPost.type]: (state, action: PayloadAction<Post>) => {
//       console.log(current(state))
//       const postId = action.payload.id
//       state.postList.some((post, index) => {
//         if (post.id === postId) {
//           state.postList[index] = action.payload
//           return true
//         }
//         return false
//       })
//       state.editPost = null
//       console.log(current(state))
//     }
//   },
//   [
//     {
//       matcher: ((action: any) => action.type.includes('cancel')) as any,
//       reducer: (state, action) => {
//         console.log(current(state))
//       }
//     }
//   ],
//   (state) => {
//     console.log(current(state))
//   }
// )


export default blogReducer
