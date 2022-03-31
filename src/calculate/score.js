function process_symptom1(symptom1) {
  let risk_score1 = 0;
  if (symptom1 < 0) {
    return 99;
  }
  if (symptom1 > 34) {
    risk_score1 = 3; //red
  } else if (symptom1 > 12) {
    risk_score1 = 2; //yellow
  } else {
    risk_score1 = 1; //green
  }
  return risk_score1;
}

function process_symptom2(symptom2) {
  let risk_score2 = 0;
  if (symptom2 < 0) {
    return 99;
  }
  if (symptom2 >= 6) {
    risk_score2 = 3; //red
  } else if (symptom2 >= 3) {
    risk_score2 = 2; //yellow
  } else {
    risk_score2 = 1; //green
  }
  return risk_score2;
}

function process_symptom3(symptom3) {
  let risk_score3 = 0;
  if (symptom3 < 0) {
    return 99;
  }
  if (symptom3 >= 10) {
    risk_score3 = 4; //high
  } else if (symptom3 >= 7) {
    risk_score3 = 3; //high-intermediate
  } else if (symptom3 >= 4) {
    risk_score3 = 2; //low-intermediate
  } else {
    risk_score3 = 1; //low
  }
  return risk_score3;
}

function final_score(score1, score2, score3) {
  if (score3 == null) {
    console.log("555");
    let total_score = score1 + score2;
    if (total_score < 0) {
      return 99;
    } else if (total_score < 3) {
      return 1; // green
    } else if (total_score < 5) {
      return 2; //yellow
    } else if (total_score < 7) {
      return 3; //red
    }
  } else {
    let total_score = score1 + score2 + score3;
    if (total_score < 0) {
      return 99;
    }
    if (total_score <= 4) {
      return 1; // green
    } else if (total_score < 6) {
      return 2; //yellow
    } else if (total_score > 6) {
      return 3; //red
    }
  }
}

console.log(final_score(process_symptom1(5), process_symptom2(0)));
