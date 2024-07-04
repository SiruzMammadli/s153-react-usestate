
export default function Container(props) {
    return (
        <div style={{width: '80%', marginInline: 'auto'}}>
            {props.children}
        </div>
    )
}