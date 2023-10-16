import logo from './logo.svg';
import './App.css';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <div className="container">
       <Balance></Balance>
       <IncomeExpense></IncomeExpense>
       <TransactionList></TransactionList>
       <AddTransaction></AddTransaction>
    </div>
    </GlobalProvider>
  );
}

export default App;
