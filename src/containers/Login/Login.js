import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import logo from './../../assets/images/logo.png';
import colors from './../../assets/colors/UiColors';
import InputFieldWithIcon from "../../components/InputFieldWithIcon/InputFieldWithIcon";
import RoundButton from "../../components/RoundButton/RoundButton";

class Login extends Component {

    render() {
        return (
            <View style={styles.loginContainer}>
                <View style={styles.logoContainer}>
                    <Image
                        resizeMode={'contain'}
                        style={styles.logoImage}
                        source={logo} />
                    <Text style={styles.logoText}>ExtraCurriculars</Text>
                </View>

                <View style={styles.formContainer}>
                    <InputFieldWithIcon iconName={'ios-person'}
                                        textColor={colors.white}
                                        placeholder={'Enrollment Number'}
                                        iconColor={colors.icons}  />
                    <InputFieldWithIcon iconName={'ios-key'}
                                        textColor={colors.white}
                                        placeholder={'Password'}
                                        iconColor={colors.icons}  />
                    <View style={styles.dummyContainer}>
                        <RoundButton text={'Login'} backgroundColor={colors.purple} textColor={colors.white} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: colors.backgroundMain,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 26
    },
    logoContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 50
    },
    logoImage: {
        width: '100%',
        height: 65
    },
    logoText: {
        fontFamily: 'CaviarDreams_Bold',
        color: colors.white,
        fontSize: 34
    },
    formContainer: {
        width: '100%',
        alignItems: 'center'
    },
    dummyContainer: {
        width: '80%',
        alignItems: 'center',
        marginTop: 5
    }
});

export default Login;
