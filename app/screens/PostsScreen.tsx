import React, { FC, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, Screen, Text } from "app/components"
import { useStores } from "app/models"
import { useNavigation } from "@react-navigation/native"

interface PostsScreenProps extends AppStackScreenProps<"Posts"> {}

type TPostWrapper = {
  description: string
  id: number
  title: string
}

const PostWrapper = ({ id, title }: TPostWrapper) => {
  const navigation = useNavigation()

  const onPress = () => {
    navigation.navigate("PostScreen", { id })
  }
  return (
    <View>
      <Text>
        Post: {id} {`\n`}
        Title: {title}
      </Text>
      <Button text="Show post" onPress={onPress} />
    </View>
  )
}

export const PostsScreen: FC<PostsScreenProps> = observer(function PostsScreen() {
  const {
    postStore: { fetchPosts, postsList },
  } = useStores()
  const navigation = useNavigation()

  const goBack = () => {
    if (navigation.canGoBack()) navigation.goBack()
  }

  useEffect(() => {
    ;(async () => await fetchPosts())()
  }, [])

  return (
    <Screen style={$root} preset="scroll">
      <Button text="Go back" onPress={goBack} />
      {postsList.map((post) => (
        <PostWrapper key={post.id} {...post} />
      ))}
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
