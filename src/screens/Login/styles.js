import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    MainlayoutBase:{
       flex: 1, 
      flexDirection: 'column',
    },

    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: 24,
      flexDirection: "column",
      
    },

    //Styles Home.js
    
    homeview1:{
      justifyContent:"center",
      alignItems:"center",
      minWidth: '100%', 
      height: '40%', 
      backgroundColor: 'white',
    },

    homeview3:{
      justifyContent:"flex-start",
      alignItems:"center",
      width: '100%', 
      backgroundColor: 'white',
    },

    homeTitle:{
      fontSize:35,
      fontWeight:"bold",
      marginLeft:'7%',
 

    },
    homeTitle2:{
      fontSize:35,
      fontWeight:"bold",
      marginLeft:'7%',
      marginRight:'5%',

    },


    homeTexto: {
      fontSize:15,
      marginLeft:'7%',
      marginRight:'15%',
      marginBottom:'12%',
    },

    homeButton: {
      backgroundColor: "#365A0C",
      alignItems: "center",
      borderRadius: 6,
      height: 50,
      minWidth: "88%",
      justifyContent: "center",
      marginTop: 20,
     
    },



    //Styles de imagens


    imageStyle:{
      minWidth: '80%', 
      height: '80%', 
    },

    



    //Styles de cadastro


    titulo: {
      fontWeight: "bold",
      fontSize: 18,
      marginTop: 15,
    },
  
    passos: {
      fontSize: 11,
      marginTop:'8%',
      fontWeight: "bold",
    },
  
    subTitulo: {
      textAlign: "left",
      fontWeight: "bold",
      fontSize: 16,
      fontStyle: "italic",
      paddingVertical: 15,
    },
  
    compInput: {
      borderWidth: 1,
      borderColor: "#C4C4C4",
      borderRadius: 6,
      fontSize: 12,
      color: "#C4C4C4",
      width: "98%",
      height: 50,
      marginTop: 5,
      paddingHorizontal: 10,
    },
  
    customButton: {
      backgroundColor: "#C92626",
      alignItems: "center",
      borderRadius: 6,
      height: 50,
      width: "98%",
      justifyContent: "center",
      marginTop: 20,
      
    },
  
    textButton: {
      color: "white",
      fontWeight: "bold",
      fontSize: 11,
      justifyContent: "center"
    },
  
    miniAviso: {
      textAlign: "center",
      fontSize: 8.4,
      padding: 10,
      paddingHorizontal: "20%",
    },
  
    containerForm: {
      backgroundColor: "white",
      alignItems: "center",
      flex: 1,
      justifyContent: "flex-start",
      width:'100%',
    },
    
    displayEmail:{
      backgroundColor:'white',
      width:'100%',
      height:'12%',
      flexDirection: "row",
      borderLeftColor:'black',
      borderLeftWidth:2,
      marginTop:'5%',
    },

    displayEmailMini:{
      backgroundColor:"white",
      width:'95%',
      flexDirection: "column",
      justifyContent:'space-evenly',
      marginLeft:'5%',
    },


    caixaInput2: {
      borderWidth: 1,
      borderColor: "#C4C4C4",
      backgroundColor:'#F9F9F9',      
      fontSize: 12,
      marginLeft:"2%",
      color: "#C4C4C4",
      width: "70%",
      height: 45,
      paddingHorizontal: 10,
      borderRadius: 1,
    },

    linkButton: {
      backgroundColor: "white",
      alignItems: "center",
      borderRadius: 6,
      height: 50,
      width: "15%",
      justifyContent: "center",
      marginLeft:'5%',
      
    },



 //Styles de texto

    superTitulo:{
      fontSize: 35,
      marginTop:'5%',
      fontWeight: "bold",
      marginRight:'30%',
      fontFamily:'Montserrat',

    },
    superTitulo2:{
      fontSize: 35,
      fontWeight: "bold",
      marginRight:'10%',
      fontFamily:'Montserrat',
    },

    superTitulo3:{
      fontSize: 35,
      fontWeight: "bold",
      marginRight:'10%',
      fontFamily:'Montserrat',
      marginBottom:'5%',

    },

  titulosCadastros:{
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 23,
    marginTop:'5%',
    marginBottom:'4%',
    fontFamily:'Montserrat',
  }, 

  passosText:{
  fontSize: 13,
  marginTop: 50,
  fontWeight: "bold",
  fontFamily:'Montserrat',
  },

  textoText:{
    fontSize:18,
    marginBottom:'5%',
    fontFamily:'Montserrat',
    color:'#303030',
  },

  miniTexto:{
    textAlign: "center",
    fontSize: 12,
    margin:'3%',
    paddingHorizontal: "8%",
    fontFamily:'Montserrat',
  },

  holaFinal:{
    fontSize:20,
    fontFamily:'Montserrat',
    color:'#303030',
    marginLeft:'5%',
    fontFamily:'Montserrat',
  }, 

    holaDestaque:{

    fontSize:20,
    fontWeight:'bold',
    fontFamily:'Montserrat',
    color:'#303030',
  },


  tituloFinal:{
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 30,
    marginTop:'5%',
    marginBottom:'4%',
    marginLeft:'5%',
    fontFamily:'Montserrat',

  },

  textoFinal:{
    fontSize:20,
    fontFamily:'Montserrat',
    color:'#303030',
  },

  textoFinalMini:{
    fontSize:13,
    fontFamily:'Montserrat',
    color:'#303030',
  },

  destaqueFinal:{
    marginLeft:'5%',
    fontSize:20,
    fontWeight:'bold',
    fontFamily:'Montserrat',
    color:'#303030',
  },

  destaqueFinalMini:{
    fontSize:14,
    fontWeight:'bold',
    fontFamily:'Montserrat',
    color:'#303030',
  },

  mTBold:{
    fontSize: 15,
    fontFamily:'Montserrat',
    fontWeight:'bold',
    marginLeft: "10%",
    marginTop: "2%",
  },

  mT:{
    fontSize: 13,
    fontFamily:'Montserrat',
    marginLeft: "10%",
    color:'#6B6B6B',

  },

//Styles de organiazação/layout

  layoutLinha:{
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
    height:'100%'

  },

  layoutColuna:{
    flexDirection:'row',
    alignItems:'center',
    
 

  },



});
  export default styles;