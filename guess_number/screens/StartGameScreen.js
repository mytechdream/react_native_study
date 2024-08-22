import {
    TextInput,
    Alert,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    useWindowDimensions,
    ScrollView
} from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton"
import { useState } from "react"
import Title from "../components/ui/Title"
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText"
function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState("")
    const { width, height } = useWindowDimensions() //设置监视器，可以实时返回大小

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }
    function resetInputHandler() {
        setEnteredNumber("")
    }
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            //alert
            Alert.alert(
                "Invalid Number",
                "Number has to be a number between 1 and 99",
                [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
            )
            return
        }
        // console.log('Valid');
        onPickNumber(chosenNumber)
    }
    console.log(height)

    const marginTopDistance = height < 500 ? 30 : 100

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
                    {/* 添加样式变量 */}
                    <Title>Guess your Number</Title>
                    <Card>
                        <InstructionText>Enter a Number</InstructionText>
                        <TextInput
                            style={styles.numberInput}
                            maxLength={2}
                            keyboardType="number-pad"
                            onChangeText={numberInputHandler}
                            value={enteredNumber}
                        />
                        <View style={styles.PrimaryButton}>
                            <View style={{ width: "40%" }}>
                                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={{ width: "40%" }}>
                                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView></ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        // marginTop: deviceHeight < 380 ? 30 : 100,
        alignItems: "center",
    },

    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: "#ddb528",
        borderBottomWidth: 2,
        color: "#ddb528",
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
    PrimaryButton: {
        flexDirection: "row",
        gap: 30,
    },
})

export default StartGameScreen
