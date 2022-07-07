const ListItem = (props) => {
    return (
        <li key={props.key} className={props.className}>{props.children}</li>
    );
}


export default ListItem;