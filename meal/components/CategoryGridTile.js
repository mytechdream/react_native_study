import { Pressable, View, Text, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"

function CategoryGridTile({ title, color, onPress }) {
  const navigation = useNavigation() //可以通过这个hook获取navigation参数
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "#cccccc" }}
        style={styles.button}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.font}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    overflow: "hidden",
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  font: {
    fontWeight: "bold",
    fontSize: 18,
  },
})
