import {TextInput, View, StyleSheet} from "react-native";
import colors from "../../assets/colors/UiColors";
import React from "react";


const TextArea = props => {

    return (<View style={styles.textInputContainer}>
        <TextInput multiline={true} numberOfLines={4} placeholder={props.placeholder} placeholderTextColor={colors.icons} style={styles.textInputStyle} />
    </View>);
};

const styles = StyleSheet.create({
    textInputContainer: {
        backgroundColor: colors.navigationDrawer,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.navigationDrawer,
        marginTop: 5,
        marginBottom: 5,
        padding: 10,
    },
    textInputStyle: {
        width: '100%',
        backgroundColor: 'transparent',
        height: 150,
        justifyContent: 'flex-start',
        textAlignVertical: 'top',
        color: 'white',
        padding: 0
    }
});

export default TextArea;