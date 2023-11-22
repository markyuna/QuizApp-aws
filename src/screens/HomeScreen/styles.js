import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 25,
  },
  // button: {
  //   backgroundColor: '#4765A9',
  //   width: 200,
  //   height: 40,
  //   borderRadius: 10,
  //   marginTop: 25,
  //   marginLeft: 25,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  startButton: {
    // padding: 60,
    // height: 600,
    // width: Dimensions.get('screen').width - 20,
    borderRadius: 40,
    // marginHorizontal: 35,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    top: -80,
    // zIndex: 10,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 12,
  },
  modalView: {
    // margin: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  // button: {
  //   borderRadius: 20,
  //   padding: 10,
  //   elevation: 3,
  // },
  buttonOpen: {
    backgroundColor: '#FFA726',
  },
  buttonClose: {
    backgroundColor: 'red',
    alignSelf: 'flex-end',
    marginTop: -20,
    marginRight: -20,
    borderRadius: 20,
    padding: 5,
  },
  textStyle: {
    flexDirection: 'row',
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
    // textAlign: 'center',
    backgroundColor: '#4765A9',
    borderRadius: 20,
    alignSelf: 'stretch',
    fontSize: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#4765A9',
  },
  textRules: {
    marginTop: 50,
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default styles;