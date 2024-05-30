import { PropsWithChildren } from 'react'

import { StyleSheet, View, Text, StyleProp, ViewStyle } from 'react-native'

interface ActiveStyles {
  dot?: StyleProp<ViewStyle>,
  caption?: StyleProp<ViewStyle>,
  container?: StyleProp<ViewStyle>
}

interface BadgeProps {
  active?: boolean
  activeStyles?: ActiveStyles
}

export default function Badge({ active, activeStyles, children }: BadgeProps & PropsWithChildren) {
  const containerStyles: StyleProp<ViewStyle> = [styles.container]
  const captionStyles: StyleProp<ViewStyle> = [styles.caption]
  const dotStyles: StyleProp<ViewStyle> = [styles.dot]

  if (active) {
    containerStyles.push(styles.activeContainer)
    captionStyles.push(styles.activeCaption)
  }

  if (activeStyles) {
    const { dot, caption, container } = activeStyles
    if (container) {
      containerStyles.push(container)
    }
    if (caption) {
      captionStyles.push(caption)
    }
    if (dot) {
      dotStyles.push(dot)
    }
  }

  return (
    <View style={containerStyles}>
      {active && <View style={dotStyles}></View>}
      <Text style={captionStyles} numberOfLines={1}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F4F7',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    maxWidth: 124,
  },
  caption: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    lineHeight: 18,
    color: '#667085',
  },
  activeContainer: {
    backgroundColor: '#FFFAEB'
  },
  activeCaption: {
    color: '#B54708'
  },
  dot: {
    padding: 2,
    width: 6,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#F79009'
  }
})

