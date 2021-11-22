import React, { useState } from "react";
import { View } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from "react-native-paper";
import { styles } from "./styles";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

export function DrawerContent(props) {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/616/616430.png",
                }}
                size={55}
              />
              <View style={{ marginLeft: 15, flexDirection: "column",}}>
                <Title style={styles.title}>Miya_Harper</Title>
                <Caption style={styles.caption}>Lonely wolf</Caption>
              </View>
            </View>

            <View style={styles.row}>

              <View style={styles.section}>
                <Caption style={styles.caption}>Level: </Caption>
                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>  
              </View> 
              <View style={styles.section}>
                <Caption style={styles.caption}>Tier: </Caption>
                <Paragraph style={[styles.paragraph, styles.caption]}>Expert</Paragraph>  
              </View>    

            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem style={styles.tabsColor0} label="Home" onPress={() => {props.navigation.NavigationContainer
            ('homeScreen')}} />
            <DrawerItem style={styles.tabsColor1} label="Perfil" onPress={() => {}} />
            <DrawerItem style={styles.tabsColor2} label="Jogos recentes" onPress={() => {}} />
            <DrawerItem style={styles.tabsColor3} label="Checklists" onPress={() => {}} />
          </Drawer.Section>
          <Drawer.Section title="Preferências">
            <TouchableRipple onPress={() => {toggleTheme()}}>
                <View style={styles.preference}>
                <Text>Tema escuro</Text>
                <View pointerEvents="none">
                <Switch value={isDarkTheme}/>    
                </View>

                </View>

            </TouchableRipple>
                
          </Drawer.Section>

        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          label="Sair"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}
