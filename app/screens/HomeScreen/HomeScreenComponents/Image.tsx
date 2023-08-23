import { spacing } from "app/theme"
import React from "react"
import { View, Image as RNImage, ImageStyle, ViewStyle, Text, TextStyle } from "react-native"

type TImage = {
  withOverlay?: boolean
  isFullWidth?: boolean
  withText?: boolean
  text?: string
}
const Image = ({ withOverlay, isFullWidth, withText, text }: TImage) => {
  const imageWrapperStyles = isFullWidth ? $fullImage : $halfImage
  return (
    <View style={imageWrapperStyles}>
      <RNImage source={{ uri: "https://picsum.photos/300" }} alt="" style={$image} />
      {withOverlay && <View style={$overlay} />}
      {withText && (
        <View style={$textWrapper}>
          <Text style={$text}>{text}</Text>
        </View>
      )}
    </View>
  )
}

const $image: ImageStyle = {
  aspectRatio: 1,
  width: "100%",
}

const $halfImage: ImageStyle = {
  width: "50%",
}

const $fullImage: ImageStyle = {
  width: "100%",
}
const $overlay: ViewStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "blue",
  opacity: 0.2,
}
const $text: TextStyle = {
  textAlign: "center",
}
const $textWrapper: ViewStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  padding: spacing.lg,
}

export default Image
