import {createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import Description from "./Description";
import Register from "./Registration";
import colors from "../../assets/colors/UiColors";

const TabNavigator = createMaterialTopTabNavigator({
    About: Description,
    Register: Register
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
    }
});

export default createAppContainer(TabNavigator);