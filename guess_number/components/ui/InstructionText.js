import { Text, StyleSheet } from "react-native";

function InstructionText({ children, style }) {
    return (
        <Text style={[styles.instructionText, style]}>{children}</Text>
    )
}
const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: "#ddb528",
        fontSize: 24,
        textAlign: 'center'
    },
})

export default InstructionText;