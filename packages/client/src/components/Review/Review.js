import React from 'react'
import { Card, Container, Image } from 'react-bootstrap'

const Review = ({ data }) => {
  // data should contain:
    // username, timestamp, textarea, photos, star rating 1-5


  return (
      <Card style={{margin: '20px auto'}}>
        <Card.Header>@{data.username} | {data.date}</Card.Header>
        <Card.Body>
          <Card.Title>Rating: {data.rating}/5</Card.Title>
          <Card.Text>{data.text}</Card.Text>
          {
            data.photos ? 
              data.photos.map((photo, i) => {
                return (
                  <Image src={photo} key={i} style={{height: '100px'}} />
                )
              })
            : ''
          }
        </Card.Body>
      </Card>
  )
}

export default Review