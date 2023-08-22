import React, { useState } from "react";

const FormComp = () => {
  const [formState, setFormState] = useState({
    currentSavings: '',
    yearlyContribution: '',
    expectedReturn: '',
    duration: '',
  });

  const newInvestmentHandler = (event) => {
    const newInvestment = event.target.value;
    const newInvestmentName = event.target.name;
    setFormState((prevState) => {
      return {
        ...prevState,
        [newInvestmentName]: newInvestment,
      };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setFormState({
        currentSavings: '',
        yearlyContribution: '',
        expectedReturn: '',
        duration: '',
    })
    console.log(formState);
  };

  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            name="currentSavings"
            onChange={newInvestmentHandler}
            value={formState.currentSavings}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            name="yearlyContribution"
            onChange={newInvestmentHandler}
            value={formState.yearlyContribution}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            name="expectedReturn"
            onChange={newInvestmentHandler}
            value={formState.expectedReturn}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            name="duration"
            onChange={newInvestmentHandler}
            value={formState.duration}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default FormComp;
