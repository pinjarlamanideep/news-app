import React, { Component } from 'react'

export class Newsitem extends Component {
  
  render() {
    let {title,description,imageUrl,newsUrl,author,date}=this.props
    return (
      
      <div className="my-3">
        <div className="card" >
          <img src={imageUrl?imageUrl:"https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2139565276.jpg?c=16x9&q=w_800,c_fill"} className="card-img-top" alt=""/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">{author?author:"Unknown"} updated {new Date(date).getHours()}hrs ago</small></p>
            <a href={newsUrl} rel='noreferrer' target="_blank" className="btn btn-primary">Read More</a>
          </div>
          
        </div>
        
      </div>
      
    )
  }
}

export default Newsitem
