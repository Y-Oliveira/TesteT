import React, { useState } from "react";
import { StyleSheet, Button, Text, View, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "./styles";

export function Cadastro1({navigation, route}) {
  const [text, setText1] = useState("Nome");

  return (
    <View style={styles.container}>
 
           <View>
        <Text style={styles.passosText}>PASSO 1 DE 3</Text>
        <Text style={styles.titulosCadastros}>Qual seu nome?</Text>
        <Text style={styles.textoText}>
          Queremos aproveitar o momento para conhecer melhor quem vai utilizar
          este app.
        </Text>
      </View>
      <View style={styles.containerForm}>
        
        <TextInput style={styles.compInput} placeholder="Digite seu nome" onChangeText={setText1}/>
        <Pressable
          style={styles.customButton}
          onPress={() =>
            navigation.navigate('Cadastro2', { Usuario: text })
          }
        >
          <Text style={styles.textButton} width="90%" >PRÓXIMO</Text>
        </Pressable>

        <Text style={styles.miniTexto}>
          Ao continuar, você concorda em aceitar nossa Política de privacidade e
          termos de serviço
        </Text>
      </View>
    </View>
  );
}

