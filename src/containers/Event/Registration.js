import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity} from 'react-native';
import colors from "../../assets/colors/UiColors";
import Icon from 'react-native-vector-icons/Ionicons';
import InputField from "../../components/InputField/InputField";
import TextArea from "../../components/TextArea/TextArea";
import RoundButton from "../../components/RoundButton/RoundButton";

class Registration extends Component {
    render() {
        return (<ScrollView style={styles.container}>
            <View style={styles.eventTitleContainer}>
                <Text style={styles.eventTitle}>Do you guys actually bother to verify install media?</Text>
            </View>
            <View style={styles.formContainer}>
                <InputField placeholder={'Name'}/>
                <InputField placeholder={'Enrollment Number'}/>
                <InputField placeholder={'Email Id'}/>
                <InputField placeholder={'Branch'}/>
                <TextArea placeholder={'What do you expect from this event?'} />
                <View style={styles.dummyButtonContainer}>
                    <View style={styles.registerButtonContainer}>
                        <RoundButton text={'Register'} backgroundColor={colors.purple} textColor={colors.white} />
                    </View>
                </View>
            </View>
        </ScrollView>);
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    eventTitle: {
        fontSize: 22,
        color: 'white'
    },
    eventTitleContainer: {
        marginTop: 5,
        marginBottom: 10
    },
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
    },
    dummyButtonContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    registerButtonContainer: {
        width: '80%'
    }
});

export default Registration;