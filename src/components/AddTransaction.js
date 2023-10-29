import { useState, useContext} from "react"
import {GlobalContext} from '../context/GlobalState'

export const AddTransaction = ()=>{
  const {addTransaction} = useContext(GlobalContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0)
  const onSubmit=(e) =>{
    e.preventDefault();
    console.log('Test')
    const newTransaction = {
      id: Math.floor(Math.random( )*1000000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction)
     
  }
   return (
    <div>
      <h3>Add new transaction</h3>
      <form id='form' onSubmit={onSubmit}>
         <div className="form-control">
             <label>Text</label>
             <input 
              type='text' 
              value={text} 
              onChange={(e)=>setText(e.target.value)}
              placeholder="Enter Text..."
             />
         </div>

         <div className="form-control">
             <label>Amount</label>
             <input 
                type='number' 
                value={amount}
                onChange={(e)=>setAmount(e.target.value)} 
                placeholder="Enter Amount..."
             />
         </div>
         <button className="btn">Add transaction</button>
      </form>

    </div>

   )
}