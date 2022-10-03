import React, { useState, useEffect } from 'react'
import { Card, Image } from 'react-bootstrap'
import axios from 'axios';
import { getFormattedDate } from '../../utils/formatDate';

const Review = ({ review }) => {
  // data should contain:
    // username, timestamp, textarea, photos, star rating 1-5
  const [username, setUsername] = useState('');
  const userID = review.author;
  const date = getFormattedDate(review.createdAt);
  
  useEffect(() => {
    const getUsername = async() => {
        try {
            const response = await axios.get(`http://localhost:3001/api/getUser/${userID}`);
            setUsername(`${response.data.result.firstName} ${response.data.result.lastName}`);
        } catch (error) {
            console.log(error);
        }
    }
    getUsername();
  }, [])

  return (
      <Card style={{margin: '20px auto'}}>
        <Card.Header>@{username} | {date}</Card.Header>
        <Card.Body>
          <Card.Title>Rating: {review.rating}/5</Card.Title>
          <Card.Text>{review.reviewBody}</Card.Text>
          {
            review.photos ? 
              review.photos.map((photo, i) => {
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