import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

const Post = types.model({
  title: types.string,
  description: types.string,
  createdAt: types.string,
  id: types.identifierNumber,
})

export interface PostType extends Instance<typeof Post> {}
export interface PostTypeSnapshotOut extends SnapshotOut<typeof Post> {}
export interface PostTypeSnapshotIn extends SnapshotIn<typeof Post> {}

export { Post }
