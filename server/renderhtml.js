
// const React = require('react') 
// const ReactDOMServer = require('react-dom/server')
// const Provider= require('react-redux').Provider;
// const BrowserRouter = require('react-router-dom').BrowserRouter;
// const App =  require('../src/App')
// const createStore = require('redux').createStore

// const reducer = require('../src/components/reducers/reducer')

// module.exports.serverRenderer = (req, res, next) => {
//   const store = createStore(reducer)

//   const content = (
//       <Provider store={store}>
//         <BrowserRouter><App /></BrowserRouter>
//       </Provider>
//   );

//   app.use(express.urlencoded());


//   fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
//     if (err) {
//       console.error(err)
//       return res.status(500).send('An error occurred')
//     }
//     return res.send(
//       data.replace(
//         '<div id="root"></div>',
//         `<div id="root">${ReactDOMServer.renderToString(
//           <React.StrictMode>
//             <Provider store={store}>
//               <App />
//             </Provider>
//           </React.StrictMode>
//         )}</div>`
//       )
//     )
//   })
// }