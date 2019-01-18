import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import colors from "../../assets/colors/UiColors";

const RoundButton = (props) => (
    <TouchableOpacity style={{...styles.buttonContainer, backgroundColor: props.backgroundColor, borderColor: props.backgroundColor}}>
        <View>
            <Text style={{...styles.buttonTextStyle, color: props.textColor}}>{props.text}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    buttonContainer: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 5,
        paddingBottom: 5,
        borderColor: colors.purple,
        backgroundColor: colors.purple,
        borderWidth: 1,
        width: '100%',
        alignItems: 'center',
        borderRadius: 34
    },
    buttonTextStyle: {
        fontSize: 24,
    }
});

export default RoundButton;