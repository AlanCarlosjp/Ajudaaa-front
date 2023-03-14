import { View } from 'react-native'
import React from 'react'
import styles from './styles';
import { BannerProp } from './types';


const DataBanner = ({children, style}: BannerProp) => {
  return (
    <View style={[styles.container, style]}>
       {children}
    </View>
    )
}

export default DataBanner;