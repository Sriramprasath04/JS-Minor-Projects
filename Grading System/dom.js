function myGrading(score) {
    var gscore;
  
    switch(true) {
      case (score <= 100 && score >= 90):
        gscore = 'A';
        break;
      case (score <= 89 && score >= 80):
        gscore = 'B';
        break;
      case (score <= 79 && score >= 70):
        gscore = 'C';
        break;
      case (score <= 69 && score >= 60):
        gscore = 'D';
        break;
      case (score <= 59 && score >= 0):
        gscore = 'F';
        break;
      default:
        return 'INVALID SCORE';
  }
  
    return gscore;
  }
  
  var output = myGrading(prompt("Enter your Score: "));
  alert(output);