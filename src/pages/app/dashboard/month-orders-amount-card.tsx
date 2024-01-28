import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthOrdersAmountCard() {
  return (
    <>
      <Card>
        <CardHeader className="flex-row items-center justify-between space-x-0 pb-2">
          <CardTitle className="text-base font-semibold">
            Pedidos (mês)
          </CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="space-x-1">
          <span className="text-2xl font-bold tracking-tight">421</span>
          <p className="text-xs text-muted-foreground">
            <span className="text-emerald-500">6% </span>
            em relação ao mês anterior
          </p>
        </CardContent>
      </Card>{' '}
    </>
  )
}
