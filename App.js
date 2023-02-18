import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Platform, Text, View, TextInput, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import fondo from './native.webp'
import ButtonGradient from './ButtonGradient';


export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image style={styles.contianerSvg} source={fondo} />
        <Text style={styles.titulo}>Hello</Text>
        <Text style={styles.subTitle}>Sigin in to your account</Text>
        <TextInput style={styles.textInput} placeholder='Enter your email' />
        <TextInput secureTextEntry style={styles.textInput} placeholder='Password' />
        <Text style={styles.forgotPassword}>Forgot your password</Text>
        <ButtonGradient />
        <Text style={styles.forgotPassword}>Don't have an account</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f1f1f1',
    flex: 1,
  },
  container: {

    alignItems: 'center',
    justifyContent: 'center',
  },
  contianerSvg: {
    width: '100%',
    height: "180%",
    ...Platform.select({
      android: {
        transform: [{ translateY: -50 }],
        height: "35%",

      },
      ios: {
        transform: [{ translateY: -50 }],
        height: "40%",

      }
    })

  },
  titulo: {
    fontSize: 80,
    color: '#34434D',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 30,
    color: 'gray',
  },
  textInput: {
    padding: 10,
    width: '80%',
    height: 50,
    paddingStart: 30,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  forgotPassword: {
    color: 'gray',
    fontSize: 20,
    marginTop: 20,
  }
});
