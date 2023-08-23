import React from "react"
import { Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { colors, spacing } from "app/theme"

type TDescriptionSection = {
  headerText: string
  subHeaderText: string
  buttonText: string
  description?: string
  onPress: () => void
}
const DescriptionSection = ({
  headerText,
  subHeaderText,
  description,
  buttonText,
  onPress,
}: TDescriptionSection) => {
  return (
    <View style={$wrapper}>
      <Text style={$header}>{headerText}</Text>
      <Text style={$subHeader}>{subHeaderText}</Text>
      <Text style={$paragraph}>
        {description ||
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate turpis justo, vel sodales dolor blandit ac. Duis quis dui ultrices, scelerisque odio et, rutrum nunc. Fusce enim nunc, rhoncus eu eleifend eu, sagittis eu tellus. Mauris sodales leo vitae ultricies tincidunt. Donec in tortor aliquam sapien hendrerit varius. Donec enim elit, blandit non enim ut, sollicitudin congue diam. Morbi id iaculis quam. Suspendisse a luctus nibh, non eleifend massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam fermentum, mi sed scelerisque gravida, nisl mi posuere urna, in porttitor lectus libero vitae nunc. Sed id diam congue, aliquet arcu non, vestibulum tortor. Fusce scelerisque orci quis facilisis auctor.
  \n
  Quisque commodo, dolor ac molestie fermentum, ipsum risus condimentum ex, quis posuere orci nisl vel enim. Ut sagittis ipsum id tellus aliquet, at luctus velit suscipit. Quisque vel ligula fermentum, dictum sapien eu, gravida risus. Cras sit amet justo faucibus, condimentum augue non, ultricies nisi. Vivamus commodo risus quis purus suscipit porta. In et velit non nibh auctor ultricies vel non urna. Morbi suscipit pharetra enim, eget vestibulum lacus imperdiet eget. Phasellus non ligula quam. Phasellus blandit arcu non leo vulputate condimentum. Aliquam vehicula, tortor sed dictum aliquam, lacus magna rutrum dui, in feugiat ex tortor et justo. Donec eleifend lectus dui. Praesent egestas ex sit amet tristique porttitor.`}
      </Text>
      <TouchableOpacity style={$button} onPress={onPress}>
        <Text style={$buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  )
}

const $wrapper: ViewStyle = {
  alignItems: "center",
}

const $header: TextStyle = {
  fontSize: 30,
  fontWeight: "700",
}
const $subHeader: TextStyle = {
  color: colors.palette.secondary100,
  fontSize: 20,
  textAlign: "center",
  fontWeight: "600",
}

const $paragraph: TextStyle = {
  textAlign: "center",
  paddingTop: spacing.md,
  paddingBottom: spacing.md,
}

const $button: ViewStyle = {
  borderColor: colors.palette.secondary100,
  borderWidth: 2,
  padding: spacing.sm,
}
const $buttonText: TextStyle = {}
export { DescriptionSection }
