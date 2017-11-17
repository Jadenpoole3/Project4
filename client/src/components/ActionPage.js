import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Action = styled.div`
@import url(http://weloveiconfonts.com/api/?family=entypo);

/* entypo */
[class*="entypo-"]:before {
  font-family: 'entypo', sans-serif;
}

body{
  background:
url('http://farm4.staticflickr.com/3348/3344695759_e87cc9ea96_o.jpg');
  background-size:cover;
}

.entry{
  width:410px;
  margin:50px auto;
  float:left;
  border-radius:50%;
}

.container{
  width:110px;
  height:110px;
  margin:0 0 30px 10px;
  position:relative;
  border-radius:60px;  
  background:rgba(255,255,255,.2);
  box-shadow:3px 3px 5px rgba(0,0,0,.2);  
  transition:all .5s;
  overflow:hidden;

}

.photo{
  width:90px;
  height:90px;
  margin:8px;
  border-radius:50%;
  position:absolute;
  left:0px;
  overflow:hidden;  
  border:2px solid white;
}

.pic{ max-width:100%; }

.button{  
  width:60px;
  height:60px;
  position:absolute;
  right:20px;
  top:25px;
  font-size:40px;
  text-align:center;
  line-height:60px;
  border-radius:50%;  
  color:rgba(255,255,255,.8);  
  background:green; 
  background:linear-gradient(bottom,#5ca321,#8ab24f);
  box-shadow:0 0 0 1px rgba(0,0,0,.2),
             0 0 0 5px rgba(255,255,255,.1),
             0 0 0 6px rgba(0,0,0,.2);
  transition:all .5s;
  cursor:pointer;
}
.button:hover{
  background:#5ca321;
  box-shadow:inset 0 1px 5px rgba(0,0,0,.3);
  text-shadow:0px 0px 5px gray;
}

.name{
  
  height:60%;
  width:180px;
  position:absolute;
  right:80px;
  padding:20px;
  font:25px arial;
  color:white;  
  opacity:0;
  transition:all .5s .5s;
  text-shadow:0 0 5px rgba(0,0,0,.5);
}

.small{ font-size:14px; display:block; margin-top:10px; }

.comment{
  width:370px;
  position:relative;
  padding:15px;
  font-size:16px;
  color:rgba(0,0,0,.7);
  border-radius:10px;
  background:rgba(255,255,255,.4);
  box-shadow:3px 3px 5px rgba(0,0,0,.2);
  opacity:0;
  transition:all 1s;
}
.comment:before{
  content:'';
  width:0;
  height:0;
  position:absolute;
  bottom:100%;
  left:2%;
  border-bottom:15px solid rgba(255,255,255,.4);
  border-left:50px solid transparent;
  border-right:50px solid transparent;
  border-top:15px solid transparent;
}
.container:hover{ width:400px; }
.container:hover .name,.container:hover + .comment{
  opacity:1;
}
.styled-checkbox {
  position: absolute; // take it out of document flow
  opacity: 0; // hide it

  & + label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }

  // Box.
  & + label:before {
    content: '';
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    background: white;
  }

  // Box hover
  &:hover + label:before {
    background: #f35429;
  }
  
  // Box focus
  &:focus + label:before {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
  }

  // Box checked
  &:checked + label:before {
    background: #f35429;
  }
  
  // Disabled state label.
  &:disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }

  // Disabled box.
  &:disabled + label:before {
    box-shadow: none;
    background: #ddd;
  }

  // Checkmark. Could be replaced with an image
  &:checked + label:after {
    content: '';
    position: absolute;
    left: 5px;
    top: 9px;
    background: white;
    width: 2px;
    height: 2px;
    box-shadow: 
      2px 0 0 white,
      4px 0 0 white,
      4px -2px 0 white,
      4px -4px 0 white,
      4px -6px 0 white,
      4px -8px 0 white;
    transform: rotate(45deg);
  }
}

// Demo-only styles
// --------------

html {
  background: lightgray;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
}

.unstyled {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

li {
  margin: 20px 0;
}

.centered {
  width: 300px;
  margin: auto;
}

.title {
  text-align: center;
  color: rgb(69, 113, 236);
}
`


class ActionPage extends Component {
    state = {
        action_items: []
    }
    async componentWillMount(){
        this.getAllActionItems()
    }
    getAllActionItems = async () => {
        try {
            const {userId} = this.props.match.params
            const res = await axios.get(`/api/users/${userId}/action_items`)
            console.log(res.data)
            this.setState({action_items: res.data})
        }
        catch (err){
            console.log(err)
        }
    }
    render() {
        return (
            <div>
            <h1>Actions Plan</h1>
            {this.state.action_items.map((action_item) => {
                return (
                    <Action>
                          <input class="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1"/>
    <label for="styled-checkbox-1">Checkbox</label>
                    <div class="entry">
  
  <div class="container">    
    <div class="button entypo-chat"></div>
    <div class="name">Jane Doe
      <span class="small">Wheteverist</span>      
    </div>
    <div class="photo">
      <img src="http://farm3.staticflickr.com/2612/4172547476_1bd2263c1b_q.jpg" alt="" class="pic"/>
    </div>
  </div>

  
  
  <p class="comment">{action_item.content}</p>
  
</div>
</Action>
                )
            })}
            </div>

            
        );
    }
}

export default ActionPage;