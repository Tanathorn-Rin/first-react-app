function LabelInput({label, type}) {
    return (
        <div>
            <div>
                <label style={{'color' :'#ff0000'}}>{label}</label>
            </div>
            <div>
                <input type={type}/>
            </div>
        </div>
    )
}


export default LabelInput