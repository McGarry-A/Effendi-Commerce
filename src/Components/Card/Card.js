import './Card.css'

const Card = ({name, image}) => {
    return (
    <div className='card-container'>
        <img className='card-image' src={image} alt={name}/>
        <div className='card-button-div'>
            <button className='card-button'>{name}</button>
        </div>
    </div>
    )
}

export default Card