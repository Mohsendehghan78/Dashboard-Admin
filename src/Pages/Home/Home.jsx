import React from 'react'
import Feature from './../../Components/feature/Feature'
import Chart from '../../Components/chart/Chart' 
import { XAxis } from '../../datas'
export default function Home() {
  return (
    <div>
      <Feature></Feature>
      <Chart grid title="Mounth Sale" data={XAxis} dataKey="sale"/>
    </div>
  )
}
