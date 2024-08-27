import { View, Text, StyleSheet } from "react-native"

function MealDetail({
  duration,
  complexity,
  affordability,
  style,
  titleStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, titleStyle]}>{duration}</Text>
      <Text style={[styles.detailItem, titleStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, titleStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
})
export default MealDetail
