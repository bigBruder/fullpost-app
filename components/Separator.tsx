import { StyleSheet, View } from 'react-native'

export default function Separator() {
  return (
    <View style={styles.line}></View>
  )
}

const styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: '#EAECF0'
  }
})
