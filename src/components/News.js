import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'




export class News extends Component 
{
  static defaultProps = {
    country: 'in',
    category:'general'

  }
  static propTypes={
    country:PropTypes.string,
    category:PropTypes.string,
  }

  articles=[ ]
    
    
  
  constructor(){
    super();
    this.state={
      articles: this.articles,
      loading: false,
      page:1


    }

  
  }
   
  
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=51a97d1526cb49a6982fb6e6215c0f66&page=3`
    let data=await fetch(url);
    let parsedData=await data.json()
    this.setState({articles:parsedData.articles})
  }
  

  
  render() 
  {
    return (
      <div className="container my-4 justify-content-between" >
        <h1 className="text-center" style={{margin:'40 px 0 px'}} >NewsApp Top Headlines</h1>
        
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                 <Newsitem title={element?element.title:""} description={element?element.description:""} imageUrl={element?element.urlToImage:""} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                  </div>
            
             
          })}
        </div>
      {/* //  <div className="container">
        <button type="button" className="btn btn-dark" onClick={onPrevClick}>prvious</button>
        <button type="button" className="btn btn-dark" onClick={onNextClick}>next</button>
        </div> */}
          
     

        
      </div>
    )
  }
}

export default News
