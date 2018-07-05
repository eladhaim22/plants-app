// @flow
import React, { Component } from 'react';
import { View, StyleSheet , AsyncStorage} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import Config from '../constants/var.js';
import { Page, Button, TextInput, SecondaryFlatButton } from 'components';
import theme from 'theme';
import I18n from 'lib/i18n';
import axios from 'axios';

type Props = {
  navigation: any,
};

class Login extends Component<void, Props, void> {
  constructor(props) {
    super(props);
  
    this.state = {
      username:undefined,
      password:undefined
    };
  }

  async saveKey(value) {
    try {
      console.log(value);
      await AsyncStorage.setItem('@MySuperStore:plants-session', value);
      this._goToHomePage();
    } catch (error) {
      console.log("Error saving data" + error);
    }
  }

  _tryToLogin = () => {
    axios.post(Config.API_URL + 'api/authenticate',{username:this.state.username,password:this.state.password})
    .then((response) => this.saveKey(response.data.id_token))
    .catch((error) => console.log(error));
  } 

  _goToHomePage() {
    this.props.navigation.navigate('home');
  }

  render() {
    return (
      <Page backgroundImage={theme.images.landing} style={styles.page}>
        <View>
          <TextInput 
            type="email" 
            placeholder={I18n.t('user.form.email')}
            onChangeText={(text) => this.setState({username:text})}
            value={this.state.username}
          />
          <TextInput
            type="password"
            placeholder={I18n.t('user.form.password')}
            onChangeText={(text) => this.setState({password:text})}
            value={this.state.password}
          />

          <Button
            onPress={() => this._tryToLogin()}
            text={I18n.t('login.login')}
          />
          <SecondaryFlatButton
            onPress={() => this.props.navigation.navigate('signup')}
            text={I18n.t('login.signup')}
          />
        </View>
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    paddingTop: 50,
  },
});

export default Login;
