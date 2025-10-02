const getAverage = (months1, months2, months3) =>
  (months1 + months2 + months3) / 3;

const dept1AverSales1 = getAverage(35467, 29842, 38501);
const dept2AverSales1 = getAverage(70533, 50121, 33899);
const dept1AverSales2 = getAverage(50301, 21984, 19207);
const dept2AverSales2 = getAverage(72381, 41562, 29465);

const printBonus = function (dept1AverSales, dept2AverSales) {
    if(dept1AverSales > dept2AverSales) {
        const diff = dept1AverSales - dept2AverSales;
        const percent = diff / dept2AverSales * 100;
        if(percent >= 30) {
            console.log('вы получаете бонус ')
        }
    }
}


