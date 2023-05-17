import { log } from "console";
import { useState, useEffect } from "react";
import "./Clock.css";

function Clock(): JSX.Element {

    const [time, setTime] = useState<string>(new Date().toTimeString());
    let x = 0;

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date().toTimeString());
            console.log(x++);
        }, 1000);

        // return a callback that will run on component unmount.
        return () => {
            clearInterval(timerId);
        };

    }, []);

    return (
        <div className="Clock Box">
            <span>{time}</span>
        </div>
    );
}

export default Clock;
