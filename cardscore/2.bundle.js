webpackJsonp([2],{201:function(e,t,a){"use strict";var r=a(17),n=a.n(r),o=a(1),l=a.n(o),i=a(2),s=a.n(i),d=a(16);const p=d["a"].button`
  background: #fff;
  border: 1px solid ${e=>e.color};
  color: ${e=>e.color};
  padding: 10px 30px;
  margin: 0 10px;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    color: #fff;
    background-color: ${e=>e.color};
  }
`,c=({action:e,children:t,color:a,title:r})=>l.a.createElement(p,{onClick:e,color:a,title:r},t);c.displayName="Button",c.propTypes={action:s.a.func,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]).isRequired,color:s.a.string,title:s.a.string},c.defaultProps={color:"#673AB7",action:n()(null),title:"Button"},t.a=c},264:function(e,t,a){var r=a(7),n=a(51),o=a(17),l=r(function(e,t,a){return n(o(t),e,a)});e.exports=l},477:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(264),n=a.n(r),o=a(50),l=a.n(o),i=a(1),s=a.n(i),d=a(2),p=a.n(d),c=a(44),u=a(9),m=a(46),f=a(49),h=a.n(f),y=a(16),b=a(201);const g=y["a"].div`
    max-width: 600px;
    width: 95%;
    margin: auto;
    margin-top: 2rem;
    border: 1px solid #dededf;
    border-bottom-width: 2px;
    border-radius: 2px;
    padding: 0.5rem;
    text-align: center;
`,x=y["a"].label`
    background-color: #ffffff;
    display: block;
    margin-top: -2px;
    margin-bottom: 2.4rem;
    position: relative;
    color: #7d7d7e;
    & *:focus {
        border-color: #673AB7;
        box-shadow: 0 1px 2px 0 #dededf inset;
        outline: none;
    }
`,v=y["a"].input`
    background-color: transparent;
    border: 1px solid #7d7d7e;
    border-radius: 2px;
    box-sizing: border-box;
    padding: 1.8rem .5rem .6rem;
    position: relative;
    width: 100%;
    z-index: 100;
`,E=y["a"].span`
    font-size: 1.2rem;
    position: absolute;
    left: 1px;
    line-height: 1;
    padding: .5rem;
    right: 1px;
    top: 1px;
`,P=({addPlayer:e,startGame:t,handleInput:a,players:r})=>s.a.createElement(g,null,s.a.createElement("h1",null,"Who’s Playing?"),h()(e=>s.a.createElement(x,{key:e},s.a.createElement(v,{id:e,onChange:a}),s.a.createElement(E,null,"Player Name")),r.length),s.a.createElement("p",null,s.a.createElement(b.a,{action:e,title:"Click to Add More Players",color:"#7d7d7e"},s.a.createElement("i",{className:"fa fa-plus"}))),s.a.createElement("p",null,s.a.createElement(b.a,{action:t,title:"Click to Start Game"},"Start Game")));P.displayName="PlayerForm",P.propTypes={addPlayer:p.a.func.isRequired,handleInput:p.a.func.isRequired,startGame:p.a.func.isRequired,players:p.a.arrayOf(p.a.string).isRequired};var k=P,G=a(28);class q extends s.a.Component{constructor(...e){var t;return t=super(...e),this.state={players:[null,null,null]},this.addPlayer=(e=>{e.preventDefault(),this.setState({players:l()(null,this.state.players)})}),this.handleInput=(e=>{this.setState({players:n()(parseInt(e.target.id,10),e.target.value,this.state.players)})}),this.startGame=(e=>{e.preventDefault(),this.props.actions.addPlayersAction(this.state.players)}),t}render(){return this.props.playing?s.a.createElement(m.b,{to:"/game"}):s.a.createElement("div",null,s.a.createElement(k,{addPlayer:this.addPlayer,startGame:this.startGame,handleInput:this.handleInput,players:this.state.players}))}}q.propTypes={actions:p.a.objectOf(p.a.func).isRequired,playing:p.a.bool.isRequired};t.default=Object(c.b)(e=>({playing:e.Game}),e=>({actions:Object(u.bindActionCreators)(G,e)}))(q)}});