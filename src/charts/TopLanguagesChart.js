import React from "react";
import ReactApexChart from "react-apexcharts";

export default function TopLanguagesChart({ data }) {
  const state = {
    series: data.map((elem) => elem.value),
    options: {
      chart: {
        id: "top-languages-chart",
      },

      labels: data.map((elem) => elem.name),
      legend: {
        position: "bottom",
      },
    },
  };
  return (
    <div className="chart-container">
      <h3>Top used languages</h3>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="pie"
        width="100%"
        // title="jajaj"
      />
    </div>
  );
}
