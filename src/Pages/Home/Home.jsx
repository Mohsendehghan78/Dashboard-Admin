import React from 'react'
import Feature from './../../Components/feature/Feature'
import Chart from '../../Components/chart/Chart' 
import WidgetSm from '../../Components/widgetSm/WidgetSm'
import { XAxis } from '../../datas'
export default function Home() {
  return (
    <div className=' container'>
      <Feature></Feature>
      <Chart grid title="Mounth Sale" data={XAxis} dataKey="sale"/>
      <div className='widgets'>
        <WidgetSm></WidgetSm>
      </div>
    </div>
  )
}
