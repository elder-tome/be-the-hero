import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 24,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerText: {
    fontSize: 15,
    color: '#737380'
  },

  headerTextBold: {
    fontWeight: 'bold'
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#13131A',
    fontWeight: 'bold'
  },

  description: {
    fontSize: 16.9,
    lineHeight: 24,
    color: '#737380'
  },

  incidentList: {
    marginTop: 62
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414D',
    fontWeight: 'bold'
  },

  incidentValue: {
    marginTop: 10,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380',
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailsButtonText: {
    color: '#E02041',
    fontSize: 15,
    fontWeight: 'bold'
  },
  shadow:{
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F5',
    marginBottom: 20
  }
});

export default styles;