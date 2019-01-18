import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import colors from "../../assets/colors/UiColors";
import Icon from 'react-native-vector-icons/Ionicons';
import EventCard from "../../components/EventCard/EventCard";

class Subscribed extends Component {
    render() {
        return (<ScrollView  style={styles.container}>
            <EventCard
                numStudentsSociety={13}
                eventTitle={'I want to learn JavaScript.'}
                postedOnDate={'15/07/2016'}
                eventDescription={'I want to learn JavaScript. I want to learn JavaScript. I want to learn JavaScript. I want to learn JavaScript. I want to learn JavaScript.'}
                imageUri={'http://www.worldyouknow.com/wp-content/uploads/2018/10/pubg_PNG53.png'}
                societyName={'Cybertronics'} />
            <EventCard
                numStudentsSociety={13}
                eventTitle={'I want to learn JavaScript.'}
                postedOnDate={'15/07/2016'}
                eventDescription={'I want to learn JavaScript. I want to learn JavaScript. I want to learn JavaScript. I want to learn JavaScript. I want to learn JavaScript.'}
                imageUri={'http://www.worldyouknow.com/wp-content/uploads/2018/10/pubg_PNG53.png'}
                societyName={'Cybertronics'} />
            <EventCard
                numStudentsSociety={13}
                eventTitle={'I want to learn JavaScript.'}
                postedOnDate={'15/07/2016'}
                eventDescription={'I want to learn JavaScript. I want to learn JavaScript. I want to learn JavaScript. I want to learn JavaScript. I want to learn JavaScript.'}
                imageUri={'http://www.worldyouknow.com/wp-content/uploads/2018/10/pubg_PNG53.png'}
                societyName={'Cybertronics'} />
        </ScrollView>);
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundMain,
        flex: 1,
        padding: 10
    },
    cardContainer: {
        backgroundColor: colors.card,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5
    },
    headerContainer: {
        flexDirection: 'row',
    },
    headerImageStyle: {
        width: 40,
        marginRight: 10
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
    eventDetailsContainer: {
        marginTop: 10
    },
    eventTitle: {
        color: 'white',
        fontSize: 20
    },
    eventDescription: {
        color: colors.white
    },
    interfaceContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    interfaceButton: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    interfaceButtonText: {
        color: colors.white,
        marginLeft: 10
    }
});

export default Subscribed;