import { PropsWithChildren } from 'react'

import { Text, View, StyleSheet } from 'react-native'

import Cross from '@/components/svg/Cross'


interface TagProps {
  active?: boolean
}

export default function Tag({ active, children }: TagProps & PropsWithChildren) {
  const containerStyles = [styles.container]
  const nameTextStyles = [styles.nameText]

  if (active) {
    containerStyles.push(styles.activeContainer)
    nameTextStyles.push(styles.activeNameText)
  }

  return (
    <View style={containerStyles}>
      <Text style={nameTextStyles}>{children}</Text>
      {active && <Cross />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F4F7',
    paddingVertical: 4,
    paddingHorizontal: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    gap: 4
  },
  nameText: {
    color: '#344054',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    lineHeight: 20
  },
  activeContainer: {
    backgroundColor: '#101828',
  },
  activeNameText: {
    color: '#FCFCFD'
  }
})
