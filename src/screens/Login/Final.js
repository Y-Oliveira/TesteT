import React from "react";
import { StyleSheet, Button, Text, View, Pressable, Image, Share } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import styles from "./styles";
import { AntDesign } from '@expo/vector-icons'; 

function Final({ navigation, route }) {


  const image = { uri: "https://cdn.wallpapersafari.com/27/27/MoWyJ4.jpg" };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "110%",
          height: "10%",
          backgroundColor: "white",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <View style={styles.layoutLinha}>
          <Image
            source={{
              uri: "https://img3.stockfresh.com/files/a/agnessz/m/48/6024008_stock-vector-kitty-head-icon-14-with-long-shadow.jpg",
            }}
            style={{ minWidth: "18%", minHeight: "100%", marginLeft: "5%" }}
          />
          <Text style={styles.holaFinal}>Olá </Text>
          <Text style={styles.holaDestaque}>usuário! </Text>
          <Image
            source={require("../../assets/Images/Componente20-1.png")}
            style={{ width: "7%", height: "50%", marginLeft: "30%" }}
          />
        </View>
      </View>

      <View style={{ width: "110%", height: "30%", backgroundColor: "white" }}>
        <Text style={styles.tituloFinal}>Pesquise sua tarefa agora mesmo</Text>

        <View style={styles.layoutColuna}>      
          
          <AntDesign  name="search1" size={24} color="black"/>
          <TextInput style={styles.caixaInput2} placeholder= " Pesquisar" />
          <Pressable
            style={styles.linkButton}
            onPress={() =>
              alert("Desculpe, este serviço não está disponível no momento")
            }
          >
            <Image
              source={require("../../assets/Images/share-alt-square.png")}
              style={{ width: "90%", height: "90%", marginRight: "50%" }}
            />
          </Pressable>
        </View>
      </View>

      <View style={{ width: "110%", height: "40%", backgroundColor: "white" }}>
        <View
          style={{
            width: "100%",
            height: "25%",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.destaqueFinal}>Lista</Text>
          <Text style={styles.textoFinal}> por categorias</Text>
        </View>

{/* <ScrollView> */}
        <View
          style={{
            width: "100%",
            height: "100%",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "50%",
              height: "100%",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Image
              style={{
                height: "40%",
                width: "85%",
                marginLeft: "10%",
                borderRadius: 4,
              }}
              source={require("../../assets/images/Componente20-1.png")}
            />
            <Text style={styles.mTBold}>Trabalho escolar</Text>
            <Text style={styles.mT}>Responder questionário</Text>
          </View>

          <View
            style={{
              width: "50%",
              height: "100%",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Image
              style={{
                height: "40%",
                width: "85%",
                marginLeft: "10%",
                borderRadius: 4,
              }}
              source={require("../../assets/images/Componente20-1.png")}
            />
            <Text style={styles.mTBold}>Passeio diário</Text>
            <Text style={styles.mT}>Passear com dog</Text>
          </View>
        </View>

        {/* </ScrollView> */}
        
      </View>


      <View
        style={{
          width: "110%",
          height: "25%",
          backgroundColor: "white",
          justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            width: "100%",
            height: "20%",
            flexDirection: "row",
          }}
        >
          <Text style={styles.destaqueFinal}>Tarefas</Text>
          <Text style={styles.textoFinal}> recentes</Text>
        </View>

        <Pressable
          style={{
            width: "92%",
            marginLeft: "5%",
            height: "50%",
            flexDirection: "row",
            backgroundColor: "#F9F9F9",
            borderWidth: 1,
            marginTop: "4%",
            borderColor: "#C4C4C4",
            borderRadius: 5,
            alignItems: "center",
          }}
          onPress={() =>
            alert("Desculpe, este serviço não está disponível no momento")
          }
        >
          <Image
            style={{
              height: "80%",
              width: "15%",
              marginLeft: "3%",
              marginRight: "8%",
            }}
            source={require("../../assets/images/cap.png")}
          />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.destaqueFinalMini}>Tarefas escolares</Text>
            <Text style={styles.textoFinalMini}>
              Tarefas p/ conclusão semanal{" "}
            </Text>
          </View>

          <Image
            style={{
              height: "80%",
              width: "5%",
              marginLeft: "10%",
              marginRight: "1%",
            }}
            source={require("../../assets/images/seta.png")}
          />
        </Pressable>
      </View>
    </View>
  );
}

export default Final;
