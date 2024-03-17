'use client'

import { Pokemon, Stats } from "@/constants/types"
import { FC } from "react"
import { Chart } from "react-google-charts";


export interface StatsChartProps {
  pokemon: Pokemon
}  

const StatsChart: FC<StatsChartProps> = ({pokemon}: StatsChartProps): JSX.Element => {
    const pokemonStats = pokemon.stats.map((stat: Stats) => {
        return([stat.stat.name, stat.base_stat, '#30a7d7'])
    })
    const pokemonStatsWithHeaders = [['Stat', 'Base Points', { role: "style" }], ...pokemonStats]
    return (
        <div>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={pokemonStatsWithHeaders} options={{colors:['#30a7d7']}} />
        </div>
    )
}

export default StatsChart