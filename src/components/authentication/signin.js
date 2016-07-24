import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import Button from '../common/button';

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }
  onSignInPress() {
    this.props.navigator.immediatelyResetRouteStack([
      {name: 'welcome'}
    ]);
  }
  onSignUpPress() {
    this.props.navigator.push({name: 'signup'});
    // you coud also pass extra information inside this object
    // like {name: 'signup', bookId: 10}
    // everytime we render a view using the navigator, it passes
    // both the navigator instance and the routes object
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign In</Text>

        <Text style={styles.label}>Username:</Text>
        <TextInput
          value={this.state.username}
          style={styles.input}
          onChangeText={(username) => this.setState({username})} />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({password})}
          secureTextEntry={true}
          style={styles.input} />

        <Button text={'Sign In'} onPress={this.onSignInPress.bind(this)} />
        <Button text={'I need an account...'} onPress={this.onSignUpPress.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    // we need alignSelf because the width
    // property does impact the fathers alignItems: center
    alignSelf: 'center'
  },
  label: {
    fontSize: 18
  }
});

export default Signin;
