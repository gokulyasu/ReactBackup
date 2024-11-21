

function Message() {


    const tempVar = 'Hello wrold...';

    function getVarValue(){
        return tempVar;
    };
    return <div>
        <h1>{getVarValue()}</h1>
    </div>
}

export default Message;