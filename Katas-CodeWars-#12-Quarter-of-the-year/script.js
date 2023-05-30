
/*Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint:

1 <= month <= 12


Methode: if statement. Quater 1= 1-3, Quater 2= 4-6, Quarter 3= 7-9, Quarter 4= 10-12.
*/

const quarterOf = (month) => {

    if (month <= 3) {
        return 1;
    } if (month >= 4 && month <= 6) {
        return 2;
    } if (month >= 7 && month <= 9) {
        return 3;
    } if (month >= 10 && month <= 12) {
            return 4;
        }
    }
    
    console.log(quarterOf(6))


/* Beste CodeWars Lösung meiner Meinung nach:


    const quarterOf = (month) => {
        return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
        
      }

      */