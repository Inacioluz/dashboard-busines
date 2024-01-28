import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthRevenueCard() {
  return (
    <>
      <Card>
        <CardHeader className="flex-row items-center justify-between space-x-0 pb-2">
          <CardTitle className="text-base font-semibold">
            Receita Total (mês)
          </CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="space-x-1">
          <span className="text-2xl font-bold tracking-tight">R$ 1248,60</span>
          <p className="text-xs text-muted-foreground">
            <span className="text-emerald-500">2% </span>
            em relação ao mês anterior
          </p>
        </CardContent>
      </Card>
    </>
  )
}