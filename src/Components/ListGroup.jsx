import { useState } from "react";

function ListGroup() {


    const items = [
        'Apple',
        'Mango',
        'Orange'
    ];

    const onClickEvent = (event, item,index) => {
        // alert(item);
        console.log(item);
        setSelectedState(index);
    }
    const [selectedState,setSelectedState] = useState(-1);
    function getList() {
        return (items.map((item, index) => <li key={item} onClick={(Event) => 
            onClickEvent(Event, item,index)} 
            class={index === selectedState ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}>
                {item}
                </li>))
    }


    return (<div><h1>List</h1>   <ul class="list-group">
        {getList()}
    </ul>
    </div>
    );
}

export default ListGroup;