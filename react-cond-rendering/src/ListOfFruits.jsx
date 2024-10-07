import Proptypes from 'prop-types';

export default function ListOfFruits(props){
    //creating a list of mappings from my original props
    const listItems = props.items.map(item => <li key = {item.id}><strong>{item.name}</strong>: &nbsp; {item.color}</li>)
    return(
        <>
        <h3 className="list-category">{props.category}</h3>
        <ol className="list">{listItems}</ol>
        </>
    )
}
ListOfFruits.defaultProps = {
    category: "I do not like Fruits!",
    items: []
}