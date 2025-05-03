import '../styles/IncomeExpenseCards.css'
function ExpenseCard() {
    return (
      <div className="ExpenseCard">
        <h2>Expense Form</h2>
        <div className="form-container">
          <form>
            <div className="form-group">
              <label htmlFor="date">Choose a Date:</label>
              <input type="date" id="date" name="date" required />
            </div>
  
            <div className="form-group">
              <label htmlFor="amount">Enter a Value:</label>
              <input
                type="number"
                id="amount"
                name="amount"
                placeholder="e.g., 50"
                required
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="category">Choose a Category:</label>
              <select id="category" name="category" required>
                <option value="">-- Select a Category --</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </select>
            </div>
  
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default ExpenseCard;
  