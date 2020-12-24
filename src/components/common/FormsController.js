import React from 'react'
import styles from './FormsController.module.css'


export const TextArea = ({input, meta, ...props}) => {
    

    let hasError = meta.error && meta.touched
    
    
    return(
        <div className = {styles.formControl + ' ' +  (hasError ? styles.error: '')}>
            <textarea {...input} {...props} />
        </div>
    )
}


/* export const Input = ({input, meta, ...props}) => {
    return(
        <div className = {styles.formControl + ' ' + styles.error}>
            <input {...input} {...props} />
            {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
    )
} */
