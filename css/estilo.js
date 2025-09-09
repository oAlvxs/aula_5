import {StyleSheet} from 'react-native';
const mascara = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    color:'black',
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',
    fontStyle:'italic',
  },
  cidade:{
    fontSize:20,
    color: 'green',
    margin: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign:'Right',
    


  },
cx:{
    width:200,
    height:200,
    borderWidth:5,
    alignSelf:'center',
    borderColor:'#00f',
    paddingLeft:20,
    paddingTop:50,
  },
  cx2:{
    width:200,
    height:200,
    backgroundColor:'yellow',
    marginLeft:20,
  },
});
export default mascara;