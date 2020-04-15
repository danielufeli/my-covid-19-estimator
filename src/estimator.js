const covid19ImpactEstimator = (data) => {
  const impact = {};
  const severeImpact = {};
  const time = (period) => {
    let m = 0;
    if (period === 'days') {
      m = Math.floor(data.timeToElapse / 3);
    }
    if (period === 'weeks') {
      m = Math.floor((data.timeToElapse * 7) / 3);
    }
    if (period === 'months') {
      m = Math.floor((data.timeToElapse * 30) / 3);
    }
    return m;
  };
  const timeE = Math.trunc(time(data.periodType));
  const rTime = 2 ** timeE;
  impact.currentlyInfected = data.reportedCases * 10;
  impact.infectionsByRequestedTime = impact.currentlyInfected * rTime;

  severeImpact.currentlyInfected = data.reportedCases * 50;
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * rTime;
  return {
    data,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
