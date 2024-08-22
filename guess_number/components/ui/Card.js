import { View, StyleSheet, Dimensions } from "react-native"

function Card({ children }) {
    return (
        <View style={styles.card}>{children}</View>
    )
}
const dimensionWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    card: {
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        marginTop: dimensionWidth < 380 ? 18 : 36,
        backgroundColor: "#4e0329",
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        alignItems: "center",
    },
})
export default Card