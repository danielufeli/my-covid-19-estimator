const covid19ImpactEstimator = (data) => {
  const impact = {};
  const severeImpact = {};
  const time = (period) => {
    let m = 0;
    if (period === 'days') {
      m = data.timeToElapse % 3;
    }
    if (period === 'week') {
      m = data.timeToElapse * 7;
    }
    if (period === 'month') {
      m = data.timeToElapse * 30;
    }
    return m;
  };
  const timeE = time(data.periodType);
  impact.currentlyInfected = data.reportedCases * 10;
  impact.infectionsByRequestedTime = impact.currentlyInfected * timeE;

  severeImpact.currentlyInfected = data.reportedCases * 50;
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * timeE;
  return {
    data,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
