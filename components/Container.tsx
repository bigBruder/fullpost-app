import type { PropsWithChildren } from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'

export default function Container({ children, style, ...rest }: PropsWithChildren & ViewProps) {
  return (
    <View style={[style, styles.container]} {...rest}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24
  }
});

