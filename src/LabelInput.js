const LabelInput = ({label, type, value}) => {
    return (
        <div>
            <div>
                <label style={{'color' :'#373737'}}>{label}</label>
            </div>
            <div>
                <input type={type} value={value}/>
            </div>
        </div>
    )
}


export default LabelInput