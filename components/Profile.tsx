import { ReactElement, PropsWithChildren } from 'react'

import { Link } from 'expo-router'

import { StyleSheet, View, Text, Image, StyleProp, ViewStyle } from 'react-native'

interface ProfileProps {
  avatarImg: ReactElement
  username: string
  countryCode: string
  style?: StyleProp<ViewStyle>
  hideFollowButton?: boolean
}

export default function Profile({ avatarImg, username, countryCode, style, hideFollowButton, children }: ProfileProps & PropsWithChildren) {
  const countryFlags: Record<string, ReactElement | undefined> = {
    SK: <Image source={require("@/assets/images/country-flag-1.png")} />,
    AUS: <Image source={require("@/assets/images/country-flag-2.png")} />
  }

  return (
    <View style={style ? [styles.profileContainer, style] : styles.profileContainer}>
      <View style={styles.profileRow}>
        <View style={styles.profileInfo}>
          {avatarImg}
          <View style={styles.profileCaption}>
            <Text style={styles.usernameText}>@{username}</Text>
            <View style={styles.countryRow}>
              {countryFlags[countryCode]}
              <Text style={styles.countryCodeText}>{countryCode}</Text>
            </View>
          </View>
        </View>
        {!hideFollowButton && (
          <Link href="/" style={styles.followText}>
            <Text>Follow</Text>
          </Link>
        )}
      </View>
      {children && (
        <View>{children}</View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  profileContainer: {
    display: 'flex',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#F2F4F7',
    backgroundColor: '#FFFFFF',
    padding: 16,
    gap: 8,
  },
  profileRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  profileInfo: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8
  },
  profileCaption: {
    display: 'flex'
  },
  countryRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  // Texts
  usernameText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#4E5BA6'
  },
  countryCodeText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#175CD3'
  },
  followText: {
    fontFamily: 'Poppins-SemiBold',
  }
})
