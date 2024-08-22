import { View, Text, Pressable, StyleSheet } from "react-native";
function PrimaryButton({ children, onPress, style }) {

    return (
        <View style={[styles.buttonOuterContainer, style]}>
            <Pressable
                style={({ pressed }) => pressed ? [styles.pressd, styles.buttonInnerContainer] : styles.buttonInnerContainer}
                onPress={onPress} android_ripple={{ color: '#640233' }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )

}
const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressd: {
        opacity: 0.75
    }
})
export default PrimaryButton;