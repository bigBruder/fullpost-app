import { StyleSheet, Text, View } from 'react-native'

import Profile from '@/components/Profile'
import Badge from '@/components/Badge'
import FormattedCount from '@/components/FormattedCount'
import FormattedCreationDate from '@/components/FormattedCreationDate'

import Heart from '@/components/svg/Heart'
import Comment from '@/components/svg/Comment'

import textStyles from '@/styles/text'
import badgeStyles from '@/styles/badge'

interface StoryCardProps {
  title: string,
  description: string,
  likeCount: number,
  commentCount: number,
  createdAt: Date
}

type StoryCardProfileProps = Omit<Parameters<typeof Profile>[0], "hideFollowButton" | "children" | "style">

export default function StoryCard({ title, description, likeCount, commentCount, createdAt, ...profileProps }: StoryCardProps & StoryCardProfileProps) {

  return (
    <Profile
      {...profileProps}
      hideFollowButton
    >
      <View>
        <Text style={styles.subheader}>{title}</Text>
        <Text style={styles.paragraph} numberOfLines={4}>{description}</Text>
        <View style={styles.badgesContainer}>
          <Badge active activeStyles={badgeActiveStyles}>
            Success Story
          </Badge>
          <Badge>
            Panic Disorder
          </Badge>
        </View>
        <View style={styles.controls}>
          <View style={styles.iconButtons}>
            <View style={styles.iconButton}>
              <Heart />
              <FormattedCount count={likeCount} />
            </View>
            <View style={styles.iconButton}>
              <Comment />
              <FormattedCount count={commentCount} />
            </View>
          </View>
          <FormattedCreationDate createdAt={createdAt} style={styles.secondaryText} />
        </View>
      </View>
    </Profile>
  )
}

const styles = StyleSheet.create({
  ...textStyles,
  subheader: {
    ...textStyles.subheader,
    marginBottom: 4,
  },
  ...badgeStyles,
  badgeDot: {
    backgroundColor: '#12B76A',
  },
  badgeContainer: {
    backgroundColor: '#ECFDF3',
  },
  badgeCaption: {
    color: '#027A48'
  },
  controls: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconButtons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    fontFamily: "Poppins-SemiBold",
    fontSize: 12,
    lineHeight: 18,
  },
  iconButton: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    fontFamily: "Poppins-SemiBold",
    fontSize: 12,
    lineHeight: 18,
    alignItems: 'center',
  },
  secondaryText: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    lineHeight: 18,
    color: '#667085',
  }
})

const badgeActiveStyles = { dot: styles.badgeDot, caption: styles.badgeCaption, container: styles.badgeContainer }
