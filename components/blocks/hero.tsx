import { StyleSheet, Text, View, Image } from 'react-native';

import Container from '@/components/Container';
import Profile from '@/components/Profile';

import Hero from '@/components/svg/Hero'

export default function HeroBlock() {
  return (
    <View style={styles.heroContainer}>
      <Container style={styles.titleContainer}>
        <Text style={styles.heroTitle}>Breaking the Chains of Panic Disorder</Text>
        <Text style={styles.heroDate}>23 Jul 2023</Text>
      </Container>
      <Hero />
      <View style={styles.profileWrapper}>
        <Container style={styles.profileContainer}>
          <Profile
            avatarImg={<Image source={require("@/assets/images/avatar-1.png")} />}
            username="loveinhumanity"
            countryCode="SK"
          />
        </Container>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  heroTitle: {
    color: '#FFFFFF',
    fontFamily: "Poppins-Bold",
    fontSize: 36,
    lineHeight: 44,
    textAlign: 'center',
  },
  heroDate: {
    color: '#FFFFFF',
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    textAlign: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    paddingHorizontal: 29.5,
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  heroImage: {
    height: 230,
    width: 499
  },
  heroContainer: {
    display: 'flex',
    gap: 24,
    backgroundColor: '#2D3282',
    marginBottom: 50,
    paddingTop: 40 + 32, // includes height of BackButton
  },
  profileContainer: {
    position: 'absolute',
    bottom: -50,
    width: '100%'
  },
  profileWrapper: {
    position: 'relative'
  }
});
