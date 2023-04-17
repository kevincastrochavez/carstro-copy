import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import CurrencyInput from 'react-currency-input-field';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

// https://www.npmjs.com/package/react-countup

function LoanCalculator({ className, carInfo }) {
  const [creditScore, setCreditScore] = useState(6.96);
  const [termLength, setTermLength] = useState(24);
  const [cashDown, setCashDown] = useState(5000);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const principal = +carInfo.price - cashDown;
    const rate = +creditScore / 12 / 100;
    const numberOfMonths = +termLength;

    // Formula to get the loan amortization
    const monthlyCost =
      (principal * (rate * Math.pow(1 + rate, numberOfMonths))) /
      (Math.pow(1 + rate, numberOfMonths) - 1);

    setMonthlyPayment(monthlyCost);
  }, [carInfo.price, cashDown, creditScore, termLength]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const handleCreditScoreChange = (e) => {
    setCreditScore(e.target.value);
  };

  const handleTermLengthChange = (e) => {
    setTermLength(e.target.value);
  };

  const handleCashDownChange = (value) => {
    setCashDown(value);
  };

  return (
    <section className={`${className} loanCalculator_container`}>
      <div className='loanCalculator_estimator'>
        <h2>
          Payment Estimator {carInfo.year} {carInfo.brand}
        </h2>

        {windowWidth >= 720 && (
          <div className='loanCalculator_estimator-details'>
            <div className='loanCalculator_estimator-vin'>
              VIN#: {carInfo.vin}
            </div>

            <div className='loanCalculator_estimator-divider'></div>

            <div className='loanCalculator_estimator-mileage'>
              Mileage:{' '}
              {
                <CurrencyFormat
                  value={carInfo.odometer}
                  displayType={'text'}
                  thousandSeparator={true}
                />
              }
            </div>

            <div className='loanCalculator_estimator-divider'></div>

            <div className='loanCalculator_estimator-price'>
              {
                <CurrencyFormat
                  value={carInfo.price}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix='$'
                />
              }{' '}
              Estimated Price
            </div>
          </div>
        )}

        <div className='loanCalculator_calculator'>
          <div className='loanCalculator_field'>
            <label>Estimated Credit Score</label>

            <select onChange={handleCreditScoreChange}>
              <option value={6.96}>Excellent 720+</option>
              <option value={7.9}>Great 719-690</option>
              <option value={10.42}>Very Good 689-670</option>
              <option value={10.83}>Good 669-650</option>
              <option value={11.84}>Fair 649-630</option>
              <option value={14.34}>Poor 629-610</option>
              <option value={16.74}>Poor 609-580</option>
              <option value={20.61}>Extremely Poor 579-520</option>
            </select>

            <PlayArrowIcon />
          </div>

          <div className='loanCalculator_field'>
            <label>Cash Down</label>
            <CurrencyInput
              name='cashDown'
              placeholder='$5,000'
              defaultValue={5000}
              allowDecimals={false}
              allowNegativeValue={false}
              onValueChange={handleCashDownChange}
              prefix='$'
            />
          </div>

          <div className='loanCalculator_field'>
            <label>Term Length</label>

            <select onChange={handleTermLengthChange}>
              <option value={24}>24 Months</option>
              <option value={36}>36 Months</option>
              <option value={48}>48 Months</option>
              <option value={60}>60 Months</option>
              <option value={72}>72 Months</option>
            </select>

            <PlayArrowIcon />
          </div>

          <div className='loanCalculator_field'>
            <label>Estimated APR</label>
            <input type='text' value={`${creditScore}%`} disabled />
          </div>
        </div>
      </div>
      {windowWidth >= 720 ? (
        <div className='loanCalculator_resultExpanded'>
          <div className='loanCalculator_resultExpanded-img'>
            <img
              src={`https://raw.githubusercontent.com/kevincastrochavez/carstro-cars-uploader/main/public/carPictures/${carInfo?.vin}.png`}
              alt=''
            />
          </div>

          <div className='loanCalculator_resultExpanded-details'>
            <div className='loanCalculator_resultExpanded-item'>
              <span>{termLength}</span>
              <p>Months</p>
            </div>
            <div className='loanCalculator_resultExpanded-divider'></div>
            <div className='loanCalculator_resultExpanded-item'>
              <span>{creditScore} %</span>
              <p>Estimated APR</p>
            </div>
            <div className='loanCalculator_resultExpanded-divider'></div>
            <div className='loanCalculator_resultExpanded-item'>
              <span>
                {
                  <CurrencyFormat
                    value={cashDown}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix='$'
                  />
                }
              </span>
              <p>Down Payment</p>
            </div>
            <div className='loanCalculator_resultExpanded-divider'></div>
            <div className='loanCalculator_resultExpanded-item'>
              <span>
                {
                  <CountUp
                    end={monthlyPayment.toFixed(0)}
                    duration={2}
                    preserveValue={true}
                    separator=','
                    prefix='$'
                  />
                }{' '}
                <p>/month</p>
              </span>
            </div>

            <p className='loanCalculator_resultExpanded-finance'>Finance for</p>
          </div>
        </div>
      ) : (
        <div className='loanCalculator_result'>
          <h3>
            {carInfo.year} {carInfo.brand}
          </h3>

          <div className='loanCalculator_result-divider'></div>

          <p className='loanCalculator_result-price'>
            <span>
              $
              {
                <CountUp
                  end={monthlyPayment.toFixed(0)}
                  duration={2}
                  preserveValue={true}
                  separator=','
                />
              }
            </span>
            /month
          </p>

          <span>
            Payments may vary based on actual vehicle, model & options selected.
          </span>
        </div>
      )}

      <div className='loanCalculator_link'>
        <Link to='/salesRepresentatives'>Contact Dealer</Link>
      </div>

      {windowWidth >= 720 && (
        <div className='loanCalculator_terms'>
          <h4>Finance Terms</h4>

          <p>
            Payments calculated using this tool are ESTIMATES ONLY and do not
            include applicable taxes, title, licensing and fees. ACTUAL PRICES
            AND PAYMENTS MAY BE DIFFERENT. Financing payment calculations are
            based on APR and term. Available on approved credit to very well
            qualified customers through Carstro Financial Services and
            participating Toyota dealers on a new vehicle. Not all customers
            will qualify.
          </p>
        </div>
      )}
    </section>
  );
}

export default LoanCalculator;
