import React from 'react'
import { Container } from 'react-bootstrap'
import Review from '../Review/Review'

const ReviewList = ({ reviews }) => {
  return (
    <Container style={{margin: '20px auto'}}>
      <h1>Reviews</h1>
      { reviews ? 
      reviews.map((review) => {
        return (


          <Review data={review} />
        )
      })
      
      : 'No reviews :('

      }

    </Container>
  )
}

export default ReviewList