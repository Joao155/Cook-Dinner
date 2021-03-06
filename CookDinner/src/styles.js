import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  titleText: {
    flex:0.5,
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 20
  },

  textInput: {
    backgroundColor: '#FFF',
    marginTop: 10,
    fontSize: 20,
    width: 300,
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10,
  },

  textInputView:{flex:0.6},

  image: {
    flex: 0.5,
    resizeMode: 'contain',
    marginTop: 40
  },

  topView: {
    flex:1,
    backgroundColor: '#FFF',
    alignItems: 'center'
  },

  bottomView: {
    backgroundColor: '#AAA',
    alignItems: 'center',
    width: "100%",
    height: "20%",
    marginBottom: 80
  },

  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#888'
  },

  buttonView: {
    marginTop: 30,
    alignSelf: 'stretch',
    //flex: 1
  },

  button: {
    width: "100%",
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#000",
    justifyContent: 'center',
    alignSelf: 'center'
  },

  buttonText: {
    fontSize: 20,
    alignSelf: 'center',
    color: "#FFF"
  },

  textInput2: {
    fontSize: 20,
    backgroundColor: 'transparent',
    marginTop: 20,
    width: 300,
    textAlign: 'left',
    color: "#000"

  }

});
