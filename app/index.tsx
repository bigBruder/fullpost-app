import { ScrollView, View, StyleSheet } from 'react-native';

import CommentScreen from '@/components/screens/comment';

import HeroBlock from "@/components/blocks/hero";
import StoryBlock from '@/components/blocks/story';
import CommentsBlock from '@/components/blocks/comments';

export default function Index() {
  return (
    <CommentScreen>
      <View style={styles.blockContainer}>
        <HeroBlock />
        <StoryBlock />
        <CommentsBlock />
      </View>
    </CommentScreen>
  )
}

const styles = StyleSheet.create({
  blockContainer: {
    display: 'flex',
    gap: 24,
  }
})
