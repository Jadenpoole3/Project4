import React, { Component } from 'react';
import styled from 'styled-components'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


const Post = styled.div`
@import url(https://fonts.googleapis.com/css?family=Raleway:400,200,300,800);
@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
figure.snip0057 {
  font-family: 'Raleway', Arial, sans-serif;
  position: relative;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  margin: 10px 1%;
  min-width: 380px;
  max-width: 480px;
  width: 100%;
  background: #ffffff;
  color: #000000;
}
figure.snip0057 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
figure.snip0057 .image {
  width: 50%;
  overflow: hidden;
  z-index: 1;
  -webkit-transform: skewX(-15deg);
  transform: skewX(-15deg);
}
figure.snip0057 .image img {
  position: relative;
  display: block;
  left: -15%;
  z-index: 1;
  -webkit-transform: skew(15deg);
  transform: skew(15deg);
}
figure.snip0057:before {
  position: absolute;
  content: '';
  height: 100%;
  width: 45%;
  background: rgba(0, 0, 0, 0.2);
  -webkit-transform: skewX(-17deg);
  transform: skewX(-17deg);
  -webkit-box-shadow: 15px 0px 25px rgba(0, 0, 0, 0.7);
  box-shadow: 15px 0px 25px rgba(0, 0, 0, 0.7);
}
figure.snip0057 figcaption {
  padding: 20px 30px 20px 20px;
  position: absolute;
  right: 0;
  bottom: 10px;
  width: 50%;
}
figure.snip0057 figcaption h2,
figure.snip0057 figcaption p {
  margin: 0;
  text-align: right;
  padding: 10px 0;
  width: 100%;
}
figure.snip0057 figcaption h2 {
  font-size: 1.3em;
  font-weight: 300;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
figure.snip0057 figcaption h2 span {
  font-weight: 800;
}
figure.snip0057 figcaption p {
  font-size: 0.9em;
  opacity: 0.8;
}
figure.snip0057 figcaption .icons {
  width: 100%;
  text-align: right;
}
figure.snip0057 figcaption .icons i {
  font-size: 26px;
  padding: 5px;
  top: 50%;
  color: #000000;
  opacity: 0;
}
figure.snip0057 figcaption a {
  opacity: 0.3;
}
figure.snip0057 figcaption a:hover {
  opacity: 0.8;
}
figure.snip0057 .position {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: right;
  padding: 15px 30px;
  font-size: 0.9em;
  opacity: 1;
  font-style: italic;
  color: #ffffff;
  background: #000000;
}
figure.snip0057.blue .position {
  background: #20638f;
}
figure.snip0057.red .position {
  background: #962d22;
}
figure.snip0057.yellow .position {
  background: #bf6516;
}
figure.snip0057:hover figcaption,
figure.snip0057.hover figcaption {
  bottom: 40px;
}
figure.snip0057:hover .icons i,
figure.snip0057.hover .icons i {
  opacity: 1;
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
figure.snip0057:hover:before,
figure.snip0057.hover:before {
  -webkit-animation: shadow 0.6s ease-in-out;
  animation: shadow 0.6s ease-in-out;
}
@-webkit-keyframes shadow {
  0% {
    left: 0px;
  }
  50% {
    left: -5px;
  }
  100% {
    left: 0px;
  }
}
@keyframes shadow {
  0% {
    left: 0px;
  }
  50% {
    left: -5px;
  }
  100% {
    left: 0px;
  }
}
`

class GoalPage extends Component {
    render() {
        return (
            <div>
                <Post>
                
                
<figure class="snip0057 red">
{this.props.goals.map((goal) => {
                    return(
  <figcaption>
    <h2>{goal.name} <span></span></h2>
    <p>{goal.description}</p>
    <div class="icons"><a href="#"><i class="ion-ios-home"></i></a><a href="#"><i class="ion-ios-email"></i></a><a href="#"><i class="ion-ios-telephone"></i></a></div>
  </figcaption>
  )
                }
                )}
  <div class="image"><img src="http://dodinsky.com/wp-content/uploads/2017/08/1c4a3ead8b48ac5dcb0c5bbb7e933def-gag-workout-motivation.jpg" alt="sample4"/></div>
  <div class="position">

  </div>
</figure>
    

</Post>
            </div>
        );
    }
}

export default GoalPage;