import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ListItem } from '@rneui/themed';
import { Avatar } from '@rneui/themed-edge';
import { ChatType } from './type';
import service from './service';

const CustomListItem = ({ id, nome, enterChat, onPress }: ChatType) => {

  
  return (
    <ListItem 
    onPress={() => console.log("PRESS")}
    >
      <Avatar
        rounded
        source={{
          uri: "ts"
        }} />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          {nome}
        </ListItem.Title>
        <ListItem.Subtitle
          numberOfLines={1}
          ellipsizeMode={"tail"}>
          {enterChat}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )
}

export default CustomListItem;

