import React from "react";

export default function FoodItems({food}) {

    function handleClick(foodItem){
       console.log(`${foodItem} Bought`);
    }

    return (
        <>
            <ul>
                {food.map((item) => (
                    <li key={item}>
                        {item}
                        <button onClick={() => handleClick(item)}>Buy</button>
                    </li>
                ))}
            </ul>
        </>
    );
}
