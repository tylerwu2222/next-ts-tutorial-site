import React from 'react'
import TypeScriptExplainer from '@/app/markdown/TypeScriptExplainer.mdx'

const acceptsNumbers = (number_prop: number) => {
    return number_prop + 1;
};

// const addNumbers = (param1:number,param2:number) => {
//     return param1 + param2; 
// }

// type NumbersObject = {
//     number1: number,
//     number2: number
// }

// const addNumbersFromObject = (numbers:NumbersObject) => {
//     return numbers.number1 + numbers.number2
// };

export default function Typescript() {

    acceptsNumbers(1);
    // const incremented_str = acceptsNumbers('1');

    return (
        <TypeScriptExplainer />
    )
}
