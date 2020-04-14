
const getWeeks = (days) => ({
  days,
  weeks: Math.floor(days / 7),
  months: Math.floor(days / 30)
});
const covid19ImpactEstimator = ({ reportedCases }) => ({
  data: {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71
    },
    periodType: 'days',
    timeToElapse: 58,
    reportedCases,
    population: 66622705,
    totalHospitalBeds: 1380614
  },
  impact: {
    currentlyInfected: reportedCases * 10,
    infectionsByRequestedTime: getWeeks(reportedCases * 10 * 512)
  },
  severeImpact: {
    currentlyInfected: reportedCases * 50,
    infectionsByRequestedTime: getWeeks(reportedCases * 50 * 512)
  }
});

export default covid19ImpactEstimator;
