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
        show: true,
      },
    },
  };
  return (
    <div className="top-languages-card chart-card card">
      <h3>Top used languages</h3>
      <div className="chart-container" style={{ marginTop: "150px" }}>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="pie"
          width="100%"
          height="350px"
        />
      </div>
    </div>
  );
}
