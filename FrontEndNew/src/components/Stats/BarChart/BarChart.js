import React from "react";

import ChartistGraph from "react-chartist";

import { Card } from "react-bootstrap";

function BarChart() {
  return (
    <Card>
      <Card.Header>
        <Card.Title as="h4">2017 Sales</Card.Title>
        <p className="card-category">All products including Taxes</p>
      </Card.Header>
      <Card.Body>
        <div className="ct-chart" id="chartActivity">
          <ChartistGraph
            data={{
              labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "Mai",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
                [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695],
              ],
            }}
            type="Bar"
            options={{
              seriesBarDistance: 10,
              axisX: {
                showGrid: false,
              },
              height: "245px",
            }}
            responsiveOptions={[
              [
                "screen and (max-width: 640px)",
                {
                  seriesBarDistance: 5,
                  axisX: {
                    labelInterpolationFnc: function (value) {
                      return value[0];
                    },
                  },
                },
              ],
            ]}
          />
        </div>
      </Card.Body>
      <Card.Footer>
        <div className="legend">
          <i className="fas fa-circle text-info"></i>
          Tesla Model S <i className="fas fa-circle text-danger"></i>
          BMW 5 Series
        </div>
        <hr></hr>
        <div className="stats">
          <i className="fas fa-check"></i>
          Data information certified
        </div>
      </Card.Footer>
    </Card>
  );
}

export default BarChart;
