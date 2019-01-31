import React from 'react'
import PropTypes, { object } from 'prop-types'
import { Link } from '@reach/router'
// modules
import { dispatchSetUserAndTitle } from '../CreatePen/CreatePen.action'
import { userView } from '../App/App.reducer'

export default class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { fetchPens } = this.props
    fetchPens(userView().user)
    // console.log('componentWillMount :')
  }

  handleClick({ title }) {
    dispatchSetUserAndTitle(userView().user, title)
  }

  render() {
    const { pens } = this.props
    const penitems = pens.map(pen => (
      <div
        onClick={() => this.handleClick(pen)}
        key={pen.title}
        style={{ border: '2px solid black', margin: '40px' }}
      >
        <Link to="/CreatePen">
          <ul>
            <li>{pen.title}</li>
          </ul>
        </Link>
      </div>
    ))
    return (
      <div style={{ width: '350px', border: '2px solid black' }}>
        <Link to="/">Home</Link>
        <br />
        <Link to="/CreatePen">CreatePen</Link>
        <p>Dashboard</p>
        {penitems}
        {console.log('userView().user :', userView().user)}
      </div>
    )
  }
}

Dashboard.propTypes = {
  fetchPens: PropTypes.func,
  pens: PropTypes.arrayOf(object),
}

Dashboard.defaultProps = {
  fetchPens: null,
  pens: [],
}

// import React from 'react'
// import { render } from 'react-dom'
// import { Router, Link } from '@reach/router'

// const App = () => (
//   <div>
//     <h1>Tutorial!</h1>
//     <nav>
//       <Link to="/">Home</Link> <Link to="dashboard">Dashboard</Link>{' '}
//       <Link to="invoices">Invoices</Link>
//     </nav>

//     <Router>
//       <Home path="/" />
//       <Dashboard path="/dashboard" />
//       <Invoices path="invoices">
//         <InvoicesIndex path="/" />
//         <Invoice path=":invoiceId" />
//       </Invoices>
//       <NotFound default />
//     </Router>
//   </div>
// )

// const Home = () => (
//   <div>
//     <h2>Welcome</h2>
//   </div>
// )

// const Dashboard = () => (
//   <div>
//     <h2>Dashboard</h2>
//   </div>
// )

// const Invoice = props => (
//   <div>
//     <h2>Invoice {props.invoiceId}</h2>
//   </div>
// )

// const Invoices = props => (
//   <div>
//     <h2>Invoices</h2>
//     <ul>
//       <li>
//         <Link to="/invoices/123">Invoice 123</Link>
//       </li>
//       <li>
//         <Link to="/invoices/abc">Invoice ABC</Link>
//       </li>
//     </ul>

//     <form
//       onSubmit={event => {
//         event.preventDefault()
//         const id = event.target.elements[0].value
//         event.target.reset()

//         // pretend like we saved a record to the DB here
//         // and then we navigate imperatively
//         props.navigate(id)
//       }}
//     >
//       <p>
//         <label>
//           New Invoice ID: <input type="text" />
//         </label>
//         <button type="submit">create</button>
//       </p>
//     </form>

//     {props.children}
//   </div>
// )

// const InvoicesIndex = () => (
//   <div>
//     <p>Maybe put some pretty graphs here or something.</p>
//   </div>
// )

// const NotFound = () => <p>Sorry, nothing here</p>

// render(<App />, document.getElementById('root'))
