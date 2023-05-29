import './index.css'

const SlideItem = props => {
  const {itemDetails, clickItem, isActive, number} = props
  const {heading, description} = itemDetails

  const clickSlide = () => {
    clickItem(number)
  }

  return (
    <li
      testid={`slideTab${number + 1}`}
      className={isActive ? 'active-slide inactive-slide' : 'inactive-slide'}
      onClick={clickSlide}
    >
      <p className="number">{number + 1} </p>
      <div className="slider-container">
        <h1 className="slide-item-heading">{heading}</h1>
        <p className="slide-item-description">{description}</p>
      </div>
    </li>
  )
}

export default SlideItem
