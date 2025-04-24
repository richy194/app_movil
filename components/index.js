import { registerRootComponent } from 'expo';
export  { default as  Map}  from './components/Map';
export  { default as  Panel}  from './components/Panel';
export  { default as  Modal}  from './components/Modal';
export  { default as  Input}  from './components/input' ;
export  { default as  List}  from './components/List' ;
import { registerRootComponent } from 'expo';
import App from './App';

registerRootComponent(App);


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

