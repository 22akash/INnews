import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, des, imgurl, newsurl, author, date } = this.props
    return (
      <div className='container my-3'>
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imgurl ? 'https://cdn2.vectorstock.com/i/1000x1000/87/06/breaking-news-concept-screen-tv-card-background-vector-25918706.jpg' : imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{des}...</p>
            <p className='card-text'><small className='text-muted'>By {author ? author : 'Unknown'} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target='_blank' rel="noopener noreferrer" className="btn btn-success">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem