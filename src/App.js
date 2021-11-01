import { Switch, Route } from 'react-router-dom'
import Homepage from './views/Homepage';

function App() {
    return ( 
    <>
        <Switch>
            <Route path="/"
            exact component={Homepage}
            />
        </Switch> 
        </>
    );
}

export default App;