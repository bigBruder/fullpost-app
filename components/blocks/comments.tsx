import { StyleSheet, View, ScrollView, Text, Image } from 'react-native'

import Container from '@/components/Container'
import StoryCard from '@/components/StoryCard'
import FormattedCount from '@/components/FormattedCount'
import Tag from '@/components/Tag'
import Comment from '@/components/Comment'

import textStyles from '@/styles/text'

export default function CommentsBlock() {
  const currentDate = new Date()
  const commentCreatedAt = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    currentDate.getHours() - 8
  )

  return (
    <Container style={styles.commentsContainer}>
      <View style={styles.content}>
        <Text style={styles.subheader}>More stories</Text>
        <StoryCard
          avatarImg={<Image source={require("@/assets/images/avatar-2.png")} />}
          username="forworldpeace"
          countryCode="AUS"
          title="Shadows of Anxiety"
          description="Growing up, I always felt the need to be perfect. My parents, though loving, set high standards, and anything less than excellence was not celebrated. This relentless pursuit of perfection followed me into adulthood. The trigger was a seemingly minor incident at work – a missed deadline. This small failure spiraled into a constant fear of inadequacy, leading to my first panic attack. It wasn't just the deadline; it was years of accumulated pressure finally erupting."
          likeCount={103000}
          commentCount={2200}
          createdAt={new Date(2024, 6, 25)}
        />
      </View>
      <View style={styles.commentSection}>
        <View style={styles.commentSectionHeading}>
          <Text style={styles.subheader}>
            <FormattedCount count={1300} /> Comments
          </Text>
          <ScrollView horizontal={true}>
            <View style={styles.tagsContainer}>
              <Tag active>Most popular</Tag>
              <Tag>Most recent</Tag>
            </View>
          </ScrollView>
        </View>
        <View style={styles.commentsList}>
          <Comment
            avatarImg={<Image source={require("@/assets/images/avatar-comment-1.png")} />}
            username="genztroubles"
            isModerator
            content="Thank you so much for this post! It has been such a joy reading this :D"
            likeCount={252}
            createdAt={commentCreatedAt}
            replyCount={12}
          />
          <Comment
            avatarImg={<Image source={require("@/assets/images/avatar-comment-2.png")} />}
            username="genztroubles"
            content="Thank you so much for this post! It has been such a joy reading this :D"
            likeCount={252}
            createdAt={commentCreatedAt}
            replyCount={0}
          />
          <Comment
            avatarImg={<Image source={require("@/assets/images/avatar-comment-3.png")} />}
            username="genztroubles"
            content="Thank you so much for this post! It has been such a joy reading this :D"
            likeCount={252}
            createdAt={commentCreatedAt}
            replyCount={12}
            hideSeparator
          />
        </View>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  ...textStyles,
  content: {
    display: 'flex',
    gap: 16
  },
  subheader: {
    ...textStyles.subheader,
    marginBottom: 0,
  },
  commentsContainer: {
    backgroundColor: '#F9FAFB',
    paddingVertical: 24,
    display: 'flex',
    gap: 24
  },
  tagsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
  },
  commentSection: {
    display: 'flex',
    gap: 24
  },
  commentSectionHeading: {
    display: 'flex',
    gap: 16
  },
  commentsList: {
    display: 'flex',
    gap: 16
  },
})
