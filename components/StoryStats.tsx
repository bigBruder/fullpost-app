import { Text, View, StyleSheet } from 'react-native'

import FormattedCount from '@/components/FormattedCount'

import HeartOutlineLarge from '@/components/svg/HeartOutlineLarge'
import CommentLarge from '@/components/svg/CommentLarge'
import ArrowUpLarge from '@/components/svg/ArrowUpLarge'


export default function StoryStats() {
  return (
    <View style={styles.container}>
      <View style={styles.iconButton}>
        <HeartOutlineLarge />
        <FormattedCount count={80_000} style={styles.iconButtonCaption} />
      </View>
      <View style={styles.iconButton}>
        <CommentLarge />
        <FormattedCount count={1300} style={styles.iconButtonCaption} />
      </View>
      <View style={styles.iconButton}>
        <ArrowUpLarge />
        <Text style={styles.iconButtonCaption}>Top</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#101828',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    display: 'flex',
    flexDirection: "row",
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButton: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center'
  },
  iconButtonCaption: {
    fontFamily: "Poppins-Bold",
    fontSize: 12,
    lineHeight: 18,
    color: '#FCFCFD'
  }
})
