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
    <label for="styled-checkbox-1">Completed</label>
    <input class="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1"/>
    <label for="styled-checkbox-1">In Progress</label>
    <input class="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1"/>
    <label for="styled-checkbox-1">Started</label>

                    <div class="entry">
  
  <div class="container">    
    <div class="button entypo-chat"></div>
    <div class="name">Action Item
      <span class="small">{action_item.name}</span>      
    </div>
    <div class="photo">
      <img src="https://us.123rf.com/450wm/poemsuk/poemsuk1511/poemsuk151100022/48162242-busy-business-people-working-hard-on-his-desk-in-office-with-a-lot-of-paper-work-business-conceptual.jpg" alt="" class="pic"/>
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