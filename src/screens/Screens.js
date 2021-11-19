import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
export default class Screen extends React.Component {
    render(){
        return(

            <View style={styles.container}>
                <SafeAreaView style={{flex:1}} 
                onPress={this.props.navigation.openDrawer}>

                    <TouchableOpacity style={{alignItems:'flex-end', margin:16}}>
                    <FontAwesome5 name="bars" size={24} color="aqua" />
                    </TouchableOpacity>


                    <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.text}>{this.props.name}Screen</Text> 
                    </View>   

                </SafeAreaView>
            </View>

        );


    }


}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#313131",
    },

    text:{
       color:"red",
       fontSize:20,
       fontWeight:"500", 
    }



})
