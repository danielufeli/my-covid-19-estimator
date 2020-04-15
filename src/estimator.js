const covid19ImpactEstimator = (data) => {
  const impact = {};
  const severeImpact = {};
  const time = (period) => {
    let m = 0;
    if (period === 'days') {
      m = 2 ** Number(data.timeToElapse / 3);
    }
    if (period === 'weeks') {
      m = 2 ** Number((data.timeToElapse * 7) / 3);
    }
    if (period === 'months') {
      m = 2 ** Number((data.timeToElapse * 30) / 3);
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
