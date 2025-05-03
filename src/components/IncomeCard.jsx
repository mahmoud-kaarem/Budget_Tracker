import '../styles/IncomeExpenseCards.css'
function IncomeCard() {
    return (
      <div className="IncomeCard">
        <h2>Income Form</h2>
        <div className="form-container">
          <form>
            <div className="form-group">
              <label htmlFor="date">Choose a Date:</label>
              <input type="date" id="date" name="date" required />
            </div>
  
            <div className="form-group">
              <label htmlFor="amount">Enter a Value:</label>
              <input type="number" id="amount" name="amount" placeholder="e.g., 100" required />
            </div>
  
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default IncomeCard;
  