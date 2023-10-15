import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './SongCard.styles';

const SongCard = (props: any) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: props.song.imageUrl}} style={styles.image} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{props.song.title}</Text>
        <View style={styles.content_container}>
          <View style={styles.info_container}>
            <Text style={styles.artist}>{props.song.artist}</Text>
            <Text style={styles.year}>{props.song.year}</Text>
          </View>
          {props.song.isSoldOut ? (
            <View style={styles.soldout_container}>
              <Text style={styles.soldout_text}>Tükendi</Text>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
};
export default SongCard;
