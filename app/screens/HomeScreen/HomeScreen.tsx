import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Screen } from "app/components"
import { DescriptionSection } from "app/screens/HomeScreen/HomeScreenComponents/DescriptionSection"
import Gallery from "app/screens/HomeScreen/HomeScreenComponents/Gallery"
import { spacing } from "app/theme"
import { useNavigation } from "@react-navigation/native"
import { HomeStackNavigatorParams } from "app/navigators/HomeNavigator"

interface HomeScreenProps extends HomeStackNavigatorParams {}

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen() {
  const navigation = useNavigation()
  const onPress = () => navigation.navigate("PostsScreen")
  return (
    <Screen style={$root} preset="scroll">
      <View style={$sectionWrapper}>
        <DescriptionSection
          headerText="KILKA SŁÓW O NAS"
          subHeaderText="CZYLI KIM JESTEŚMY I DOKĄD ZMIERZAMY"
          buttonText="ZOBACZ WIĘCEJ"
          onPress={onPress}
        />
      </View>
      <View style={$sectionWrapper}>
        <Gallery />
      </View>
      <View style={$sectionWrapper}>
        <DescriptionSection
          headerText="NASZA OFERTA"
          subHeaderText="DOWIEDZ SIĘ CO MOŻEMY TOBIE ZAOFEROWAĆ"
          buttonText="ZOBACZ WIĘCEJ"
          onPress={onPress}
        />
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const $sectionWrapper: ViewStyle = {
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.md,
}
