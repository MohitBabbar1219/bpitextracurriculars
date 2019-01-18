import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';


import colors from "../../assets/colors/UiColors";
import EventTabs from './EventTabs';
import CommonHeader from "../../components/Headers/CommonHeader";

class Event extends Component {


    render() {
        return (
            <View style={styles.container}>
                <CommonHeader headerTitle={'Event Name'} />
                <EventTabs/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundMain,
        flex: 1
    }
});



export default Event;