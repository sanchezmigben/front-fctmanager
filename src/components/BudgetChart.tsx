import { useEffect, useRef, useMemo } from 'react'
import * as echarts from 'echarts'

echarts.registerTheme('dark', {
  backgroundColor: 'transparent',
  textStyle: {
    color: 'rgba(255, 255, 255, 0.7)'
  },
  legend: {
    textStyle: {
      color: 'rgba(255, 255, 255, 0.7)'
    }
  },
  tooltip: {
    backgroundColor: 'rgba(50, 50, 50, 0.9)',
    textStyle: {
      color: '#fff'
    },
    borderColor: 'rgba(255, 255, 255, 0.1)'
  },
  radar: {
    name: {
      textStyle: {
        color: 'rgba(255, 255, 255, 0.7)'
      }
    },
    splitArea: {
      areaStyle: {
        color: ['rgba(255, 255, 255, 0.1)']
      }
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.2)'
      }
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.1)'
      }
    }
  }
})

function BudgetChart() {
  const chartRef = useRef<HTMLDivElement>(null)
  const chartInstance = useRef<echarts.ECharts | null>(null)

  const defaultOptions = useMemo<echarts.EChartsOption>(
    () => ({
      tooltip: {
        trigger: 'item'
      },
      legend: {
        data: ['Allocated Budget', 'Actual Spending']
      },
      radar: {
        shape: 'circle',
        indicator: [
          { name: 'Sales', max: 6500 },
          { name: 'Administration', max: 16000 },
          { name: 'Information Technology', max: 30000 },
          { name: 'Customer Support', max: 38000 },
          { name: 'Development', max: 52000 },
          { name: 'Marketing', max: 25000 }
        ]
      },
      series: [
        {
          name: 'Budget vs Spending',
          type: 'radar',
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: 'Allocated Budget'
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: 'Actual Spending'
            }
          ]
        }
      ]
    }),
    []
  )

  useEffect(() => {
    if (!chartRef.current) return

    const currentTheme =
      document.documentElement.getAttribute('data-bs-theme') || 'light'
    chartInstance.current = echarts.init(chartRef.current, currentTheme)
    chartInstance.current.setOption(defaultOptions)

    const handleThemeChange = () => {
      if (!chartInstance.current) return

      const newTheme =
        document.documentElement.getAttribute('data-bs-theme') || 'light'
      chartInstance.current.dispose()
      chartInstance.current = echarts.init(chartRef.current!, newTheme)
      chartInstance.current.setOption(defaultOptions)
    }

    const observer = new MutationObserver(handleThemeChange)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-bs-theme']
    })

    const handleResize = () => {
      if (chartInstance.current) {
        chartInstance.current.resize()
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', handleResize)
      if (chartInstance.current) {
        chartInstance.current.dispose()
      }
    }
  }, [defaultOptions])

  return (
    <div ref={chartRef} style={{ minHeight: '400px' }} className='echart' />
  )
}

export default BudgetChart
