import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from 'chart.js';
import { Line, Doughnut, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

export const CampaignTrendsChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Email Opens (%)',
        data: [73, 68, 75, 82, 79, 85, 88, 92],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Link Clicks (%)',
        data: [45, 42, 38, 35, 32, 28, 25, 22],
        borderColor: 'rgb(245, 158, 11)',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Credentials Entered (%)',
        data: [23, 25, 20, 18, 15, 12, 10, 8],
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Campaign Performance Trends',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function(value: any) {
            return value + '%';
          }
        }
      },
    },
  };

  return <Line data={data} options={options} />;
};

export const DepartmentRiskChart = () => {
  const data = {
    labels: ['Marketing', 'Sales', 'HR', 'Finance', 'IT'],
    datasets: [
      {
        label: 'Risk Score',
        data: [68, 52, 38, 25, 18],
        backgroundColor: [
          'rgba(239, 68, 68, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(139, 92, 246, 0.8)',
        ],
        borderColor: [
          'rgb(239, 68, 68)',
          'rgb(245, 158, 11)',
          'rgb(59, 130, 246)',
          'rgb(16, 185, 129)',
          'rgb(139, 92, 246)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Department Risk Distribution',
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export const AttackVectorChart = () => {
  const data = {
    labels: ['Email Opening', 'Link Clicking', 'Credential Entry', 'File Download', 'Form Submission'],
    datasets: [
      {
        label: 'Success Rate (%)',
        data: [73.2, 31.5, 18.7, 12.3, 8.9],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(245, 158, 11)',
          'rgb(239, 68, 68)',
          'rgb(139, 92, 246)',
          'rgb(16, 185, 129)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Attack Vector Effectiveness',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function(value: any) {
            return value + '%';
          }
        }
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export const RealTimeChart = ({ data }: { data: any }) => {
  const chartData = {
    labels: data.labels || ['00:00', '00:15', '00:30', '00:45', '01:00'],
    datasets: [
      {
        label: 'Opens',
        data: data.opens || [0, 5, 12, 25, 45],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Clicks',
        data: data.clicks || [0, 2, 5, 8, 15],
        borderColor: 'rgb(245, 158, 11)',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Submissions',
        data: data.submissions || [0, 1, 2, 3, 6],
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: 0 // Disable animation for real-time updates
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Real-Time Campaign Activity',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};
