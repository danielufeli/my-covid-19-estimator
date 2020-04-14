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
    infectionsByRequestedTime: this.currentlyInfected * 512
  },
  severeImpact: {
    currentlyInfected: reportedCases * 50,
    infectionsByRequestedTime: this.currentlyInfected * 512
  }
});

export default covid19ImpactEstimator;
