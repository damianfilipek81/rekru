import { Dimensions, View, ViewStyle } from "react-native"
import Image from "app/screens/HomeScreen/HomeScreenComponents/Image"
import React from "react"

const Gallery = () => {
  const { width } = Dimensions.get("window")
  const isMobileLayout = width <= 600

  return (
    <View style={$wrapper}>
      {!isMobileLayout ? (
        <>
          <View style={$row}>
            <Image isFullWidth={false} withOverlay />
            <Image isFullWidth={false} />
          </View>
          <View style={$row}>
            <Image isFullWidth={false} />
            <Image isFullWidth={false} withOverlay />
          </View>
        </>
      ) : (
        <>
          <Image isFullWidth withOverlay />
          <Image isFullWidth />
          <Image isFullWidth />
          <Image
            isFullWidth
            withOverlay
            withText
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate turpis justo, vel sodales dolo"
          />
        </>
      )}
    </View>
  )
}

const $wrapper: ViewStyle = {
  flex: 1,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}

const $row: ViewStyle = {
  flexDirection: "row",
}

export default Gallery
