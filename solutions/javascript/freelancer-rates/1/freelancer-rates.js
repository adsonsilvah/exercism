export function dayRate(ratePerHour) {
    return ratePerHour * 8;
   }
   
   export function daysInBudget(budget, ratePerHour) {
     return Math.floor(budget/dayRate(ratePerHour));
   }
   
   export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    return Math.ceil((Math.floor(numDays/22) * 22 * dayRate(ratePerHour) * (1-discount)) 
    + (numDays%22 * dayRate(ratePerHour)));
   }
   