import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../Auxiliry';
import Benefits from './../../Benefits';

const modal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                
                <Benefits/>
            </div>
        </Aux>
        
    )
}

export default modal;