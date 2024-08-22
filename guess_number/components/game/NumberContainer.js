import { View, Text, StyleSheet, Dimensions } from "react-native"


function NumerContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}
dimensionWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: '#ddb528',
        padding: dimensionWidth < 380 ? 12 : 24,
        marginHorizontal: 12,
        marginTop: dimensionWidth < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: '#ddb528',
        fontSize: dimensionWidth < 380 ? 28 : 36,
        fontFamily: 'open-sans-bold'
    }
})
export default NumerContainer