import React , {Component} from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux'
import {store} from './components/store.js';
import Scenes from './Scenes';
import {NavigationActions} from 'react-navigation';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
		  loading: false,
		}
	}

	async getItem() {
	    return await AsyncStorage.getItem('@MySuperStore:plants-session')
	        .then((result) => {
	            if (result) {
	                try {
	                    this.setState({ loading: true} , () => {
					        if (result != null) {
					          const navigateAction = NavigationActions.navigate({
					            routeName: 'home',
					            index: 0,
					          });
					          store.dispatch(navigateAction);
					        }
				      	});
	                }
	                catch(e){}
	            }
	        });
	}

	componentWillMount() {
	    this.getItem();
  	}

   	render() {
      return (
  	 	<Provider store={store}>
      		<Scenes />
     	</Provider>
      )
	}
}

export default App;
