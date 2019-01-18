import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import colors from "../../assets/colors/UiColors";


const SocietyTitleHeading = props => {
    return (
        <View style={styles.headerContainer}>
            <Image resizeMode={'contain'} style={styles.headerImageStyle} source={{uri: props.imageUri}} />
            <View style={styles.headerContentStyle}>
                <Text style={styles.societyName}>{props.societyName}</Text>
                <Text style={styles.numStudentsSociety}>{props.numStudentsSociety} subscribers</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({

    headerContainer: {
        flexDirection: 'row',
    },
    headerImageStyle: {
        width: 40,
        marginRight: 10,
        borderRadius: 40
    },
    headerContent: {
        alignItems: 'center',
        height: '100%'
    },
    societyName: {
        color: 'white',
        fontSize: 16
    },
    numStudentsSociety: {
        color: colors.white
    },
});

export default SocietyTitleHeading;