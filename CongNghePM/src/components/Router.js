import { StackNavigator } from 'react-navigation';
import Screen_0 from "./screen_0/Screen_0";
import Screen1 from "./screen1/Screen_1";
import Screen_2 from "./screen_2/Screen_2";
import Screen_3 from "./screen_3/Screen_3";
const Router = StackNavigator(
    {
        Screen_0: {
            screen: Screen_0
        },
        Screen1: {
            screen: Screen1
        },
        Screen_2: {
            screen : Screen_2
        },
        Screen_3: {
            screen: Screen_3
        }
    },
    {
        headerMode: 'none'

    }
);
export default Router