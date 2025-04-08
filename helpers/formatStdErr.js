const l = console.log;

const ten = ' 10%|█         | 5332/52135 [00:10<01:25, 545.77frames/s]';

function formatStdErr (stdErrData) {
  // if a progress output
  if (stdErrData.includes('frames/s')) {
    // looks like: '█         '
    const progressBar = stdErrData.split('|')[1].split('|')[0]

    // looks like: '10%'
    let percentDone = stdErrData.split('|')[0].trim();

    // looks like: 10
    let percentDoneAsNumber = Number(stdErrData.split('%')[0].trim());

    // looks like: '00:10<01:25, 545.77frames/s]'
    let timeLeftPortion = stdErrData.split('[')[1].split('[')[0]

    // looks like: '00:10<01:25'
    const firstPortion = timeLeftPortion.split(',')[0]

    // looks like: '00:10'
    const timeElapsed = firstPortion.split('<')[0]

    // looks like: '01:25'
    const timeRemainingString = timeLeftPortion.split('<')[1].split(',')[0]

    // looks like: '545.77'
    const speed = timeLeftPortion.split('<')[1].split(',')[1].split('frames')[0].trim()

    // looks like: '545.77'
    const splitTimeRemaining = timeRemainingString.split(':')

    // looks like: '01'
    const secondsRemaining = Number(splitTimeRemaining.pop());

    // looks like: '25'
    const minutesRemaining = Number(splitTimeRemaining.pop());

    // looks like: 'NaN'
    const hoursRemaining = Number(splitTimeRemaining.pop());

    // format for lib
    return {
      progressBar,
      percentDone,
      timeElapsed,
      speed,
      percentDoneAsNumber,
      timeRemaining: {
        string: timeRemainingString,
        hoursRemaining,
        minutesRemaining,
        secondsRemaining
      },
    }
  } else {
    return false
  }
}

function formatStdOutX(stdErrData) {
  if (!stdErrData.includes('Progress:'))
  {
    return false;
  }
  // Initialize variables
  let progressBar = '';
  let percentDone = '';
  let timeElapsed = '';
  let speed = '';
  let percentDoneAsNumber = '';
  let timeRemainingString = '';
  let hoursRemaining = '';
  let minutesRemaining = '';
  let secondsRemaining = '';

  // Extract progress percentage
  const progressMatch = stdErrData.match(/Progress:\s([\d.]+)%/);
  if (progressMatch) {
    percentDone = progressMatch[1] + '%';
    percentDoneAsNumber = parseFloat(progressMatch[1]);
  }

  // Return formatted data
  return {
    progressBar,
    percentDone,
    timeElapsed,
    speed,
    percentDoneAsNumber,
    timeRemaining: {
      string: timeRemainingString,
      hoursRemaining,
      minutesRemaining,
      secondsRemaining
    },
  };
}


module.exports = {
  formatStdErr,
  formatStdOutX
}