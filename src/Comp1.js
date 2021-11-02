import React, { useState } from "react";

const Comp1 = () => {

    const [count, setCount] = useState(0);

    const handler = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <button className="button" onClick={handler}>This button change state</button>
            <div>
                {count}
            </div>
        </div>
    );

}

export default Comp1;