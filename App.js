import { createStackNavigator, createAppContainer } from "react-navigation";
import { HomeScreen } from "./src/home/HomeScreen";
import { RegisterScreen } from "./src/register/RegisterScreen";
import { LoginScreen } from "./src/login/LoginScreen";
import { HistoricListScreen } from "./src/interno/HistoricListScreen";
import { PreLoadScreen } from "./src/preLoad/preLoadScreen";
import { RevenueFormScreen } from "./src/interno/RevenueFormScreen";
import { AddExpenseScreen } from "./src/interno/AddExpenseScreen";

const AppNavigator = createStackNavigator({
  Preload: {
    screen: PreLoadScreen,
  },
  HistoricList: {
    screen: HistoricListScreen
  },
  Home: {
    screen: HomeScreen,
  },
  Register: {
    screen: RegisterScreen,
  },
  Login: {
    screen: LoginScreen,
  },
  RevenueForm: {
    screen: RevenueFormScreen
  },
  AddExpense: {
    screen: AddExpenseScreen
  }
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
