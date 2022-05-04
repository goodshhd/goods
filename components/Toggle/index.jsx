
const Toggle = ({toggle, handleToggle}) => {

    const active ='bg-green-400 bottom-1 left-5';
    const regular ='bg-gray-400 bottom-1 left-2';

    return (
        <div className="flex items-center flex-col cursor-pointer relative pointer " onClick={handleToggle}>
            <span className="mb-2 text-gray-900 text-sm font-medium">Status</span>
            <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"/>
            <div className={`w-4 h-4 absolute ${ toggle ? active : regular} rounded-lg transition duration-300`}/>
        </div>
    );

}

export default Toggle;
