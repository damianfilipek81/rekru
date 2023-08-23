import { Post, PostType } from "app/models/Post"
import { api } from "app/services/api"
import { flow, types } from "mobx-state-tree"

const PostStore = types
  .model({
    posts: types.optional(types.map(Post), {}),
  })
  .views((self) => ({
    get postsList() {
      return [...self.posts.values()]
    },
  }))
  .actions((self) => ({
    setPosts(posts: PostType[]) {
      posts.forEach((post) => {
        self.posts.set(post.id, post)
      })
    },
    addPost(post) {
      self.posts.set(post.id, post)
    },
  }))
  .actions((self) => ({
    fetchPosts: flow(function* fetchPosts() {
      try {
        const posts = yield api.getPosts()
        self.setPosts(posts)
      } catch (error) {
        console.log(error)
      }
    }),
    deletePost: flow(function* fetchPosts(id: string) {
      try {
        yield api.removePost(id)
        self.posts.delete(id)
      } catch (error) {
        console.log(error)
      }
    }),
  }))

export { PostStore }
