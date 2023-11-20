import React, { useState, useEffect } from 'react';
import { fetchReviews } from '../api/reviewsApi';

function ReviewsPage() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const limit = 6;

    fetchReviews(limit)
    .then(data => {
      setComments(data.comments);
    })
    .catch(error => {
      console.error('Error fetching comments:', error);
    });
}, []);


  return (
    <div>
      <main>
        <section className="application_wrap">
          <div className="container">
            <div className="application">
              <div className="app">
                <div className="foot_form_input foot_form_input_app">
                  <h3 className="title_h3 title_h3_app">Reviews</h3>
                  <div className="review_block">
                    {comments.map(comment => (
                      <div className="review_body" key={comment.id}>
                        <div className="review_name">{comment.user.username}</div>
                        <div className="review_text">{comment.body}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ReviewsPage;
