webpackJsonp([3],{201:function(e,a,r){"use strict";var t=r(17),n=r.n(t),o=r(1),i=r.n(o),s=r(2),l=r.n(s),c=r(16);const p=c["a"].button`
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
`,d=({action:e,children:a,color:r,title:t})=>i.a.createElement(p,{onClick:e,color:r,title:t},a);d.displayName="Button",d.propTypes={action:l.a.func,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]).isRequired,color:l.a.string,title:l.a.string},d.defaultProps={color:"#673AB7",action:n()(null),title:"Button"},a.a=d},478:function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=r(1),n=r.n(t),o=r(2),i=r.n(o),s=r(9),l=r(44),c=r(46),p=r(28),d=r(45),u=r.n(d),m=r(16),y=r(48);const f=m["a"].input`
    width: 65px;
    text-align: right;
    font-size: 1.4rem;
`,g=m["a"].button`
    background: #fff;
    border: 1px solid ${e=>e.color};
    color: ${e=>e.color};
    padding: 10px 30px;
    outline: none;
    cursor: pointer;
    border-radius: 24px;
    padding: 5px 7px;
    margin-left: 7px;
    line-height: 0;
    &:hover {
      color: #fff;
      background-color: ${e=>e.color};
    }
`,b=({player:e,action:a})=>n.a.createElement("div",null,n.a.createElement(f,{type:"number",placeholder:0,id:e.id}),n.a.createElement(g,{color:"#7d7d7e",onClick:a},n.a.createElement("i",{className:"fa fa-plus"})));b.propTypes={player:i.a.shape({id:i.a.string,name:i.a.string,abbreviation:i.a.string,score:i.a.arrayOf(i.a.number)}).isRequired,action:i.a.func.isRequired};var h=b;const v=m["a"].ul`
    text-align: center;
    font-size: 1.45rem;
    margin-top: 0.75rem;
    margin-bottom: 0.25rem;
    padding-right: 14px;
    list-style: none;
`,x=({score:e})=>n.a.createElement(v,null,u()(e=>n.a.createElement("li",{key:`${Date.now()}-${e}`},e),e));x.propTypes={score:i.a.arrayOf(i.a.number).isRequired};var E=x;const O=m["a"].ul`
    list-style: none;
    ${Object(y.a)()}
`,w=m["a"].li`
    float: left;
    margin-right: 2rem;
    &:last-child {
        margin-right: 0;
    }
`,P=m["a"].div`
    text-align: center;
    font-size: 2.4rem;
`,q=({players:e,addScore:a})=>n.a.createElement(O,null,u()(e=>n.a.createElement(w,{key:e.id},n.a.createElement(P,null,e.abbreviation),n.a.createElement(E,{score:e.score}),n.a.createElement(h,{player:e,action:a})),e));q.displayName="Players",q.propTypes={players:i.a.arrayOf(i.a.shape({id:i.a.string,name:i.a.string,abbreviation:i.a.string,score:i.a.arrayOf(i.a.number)})).isRequired,addScore:i.a.func.isRequired};var R=q,N=r(201);const k=m["a"].div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 75px;
    padding: 5px;
`,G=({resetPlayers:e,newGame:a})=>n.a.createElement(k,null,n.a.createElement(N.a,{action:a},"New Game (Same Players)"),n.a.createElement(N.a,{action:e},"New Game (New Players)"));G.displayName="Controls",G.propTypes={resetPlayers:i.a.func.isRequired,newGame:i.a.func.isRequired};var $=G;class T extends n.a.Component{constructor(...e){var a;return a=super(...e),this.addScore=(e=>{e.preventDefault();const{id:a,value:r}=e.target.parentNode.parentNode.getElementsByTagName("input")[0],t=parseInt(r,10);this.props.actions.updateScoreAction(a,t),document.getElementById(a).value=void 0}),this.resetPlayers=(e=>{e.preventDefault(),this.props.actions.resetPlayersAction()}),this.newGame=(e=>{e.preventDefault(),this.props.actions.newGameAction()}),a}render(){return this.props.playing?n.a.createElement("div",null,n.a.createElement(R,{players:this.props.players,addScore:this.addScore}),n.a.createElement($,{resetPlayers:this.resetPlayers,newGame:this.newGame})):n.a.createElement(c.b,{to:"/"})}}T.propTypes={actions:i.a.objectOf(i.a.func).isRequired,players:i.a.arrayOf(i.a.shape({id:i.a.string,name:i.a.string,abbreviation:i.a.string,score:i.a.arrayOf(i.a.number)})).isRequired,playing:i.a.bool.isRequired};a.default=Object(l.b)(e=>({players:e.Players,playing:e.Game}),e=>({actions:Object(s.bindActionCreators)(p,e)}))(T)}});