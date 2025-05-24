import * as echarts from 'echarts'
import { useEffect, useRef, useMemo } from 'react'

// Tema oscuro de ECharts
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
  }
})

function WebTrafficChart() {
  const chartRef = useRef<HTMLDivElement>(null)
  const chartInstance = useRef<echarts.ECharts | null>(null)

  // Se usa useMemo para las opciones del gráfico
  const defaultOptions = useMemo<echarts.EChartsOption>(
    () => ({
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '18',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
        }
      ]
    }),
    []
  )

  useEffect(() => {
    if (!chartRef.current) return

    // Se inicializa el gráfico con el tema actual
    const currentTheme =
      document.documentElement.getAttribute('data-bs-theme') || 'light'
    chartInstance.current = echarts.init(chartRef.current, currentTheme)
    chartInstance.current.setOption(defaultOptions)

    // Función se encarga de los cambios de tema
    const handleThemeChange = () => {
      if (!chartInstance.current) return

      const newTheme =
        document.documentElement.getAttribute('data-bs-theme') || 'light'
      chartInstance.current.dispose()
      chartInstance.current = echarts.init(chartRef.current!, newTheme)
      chartInstance.current.setOption(defaultOptions)
    }

    // Se observan los cambios en el tema
    const observer = new MutationObserver(handleThemeChange)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-bs-theme']
    })

    // Se maneja el redimensionamiento del gráfico
    const handleResize = () => {
      if (chartInstance.current) {
        chartInstance.current.resize()
      }
    }

    window.addEventListener('resize', handleResize)

    // Se limpia al desmontar el componente
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

export default WebTrafficChart
