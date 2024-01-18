import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if(newBudget > 20000) {
            alert("The value cannot exceed £20000");
            setNewBudget(20000)
            return;
        }
        else if(newBudget < 1000) {
            alert("The value cannot exceed +" +expenses);
            setNewBudget(expenses)
            return;}
        else {setNewBudget(event.target.value);}
        
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
