import React, {Component} from 'react';
import { View, Text, StyleSheet, ViewPagerAndroid } from 'react-native';
import {} from 'native-base';
import CommonHeader from "../../components/Headers/CommonHeader";
import colors from "../../assets/colors/UiColors";

const SocietiesHome = props => {


    return (
        <View style={styles.categoryContainer}>
            <CommonHeader headerTitle={'Categories'} />
            <ViewPagerAndroid peekEnabled={false} initialPage={0} style={styles.mainContent}>
                <View style={styles.pagerPage} key={'1'}>
                    <View style={styles.pagerInnerPage}>
                        <Text>First</Text>
                    </View>
                </View>
                <View style={styles.pagerPage} key={'2'}>
                    <View style={styles.pagerInnerPage}>
                        <Text>Second</Text>
                    </View>
                </View>

                <View style={styles.pagerPage} key={'3'}>
                    <View style={styles.pagerInnerPage}>
                        <Text>Third</Text>
                    </View>
                </View>
            </ViewPagerAndroid>
        </View>
    );

};

const styles = StyleSheet.create({
    categoryContainer: {
        backgroundColor: colors.backgroundMain,
        flex: 1,
    },
    mainContent: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    categorySlider: {
        backgroundColor: 'red',
        padding: 10
    },
    pagerPage: {
        backgroundColor: 'red',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pagerInnerPage: {
        backgroundColor: 'blue',
        padding: 100
    }
});

export default SocietiesHome;