'use strict';document.addEventListener('DOMContentLoaded',function(){alertify.logPosition('bottom right');var a=R.curry(function(a,b){var c=Math.random()*(b-a)+a;return Math.floor(c)}),b='POEM',c='RESET',d='WORDS',e='ERROR',f={words:[],poem:'',lastMessage:Date.now(),messages:[]},g=function(){return''+(0.5<Math.random()?'\n':' ')+R.join('',R.times(function(){return' '},a(0,7)))},h=R.sort(function(){return Math.random()-0.5}),i=R.compose(R.filter(R.compose(R.equals(0),R.length,R.match(/^[0-9]+$/))),R.match(/(\w+)/g),R.replace(/\'s/,'')),j=function(b){return R.nth(a(0,b.length))(b)},k=R.curry(function(a,b){return R.times(function(){return j(b)},a)}),l=function(a,b){return R.compose(R.reduce(function(a,b){return a+(''+g()+b)},''),k(a))(b)},n=Redux.createStore(function reducer(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:f,g=arguments[1];switch(g.type){case c:return Object.assign({},f);case d:return Object.assign({},a,{words:i(g.payload.words)});case b:return Object.assign({},a,{poem:l(g.payload.numberOfWords,a.words)});case'MESSAGE':return Object.assign({},a,{messages:a.messages.concat({message:g.payload.message,error:!1,timestamp:Date.now()})});case e:return Object.assign({},a,{messages:a.messages.concat({message:g.payload.message,error:!0,timestamp:Date.now()})});default:return a;}}),o={view:function view(a){var b=a.attrs;return m('form',{id:'PoemForm',class:'cutestrap-form ta-center',onsubmit:b.handleSubmit},m('label',{class:'textfield'},m('input',{name:'numberOfWords',placeholder:'0',type:'number'}),m('span',{class:'textfield__label'},'How Many Words?')),m('button',{type:'submit'},'Create a Poem'))}},p={formatPoem:R.compose(R.join('<br/>'),R.map(function(a){return a.replace(/\s+/g,function(a){return a.replace(/\s/g,'&nbsp;')})}),R.split('\n')),view:function view(a){var b=a.attrs;return m('section',{id:'Poem'},m('p',{},m.trust(this.formatPoem(b.poem))),m(o,b))}},q={view:function view(a){var b=a.attrs;return m('form',{class:'cutestrap-form ta-center'},m('label',{class:'textfield'},m('textarea',{id:'WordInput',onchange:m.withAttr('value',b.handleChange)}),m('span',{class:'textfield__label'},'Words to Cut Up')),m('button',{onClick:b.handleReset,class:'btn--secondary',id:'ResetButton'},'Reset Word Bank'))}},r={oninit:function oninit(){this.props={poem:'',lastMessage:Date.now(),words:[],handleSubmit:this.handleSubmit,handleReset:this.handleReset,handleChange:this.handleChange}},onupdate:function onupdate(){var a=this,b=n.getState(),c={};this.props.poem!=b.poem&&(c.poem=b.poem),0===b.words.length&&this.props.words.length!==b.words.length&&(document.querySelector('#WordInput').value='');var d=b.messages.filter(function(b){return b.timestamp>a.props.lastMessage});0<d.length&&(R.map(function(a){return a.error?alertify.closeLogOnClick(!0).error(a.message):alertify.closeLogOnClick(!0).log(a.message),a})(d),c.lastMessage=Date.now()),this.props=Object.assign({},this.props,c)},handleChange:function handleChange(a){n.dispatch({type:d,payload:{words:a}})},handleReset:function handleReset(){n.dispatch({type:c})},handleSubmit:function handleSubmit(a){a.preventDefault(),a.stopPropagation();var c=n.getState(),d=parseInt(a.target.querySelector('input').value||0);isNaN(d)?n.dispatch({type:e,payload:{message:'You have to enter a number!'}}):0>=d?n.dispatch({type:e,payload:{message:'You have to request a number of words greater than 0!'}}):0===c.words.length?n.dispatch({type:e,payload:{message:'There are no words in the word bank! Load some first!'}}):n.dispatch({type:b,payload:{numberOfWords:d}})},view:function view(){return m('main',{class:'wrapper-small'},m('h1',{class:'ta-center'},'Dada Poem Generator'),m(p,this.props),m(q,this.props))}},s=function(){m.mount(document.body,r)};n.subscribe(s),s()});
