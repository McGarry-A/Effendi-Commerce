import './Item.css'

const Item = ({image, name}) => {
    return (
        <div className="item-container">
            <img className='item-image' src={image} alt="image"/>
        </div>
    )
}

export default Item