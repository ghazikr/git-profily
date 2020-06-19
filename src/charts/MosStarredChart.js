import React from "react";
import ReactApexChart from "react-apexcharts";

export default function MostStarredChart({ data }) {
  const state = {
    options: {
      chart: {
        id: "most-starred-chart",
        toolbar: {
          show: false,
          tools: {
            download: false,
          },
        },
      },
      xaxis: {
        categories: data.map((elem) => elem.name),
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      legend: {
        show: false,
      },
    },
    series: [
      {
        data: data.map((elem) => elem.value),
      },
    ],
  };

  return (
    <div className="most-starred-card chart-card card">
      <h2>Most starred repos</h2>
      <div className="chart-container">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          width="100%"
          height="700px"
        />
      </div>
    </div>
  );
}
