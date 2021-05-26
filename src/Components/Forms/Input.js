import React from 'react'
import styles from './Input.module.css'

function Input({ label, type, name, value, setValue, onChange, error, onBlur }) {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={name} className={styles.label}>{label}</label>
            <input id={name} name={name} type={type} className={styles.input} onChange={onChange} value={value} onBlur={onBlur} />
            {error && <p className={styles.error}>{error}</p>}
        </div>
    )
}

export default Input
