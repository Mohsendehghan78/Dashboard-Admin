import React from 'react'
import "./Home.css"
import Feature from './../../Components/feature/Feature'
import Chart from '../../Components/chart/Chart' 
import WidgetSm from '../../Components/widgetSm/WidgetSm'
import WidgetLg from '../../Components/widgetLg/WidgetLg'
import { XAxis } from '../../datas'
export default function Home() {
  return (
    <div className=' container'>
      <Feature></Feature>
      <Chart grid title="Mounth Sale" data={XAxis} dataKey="sale"/>
      <div className='widgets '>
        <WidgetSm></WidgetSm>
        <WidgetLg></WidgetLg>
      </div>
    </div>
  )
}
