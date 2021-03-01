import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Step1 = () => <> Step 1 </>
const Step2 = () => <> Step 2 </>
const Step3 = () => <> Step 3 </>
const Result = () => <> result </>

const Header = () => <h1>Header</h1>


function App() {
  return (
    <>
    <Header />
    <Router>
    <Switch>
      <Route exact path="/" component={Step1} />
      <Route path="/step2" component={Step2} />
      <Route path="/step3" component={Step3} />
      <Route path="/step4" component={Result} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
