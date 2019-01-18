import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../../assets/colors/UiColors";
import React from "react";
import SocietyTitleHeading from "../SocietyTitleHeading/SocietyTitleHeading";

const EventCard = props => {


    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity>
                <SocietyTitleHeading societyName={props.societyName}
                                     numStudentsSociety={props.numStudentsSociety}
                                     imageUri={props.imageUri} />
                <View style={styles.eventDetailsContainer}>
                    <Text style={styles.eventTitle}>{props.eventTitle}</Text>
                    <Text style={styles.eventDescription}>Posted on {props.postedOnDate}</Text>
                    <Text style={styles.eventDescription}>{props.eventDescription}</Text>
                </View>
            </TouchableOpacity>
            <View>
                <View style={styles.interfaceContainer}>
                    <TouchableOpacity style={styles.interfaceButton}>
                        <Icon color={colors.icons} size={24} name={'ios-bookmark'} />
                        <Text style={styles.interfaceButtonText}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.interfaceButton}>
                        <Icon name={'ios-text'} color={colors.icons} size={24}/>
                        <Text style={styles.interfaceButtonText}>Comment</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({

    cardContainer: {
        backgroundColor: colors.card,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5
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

export default EventCard;