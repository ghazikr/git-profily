import React from "react";
import ReactApexChart from "react-apexcharts";

export default function MostStarredChart({ data }) {
  const state = {
    options: {
      chart: {
        id: "most-starred-chart",
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
    <div className="chart-container">
      <h3>Most starred repos</h3>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        width="100%"
      />
    </div>
  );
}
