import React from 'react'
import styles from './FormsController.module.css'


export const TextArea = ({input, meta, ...props}) => {
    return(
        <div className = {styles.formControl + ' ' + styles.error}>
            <textarea {...input} {...props} />
            {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
    )
}


export const Input = ({input, meta, ...props}) => {
    return(
        <div className = {styles.formControl + ' ' + styles.error}>
            <input {...input} {...props} />
            {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
    )
}
