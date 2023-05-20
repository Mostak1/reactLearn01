import React from 'react'


const useSemiPersistentState = (key, initialState) => {
    const isMounted = React.useRef(false);
    const [value, setValue] = React.useState(
        localStorage.getItem(key) || initialState
    );
    React.useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
        } else {

            console.log('A');
            localStorage.setItem(key, value);
        }
    }, [value, key]);
    return [value, setValue];
};
export const Maintenance = () => {
    const [toggle, setToggle] = React.useState(true);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const calledOnce = React.useRef(false);

    React.useEffect(() => {
        if (calledOnce.current) {
            return;
        }

        if (toggle === false) {
            console.log('I run only once if toggle is false.');

            calledOnce.current = true;
        }
    }, [toggle]);

    return (
        <div>
            <button type="button" onClick={handleToggle}>
                Toggle
            </button>

            {toggle && <div>Hello React</div>}
        </div>
    );
};
