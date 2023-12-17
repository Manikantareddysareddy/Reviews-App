import {Component} from 'react'

import './index.css'
import {reverse} from 'dns'

const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]

class ReviewsCarousel extends Component {
  state = {Review: reviewsList[0], leftCount: 1, rightCount: 1}

  leftArrowClick = () => {
    const {Review, leftCount, rightCount} = this.state
    const count = reviewsList.indexOf(Review)
    if (count !== 0) {
      this.setState({Review: reviewsList[count - 1]})
    } else {
      this.setState({review: reviewsList[0]})
    }
  }

  rightArrowClick = () => {
    const {Review, rightCount} = this.state
    if (rightCount !== reviewsList.length) {
      this.setState({
        rightCount: rightCount + 1,
        Review: reviewsList[rightCount],
      })
    }
  }

  render() {
    const {Review} = this.state
    const {imgUrl, username, companyName, description} = Review
    return (
      <div className="bg-container">
        <h1 className="heading1">Reviews</h1>
        <img src={imgUrl} alt={username} className="image1" />
        <div className="button-container">
          <button
            type="button"
            className="button"
            data-testid="leftArrow"
            onClick={this.leftArrowClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <p className="heading2">{username}</p>
          <button
            type="button"
            data-testid="rightArrow"
            className="button"
            onClick={this.rightArrowClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
        <p className="para">{companyName}</p>
        <p className="para">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
