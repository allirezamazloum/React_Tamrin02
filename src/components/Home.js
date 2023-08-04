import React, { Component } from 'react';
import pic1 from "../images/home/apples.jpg";
import pic2 from "../images/home/cupcake.jpg";
import pic3 from "../images/home/halloween.jpg";
import pic4 from "../images/home/butterfly.jpg";
import "../styles/home.css";


 class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            picArr:[pic1,pic2,pic3,pic4],
            slideIndex:0
        }
    }

    plusSlides=(n)=>{
        var num=this.state.slideIndex+n;
        if (num>3){
            num=0;
        };
        if (num<0){
            num=3;
        };
        this.setState({slideIndex:num});
    };



  render() {
    return (
      <div className='slideshow-container'>
        {/* <img src={pic1} className='mySlides fade' alt="تصویر اول"/>
        <img src={pic2} className='mySlides fade' alt="تصویر دوم"/>
        <img src={pic3} className='mySlides fade' alt="تصویر سوم"/> */}
        <button type="button" class="prev" onClick={()=>this.plusSlides(-1)}>&#10094;</button>
        <img src={this.state.picArr[this.state.slideIndex]} className='fade' alt='تصویر 4'/>
        {/* <HomeImg currentImage={this.state.picArr[this.state.slideIndex]}/> */}

        {/* <a class="prev" onClick={()=>this.plusSlides(-1)}>&#10094;</a>
        <a class="next" onClick={()=>this.plusSlides(1)}>&#10095;</a> */}

    
        <button type="button" class="next" onClick={()=>this.plusSlides(1)}>&#10095;</button>
        {/* <button type="button"  onClick={this.plusSlides(-1)}>&#10094;</button>
        <button type="button"  onClick={this.plusSlides(1)}>&#10095;</button> */}



      </div>
    )
  }
}
export default Home;