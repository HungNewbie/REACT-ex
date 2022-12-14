(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    "use strict";
    
    /**
     * Uses the react-transform babel plugin
     * to rewrite modules so that all react components are
     * exported.
     *
     * This allows us to access those components and test them.
     *
     * ex:
     *
     * // component.js
     *
     * var MyComponent = React.createClass({});
     *
     * // component-test.js
     *
     * var components = require('../component.js');
     *
     * console.log(components.__ReactComponents.MyComponent);
     *
     */
    
    module.exports = function createExport(_ref) {
      var locals = _ref.locals;
    
    
      return function (ReactClass, componentId) {
    
        if (!locals[0].exports) {
          locals[0].exports = {};
        }
    
        if (!locals[0].exports.__ReactComponents) {
          locals[0].exports.__ReactComponents = [];
        }
    
        locals[0].exports.__ReactComponents.push(ReactClass);
    
        return ReactClass;
      };
    };
    
    },{}],2:[function(require,module,exports){
    'use strict';
    
    var _react2 = require('react');
    
    var _react3 = _interopRequireDefault(_react2);
    
    var _reactTransformComponentExports = require('/home/ccuser/.babelscripts/react-transform-component-exports');
    
    var _reactTransformComponentExports2 = _interopRequireDefault(_reactTransformComponentExports);
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _reactDom = require('react-dom');
    
    var _reactDom2 = _interopRequireDefault(_reactDom);
    
    var _Profile = require('./Profile');
    
    var _Directory = require('./Directory');
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    var _components = {
      App: {
        displayName: 'App'
      }
    };
    
    var _homeCcuserBabelscriptsReactTransformComponentExports2 = (0, _reactTransformComponentExports2.default)({
      filename: '/home/ccuser/workspace/react-lifecycle-methods-social-network-for-pets-workspace/App.js',
      components: _components,
      locals: [module],
      imports: [_react3.default]
    });
    
    function _wrapComponent(id) {
      return function (Component) {
        return _homeCcuserBabelscriptsReactTransformComponentExports2(Component, id);
      };
    }
    
    var App = _wrapComponent('App')(function (_React$Component) {
      _inherits(App, _React$Component);
    
      function App(props) {
        _classCallCheck(this, App);
    
        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    
        _this.state = {
          currentUsername: null
        };
        _this.handleChoose = _this.handleChoose.bind(_this);
        _this.handleReturnToDirectoryClick = _this.handleReturnToDirectoryClick.bind(_this);
        return _this;
      }
    
      _createClass(App, [{
        key: 'handleChoose',
        value: function handleChoose(newUsername) {
          this.setState({ currentUsername: newUsername });
        }
      }, {
        key: 'handleReturnToDirectoryClick',
        value: function handleReturnToDirectoryClick() {
          this.setState({ currentUsername: null });
        }
      }, {
        key: 'render',
        value: function render() {
          var body = void 0;
          if (this.state.currentUsername) {
            body = _react3.default.createElement(_Profile.Profile, {
              username: this.state.currentUsername,
              onChoose: this.handleChoose
            });
          } else {
            body = _react3.default.createElement(_Directory.Directory, { onChoose: this.handleChoose });
          }
    
          return _react3.default.createElement(
            'div',
            { className: 'App' },
            _react3.default.createElement(
              'header',
              null,
              _react3.default.createElement(
                'h1',
                null,
                'PetBook'
              ),
              _react3.default.createElement(
                'nav',
                null,
                this.state.currentUsername && _react3.default.createElement(
                  'button',
                  { onClick: this.handleReturnToDirectoryClick },
                  'Return to directory'
                )
              )
            ),
            _react3.default.createElement(
              'main',
              null,
              body
            )
          );
        }
      }]);
    
      return App;
    }(_react3.default.Component));
    
    _reactDom2.default.render(_react3.default.createElement(App, null), document.getElementById('app'));
    
    },{"./Directory":3,"./Profile":4,"/home/ccuser/.babelscripts/react-transform-component-exports":1,"react":undefined,"react-dom":undefined}],3:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Directory = Directory;
    
    var _react = require('react');
    
    var _react2 = _interopRequireDefault(_react);
    
    var _Userlist = require('./Userlist');
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function Directory(props) {
      return _react2.default.createElement(
        'div',
        { className: 'Directory' },
        _react2.default.createElement(
          'h2',
          null,
          'User directory'
        ),
        _react2.default.createElement(_Userlist.Userlist, {
          usernames: ['dog', 'cat', 'komodo', 'guineaPig', 'parrot', 'goldFish'],
          onChoose: props.onChoose
        })
      );
    }
    
    },{"./Userlist":5,"react":undefined}],4:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Profile = undefined;
    
    var _react2 = require('react');
    
    var _react3 = _interopRequireDefault(_react2);
    
    var _reactTransformComponentExports = require('/home/ccuser/.babelscripts/react-transform-component-exports');
    
    var _reactTransformComponentExports2 = _interopRequireDefault(_reactTransformComponentExports);
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _dataFetcher = require('./dataFetcher');
    
    var _Userlist = require('./Userlist');
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    var _components = {
      Profile: {
        displayName: 'Profile'
      }
    };
    
    var _homeCcuserBabelscriptsReactTransformComponentExports2 = (0, _reactTransformComponentExports2.default)({
      filename: '/home/ccuser/workspace/react-lifecycle-methods-social-network-for-pets-workspace/Profile.js',
      components: _components,
      locals: [module],
      imports: [_react3.default]
    });
    
    function _wrapComponent(id) {
      return function (Component) {
        return _homeCcuserBabelscriptsReactTransformComponentExports2(Component, id);
      };
    }
    
    var Profile = exports.Profile = _wrapComponent('Profile')(function (_React$Component) {
      _inherits(Profile, _React$Component);
    
      function Profile(props) {
        _classCallCheck(this, Profile);
    
        var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));
    
        _this.state = { userData: null };
        return _this;
      }
    
      _createClass(Profile, [{
        key: 'loadUserData',
        value: function loadUserData() {
          var _this2 = this;
    
          this.setState({ userData: null });
          this.fetchID = (0, _dataFetcher.fetchUserData)(this.props.username, function (userData) {
            _this2.setState({ userData: userData });
          });
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.loadUserData();
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          (0, _dataFetcher.cancelFetch)(this.fetchID);
        }
      }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
          if (this.props.username !== prevProps.username) {
            (0, _dataFetcher.cancelFetch)(this.fetchID);
            this.loadUserData();
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var isLoading = this.state.userData === null;
          var className = 'Profile';
          if (isLoading) {
            className += ' loading';
          }
    
          var name = void 0;
          if (isLoading) {
            name = 'Still loading, please wait!';
          } else {
            name = this.state.userData.name;
          }
    
          var bio = void 0;
          if (isLoading) {
            bio = 'Still loading, please wait!';
          } else {
            bio = this.state.userData.bio;
          }
    
          var friends = void 0;
          if (isLoading) {
            friends = [];
          } else {
            friends = this.state.userData.friends;
          }
          return _react3.default.createElement(
            'div',
            { className: className },
            _react3.default.createElement(
              'div',
              { className: 'profile-picture' },
              !isLoading && _react3.default.createElement('img', { src: this.state.userData.profilePictureUrl, alt: '' })
            ),
            _react3.default.createElement(
              'div',
              { className: 'profile-body' },
              _react3.default.createElement(
                'h2',
                null,
                name
              ),
              _react3.default.createElement(
                'h3',
                null,
                '@',
                this.props.username
              ),
              _react3.default.createElement(
                'p',
                null,
                bio
              ),
              _react3.default.createElement(
                'h3',
                null,
                'My friends'
              ),
              _react3.default.createElement(_Userlist.Userlist, { usernames: friends, onChoose: this.props.onChoose })
            )
          );
        }
      }]);
    
      return Profile;
    }(_react3.default.Component));
    
    },{"./Userlist":5,"./dataFetcher":6,"/home/ccuser/.babelscripts/react-transform-component-exports":1,"react":undefined}],5:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Userlist = undefined;
    
    var _react2 = require('react');
    
    var _react3 = _interopRequireDefault(_react2);
    
    var _reactTransformComponentExports = require('/home/ccuser/.babelscripts/react-transform-component-exports');
    
    var _reactTransformComponentExports2 = _interopRequireDefault(_reactTransformComponentExports);
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    var _components = {
      Userlist: {
        displayName: 'Userlist'
      }
    };
    
    var _homeCcuserBabelscriptsReactTransformComponentExports2 = (0, _reactTransformComponentExports2.default)({
      filename: '/home/ccuser/workspace/react-lifecycle-methods-social-network-for-pets-workspace/Userlist.js',
      components: _components,
      locals: [module],
      imports: [_react3.default]
    });
    
    function _wrapComponent(id) {
      return function (Component) {
        return _homeCcuserBabelscriptsReactTransformComponentExports2(Component, id);
      };
    }
    
    var Userlist = exports.Userlist = _wrapComponent('Userlist')(function (_React$Component) {
      _inherits(Userlist, _React$Component);
    
      function Userlist(props) {
        _classCallCheck(this, Userlist);
    
        var _this = _possibleConstructorReturn(this, (Userlist.__proto__ || Object.getPrototypeOf(Userlist)).call(this, props));
    
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
      }
    
      _createClass(Userlist, [{
        key: 'handleClick',
        value: function handleClick(event) {
          this.props.onChoose(event.target.dataset.username);
        }
      }, {
        key: 'render',
        value: function render() {
          var _this2 = this;
    
          return _react3.default.createElement(
            'ul',
            null,
            this.props.usernames.map(function (username) {
              return _react3.default.createElement(
                'li',
                { key: username },
                _react3.default.createElement(
                  'button',
                  { 'data-username': username, onClick: _this2.handleClick },
                  '@',
                  username
                )
              );
            })
          );
        }
      }]);
    
      return Userlist;
    }(_react3.default.Component));
    
    },{"/home/ccuser/.babelscripts/react-transform-component-exports":1,"react":undefined}],6:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
    
    exports.fetchUserData = fetchUserData;
    exports.cancelFetch = cancelFetch;
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    // This module exports fake data fetching functionality.
    // In a real app, this would grab data from the internet, but
    // this module just waits a little bit before responding.
    //
    // You don't need to look at this, but you can if you want!
    
    var FAKE_USER_DATA = {
      cat: {
        name: 'Kitty Cat',
        bio: "Hi, I am a ginger cat (meow!), am I look cute? In my eye, hooman are just slaves to me, and I am their master. They often treat me like a king too. My favourite activity? Of course it is chasing the mouse (and the parrot too, he is such an annoying bird)!",
        profilePictureUrl: 'https://content.codecademy.com/courses/React/react_lifecycle_cat_profile_picture.jpg',
        friends: ['komodo']
      },
      dog: {
        name: 'Mia the cutie',
        bio: "Hi everyone (woof woof!), I am a small, cutie dog. My family love me, especially Claire. She often walk me with my neighbor dogs, and they are all friendly to me. The best thing is, I can choose to sleep with whoever I want everynight. I also have a lot of friends in my house too, they are friendly and fun to play with. Everyone treat me like a wee princess!",
        profilePictureUrl: 'https://scontent-syd2-1.xx.fbcdn.net/v/t1.6435-9/83223544_3118410451522021_4967966642395938816_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=19026a&_nc_ohc=HcP-SbjznOIAX-EYejn&_nc_ht=scontent-syd2-1.xx&oh=00_AfAdxtICzhHIVMOul6BIDBIdlrVD2y31XBCa3j-wMkJ7Eg&oe=63BFD7C7',
        friends: ['komodo', 'guineaPig', 'parrot']
      },
      komodo: {
        name: 'Lizard Lady',
        bio: "I'm a Komodo dragon. You'll love me, that's for sure. Love playing with Mia and Kitty.",
        profilePictureUrl: 'https://content.codecademy.com/courses/React/react_lifecycle_komodo_profile_picture.jpg',
        friends: ['cat', 'dog']
      },
      guineaPig: {
        name: 'George the Guinea Pig',
        bio: "I am a small mouse. I hate the cat, he always chase me around the house, but I can play with Mia. She is so cute and friendly!",
        profilePictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/George_the_amazing_guinea_pig.jpg/1200px-George_the_amazing_guinea_pig.jpg',
        friends: ['dog']
      },
      goldFish: {
        name: 'Goldie the pretty girl',
        bio: "Hi everyone, I am just an original gold fish. All I do every day is swimming around watching Kitty chasing the mouse, or listen to Iago talking non-stop to my owner. The dog doesn't seem to bother me, may be because she is busy playing with my owner instead of looking at me. So I am kinda feel lonely too, if only my owner purchase more fishes then I would have more friends to play with me.",
        profilePictureUrl: 'https://cf.ltkcdn.net/aquariums/fish-names/images/orig/324592-1600x1066-goldfish-swimming-in-fish-tank.jpg',
        friends: ['parrot']
      },
      parrot: {
        name: 'Iago the Evil Parrot',
        bio: "In the past, I followed my master Jafar, who tried to become a Sultan and marry Princess Jasmine. However, now that Jafar is gone, somehow I end up become a pet in this family. Unlike other parrots, I can understand human language, and often micmic my new master voice as well. Would love to become friend with Mia, she is such a cutie!",
        profilePictureUrl: 'https://upload.wikimedia.org/wikipedia/en/d/da/IagoDisneyCharacter.png',
        friends: ['dog', 'goldFish']
      }
    };
    
    var timeoutByFetchId = new Map();
    
    var Fetch = function Fetch() {
      _classCallCheck(this, Fetch);
    
      Object.defineProperty(this, '_id', {
        value: Date.now() + Math.random().toString().substr(2)
      });
    };
    
    function fetchUserData(username, callback) {
      if (!FAKE_USER_DATA.hasOwnProperty(username)) {
        throw new Error('Invalid username. Make sure it is "cat", "dog", or "komodo".');
      }
    
      var fetch = new Fetch();
    
      var delay = Math.floor(Math.random() * 1000) + 500;
      var timeout = setTimeout(function () {
        timeoutByFetchId.delete(fetch._id);
        callback(FAKE_USER_DATA[username]);
      }, delay);
    
      timeoutByFetchId.set(fetch._id, timeout);
    
      return fetch;
    }
    
    function cancelFetch(fetch) {
      if (!fetch || (typeof fetch === 'undefined' ? 'undefined' : _typeof(fetch)) !== 'object') {
        return;
      }
      var timeout = timeoutByFetchId.get(fetch._id);
      clearTimeout(timeout);
      timeoutByFetchId.delete(fetch._id);
    }
    
    },{}]},{},[2]);
    