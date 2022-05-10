import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 155,
    height: 155,
    margin: 5,
  },
  name: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#1CD05D',
    height: 60,
    width: 175,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default styles;