// @flow
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Body, Title, Container, Content,Header, ListItem, Text, Radio,Left,Icon, Right } from 'native-base';
import type { NavigationTabScreenOptions } from 'react-navigation';
import { Page } from 'components';
import theme from 'theme';
import I18n from 'lib/i18n';

type Props = {
  navigation: any,
};

class Home extends Component<void, Props, void> {
  constructor(props) {
    super(props);
  
    this.state = {
      type:undefined
    };
  }

  navigate = () => {
    this.props.navigation.navigate('details',{type:this.state.type});
  }

  render() {
    return (
      <Container>
        <Header>
           <Body>
            <Title>Configurations</Title>
          </Body>
        </Header>
        <Content>
          <ListItem onPress={(value) => this.setState({type:1})} selected={this.state.type == 1}>
            <Left>
              <Text>Manuel</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" onPress={this.navigate}/>
            </Right>
          </ListItem>
          <ListItem onPress={(value) => this.setState({type:2})} selected={this.state.type == 2}>
            <Left>
              <Text>Timer</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" onPress={this.navigate}/>
            </Right>
          </ListItem>
          <ListItem onPress={(value) => this.setState({type:3})} selected={this.state.type == 3}>
            <Left>
              <Text>Auto</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" onPress={this.navigate}/>
            </Right>
          </ListItem>
        </Content>
      </Container>    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...theme.fonts.pageTitle,
  },
});

export default Home;
