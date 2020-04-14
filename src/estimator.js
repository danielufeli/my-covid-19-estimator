
const getWeeks = (days) => (
  days + Math.floor(days / 7) + Math.floor(days / 30)
);
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
    currentlyInfected: getWeeks(reportedCases * 10),
    infectionsByRequestedTime: getWeeks(reportedCases * 10 * 512)
  },
  severeImpact: {
    currentlyInfected: getWeeks(reportedCases * 50),
    infectionsByRequestedTime: getWeeks(reportedCases * 50 * 512)
  }
});

export default covid19ImpactEstimator;
