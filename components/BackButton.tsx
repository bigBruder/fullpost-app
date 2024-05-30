import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import ChevronLeft from '@/components/svg/ChevronLeft';

export default function Button() {
  return (
    <TouchableOpacity style={styles.backButton}>
      <ChevronLeft />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  backButton: {
    color: '#FFFFFF',
    backgroundColor: '#F2F4F733',
    width: 32,
    height: 32,
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
