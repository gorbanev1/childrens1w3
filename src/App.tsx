import {useState} from 'react';
import './App.css';
import {Modal} from "./components/modal/Modal";
import {SuperButton} from "./components/modal/SuperButton";
import styles from './components/modal/SuperButton.module.css'
import {SuperCrosses} from "./components/modal/SuperCrosses";


export const App = () => {
    const crosses = [
        {id: 1, model: "ADIDAS", size: 'xxx'},
        {id: 2, model: "ABIDAS", size: 'yyy'},
        {id: 3, model: "PUMA", size: 'zzz'}
    ]
    return (
        <div>
            {/*            <SuperButton title={"RedSuperButton"} onClick={()=>{}} color={"red"}>RedSuperButton</SuperButton>
            <SuperButton title={"RedSuperButtonq"} onClick={()=>{}} color={"secondary"}>RedSuperButton dsfds</SuperButton>
            <SuperButton title={"RedSuperButtoxzcn"} onClick={()=>{}}>RedSuperButton</SuperButton>
            <SuperButton title={"RedSuperButton"} onClick={()=>{}} disabled >RedSuperButton</SuperButton>*/}
            {/* <SuperCrosses crosses={crosses}>
                <div>cfdsfsdf</div>
                <div>cfdsfsdf</div>
                <div>cfdsfsdf</div>
                <SuperButton title={"RedSuperButton"} onClick={() => {
                }} color={"red"}>RedSuperButton</SuperButton>
                <SuperButton title={"RedSuperButtonq"} onClick={() => {
                }} color={"secondary"}>RedSuperButton dsfds</SuperButton>
                <SuperButton title={"RedSuperButtoxzcn"} onClick={() => {
                }}>RedSuperButton</SuperButton>
                <SuperButton title={"RedSuperButton"} onClick={() => {
                }} disabled>RedSuperButton</SuperButton>

            </SuperCrosses>
            <SuperCrosses crosses={crosses}>
                <input type='text'/>

                <SuperButton title={"RedSuperButton"}
                             onClick={() => {}}
                             disabled>
                    RedSuperButton
                </SuperButton>
            </SuperCrosses>
            <SuperCrosses crosses={crosses}>
                <div>dssdADASDASDAdada</div>
            </SuperCrosses>*/}
            <Modal>
                <div>Confident information</div>
                <input type={"text"} placeholder={'email'}/>
                <input type={"password"} placeholder={'password'}/>
                <input type={"password"}/>
                <label><input type={'checkbox'} checked/>i agree</label>
                <button>send</button>
            </Modal>
        {/*    <Modal>
                <div>Confident information</div>
                <input type={"email"}/>
                <input type={"password"}/>


            </Modal>*/}
        </div>
    );
}
