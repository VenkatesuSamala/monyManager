// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {totalBalance, totalIncome, totalExpenses} = props

  return (
    <li className="money-details-li">
      <div className="container balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="img"
        />
        <div>
          <p className="balance-para">Your Balance</p>
          <p data-testid="balanceAmount" className="rs-para">
            Rs {totalBalance}
          </p>
        </div>
      </div>
      <div className="container income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="img"
        />
        <div>
          <p className="balance-para">Your Income</p>
          <p data-testid="incomeAmount" className="rs-para">
            Rs {totalIncome}
          </p>
        </div>
      </div>
      <div className="container expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="img"
        />
        <div>
          <p className="balance-para">Your Expenses</p>
          <p data-testid="expensesAmount" className="rs-para">
            Rs {totalExpenses}
          </p>
        </div>
      </div>
    </li>
  )
}

export default MoneyDetails
