import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import { AddPostScreen, HomeScreen, PostScreen, PostsScreen } from "app/screens"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SafeAreaView } from "react-native-safe-area-context"
import { ViewStyle } from "react-native"

export type HomeStackNavigatorParams = {
  HomeScreen: undefined
  PostScreen: undefined
  PostsScreen: undefined
  AddPostScreen: undefined
}

export type HomeNavigatorScreen<T extends keyof HomeStackNavigatorParams> = CompositeScreenProps<
  BottomTabScreenProps<HomeStackNavigatorParams, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Stack = createNativeStackNavigator<HomeStackNavigatorParams>()

export function HomeNavigator() {
  return (
    <SafeAreaView style={$wrapper}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PostScreen" component={PostScreen} />
        <Stack.Screen name="PostsScreen" component={PostsScreen} />
        <Stack.Screen name="AddPostScreen" component={AddPostScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  )
}

const $wrapper: ViewStyle = {
  flex: 1,
}
