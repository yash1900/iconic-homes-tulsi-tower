document.addEventListener('DOMContentLoaded', () => {
  initEMICalculator();
});

/**
 * Initializes the EMI Calculator sliders and outputs
 */
function initEMICalculator() {
  const amountSlider = document.getElementById('emi-amount-slider');
  const rateSlider = document.getElementById('emi-rate-slider');
  const tenureSlider = document.getElementById('emi-tenure-slider');

  const amountValue = document.getElementById('emi-amount-value');
  const rateValue = document.getElementById('emi-rate-value');
  const tenureValue = document.getElementById('emi-tenure-value');

  const emiOutput = document.getElementById('calculated-emi');
  const principalOutput = document.getElementById('total-principal');
  const interestOutput = document.getElementById('total-interest');
  const totalPayableOutput = document.getElementById('total-payable');
  const pieChart = document.getElementById('emi-pie-chart');

  if (!amountSlider || !rateSlider || !tenureSlider) return;

  // Bind change and input events
  const updateValues = () => {
    // 1. Get values
    const principal = parseFloat(amountSlider.value) * 100000; // slider has values in Lakhs
    const annualRate = parseFloat(rateSlider.value);
    const years = parseInt(tenureSlider.value);

    // 2. Update slider headers
    amountValue.textContent = `${amountSlider.value} Lakhs`;
    rateValue.textContent = `${annualRate}%`;
    tenureValue.textContent = `${years} ${years === 1 ? 'Year' : 'Years'}`;

    // 3. Mathematical EMI calculations
    const monthlyRate = (annualRate / 12) / 100;
    const months = years * 12;

    let emi = 0;
    if (monthlyRate > 0) {
      emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
    } else {
      emi = principal / months; // interest free edgecase
    }

    const totalPayable = emi * months;
    const totalInterest = totalPayable - principal;

    // 4. Update texts in Indian Currency format
    emiOutput.textContent = formatIndianCurrency(emi);
    principalOutput.textContent = formatIndianCurrency(principal);
    interestOutput.textContent = formatIndianCurrency(totalInterest);
    totalPayableOutput.textContent = formatIndianCurrency(totalPayable);

    // 5. Update pie chart conic gradient
    const interestPercent = (totalInterest / totalPayable) * 100;
    const navyPercentage = 100 - interestPercent;
    if (pieChart) {
      pieChart.style.background = `conic-gradient(var(--color-navy) 0% ${navyPercentage}%, var(--color-gold) ${navyPercentage}% 100%)`;
    }
  };

  // Add listeners
  [amountSlider, rateSlider, tenureSlider].forEach(slider => {
    slider.addEventListener('input', updateValues);
    slider.addEventListener('change', updateValues);
  });

  // Run initial calculations
  updateValues();
}

/**
 * Formats a number to Indian Standard currency styling
 * e.g., 5000000 -> ₹50,00,000
 */
function formatIndianCurrency(num) {
  num = Math.round(num);
  let str = num.toString();
  let lastThree = str.substring(str.length - 3);
  let otherNumbers = str.substring(0, str.length - 3);
  if (otherNumbers !== '') {
    lastThree = ',' + lastThree;
  }
  let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  return '₹' + res;
}
