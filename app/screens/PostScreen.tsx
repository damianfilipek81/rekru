import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, Screen, Text } from "app/components"
import { useStores } from "app/models"

interface PostScreenProps extends AppStackScreenProps<"Post"> {}

export const PostScreen: FC<PostScreenProps> = observer(function PostScreen({ navigation, route }) {
  const {
    postStore: { deletePost },
  } = useStores()
  const goBack = () => {
    if (navigation.canGoBack()) navigation.goBack()
  }

  const deletePostHandler = async () => {
    await deletePost(route.params.id).then(() => goBack())
  }

  return (
    <Screen style={$root} preset="scroll">
      <Button text="Go back" onPress={goBack} />
      <Button text="Delete" onPress={deletePostHandler} />
      <Text>Post id: {route.params.id}</Text>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
