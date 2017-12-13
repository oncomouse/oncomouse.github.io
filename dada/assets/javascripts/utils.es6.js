document.addEventListener('DOMContentLoaded', () => {
	alertify.logPosition('bottom right');
	const random = R.curry((min, max) => {
		let range = max - min
		let random = Math.random() * range + min
		return Math.floor(random)
	})
// STORE
// ==============================================================
	const POEM = 'POEM';
	const RESET = 'RESET';
	const WORDS = 'WORDS';
	const ERROR = 'ERROR';
	const MESSAGE = 'MESSAGE';
	const initialState = {
		words: []
		, poem: ''
		, lastMessage: Date.now()
		, messages: []
	}
	// randomJoinChars :: String
	const randomJoinChars = _ => `${Math.random() > 0.5 ? '\n' : ' '}${R.join('', R.times(_ => ' ', random(0,7)))}`
	// shuffle :: [a] -> [a]
	const shuffle = R.sort(_ => Math.random() - 0.5);
	// extractWords :: String -> [String]
	const extractWords = R.compose(
		R.filter(
			R.compose(
				R.equals(0)
				, R.length
				, R.match(/^[0-9]+$/)
			)
		)
		, R.match(/(\w+)/g)
		, R.replace(/\'s/,'')
	);
	// randomNth :: [a] -> a
	const randomNth = xs => R.nth(
		random(0,xs.length)
	)(xs)
	// randomTake :: Int -> [a] -> [a]
	const randomTake = R.curry((n, xs) => R.times(_ => randomNth(xs), n))
	// poem :: Int -> [String] -> String
	const poem = (num, words) => R.compose(
		R.reduce((acc,cur) => acc + `${randomJoinChars()}${cur}`, '')
		, randomTake(num) // OR: R.take(num), shuffle
	)(words);
	
	const reducer = (state=initialState, action) => {
		switch(action.type) {
			case RESET:
				return Object.assign({},initialState);
			case WORDS:
				return Object.assign({}, state, {
					words: extractWords(action.payload.words)
				});
			case POEM:
				return Object.assign({}, state, {
					poem: poem(action.payload.numberOfWords, state.words)
				});
			case MESSAGE:
				return Object.assign({}, state, {
					messages: state.messages.concat({message: action.payload.message, error: false, timestamp: Date.now()})
				})
			case ERROR:
			return Object.assign({}, state, {
				messages: state.messages.concat({message: action.payload.message, error: true, timestamp: Date.now()})
			})
			default:
				return state;
		}
	}
	const store = Redux.createStore(reducer);

// VIEW
// ==============================================================
	const PoemForm = {
		view: function ({attrs}) {
			return m(
				'form', {
					id: 'PoemForm'
					, class: 'cutestrap-form ta-center'
					, onsubmit: attrs.handleSubmit
				}, m('label', {class: 'textfield'},
					m('input', {
						name: 'numberOfWords'
						, placeholder: '0'
						, type: 'number'
					})
					, m('span', {class: 'textfield__label'}, 'How Many Words?')
				)
				, m('button', {type: 'submit', }, 'Create a Poem')
			)
		}
	}
	const Poem = {
		formatPoem: R.compose(
			R.join('<br/>')
			, R.map(x => x.replace(/\s+/g, (match) => match.replace(/\s/g,'&nbsp;')))
			, R.split('\n')
		)
		, view: function ({attrs}) {
			return m('section', {id: 'Poem'},
				m('p', {}, m.trust(this.formatPoem(attrs.poem)))
				, m(PoemForm, attrs)
			)
		}
	}
	const WordForm = {
		view: function ({attrs}) {
			return m('form', {class: 'cutestrap-form ta-center'}, 
				m('label', {class: 'textfield'},
					m('textarea', {
						id: 'WordInput'
						, onchange: m.withAttr("value", attrs.handleChange)
					})
					, m('span', {class: 'textfield__label'}, 'Words to Cut Up')
				)
				, m('button', {onClick: attrs.handleReset, class: "btn--secondary", id: "ResetButton"}, 'Reset Word Bank')
			)
		}
	}
	const SiteContainer = {
		oninit: function() {
			// Default Props:
			this.props = {
				poem: ''
				, lastMessage: Date.now()
				, words: []
				, handleSubmit: this.handleSubmit
				, handleReset: this.handleReset
				, handleChange: this.handleChange
			}
			//this.onupdate();
		}
		, onupdate: function() {
			let nextState = store.getState();
			const nextProps = {};
			if(this.props.poem != nextState.poem) {
				nextProps.poem = nextState.poem
			}
			if(nextState.words.length === 0 && this.props.words.length !== nextState.words.length) {
				document.querySelector('#WordInput').value = '';
			}
			let newMessages = nextState.messages.filter((x) => x.timestamp > this.props.lastMessage);
			if(newMessages.length > 0) {
				// Trigger alerts:
				R.map(message => {
					message.error ?
						alertify.closeLogOnClick(true).error(message.message)
						: alertify.closeLogOnClick(true).log(message.message);
					return message;
				})(newMessages);
				nextProps.lastMessage = Date.now();
			}
			this.props = Object.assign({}, this.props, nextProps);
		}
		, handleChange: function (value) {
			store.dispatch({
				type: WORDS
				, payload: {
					words: value
				}
			})
		}
		, handleReset: function () {
			store.dispatch({
				type: RESET
			})
		}
		, handleSubmit: function (ev) {
			ev.preventDefault();
			ev.stopPropagation();
			let state = store.getState();
			let value = parseInt(ev.target.querySelector('input').value || 0);
			if(isNaN(value)) {
				store.dispatch({
					type: ERROR
					, payload: {
						message: 'You have to enter a number!'
					}
				})	
			} else if(value <= 0) {
				store.dispatch({
					type: ERROR
					, payload: {
						message: 'You have to request a number of words greater than 0!'
					}
				})
			} else if(state.words.length === 0) {
				store.dispatch({
					type: ERROR
					, payload: {
						message: 'There are no words in the word bank! Load some first!'
					}
				})
			} else {
				store.dispatch({
					type: POEM
					, payload: {
						numberOfWords: value
					}
				})
			}
		}
		, view: function() {
			return m('main', {class: 'wrapper-small'},
				m('h1', {class: 'ta-center'}, 'Dada Poem Generator')
				, m(Poem, this.props)
				, m(WordForm, this.props)
			)
		}
	}
	const render = _ => {
		m.mount(document.body, SiteContainer)
	};
	store.subscribe(render)
	render()
})