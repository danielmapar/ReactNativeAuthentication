import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import Button from '../common/button';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      confirmPassword: ''
    };
  }
  onSignInPress() {
    this.props.navigator.pop();
  }
  onSignUpPress() {
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>

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

        <Text style={styles.label}>Confirm Password:</Text>
        <TextInput
          value={this.state.confirmPassword}
          onChangeText={(password) => this.setState({confirmPassword})}
          secureTextEntry={true}
          style={styles.input} />

        <Button text={'Sign Up'} onPress={this.onSignUpPress} />
        <Button text={'I have an account'} onPress={this.onSignInPress.bind(this)} />
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

export default Signup;
