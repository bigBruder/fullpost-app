import { ReactElement } from 'react'

import { View, Text, StyleSheet } from 'react-native'

import CommentIcon from '@/components/svg/Comment'
import HeartOutline from '@/components/svg/HeartOutline'
import FormattedCount from '@/components/FormattedCount'
import FormattedCreationDate from '@/components/FormattedCreationDate'
import Separator from '@/components/Separator'

import textStyles from '@/styles/text'


interface CommentProps {
  avatarImg: ReactElement,
  username: string,
  isModerator?: boolean
  content: string,
  likeCount: number,
  createdAt: Date,
  replyCount: number,
  hideSeparator?: boolean
}


export default function Comment({ avatarImg, username, isModerator, content, likeCount, createdAt, replyCount, hideSeparator }: CommentProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {avatarImg}
        <View style={styles.main}>
          <View style={styles.content}>
            <View style={styles.heading}>
              <Text style={styles.username}>@{username}</Text>
              {isModerator && (
                <View style={styles.moderatorBadgeContainer}>
                  <Text style={styles.moderatorBadgeCaption}>Moderator</Text>
                </View>
              )}
            </View>
            <Text style={styles.paragraph}>{content}</Text>
          </View>
          <View style={styles.controlsButtons}>
            <View style={styles.iconButton}>
              <CommentIcon />
              <Text style={styles.controlText}>Reply</Text>
            </View>
            <Text style={styles.controlText}>•</Text>
            <View style={styles.iconButton}>
              <HeartOutline />
              <FormattedCount count={likeCount} style={styles.controlText} />
            </View>
            <Text style={styles.controlText}>•</Text>
            <Text style={[styles.controlText, styles.report]}>Report</Text>
            <Text style={styles.controlText}>•</Text>
            <FormattedCreationDate createdAt={createdAt} style={styles.controlText} />
          </View>
          {replyCount > 0 && (
            <View style={styles.viewRepliesWrapper}>
              <Text style={styles.viewReplies}>
                View all {replyCount} replies
              </Text>
            </View>
          )}
        </View>
      </View>
      {!hideSeparator && <Separator />}
    </View>
  )
}

const styles = StyleSheet.create({
  ...textStyles,
  wrapper: {
    display: 'flex',
    gap: 16
  },
  container: {
    gap: 8,
    display: 'flex',
    flexDirection: 'row'
  },
  main: {
    display: 'flex',
    gap: 16
  },
  content: {
    display: 'flex',
    gap: 8
  },
  heading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  username: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    lineHeight: 20,
    color: '#4E5BA6'
  },
  moderatorBadgeContainer: {
    backgroundColor: '#F9F5FF',
    borderRadius: 16,
    paddingVertical: 2,
    paddingHorizontal: 8,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2
  },
  moderatorBadgeCaption: {
    color: '#6941C6',
    fontFamily: 'Poppins-SemiBold',
  },
  controlsButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 4,
    alignItems: 'center',
  },
  controlText: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    lineHeight: 18,
  },
  iconButton: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4
  },
  viewRepliesWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  viewReplies: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    lineHeight: 20
  },
  report: {
    fontFamily: "Poppins-Bold",
    color: '#F04438',
  }
})
