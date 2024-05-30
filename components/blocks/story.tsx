import { Text, View, StyleSheet, Image } from 'react-native'

import Container from '@/components/Container';
import Badge from '@/components/Badge';
import Share from '@/components/svg/Share';

import textStyles from '@/styles/text';
import badgeStyles from '@/styles/badge';

export default function StoryBlock() {
  return (
    <Container>
      <View style={styles.storySections}>
        <View>
          <Text style={styles.title}>How it all began</Text>
          <Text style={styles.paragraph}>
            The city's noise had always been a comforting backdrop for Jenna. The distant hum of traffic, the soft murmurs of passersby—it all melded into a <Text style={styles.bold}>familiar symphony of urban life.</Text>
          </Text>
          <Image
            source={require("@/assets/images/story-image-1.png")}
            style={styles.storyImage}
          />
          <View style={styles.quoteWrapper}>
            <Text style={styles.quote}>
              An overwhelming sensation of dread, causing her heart to race and her surroundings to blur. Jenna had experienced her first panic attack.
            </Text>
          </View>
          <Text style={styles.subheader}>
            Your sub-header goes here
          </Text>
          <Text style={styles.paragraph}>
            For weeks, Jenna tried to shrug it off, attributing it to work stress or fatigue.
          </Text>
          <Text style={styles.paragraph}>
            But the episodes grew in frequency, and soon, she found herself avoiding certain places and activities, fearful of triggering another episode.
          </Text>
        </View>
        <View>
          <Text style={styles.title}>
            Positive changes I hope to see in the future
          </Text>
          <Text style={styles.paragraph}>
            An overwhelming sensation of dread, causing her heart to race and her surroundings to blur. Jenna had experienced her first panic attack.
          </Text>
          <Image
            source={require("@/assets/images/story-image-2.png")}
            style={styles.storyImage} />
          <Text style={styles.paragraph}>
            An overwhelming sensation of dread, causing her heart to race and her surroundings to blur. Jenna had experienced her first panic attack.
          </Text>
          <Text style={styles.subheader}>
            But lately, these sounds had started triggering an unfamiliar reaction
          </Text>
          <Text style={styles.paragraph}>
            An overwhelming sensation of dread, causing her heart to race and her surroundings to blur. Jenna had experienced her first panic attack.
          </Text>
          <Text style={styles.paragraph}>
            An overwhelming sensation of dread, causing her heart to race and her surroundings to blur. Jenna had experienced her first panic attack.
          </Text>
        </View>
        <View>
          <Text style={styles.title}>
            My message to others who are on the same journey
          </Text>
          <Text style={styles.paragraph}>
            An overwhelming sensation of dread, causing her heart to race and her surroundings to blur. Jenna had experienced her first panic attack.
          </Text>
          <Text style={styles.paragraph}>
            For weeks, Jenna tried to shrug it off, attributing it to work stress or fatigue. But the episodes grew in frequency, and soon, she found herself avoiding certain places and activities, fearful of triggering another episode. The world she once explored freely now seemed riddled with invisible landmines. Jenna felt trapped, her life shrinking before her eyes.
          </Text>
          <Text style={styles.paragraph}>
            An overwhelming sensation of dread, causing her heart to race and her surroundings to blur. Jenna had experienced her first panic attack.
          </Text>
        </View>
      </View>
      <View style={styles.badgesContainer}>
        <Badge active>
          The struggles
        </Badge>
        <Badge>
          General Anxiety Advices
        </Badge>
        <Badge>
          Obsessive Compulsive Disorder
        </Badge>
        <Badge>
          Panic Disorder
        </Badge>
        <Badge>
          Health Anxiety
        </Badge>
        <Badge>
          Musician
        </Badge>
        <Badge>
          Workspace politics
        </Badge>
        <Badge>
          Workspace sucks
        </Badge>
      </View>
      <View style={styles.controls}>
        <View style={styles.shareButton}>
          <Share />
          <Text style={styles.shareText}>Share</Text>
        </View>
        <Text style={styles.reportText}>Report </Text>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    lineHeight: 32,
    marginBottom: 16,
    color: '#2D31A6'
  },
  bold: {
    fontFamily: 'Poppins-Bold',
  },
  storySections: {
    display: 'flex',
    gap: 24
  },
  storyImage: {
    borderRadius: 8,
    marginBottom: 16,
    width: null
  },
  quoteWrapper: {
    padding: 16,
    paddingLeft: 0,
  },
  quote: {
    fontFamily: 'Poppins-Italic',
    fontSize: 16,
    lineHeight: 24,
    paddingLeft: 16,
    borderLeftWidth: 4,
    borderColor: '#EC4A0A',
    color: '#667085'
  },
  ...textStyles,
  ...badgeStyles,
  controls: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  shareButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  shareText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    lineHeight: 18,
    color: '#101828'
  },
  reportText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    lineHeight: 18,
    color: '#F04438'
  }
})
