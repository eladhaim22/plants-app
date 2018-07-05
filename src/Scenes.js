// @flow
import React from 'react';
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  HeaderBackButton,
} from 'react-navigation';

import * as Pages from './pages';
import theme from 'theme';
import I18n from 'lib/i18n';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TabIcon = props => <Icon color={props.tintColor} size={30} {...props} />;

const LandingStack = createStackNavigator(
  {
    landing: {
      screen: Pages.Landing,
    },
    login: {
      screen: Pages.Login,
    },
    details: {
      screen: Pages.Details,
    },
    home: {
      screen: Pages.Home,
      navigationOptions: {
        title: I18n.t('home.title'),
      },
    },
  },
  {
    initialRouteName: 'landing',
    mode: 'modal',
    headerMode: 'none',
    navigationOptions: {
      header: null,
    },
  }
);

const SignUpStack = createStackNavigator(
  {
    signup: {
      screen: Pages.Signup,
      navigationOptions: props => ({
        title: I18n.t('signup.title'),
        headerLeft: (
          <HeaderBackButton
            onPress={() => {
              props.navigation.goBack(null);
            }}
            tintColor={theme.colors.overPrimary}
          />
        ),
      }),
    },
  },
  {
    initialRouteName: 'signup',
    navigationOptions: {
      headerTintColor: theme.colors.overPrimary,
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
    },
  }
);

export const RootNavigator = createStackNavigator(
  {
    landing: {
      screen: LandingStack,
    },
    signup: {
      screen: SignUpStack,
    },
    /*dashboard: {
      screen: DashboardStack,
    },*/
  },
  {
    initialRouteName: 'landing',
    headerMode: 'none',
  }
);

export default RootNavigator;
