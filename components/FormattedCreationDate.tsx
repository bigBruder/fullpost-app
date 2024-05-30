import { StyleProp, ViewStyle, Text } from 'react-native'

interface FormattedCreationDateProps {
  createdAt: Date
  style?: StyleProp<ViewStyle>
}

export default function FormattedCreationDate({ createdAt, style }: FormattedCreationDateProps) {
  let formattedCreatedAt = createdAt.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })

  const hoursDiff = new Date().getHours() - createdAt.getHours()
  if (hoursDiff < 24) {
    formattedCreatedAt = `${hoursDiff.toPrecision(1)}h`
  }

  return (
    <Text style={style}>{formattedCreatedAt}</Text>
  )
}

