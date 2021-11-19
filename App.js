import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {DrawerContent} from "./src/screens/DrawerContent";
import {homeStart} from "./src/screens/homeScreen";
import {Cadastro1} from './src/screens/Login/Cadastro1';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Cadastro1" component={Cadastro1}/>
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}