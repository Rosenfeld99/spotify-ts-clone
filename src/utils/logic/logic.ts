export const formatMilliseconds = (totalMilliseconds : number)=> {
    const totalSeconds = Math.floor(totalMilliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
  
    // Pad seconds with a leading zero if less than 10
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  
    return `${minutes}:${formattedSeconds}`;
  }
  
  const totalMilliseconds = 480000;
  console.log(formatMilliseconds(totalMilliseconds)); // Output: 8:00
  