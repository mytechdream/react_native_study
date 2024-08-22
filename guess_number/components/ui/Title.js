import { Text, StyleSheet, Platform } from "react-native"

function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>

}
const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: Platform.select({ ios: 0, android: 2 }),
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%',//如果占比超过80%就按80算否则按照width
        width: 300
    }
})
export default Title