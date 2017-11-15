import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import SignUpForm from './SignUpForm'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components';

const Follow = styled.div`
.cf:before,
.cf:after {
    content:"";
    display:table;
}
.cf:after {
    clear:both;
}

/*--------------------------------------------------------------
1.2 - FORMATTING
--------------------------------------------------------------*/
body {
  background: #343434 url(http://cameronbaney.com/codepen/twitter-widget/bg.jpg);
  background-size: cover;
  color: #4c4c4c;
  font:300 1.1em/1.7em 'HelveticaNeue-Light', Helvetica, Arial, sans-serif;
}

body > p {
  bottom: 10px;
    color: #fff;
    font-size: 12px;
    left: 10px;
    position: absolute;
}
body > p a {
    color: #fff
}

/*--------------------------------------------------------------
2.0 - TWITTER WIDGET
--------------------------------------------------------------*/
.twitter-widget {
    color: #4c4c4c;
    height: 249px;
    left:50%;
    margin: -125px 0 0 -223px;
    position: absolute;
    top:50%;
    width:446px;
    box-shadow: 1px 1px 16px rgba(0,0,0,.58);
    border-radius:2px;
}

/*--------------------------------------------------------------
2.1 - TWITTER WIDGET HEADER
--------------------------------------------------------------*/
.header {
    background: url(http://cameronbaney.com/codepen/twitter-widget/bg-header.jpg) no-repeat;
    color: #fdfdfd;
    font: 12px/17px 'HelveticaNeue-UltraLight', Helvetica, Arial, sans-serif;
    padding: 18px 28px 20px;
    border-radius:2px 2px 0 0;
}
.avatar {
    border: 4px solid #29c6f5;
    border-top-width:3px;
    float: left;
    margin-right: 16px;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,.6), 0 -1px 0 #9ce5fa;
    border-radius: 2px
}
    .avatar::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        box-shadow: 0 1px 3px rgba(0,0,0,.4) inset;
        -moz-box-shadow: 0 1px 3px rgba(0,0,0,.4) inset;
        -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.4) inset;
    }
    .avatar img {
        display: block;
        box-shadow: 0 0 2px rgba(0,0,0,.5) inset
    }
.header h2, .header p {
    float: left;
    width:288px;
}
    .header h2 {
        font-size:26px;
        line-height: 32px;
        margin: 10px 0 8px
    }

/*--------------------------------------------------------------
2.2 - TWITTER WIDGET STATS
--------------------------------------------------------------*/
.stats {
    background: rgb(243,243,243);
    background: -moz-linear-gradient(top, rgba(243,243,243,1) 0%, rgba(236,236,237,1) 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(243,243,243,1)), color-stop(100%,rgba(236,236,237,1)));
    background: -webkit-linear-gradient(top, rgba(243,243,243,1) 0%,rgba(236,236,237,1) 100%);
    background: -o-linear-gradient(top, rgba(243,243,243,1) 0%,rgba(236,236,237,1) 100%);
    background: -ms-linear-gradient(top, rgba(243,243,243,1) 0%,rgba(236,236,237,1) 100%);
    background: linear-gradient(to bottom, rgba(243,243,243,1) 0%,rgba(236,236,237,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f3f3f3', endColorstr='#ececed',GradientType=0 );
    border-top:1px solid #fff;
    border-bottom: 1px solid #d4d4d4;
}
.stat {
    color: #4c4c4c;
    float:left;
    font-size: 14px;
    line-height: 17px;
    padding: 15px 0 14px;
    text-align: center;
    text-decoration: none;
    text-shadow: 0 1px 0 #fff;
    width:148px;
}
    .stat:first-child{
        margin-left: 1px
    }
    .stat:hover {
        color: #747474
    }
.stat strong {
    display: block;
    font-size: 25px;
    line-height: 25px
}

/*--------------------------------------------------------------
2.3 - TWITTER WIDGET MENU
--------------------------------------------------------------*/
.menu {
    background: rgb(236,236,236);
    background: -moz-linear-gradient(top, rgba(236,236,236,1) 0%, rgba(233,233,233,1) 86%, rgba(232,232,232,1) 94%, rgba(228,228,228,1) 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(236,236,236,1)), color-stop(86%,rgba(233,233,233,1)), color-stop(94%,rgba(232,232,232,1)), color-stop(100%,rgba(228,228,228,1)));
    background: -webkit-linear-gradient(top, rgba(236,236,236,1) 0%,rgba(233,233,233,1) 86%,rgba(232,232,232,1) 94%,rgba(228,228,228,1) 100%);
    background: -o-linear-gradient(top, rgba(236,236,236,1) 0%,rgba(233,233,233,1) 86%,rgba(232,232,232,1) 94%,rgba(228,228,228,1) 100%);
    background: -ms-linear-gradient(top, rgba(236,236,236,1) 0%,rgba(233,233,233,1) 86%,rgba(232,232,232,1) 94%,rgba(228,228,228,1) 100%);
    background: linear-gradient(to bottom, rgba(236,236,236,1) 0%,rgba(233,233,233,1) 86%,rgba(232,232,232,1) 94%,rgba(228,228,228,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ececec', endColorstr='#e4e4e4',GradientType=0 );
    border-top:1px solid #fff;
    border-radius:0 0 2px 2px;
    padding: 11px 0;
    text-align: center
}
.menu li {
    display:inline-block;
    margin: 0 34px
}
.menu a {
    background: url(http://cameronbaney.com/codepen/twitter-widget/icons.png) no-repeat;
    display:block;
    overflow: hidden;
    text-indent: -9999px
}
    .menu .ico-compose {
        background-position:-1px -2px;
        width: 25px;
        height: 26px;
    }
    .menu .ico-mentions {
        background-position: -31px -1px;
        width: 27px;
        height: 28px;
    }
    .menu .ico-profile {
        background-position: -65px -1px;
        width: 24px;
        height: 27px;
    }
    .menu .ico-settings {
        background-position: -97px -2px;
        width: 26px;
        height: 27px;
    }
    .menu a:hover {
        opacity:.75
    }
`


