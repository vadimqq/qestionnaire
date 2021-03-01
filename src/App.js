import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Step1 } from './pages/Step1'
import { Step2 } from './pages/Step2'

const Step3 = () => <> Step 3 </>
const Result = () => <> result </>

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

export default App
