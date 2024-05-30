import { View, Text, TextInput, StyleSheet } from 'react-native'

import SendFill from '@/components/svg/SendFill'

export default function CommentInput() {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput style={styles.input} placeholder="Write a comment" />
        <SendFill />
      </View>
      <View style={styles.thumbHandler}>
        <View style={styles.thumbLine}></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    alignSelf: 'stretch',
    paddingTop: 12,
    paddingHorizontal: 16
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    alignItems: 'center'
  },
  input: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: '#101828',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: '#D0D5DD',
    borderWidth: 1,
    borderRadius: 16,
    flexGrow: 1
  },
  thumbHandler: {
    height: 34,
    paddingBottom: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  thumbLine: {
    width: 134,
    height: 5,
    backgroundColor: '#0B0712',
    borderRadius: 5
  }
})
