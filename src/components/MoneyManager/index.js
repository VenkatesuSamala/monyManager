import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    list: [],
    titleInput: '',
    amountInput: '',
    type: transactionTypeOptions[0].optionId,
    balanceAmount: 0,
    incomeAmount: 0,
    expensesAmount: 0,
  }

  onClickDeleteHistory = id => {
    const {list, balanceAmount, incomeAmount, expensesAmount} = this.state
    // console.log(list)
    // console.log(balanceAmount)
    // console.log(incomeAmount)
    // console.log(expensesAmount)

    const item = list.filter(each => each.id === id)[0]
    let balance = null
    let income = null
    let expenses = null
    console.log(item.type)

    if (item.type === transactionTypeOptions[0].displayText) {
      balance = balanceAmount - parseInt(item.amountInput)
      income = incomeAmount - parseInt(item.amountInput)
      expenses = expensesAmount
    } else {
      balance = balanceAmount + parseInt(item.amountInput)
      income = incomeAmount
      expenses = expensesAmount - parseInt(item.amountInput)
    }

    this.setState({
      list: list.filter(each => each.id !== id),
      balanceAmount: balance,
      incomeAmount: income,
      expensesAmount: expenses,
    })
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {
      titleInput,
      amountInput,
      type,
      balanceAmount,
      incomeAmount,
      expensesAmount,
    } = this.state
    if (type === transactionTypeOptions[0].optionId) {
      const newList = {
        id: v4(),
        titleInput,
        amountInput,
        type: transactionTypeOptions[0].displayText,
        balanceAmount: parseInt(amountInput) + balanceAmount,
        incomeAmount: parseInt(amountInput) + incomeAmount,
        expensesAmount,
      }
      this.setState(prev => ({
        list: [...prev.list, newList],
        titleInput: '',
        amountInput: '',
        type: transactionTypeOptions[0].optionId,
        balanceAmount: parseInt(amountInput) + balanceAmount,
        incomeAmount: parseInt(amountInput) + incomeAmount,
        expensesAmount,
      }))
    } else {
      const newList = {
        id: v4(),
        titleInput,
        amountInput,
        type: transactionTypeOptions[1].displayText,
        balanceAmount: balanceAmount - parseInt(amountInput),
        incomeAmount,
        expensesAmount: expensesAmount + parseInt(amountInput),
      }
      this.setState(prev => ({
        list: [...prev.list, newList],
        titleInput: '',
        amountInput: '',
        type: transactionTypeOptions[0].optionId,
        balanceAmount: balanceAmount - parseInt(amountInput),
        incomeAmount,
        expensesAmount: expensesAmount + parseInt(amountInput),
      }))
    }
  }

  onChangeTitle = event => this.setState({titleInput: event.target.value})

  onChangeAmount = event => this.setState({amountInput: event.target.value})

  onChangeSelect = event => this.setState({type: event.target.value})

  render() {
    const {
      type,
      list,
      titleInput,
      amountInput,
      balanceAmount,
      incomeAmount,
      expensesAmount,
    } = this.state
    return (
      <div className="bg-container">
        <div className="person-name-container">
          <h1 className="name-heading">Hi, Richard</h1>
          <p className="name-para">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>
        <ul className="money-details-ul">
          <MoneyDetails
            totalBalance={balanceAmount}
            totalIncome={incomeAmount}
            totalExpenses={expensesAmount}
          />
        </ul>
        <div className="form-container">
          <form className="form" onSubmit={this.onSubmitForm}>
            <h1 className="tran-heading">Add Transaction</h1>
            <label htmlFor="title" className="label">
              TITLE
            </label>
            <br />
            <input
              id="title"
              type="text"
              placeholder="TITLE"
              className="input"
              onChange={this.onChangeTitle}
              value={titleInput}
            />
            <br />
            <label htmlFor="amount" className="label">
              AMOUNT
            </label>
            <br />
            <input
              id="amount"
              type="text"
              placeholder="AMOUNT"
              className="input"
              onChange={this.onChangeAmount}
              value={amountInput}
            />
            <label htmlFor="type" className="label">
              TYPE
            </label>
            <br />
            <select
              id="type"
              name="type"
              className="type"
              onChange={this.onChangeSelect}
              value={type}
            >
              <option selected value={transactionTypeOptions[0].optionId}>
                {transactionTypeOptions[0].displayText}
              </option>
              <option value={transactionTypeOptions[1].optionId}>
                {transactionTypeOptions[1].displayText}
              </option>
            </select>
            <button className="add-btn" type="submit">
              Add
            </button>
          </form>
          <ul className="history-container">
            <h1 className="history-heading">HISTORY</h1>
            <li className="table">
              <div className="history-div">
                <p className="p1">Title</p>
                <p className="p2">Amount</p>
                <p className="p3">Type</p>
              </div>
              {list.map(each => (
                <TransactionItem
                  li={each}
                  key={each.id}
                  tranType={transactionTypeOptions}
                  onClickDeleteHistory={this.onClickDeleteHistory}
                />
              ))}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default MoneyManager
