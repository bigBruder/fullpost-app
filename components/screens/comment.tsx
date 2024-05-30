import { PropsWithChildren, useRef, useEffect, useState } from 'react'

import { Animated, View, Easing, StyleSheet, ScrollView, Text } from 'react-native'

import BackButton from '@/components/BackButton'
import Container from '@/components/Container'
import StoryStats from '@/components/StoryStats'
import CommentInput from '@/components/CommentInput'

export default function CommentScreen({ children }: PropsWithChildren) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const bottomOffset = useRef(new Animated.Value(0)).current
  const scrollPositionOver = scrollPosition > 300

  useEffect(() => {
    if (scrollPositionOver) {
      Animated.timing(bottomOffset, {
        toValue: 140,
        duration: 100,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true
      }).start()
    } else {
      Animated.timing(bottomOffset, {
        toValue: 0,
        duration: 100,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }).start()
    }
  }, [scrollPositionOver])

  return (
    <View style={[styles.screenView,]}>
      <Container style={styles.top}>
        <BackButton />
      </Container>
      <ScrollView
        style={styles.screenContent}
        onScroll={(e) => {
          setScrollPosition(e.nativeEvent.contentOffset.y)
        }}
        scrollEventThrottle={16}
      >
        {children}
      </ScrollView>
      <Animated.View style={[styles.bottom, {
        transform: [{ translateY: bottomOffset }]
      }]}>
        <StoryStats />
        <CommentInput />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  top: {
    paddingTop: 48,
    marginBottom: -32 - 48,
    zIndex: 999
  },
  bottom: {
    position: 'relative',
    zIndex: 999,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    marginTop: -138
  },
  screenView: {
    flex: 1
  },
  screenContent: {
    position: 'relative',
  }
})

