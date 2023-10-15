import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    paddingLeft: 10,
  },
  info_container: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 7,
  },
  body_container: {
    padding: 10,
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  artist: {
    fontSize: 18,
  },
  year: {
    color: 'gray',
    marginLeft: 20,
    marginTop: 4,
  },
  content_container: {
    flexDirection: 'row',
    flex: 1,
  },
  soldout_container: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
    borderRadius: 5,
    marginTop: 13,
  },
  soldout_text: {
    color: 'red',
  },
});
