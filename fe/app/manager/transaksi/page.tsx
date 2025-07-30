"use client"
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TransactionChart = () => {
  // Contoh data transaksi
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Transactions',
        data: [65, 59, 80, 73, 40, 55, 40, 65, 59, 75, 73, 47],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const, // Changed from string to allowed value
      },
      title: {
        display: true,
        text: 'Monthly Transactions',
      },
    },
  };

  return <Line data={data} options={options} />;
};

const Page = () => {
  return (
    <div>
      <h1>Transaction Page</h1>
      <TransactionChart />
    </div>
  );
};

export default Page;