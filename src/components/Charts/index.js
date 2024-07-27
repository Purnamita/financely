// // import React from 'react';
// // import { Line } from '@ant-design/charts';

// // function ChartComponent() {
// // //     import React from 'react';
// // // import { Line } from '@ant-design/charts';

// // const Page: React.FC = () => {
// //   const data = [
// //     { year: '1991', value: 3 },
// //     { year: '1992', value: 4 },
// //     { year: '1993', value: 3.5 },
// //     { year: '1994', value: 5 },
// //     { year: '1995', value: 4.9 },
// //     { year: '1996', value: 6 },
// //     { year: '1997', value: 7 },
// //     { year: '1998', value: 9 },
// //     { year: '1999', value: 13 },
// //   ];

// //   const config = {
// //     data,
// //     width : 800,
// //     height : 400,
// //     autoFit : false,
// //     xField: 'year',
// //     yField: 'value',
// //     point:{
// //       size:5,
// //       shape: 'diamond',
// //     },
// //     label: {
// //       style:{
// //         fill:'#aaa',
// //       },
// //     },
// //   };
// //   let chart;

// //   // const downloadImage = () => {
// //   //   chart ?. downloadImage();
// //   // };

// //   // const toDataURL = () => {
// //   //   console.log(chart?.toDataURL());
// //   // };


// //   return (
// //     <div>
// //     <Line {...config} onReady={(chartInstance) => {chart = chartInstance}}/>
// //     </div>
// //   )
// // }
// // }
// // export default ChartComponent;


// // import React from 'react';
// // import { Line } from '@ant-design/charts';

// // function ChartComponent(sortedTransactions)
// // {
// //   const data = sortedTransactions.map((item) => {
// //     return {date:item.date, amount: item.amount};
// //   });

// //   const config = {
// //     data,
// //     width: 800,
// //     height: 400,
// //     autoFit: false,
// //     xField: 'date',
// //     yField: 'amount',
// //     point: {
// //       size: 5,
// //       shape: 'diamond',
// //     },
// //     label: {
// //       style: {
// //         fill: '#aaa',
// //       },
// //     },
// //   };

// //   let chart;
// //   return (
// //     <div>
// //       <Line {...config} onReady={(chartInstance) => { chart = chartInstance }} />
// //     </div>
// //   );
// // };

// // export default ChartComponent;

// // import React from 'react';
// // import { Line, Pie } from '@ant-design/charts';
// // import { Transaction } from 'firebase/firestore';

// // // Define the props type
// // interface ChartComponentProps {
// //   sortedTransactions: Array<{ date: string; amount: number }>;
// // }

// // // Define the ChartComponent as a functional component with props
// // const ChartComponent: React.FC<ChartComponentProps> = ({ sortedTransactions }) => {
// //   // Check if sortedTransactions is an array before mapping
// //   const data = Array.isArray(sortedTransactions)
// //     ? sortedTransactions.map((item) => ({ date: item.date, amount: item.amount }))
// //     : [];
 
// //     const spendingData = sortedTransactions.filter(
// //       (transaction) => {if( transaction.type=="expense")
// //         {
// //           return {tag : transaction.tag , amount: transaction.amount}
// //         }}
// //       );
// //   const config = {
// //     data: data,
// //     width: 500,
// //     autoFit: true,
// //     xField: "date",
// //     yField: "amount",
    
// //   };
// //   const spendingConfig {

// //    data: Object.values(spendingData),
// //    width: 800,
// //    angleField : "amount",
// //    colorField : "tag",
   

// //     // width: 800,
// //     // height: 400,
// //     // autoFit: true,
// //     // xField: "date",
// //     // yField: "amount",
// //   };

// import React from "react";
// import { Line, Pie } from "@ant-design/charts";

// function ChartComponent({sortedTranasctions})
// {
//   const data = sortedTranasctions.map ((item) => {
//     return {data:item.date , amount : item.amount};
//   });

//   let spendingData = sortedTranasctions.filter((transaction) => {
//     if(transaction.type == "expense") 
//     {
//       return {tag : transaction.tag , amount: transaction.amount};
//     }
//   });

//   let finalSpendings = spendingData.reduce((acc,obj) => {
//     let key = obj.tag;
//     if (!acc[key]){
//       acc[key] = {tag:obj.tag , amount : obj.amount};
//     }
//     else{
//       acc[key].amount += obj.amount;
//     }
//     return acc;
//   }, {}
// );

// const config = {
//   data: data,
//   width: 500,
//   autoFit : true,
//   xField:"date",
//   yField : "amount",
// };

// const spendingConfig = {
//   data: Object.values(spendingData),
//      width: 800,
//      angleField : "amount",
//      colorField : "tag",
// };

//  let chart;
// let pieChart;
//   return (
//     <div className="charts-wrapper">
      
//       <div>
//         <h2 style={{marginTop: 0}}>Your Transactions</h2>
//       <Line 
//       {...config} 
//       onReady={(chartInstance) => { chart = chartInstance }} />
//       </div>
//       <div>
//         <h2>Your Spendings</h2>
//         <Pie  {...spendingConfig} 
//       onReady={(chartInstance) => { pieChart = chartInstance }}/>
//       </div>
//     </div>
//   );
// };

// export default ChartComponent;

import React from "react";
import { Line, Pie } from "@ant-design/charts";

function ChartComponent({ sortedTransactions = [] }) {
  const data = sortedTransactions.map((item) => {
    return { date: item.date, amount: item.amount };
  });

  let spendingData = sortedTransactions.filter((transaction) => {
    return transaction.type === "expense";
  }).map((transaction) => {
    return { tag: transaction.tag, amount: transaction.amount };
  });

  let finalSpendings = spendingData.reduce((acc, obj) => {
    let key = obj.tag;
    if (!acc[key]) {
      acc[key] = { tag: obj.tag, amount: obj.amount };
    } else {
      acc[key].amount += obj.amount;
    }
    return acc;
  }, {});

  

  const config = {
    data: data,
    width: 800,
    autoFit: true,
    xField: "date",
    yField: "amount",
  };

  const spendingConfig = {
    data: Object.values(finalSpendings),
    width: 800,
    angleField: "amount",
    colorField: "tag",
  };

  let chart;
  let pieChart;

  return (
    <div className="charts-wrapper">
      <div>
        <h2 style={{ marginTop: 0 }}>Your Transactions</h2>
        <Line {...config} onReady={(chartInstance) => { chart = chartInstance }} />
      </div>
      <div>
        <h2>Your Spendings</h2>
        <Pie {...spendingConfig} onReady={(chartInstance) => { pieChart = chartInstance }} />
      </div>
    </div>
  );
}

export default ChartComponent;


