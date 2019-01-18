import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import colors from "./src/assets/colors/UiColors";
import {Header} from 'native-base';
import Home from "./src/containers/Home/Home";
import Event from "./src/containers/Event/Event";
import Login from "./src/containers/Login/Login";
import SocietiesHome from "./src/containers/Societies/SocietiesHome";


class App extends Component {
    render() {
        return (
            <View style={styles.masterContainer}>
                <StatusBar
                    backgroundColor={colors.statusBar}
                    barStyle="light-content"/>
                <SocietiesHome/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    masterContainer: {
        flex: 1
    }
});

export default App;