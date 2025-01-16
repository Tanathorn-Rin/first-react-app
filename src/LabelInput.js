function LabelInput({label, type, value}) {
    return (
        <div>
            <div>
                <label style={{'color' :'#ff0000'}}>{label}</label>
            </div>
            <div>
                <input type={type} value={value} maxLength="20"/>
            </div>
        </div>
    )
}


export default LabelInput