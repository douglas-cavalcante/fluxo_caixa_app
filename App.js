import { createStackNavigator, createAppContainer } from "react-navigation";
import { HomeScreen } from "./src/home/HomeScreen";
import { CadastroScreen } from "./src/cadastro/CadastroScreen";
import { LoginScreen } from "./src/login/LoginScreen";
import { InternoScreen } from "./src/interno/InternoScreen";
import { PreLoadScreen } from "./src/preLoad/preLoadScreen";


const AppNavigator = createStackNavigator({
  Preload:{
    screen: PreLoadScreen,
  },
  Interno: {
    screen: InternoScreen
  },
  Home: {
    screen: HomeScreen,
  },
  Cadastro: {
    screen: CadastroScreen,
  },
  Login: {
    screen: LoginScreen,
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
