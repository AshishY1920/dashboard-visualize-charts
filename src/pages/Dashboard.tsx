import React, { Fragment, useState } from "react";
import "../styles/dashboard.scss";
import Graphs from "../components/Graphs";
import { Button } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const responseTimes = {
  day_wise: [
    { date: "2023-05-01", average_time: 0.4 },
    { date: "2023-05-02", average_time: 0.42 },
    { date: "2023-05-03", average_time: 0.35 },
    { date: "2023-05-04", average_time: 0.5 },
    { date: "2023-05-05", average_time: 0.47 },
  ],
  week_wise: [
    { week: "18", average_time: 0.45 },
    { week: "19", average_time: 0.43 },
    { week: "20", average_time: 0.5 },
    { week: "21", average_time: 0.46 },
    { week: "22", average_time: 0.41 },
  ],
};

const userSatisfaction = {
  1: 15,
  2: 35,
  3: 200,
  4: 500,
  5: 600,
};

// Usage Statistics Data
const usageStatistics = {
  by_platform: {
    iOS: 600,
    Android: 700,
    Web: 200,
  },
  by_country: {
    USA: 800,
    India: 250,
    Germany: 150,
    Japan: 100,
    Brazil: 200,
  },
};

const FILTERS_ARR = ["Daily", "Weekly"];

const Dashboard = ({ data }: { data: { [key: string]: number } }) => {
  const [activeFilters, setActiveFilters] = useState<number>(0);

  const dailyData = Object.fromEntries(
    responseTimes.day_wise.map((item) => [item.date, item.average_time])
  );
  const weeklyData = Object.fromEntries(
    responseTimes.week_wise.map((item) => [
      `Week ${item.week}`,
      item.average_time,
    ])
  );

  return (
    <Fragment>
      <div className="row__container">
        <div>
          <Sidebar />
        </div>
        <div>
          {/* Header component */}
          <Header />
          {/* Header Component */}

          <div className="container__fluid">
            {/* Grid Row component starts here */}
            <div className="bar__chart__grid__row">
              <div>
                <h3>Category Distribution</h3>
                {/* Bar Chart */}
                <div className="graph__container">
                  <Graphs
                    title="Category Distribution"
                    type="bar"
                    data={data}
                  />
                </div>
                {/* Bar Chart */}
              </div>
              <div>
                <div className="filter__day__week">
                  <div>
                    <h3>Response Time</h3>
                  </div>
                  <div>
                    {FILTERS_ARR &&
                      FILTERS_ARR?.map((i, index) => (
                        <Button
                          onClick={() => setActiveFilters(index)}
                          className={`${
                            activeFilters === index ? "active__filters" : ""
                          }`}
                        >
                          {i}
                        </Button>
                      ))}
                  </div>
                </div>
                {/* Line Chart */}
                <div className="graph__container">
                  <Graphs
                    title={`${
                      activeFilters === 0 ? "Daily" : "Weekly"
                    } Response Times`}
                    type="line"
                    data={activeFilters === 0 ? dailyData : weeklyData}
                  />
                </div>
                {/* Line Chart */}
              </div>
            </div>
            {/* Grid Row component ends here */}

            {/* Grid Row component starts here */}
            <div className="bar__chart__grid__row mt__x5">
              <div>
                <h3>User Satisfaction Based on Ratings</h3>
                <div className="graph__container">
                  <Graphs type="pie" data={userSatisfaction} />
                </div>
              </div>
              <div>
                <h3>Distribution By Country</h3>
                <div className="graph__container">
                  <Graphs
                    type="bar"
                    data={usageStatistics.by_country}
                    title="Usage by Country"
                  />
                </div>
              </div>
              <div>
                <h3>Distribution By Platform</h3>
                <div className="graph__container">
                  <Graphs
                    type="pie"
                    data={usageStatistics?.by_platform}
                    title="Usage by Platform"
                  />
                </div>
              </div>
            </div>
            {/* Grid Row component ends here */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
