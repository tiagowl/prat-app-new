import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import SignUp from "../screens/SignUp";
import { FunctionComponent } from "react";

export default function Routes(){

    const Stack = createNativeStackNavigator();

    const options = {
        headerShown: false
    }

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome" >
                <Stack.Screen name="Welcome" options={options} component={Welcome} />
                <Stack.Screen name="SignUp" options={options} component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}