import React from 'react';
import {StyleSheet, TextInput, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../../assets/colors/UiColors";

const InputFieldWithIcon = (props) => (
    <View style={styles.textInputContainer}>
        <View style={styles.iconContainer}><View style={styles.iconSubContainer}>
            <Icon name={props.iconName} color={props.iconColor} size={30} />
        </View></View>
        <TextInput placeholder={props.placeholder} placeholderTextColor={props.iconColor} style={{...styles.textInput, color: props.textColor}} />
    </View>
);


const styles = StyleSheet.create({
    textInput: {
        width: '100%',
        flex: 9,
        height: 40,
        justifyContent: 'center',
        color: 'white',
        padding: 0
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        borderColor: colors.icons,
        borderRightWidth: 1
    },
    iconSubContainer: {
        height: 30,
        width: 30
    },
    textInputContainer: {
        width: '100%',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: colors.icons,
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 5,
        marginBottom: 5
    }
});


export default InputFieldWithIcon;