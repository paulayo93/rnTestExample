import React, {useState} from 'react';
import {
  View,
  Switch,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';

const App = () => {
  const [isNewsLetter, setIsNewsLetter] = useState(false);
  const [firstName, setFirstName] = useState('Enter your first name');
  const [lastName, setLastName] = useState('Enter your last name');
  const [email, setEmail] = useState('Enter your email');
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);

  const newsLetterSwitch = () =>
    setIsNewsLetter(previousState => !previousState);

  const updateProfile = () => {
    setIsProfileUpdated(true);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text testID="profile" style={styles.headerText}>
          Profile
        </Text>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.label}>First name:</Text>
        <TextInput
          testID={'inputFirstName'}
          style={styles.input}
          onChangeText={setFirstName}
          value={firstName}
        />
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.label}>Last name:</Text>
        <TextInput
          testID={'inputLastName'}
          style={styles.input}
          onChangeText={setLastName}
          value={lastName}
        />
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          testID={'inputEmail'}
          style={styles.input}
          onChangeText={setEmail}
          value={email}
        />
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.optionText}>Newsletter Subscription</Text>
        <View style={styles.subOptionContainer}>
          <Text>Current Status is {isNewsLetter ? 'On' : 'Off'}</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isNewsLetter ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={newsLetterSwitch}
            value={isNewsLetter}
            testID="isNewsLetterSwitch"
          />
        </View>
      </View>

      {isProfileUpdated && (
        <View style={styles.message}>
          <Text>Profile Updated Successfully</Text>
        </View>
      )}

      <View style={styles.btnContainer}>
        <Pressable
          onPress={updateProfile}
          style={styles.pressable}
          testID={'submitButton'}>
          <View style={styles.btnTextWrapper}>
            <Text style={styles.btnText}>Submit</Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  header: {
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },

  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  optionText: {
    fontSize: 20,
    color: 'gray',
  },
  itemContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
  },
  subOptionContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 1,
    marginLeft: 5,
    color: 'gray',
  },
  message: {justifyContent: 'center', alignItems: 'center'},
  btnContainer: {
    justifyContent: 'center',
    marginTop: 52,
    paddingHorizontal: 16,
  },
  pressable: {
    borderWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    width: '100%',
    height: 48,
    backgroundColor: '#3C48FC',
  },
  btnTextWrapper: {justifyContent: 'center', alignItems: 'center'},
  btnText: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
  },
});

export default App;
