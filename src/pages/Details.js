// @flow
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { 
  Body, 
  Container, 
  Content, 
  ListItem, 
  Text,
  Header,
  Button, 
  Radio,
  Left,
  Icon, 
  Right,
  Title,
  Form,
  Item,
  Label,
  Input } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import type { NavigationTabScreenOptions } from 'react-navigation';
import { Page } from 'components';
import theme from 'theme';
import I18n from 'lib/i18n';

type Props = {
  navigation: any,
};

class Details extends Component<void, Props, void> {
  constructor(props) {
    super(props);
  
    this.state = {
      type:undefined
    };
  }

  renderType = () => {
    switch(this.props.navigation.state.params.type){
      case 1: return this.renderManuel();
        break;
      case 2: return this.renderTimer();
        break;
      default: return this.renderAuto();
        break;
    }
  }

  renderManuel = () => {
    return(<Form>
      <Item floatingLabel>
        <Label>Water first line(sec)</Label>
        <Input keyboardType='numeric'/>
      </Item>
      <Item floatingLabel>
        <Label>Water second line(sec)</Label>
        <Input keyboardType='numeric'/>
      </Item>
    </Form>); 
  }

  renderTimer = () => {
    return(<Form>
      <Item floatingLabel>
        <Label>Water every(hours) first line</Label>
        <Input keyboardType='numeric'/>
      </Item>
      <Item floatingLabel>
        <Label>Water for(seconds) first line</Label>
        <Input keyboardType='numeric'/>
      </Item>
      <Item floatingLabel>
        <Label>Water every(hours) second line</Label>
        <Input keyboardType='numeric'/>
      </Item>
      <Item floatingLabel>
        <Label>Water for(seconds) second line</Label>
        <Input keyboardType='numeric'/>
      </Item>
    </Form>);
  }

  renderAuto = () => {
    return(<Form>
      <Item floatingLabel>
        <Label>Water on(%) first line</Label>
        <Input keyboardType='numeric'/>
      </Item>
      <Item floatingLabel>
        <Label>Water until(%) first line</Label>
        <Input keyboardType='numeric'/>
      </Item>
      <Item floatingLabel>
        <Label>Water on(%) second line</Label>
        <Input keyboardType='numeric'/>
      </Item>
      <Item floatingLabel>
        <Label>Water until(%) second line</Label>
        <Input keyboardType='numeric'/>
      </Item>
    </Form>);
  }

  render() {
    return (
       <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('home')}>
              <Icon name='arrow-back'/>
            </Button>
          </Left>
          <Body>
            <Title>{this.props.navigation.state.params.type}</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <Content>
          <Grid>
            <Row>
              {this.renderType()}
            </Row>
            <Row>
              <Button block>
                <Text>Apply</Text>
              </Button>
            </Row>
          </Grid>
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

export default Details;
