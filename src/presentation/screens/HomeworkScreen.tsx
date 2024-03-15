import { StyleSheet, View } from 'react-native'

export const HomeworkScreen = () => {
  return (
    <View style={ styles.container }>
      <View style={[ styles.box, styles.purpleBox ]} />
      <View style={[ styles.box, styles.orangeBox ]} />
      <View style={[ styles.box, styles.blueBox ]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    // todo
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box: {
    width: 100,
    height: 100,
    borderColor: 'white',
    borderWidth: 10,
  },
  purpleBox: {
    backgroundColor: '#5856D5',
    // tarea 3
      // alignSelf: 'flex-end'
    // tarea 4
      // alignSelf: 'flex-start'
    // tarea 5
      // height: 'auto'
    // tarea 6
      // flex: 1
    // tarea 9
      // top: 100
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    // tarea 1
      // flex: 1,
    // tarea 3
      // alignSelf: 'flex-start'
    // tarea 5
      // height: 'auto'
    // tarea 6
      // flex: 1
    // tarea 8
      // left: 100
    // tarea 9
      // left: 100
    // tarea 10
      top: 50
  },
  blueBox: {
    backgroundColor: '#28C4D9',
    // tarea 2
      // width: '100%'
    // tarea 4
      // alignSelf: 'flex-end'
    // tarea 5
      // height: 'auto'
    // tarea 6
      // flex: 2
  },
});
