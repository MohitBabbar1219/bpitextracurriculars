import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions} from 'react-native';
import colors from "../../assets/colors/UiColors";
import Icon from 'react-native-vector-icons/Ionicons';
import SocietyTitleHeading from "../../components/SocietyTitleHeading/SocietyTitleHeading";
import RoundButton from "../../components/RoundButton/RoundButton";

class Description extends Component {

    state = {
        descImageHeight: null
    };

    render() {
        Image.getSize('https://images7.alphacoders.com/411/thumb-1920-411820.jpg', (width, height) => {
            console.log(width, height,
                Dimensions.get('window').width);
            this.setState({descImageHeight: height * (Dimensions.get('window').width) / width});
        });
        // console.log(height);
        return (<ScrollView style={styles.container}>
            <SocietyTitleHeading societyName={'Cybertronics'}
                                 numStudentsSociety={13}
                                 imageUri={'https://image.freepik.com/free-vector/gradient-abstract-square-background_1164-1644.jpg'} />
            <View style={styles.descImageContainer}>
                {this.state.descImageHeight ? <Image style={{...styles.headerImageStyle, height: this.state.descImageHeight}}
                                                     source={{uri: 'https://images7.alphacoders.com/411/thumb-1920-411820.jpg'}} /> : null}
            </View>
            <View style={styles.descTextContainer}>
                <Text style={styles.eventTitle}>Do you guys actually bother to verify install media?</Text>
                <Text style={styles.postDate}>Posted on 15/02/2018</Text>
                <Text style={styles.eventDescription}>Retrieve the width and height (in pixels) of an image prior to displaying it. This method can fail if the image cannot be found, or fails to download.

                    In order to retrieve the image dimensions, the image may first need to be loaded or downloaded, after which it will be cached. This means that in principle you could use this method to preload images, however it is not optimized for that purpose, and may in future be implemented in a way that does not fully load/download the image data. A proper, supported way to preload images will be provided as a separate API.

                    Does not work for static image resources.</Text>
            </View>
            <View style={styles.dummyButtonContainer}>
                <View style={styles.registerButtonContainer}>
                    <RoundButton text={'Register'} backgroundColor={colors.purple} textColor={colors.white} />
                </View>
            </View>
        </ScrollView>);
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundMain,
        flex: 1,
        padding: 10
    },
    descImageContainer: {
        marginTop: 10
    },
    headerImageStyle: {
        resizeMode: 'contain',
    },
    descTextContainer: {
    },
    eventTitle: {
        fontSize: 22,
        color: 'white'
    },
    postDate: {
        color: colors.white
    },
    eventDescription: {
        color: 'white',
        fontSize: 16
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

export default Description;