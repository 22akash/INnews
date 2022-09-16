
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';


export class News extends Component {
  static defaultProps = {
    country: 'in',
    category: 'general'

  }

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
    document.title = `INnews-${this.props.category}`
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=business&apiKey=${this.props.apiKey}&page=1&pageSize=9`;
    let data = await fetch(url)
    let parseData = await data.json()
    this.setState({ articles: parseData.articles, totalResults: parseData.totalResults })
  }

  handlePrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=business&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=9`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parseData = await data.json()
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    })
  }

  handleNext = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) { }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=business&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=9`;
      this.setState({ loading: true })
      let data = await fetch(url);
      let parseData = await data.json()
      this.setState(
        {
          page: this.state.page + 1,
          articles: parseData.articles,
          totalResults: parseData.totalResults,
          loading: false
        })
    }
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=business&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=9`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parseData = await data.json()
    this.setState(
      {
        articles: this.state.articles.concat(parseData.articles),
        totalResults: parseData.totalResults,
        loading: false
      })
  }
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center' > INnews - Top {this.props.category} Headlines</h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="row" >
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ''} des={element.description ? element.description.slice(0, 90) : ''} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} />
              </div>
            }
            )}
          </div>
        </InfiniteScroll>
        {/* <div className='container d-flex justify-content-between'>
            <button disabled={(this.state.page <= 1)?true:false}  type='button' className="btn btn-success" onClick={this.handlePrev}>&larr; Prev</button> 
            <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/9)} type='button' className="btn btn-success" onClick={this.handleNext}>Next &rarr;</button>
          </div> */}
      </div>
    )
  }
}

export default News