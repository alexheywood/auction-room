export default function NavButton(props) {

    return (
        <button 
        type="button" 
        onClick={props.onClick}
        width="100%"
        className="navButton">
            {props.label}
        </button>
    )
}
