import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {withNavigation} from 'react-navigation';
import { Header, Left, Title, Button, Right } from 'native-base';
import Icon from "react-native-vector-icons/Ionicons";

import colors from "../../assets/colors/UiColors";
import FeedTabs from './FeedTabs';
import MainHomeHeader from "../../components/Headers/MainHomeHeader";
import NavigationService from "../../Helpers/NavigationService";

class Home extends Component {

    state = {
        tabSelected: 'Home'
    };

    render() {
        return (
            <View style={styles.container}>
                <MainHomeHeader/>
                {/*<View*/}
                    {/*style={styles.tabBar}>*/}
                    {/*<View style={styles.headerInnerContainer}>*/}
                        {/*<View style={styles.headerButtonsContainer}>*/}
                            {/*<TouchableOpacity*/}
                                {/*onPress={() => {*/}
                                    {/*this.setState({tabSelected: 'Home'});*/}
                                    {/*NavigationService.navigate('Home');*/}
                                {/*}}*/}
                                {/*style={this.state.tabSelected === 'Home' ? {...styles.tabButton, ...styles.tabBorderStyle} : {...styles.tabButton, ...styles.tabBorderStyleNotSelected}}>*/}
                                {/*<Text style={styles.tabButtonText}>Home</Text>*/}
                            {/*</TouchableOpacity>*/}
                            {/*<TouchableOpacity*/}
                                {/*onPress={() => {*/}
                                    {/*this.setState({tabSelected: 'All'});*/}
                                    {/*NavigationService.navigate('All');*/}
                                {/*}}*/}
                                {/*style={this.state.tabSelected === 'All' ? {...styles.tabButton, ...styles.tabBorderStyle} :  {...styles.tabButton, ...styles.tabBorderStyleNotSelected}}>*/}
                                {/*<Text style={styles.tabButtonText}>All</Text>*/}
                            {/*</TouchableOpacity>*/}
                        {/*</View>*/}
                    {/*</View>*/}
                {/*</View>*/}
                <FeedTabs/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundMain,
        flex: 1
    },
    tabBar: {
        backgroundColor: colors.header,
        shadowColor: '#000',
        height: 44
    },
    headerInnerContainer: {
        width: '100%'
    },
    headerButtonsContainer: {
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabButton: {
        height: '100%',
        justifyContent: 'center',
        width: '30%',
        alignItems: 'center',
    },
    tabButtonText: {
        color: colors.white,
    },
    tabBorderStyle: {
        borderBottomWidth: 2,
        borderColor: colors.highlighted
    },
    tabBorderStyleNotSelected: {
        borderBottomWidth: 2,
        borderColor: 'transparent'
    }
});



export default Home;