import {Component} from 'react'
import {v4} from 'uuid'

import NavBar from '../NavBar'
import SlideItem from '../SlideItem'

import './index.css'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class NxtSlider extends Component {
  state = {
    slides: initialSlidesList,
    activeSlide: 0,
    clickHeader: false,
    clickDescription: false,
  }

  changeActiveSlide = index => {
    this.setState({activeSlide: index})
  }

  changeHeading = event => {
    const {activeSlide} = this.state
    this.setState(prev => ({
      slides: prev.slides.map((each, index) => {
        if (index === activeSlide) {
          return {
            id: each.id,
            description: each.description,
            heading: event.target.value,
          }
        }
        return each
      }),
    }))
  }

  addSlide = () => {
    const newSlide = {
      id: v4(),
      heading: 'Heading',
      description: 'Description',
    }

    this.setState(prev => ({
      slides: [
        ...prev.slides.slice(0, prev.activeSlide + 1),
        newSlide,
        ...prev.slides.slice(prev.activeSlide + 1),
      ],
      activeSlide: prev.activeSlide + 1,
    }))
  }

  changeDescription = event => {
    const {activeSlide} = this.state
    this.setState(prev => ({
      slides: prev.slides.map((each, index) => {
        if (index === activeSlide) {
          return {
            id: each.id,
            heading: each.heading,
            description: event.target.value,
          }
        }
        return each
      }),
    }))
  }

  clickHeading = () => {
    this.setState({clickHeader: true})
  }

  clickDescription = () => {
    this.setState({clickDescription: true})
  }

  onBlurHeading = () => {
    this.setState({clickHeader: false})
  }

  onBlurDescription = () => {
    this.setState({clickDescription: false})
  }

  renderSideBar = () => {
    const {slides, activeSlide} = this.state

    return (
      <div className="sidebar-container">
        <button type="button" className="new-btn new" onClick={this.addSlide}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
            alt="new plus icon"
            className="plus"
          />
          New
        </button>
        <ol className="ulEl">
          {slides.map((each, index) => (
            <SlideItem
              key={each.id}
              itemDetails={each}
              clickItem={this.changeActiveSlide}
              isActive={activeSlide === index}
              number={index}
            />
          ))}
        </ol>
      </div>
    )
  }

  renderSlider = () => {
    const {activeSlide, slides, clickHeader, clickDescription} = this.state
    const slide = slides[activeSlide]
    return (
      <div className="active-slide-item-container">
        {clickHeader === true ? (
          <input
            type="text"
            value={slide.heading}
            className="header-input"
            onChange={this.changeHeading}
            onBlur={this.onBlurHeading}
          />
        ) : (
          <h1 className="slide-heading" onClick={this.clickHeading}>
            {slide.heading}
          </h1>
        )}
        {clickDescription === true ? (
          <input
            type="text"
            value={slide.description}
            className="description-input"
            onChange={this.changeDescription}
            onBlur={this.onBlurDescription}
          />
        ) : (
          <p className="slide-description" onClick={this.clickDescription}>
            {slide.description}
          </p>
        )}
      </div>
    )
  }

  render() {
    const {activeSlide, slides} = this.state
    console.log(activeSlide)
    console.log(slides)
    return (
      <>
        <NavBar />
        <div className="main-container">
          {this.renderSideBar()}
          {this.renderSlider()}
        </div>
      </>
    )
  }
}

export default NxtSlider
