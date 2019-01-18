import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import colors from "../../assets/colors/UiColors";
import EventCard from "../../components/EventCard/EventCard";

class All extends Component {
    render() {
        return (<ScrollView style={styles.container}>
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
    }
});

export default All;