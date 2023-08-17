import { useState } from 'react';
import classes from './Сounter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    return (
        <div className={classes.counter}>
            <h2>{count}</h2>
            <button onClick={increment}>Increment</button>
        </div>
    );
};
