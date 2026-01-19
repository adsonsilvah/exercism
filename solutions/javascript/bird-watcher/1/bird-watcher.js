
export function totalBirdCount(birdsPerDay) {
  let count = 0;
  for(let i = 0; i<birdsPerDay.length; i++){
    count += birdsPerDay[i];
  }
   return count
}

export function birdsInWeek(birdsPerDay, week) {
  const start = (week - 1) * 7; 
  const end = start + 7; 
  const weekData = birdsPerDay.slice(start, end);

  return weekData.reduce((sum, count) => sum + count, 0);
}

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1;
  }
  return birdsPerDay; 
}

