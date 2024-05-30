import { StyleProp, ViewStyle, Text } from 'react-native'

interface FormattedCountProps {
  count: number
  style?: StyleProp<ViewStyle>
}

export default function FormattedCount({ count, style }: FormattedCountProps) {
  let formattedCount = count.toString()

  if (Math.abs(count) > 1_000) {
    const thousands = count / 1_000
    const whole = Math.floor(thousands)
    const frac = thousands - whole
    formattedCount = `${whole}${frac !== 0 ? Math.abs(frac).toPrecision(1).substring(1) : ''}k`

    if (Math.abs(count) > 50_000) {
      formattedCount = `${whole}k`
    }
  }

  return (
    <Text style={style}>
      {formattedCount}
    </Text>
  )
}
