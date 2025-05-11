import s from './SuperButton.module.css'
import * as React from 'react';
// type SupperButtonProps = {
//     onClick:()=>void
//     color: string
//     color2: string
//     children?:React.ReactNode
//     title: string
//
// };

type ColorProps = {
    color1?: string
    color2?: string
    color3?: string
}

type SupperButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    backGround?: string
} & Omit<ColorProps, 'color1'>
export const SuperButton = (props: SupperButtonProps) => {
    const {onClick, children, color, title, className, disabled, ...restProps} = props
    console.log(restProps.color2)
    /*    const finalClassName = s.button

            + (disabled
                ? ' ' + s.disabled
                : color === 'red'
                    ? ' ' + s.red
                    : color === 'secondary'
                        ? ' ' + s.secondary
                        : ' ' + s.default)
            + (className ? ' ' + className : ' ')
    */
    //const finalClassName = s.button+s.red
    const finalClassName = `
        ${s.button}  
        ${disabled?s.disabled: " "}
        ${color==='red'? s.red:color==='secondary'?s.secondary:s.default}
        `
    debugger
    return (
        <button
            className={finalClassName}>
            {
                children
            }
        </button>
    );
};