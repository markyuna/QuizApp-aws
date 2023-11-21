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
  button: {
    backgroundColor: '#4765A9',
    width: 200,
    height: 40,
    borderRadius: 10,
    marginTop: 25,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    marginTop: 22,
  },
  modalView: {
    margin: 20,
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 3,
  },
  buttonOpen: {
    backgroundColor: '#FFA726',
  },
  buttonClose: {
    // backgroundColor: '#4765A9',
  },
  textStyle: {
    flexDirection: 'row',
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#4765A9',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default styles;