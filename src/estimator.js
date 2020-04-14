const covid19ImpactEstimator = (data) => {
  const impact = {};
  const severeImpact = {};
  const days = 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2;
  impact.currentlyInfected = data.reportedCases * 10;
  impact.infectionsByRequestedTime = impact.currentlyInfected * days;

  severeImpact.currentlyInfected = data.reportedCases * 50;
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * days;
  return {
    data,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
