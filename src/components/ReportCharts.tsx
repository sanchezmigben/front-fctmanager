import { useState } from 'react'
import Chart from 'react-apexcharts'
import type { ApexOptions } from 'apexcharts'
import '@styles/reportCharts.css'

function ReportCharts() {
  const [data] = useState<{
    series: ApexAxisChartSeries | ApexNonAxisChartSeries
    options: ApexOptions
  }>({
    series: [
      {
        name: 'Sales',
        data: [31, 40, 28, 51, 42, 82, 56]
      },
      {
        name: 'Revenue',
        data: [11, 32, 45, 32, 34, 52, 41]
      },
      {
        name: 'Customers',
        data: [15, 11, 32, 18, 9, 24, 11]
      }
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false
        },
        foreColor: '#6c757d',
        fontFamily: 'Nunito, sans-serif',
        background: 'transparent',
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: false
        }
      },
      markers: {
        size: 4,
        strokeWidth: 0,
        hover: {
          size: 5
        }
      },
      colors: ['#4154f1', '#2eca6a', '#ff771d'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.1,
          stops: [0, 90, 100],
          gradientToColors: ['#4154f1', '#2eca6a', '#ff771d']
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2.5,
        colors: ['#4154f1', '#2eca6a', '#ff771d'],
        lineCap: 'round'
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        borderColor: 'rgba(0, 0, 0, 0.1)',
        strokeDashArray: 3,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z'
        ],
        labels: {
          style: {
            colors: ['#6c757d'],
            fontSize: '12px',
            fontFamily: 'Nunito, sans-serif'
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: ['#6c757d'],
            fontSize: '12px',
            fontFamily: 'Nunito, sans-serif'
          }
        }
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
        theme: 'light'
      },
      legend: {
        labels: {
          colors: ['#6c757d'],
          useSeriesColors: false
        }
      },
      theme: {
        mode: 'light',
        palette: 'palette1',
        monochrome: {
          enabled: false,
          color: '#255aee',
          shadeTo: 'light',
          shadeIntensity: 0.65
        }
      }
    }
  })

  return (
    <Chart
      options={data.options}
      series={data.series}
      type={data.options.chart!.type as 'area'}
      height={data.options.chart!.height}
    />
  )
}

export default ReportCharts
