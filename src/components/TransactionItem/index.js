// Write your code here
import './index.css'

const TransactionItem = props => {
  const {li, tranType, onClickDeleteHistory} = props
  const {displayText} = tranType
  const {id, titleInput, amountInput, type} = li

  const onClickDelete = () => {
    onClickDeleteHistory(id, displayText)
  }
  return (
    <li className="data-div">
      <p className="p4">{titleInput}</p>
      <p className="p5">Rs {amountInput}</p>
      <p className="p6">{type}</p>
      <button
        data-testid="delete"
        type="button"
        className="p7"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default TransactionItem
