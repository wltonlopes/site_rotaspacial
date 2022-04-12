import { Route, Switch } from "react-router";
import DayPicture from "./pages/DayPicture";
import { AstroNews } from "./pages/AstroNews";
import { Contatos } from "./pages/Contatos";
import Home from "./pages/Home";
import  Lancamentos  from "./pages/Lancamentos";

function Routes(){
  return(
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/daypicture' component={DayPicture}/>
      <Route exact path='/astronews' component={AstroNews}/>
      <Route exact path='/lancamentos' component={Lancamentos}/>
      <Route exact path='/contatos' component={Contatos}/>   
    </Switch>
  )
}
 export default Routes;