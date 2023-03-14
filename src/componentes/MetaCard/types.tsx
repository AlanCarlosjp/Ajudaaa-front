import { StyleProp, ViewStyle } from "react-native";

export type BannerType = {
   valor: number
   tipoMoeda: 'BRL' | 'Dolar'
}


export interface BannerProp {
   bannerProp: BannerType;
   action: () => void;
   action_nav?: () => void;
   action_nav2?: () => void;
}