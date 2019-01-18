import {createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import Subscribed from "./Subscribed";
import React from 'react';
import All from "./All";
import colors from "../../assets/colors/UiColors";
import NavigationService from "../../Helpers/NavigationService";

const TabNavigator = createMaterialTopTabNavigator({
    Home: Subscribed,
    All: All
}, {
    tabBarOptions: {
        tabStyle: {
        },
        style: {
            backgroundColor: colors.header,
            width: '100%',
        },
        upperCaseLabel: false,
        indicatorStyle: {
            backgroundColor: colors.highlighted,
        }
    },

    // tabBarComponent: null
});

export default createAppContainer(TabNavigator);
// class TabContainerComponent extends React.Component {
//     render() {
//         return (<TabContainer ref={navRef => {
//             console.log(navRef);
//             NavigationService.setTopLevelNavigator(navRef)
//         }}/>);
//     }
// }

// export default TabContainerComponent;