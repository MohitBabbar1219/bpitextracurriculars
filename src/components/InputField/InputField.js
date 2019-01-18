import {TextInput, View, StyleSheet} from "react-native";
import colors from "../../assets/colors/UiColors";
import React from "react";


const InputField = props => {
    return (<View style={styles.textInputContainer}>
        <TextInput placeholder={props.placeholder} placeholderTextColor={colors.icons} style={styles.textInputStyle} />
    </View>);
};

const styles = StyleSheet.create({
    textInputContainer: {
        backgroundColor: colors.navigationDrawer,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: colors.navigationDrawer,
        marginTop: 5,
        marginBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    textInputStyle: {
        width: '100%',
        backgroundColor: 'transparent',
        height: 40,
        justifyContent: 'center',
        color: 'white',
        padding: 0
    }
});

export default InputField;