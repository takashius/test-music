import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    margin: 10,
    flexDirection: 'row'
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    color: 'grey',
    marginTop: 10,
  }
})

export default styles;