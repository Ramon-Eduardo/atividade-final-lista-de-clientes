function  Button ({onClickProp, label, className}) {
    return (
        <button onClick={onClickProp} className={className}>{label}</button>
    )
}

export default Button