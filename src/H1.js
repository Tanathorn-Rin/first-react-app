// todo: Allow to set the color of the header with a property

const H1 = ({content, color = "#c94040" }) => {
    return (
        <h1 style={{ color }}>{content}</h1>
    )
}

export default H1