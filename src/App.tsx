import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import music_data from './music_data.json';
import SongCard from './components/SongCard/index';
import SearchBar from './components/SearchBar';

function App() {
  const [list, setList] = useState(music_data);

  const renderSong = ({item}) => <SongCard song={item} />;
  const renderSeperator = () => <View style={styles.separator} />;
  const onHeandle = message => {
    const filteredList = music_data.filter(song => {
      const searchedText = message.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);
  };

  return (
    <SafeAreaView>
      <SearchBar onSearch={onHeandle} />
      <View>
        <FlatList
          renderItem={renderSong}
          keyExtractor={item => item.id}
          data={list}
          ItemSeparatorComponent={renderSeperator}
        />
      </View>
    </SafeAreaView>
  );
}
export default App;

const styles = StyleSheet.create({
  separator: {
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
