import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";

export default function SignIn() {
  return (
    <View style={Styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={Styles.containerHeader}
      >
        <Text style={Styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={Styles.containerForm}>
        <Text style={Styles.title}>Email</Text>
        <TextInput
          placeholder="Digite um email..."
          style={Styles.input}
        ></TextInput>

        <Text style={Styles.title}>Email</Text>
        <TextInput placeholder="Sua senha" style={Styles.input}></TextInput>

        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.buttonRegister}>
          <Text style={Styles.registerText}>
            Não possui uma conta? Registre-se
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38A69D",
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },
  containerForm: {
    backgroundColor: "#FFF",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#38A69D",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
      color:"#FFF",
      fontSize:18,
      fontWeight:"bold",
  },
  buttonRegister:{
      marginTop:14,
      alignSelf:"center"
  },
  registerText:{
      color:"#a1a1a1"
  }
});