class IdPage extends Component {
    state = {
        user: {},
        goals:[],
        redirectToUser: false

    }

    async componentWillMount() {
        this.getUser()
        
    }
    getUser = async () => {
        try {
            const { userId } = this.props.match.params
            console.log(userId)
            const response = await axios.get(`/api/users/${userId}`)
            
            this.setState({
                user: response.data
            })
        } catch (err) {
            console.log(err)
        }
    }
    getAllGoals = async () => {
        const res = await axios.get('/api/users/:id/goals')
        this.setState({fields: res.data})
    }
    handleDelete = async () => {
        const userId = this.props.match.params.userId
        const response = await axios.delete(`/api/users/${userId}`)
        this.setState({
            redirectToField: true
        })
        // this.props.handleDelete(this.state.field._id)
    }
    handleChange = async (event) => {
        console.log(event)
    
        //getting the input 
        const attribute = event.target.name
    
        const clonedUser = {...this.state.user }
        clonedUser[attribute] = event.target.value
    
        this.setState({ user: clonedUser})
    }
    
    updateBio = async () => {
        const { userId} = this.props.match.params
    
        console.log(userId + ' is being sent')
        const res = await axios.patch(`/api/users/${userId}`, {
            user: this.state.user
        })
        this.setState({
            user: res.data
        })
    
    }
    
    render() {
        return (
           <div>
               <Follow>
               <div class="wrapper">
  <header>
    <a href="#" class="btn btn_left">
      <span></span>
      <span></span>
      <span></span>
    </a>
    <div class="title">
      <h1>Twitter</h1>
    </div>
    <a href="#" class="btn btn_right">
      <i class="fa fa-pencil-square-o"></i>
    </a>
  </header>
  <div class="banner">
    <div class="avatar-container">
      <a href="">
        <img class="avatar" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/31787/profile/profile-512_3.jpg" alt="" />
        <i class="fa fa-pencil"></i>
      </a>
    </div>
  </div>

  <div class="profile-info">
    <ul>
      <li>
        Tweets
        <span>1,252</span>
      </li>
      <li>
        Following
        <span>371</span>
      </li>
      <li>
        Followers
        <span>1,252</span>
      </li>    
    </ul>
  </div>
  <div class="profile-tweets">
    <ul>
      <li class="title">
        Tweets
      </li>
      <li>
        <img class="avatar" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/31787/profile/profile-512_3.jpg" alt="" />
        <div class="tweet-content">        
          <h5 class="tweet-user">
            Hugo Darby-Brown
            <span class="tweet-handle">
              @DarbyBrown
            </span>
            <span class="tweet-date">
              1h
            </span>
          </h5>
          <p>
           
          </p>
        </div>
        
      </li>
      <li>
        <img class="avatar" src="https://pbs.twimg.com/profile_images/3321327798/83ed9a740af0aa27fdcb3a35b1855085_bigger.jpeg" alt="" />
        <div class="tweet-content">        
          <h5 class="tweet-user">
            Dillon de Voor   
            <span class="tweet-handle">
              ‏@CrocoDillon
            </span>
            <span class="tweet-date">
              12h
            </span>
          </h5>
          <p>
           

      
          </p>
        </div>
      </li>      
      <li>
        <img class="avatar" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/31787/profile/profile-512_3.jpg" alt="" />
        <div class="tweet-content">        
          <h5 class="tweet-user">
            Hugo Darby-Brown
            <span class="tweet-handle">
              @DarbyBrown
            </span>
            <span class="tweet-date">
              9 Feb
            </span>
          </h5>
          <p>
            Selling an iPhone with flappy bird on it £10,000, and takers?
          </p>
        </div>
      </li>
      <li>
        <img class="avatar" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/31787/profile/profile-512_3.jpg" alt="" />
        <div class="tweet-content">        
          <h5 class="tweet-user">
            Hugo Darby-Brown
            <span class="tweet-handle">
              @DarbyBrown
            </span>
            <span class="tweet-date">
              9 Feb
            </span>
          </h5>
          <p>
            <a>@thebabydino</a> <a>@CodePen</a> Thanks Ana :)
          </p>
        </div>
      </li>

      <li>
        <img class="avatar" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/31787/profile/profile-512_3.jpg" alt="" />
        <div class="tweet-content">        
          <h5 class="tweet-user">
            Hugo Darby-Brown
            <span class="tweet-handle">
              @DarbyBrown
            </span>
            <span class="tweet-date">
              9 Feb
            </span>
          </h5>
          <p>
            Sass Rainbow Box-shadow Animation  - CodePen <a>https://codepen.io/hugo/pen/mqhHw</a>  via <a>@codepen</a>
          </p>
        </div>
      </li>
    </ul>
  </div>

<div class="compose-tweet">
  <h3>Compose Tweet</h3>
  <form action="#">
    <textarea name="" id="" cols="30" rows="10"></textarea>
    <input type="submit" value="tweet" />
  </form>
</div>
</div>
    </Follow>
           </div>
        );
    }
}

export default IdPage;