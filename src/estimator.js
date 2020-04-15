const covid19ImpactEstimator = (data) => {
  const impact = {};
  const severeImpact = {};
  const timeElapsed = (period) => {
    let num = 0;
    if (period === 'days') {
      num = data.timeToElapse / 3;
    }
    if (period === 'weeks') {
      num = (data.timeToElapse * 7) / 3;
    }
    if (period === 'months') {
      num = (data.timeToElapse * 30) / 3;
    }
    return num;
  };
  const timeRound = Math.trunc(timeElapsed(data.periodType));
  const numCasesCal = 2 ** timeRound;
  impact.currentlyInfected = data.reportedCases * 10;
  impact.infectionsByRequestedTime = impact.currentlyInfected * numCasesCal;

  severeImpact.currentlyInfected = data.reportedCases * 50;
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * numCasesCal;
  return {
    data,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
