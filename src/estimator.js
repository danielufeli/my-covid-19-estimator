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
  const timeCal = (period) => {
    let num = 0;
    if (period === 'days') {
      num = data.timeToElapse * 1;
    }
    if (period === 'weeks') {
      num = data.timeToElapse * 7;
    }
    if (period === 'months') {
      num = data.timeToElapse * 30;
    }
    return num;
  };
  const timeRound = Math.trunc(timeElapsed(data.periodType));
  const numCasesCal = 2 ** timeRound;
  const p = 15 / 100;
  const infPer = 5 / 100;
  const venPer = 2 / 100;
  const avail = data.totalHospitalBeds * (35 / 100);
  impact.currentlyInfected = data.reportedCases * 10;
  impact.infectionsByRequestedTime = impact.currentlyInfected * numCasesCal;
  impact.severeCasesByRequestedTime = impact.infectionsByRequestedTime * p;
  impact.hospitalBedsByRequestedTime = Math.trunc(avail - impact.severeCasesByRequestedTime);
  impact.casesForICUByRequestedTime = Math.trunc(impact.infectionsByRequestedTime * infPer);
  impact.casesForVentilatorsByRequestedTime = Math.trunc(impact.infectionsByRequestedTime * venPer);
  const i = (
    impact.infectionsByRequestedTime
    * data.region.avgDailyIncomeInUSD
    * data.region.avgDailyIncomePopulation
  );
  impact.dollarsInFlight = Math.trunc(i / timeCal(data.periodType));

  severeImpact.currentlyInfected = data.reportedCases * 50;
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * numCasesCal;
  severeImpact.severeCasesByRequestedTime = severeImpact.infectionsByRequestedTime * p;
  severeImpact.hospitalBedsByRequestedTime = Math.trunc(
    avail - severeImpact.severeCasesByRequestedTime
  );
  severeImpact.casesForICUByRequestedTime = Math.trunc(
    severeImpact.infectionsByRequestedTime * infPer
  );
  severeImpact.casesForVentilatorsByRequestedTime = Math.trunc(
    severeImpact.infectionsByRequestedTime * venPer
  );
  const s = (
    severeImpact.infectionsByRequestedTime
    * data.region.avgDailyIncomeInUSD
    * data.region.avgDailyIncomePopulation
  );
  severeImpact.dollarsInFlight = Math.trunc(s / timeCal(data.periodType));
  return {
    data,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
