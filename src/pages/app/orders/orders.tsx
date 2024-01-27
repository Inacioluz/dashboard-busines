import { Helmet } from 'react-helmet-async'

import { Input } from '@/components/ui/input'

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3x1 font-bold tracking-tight">Pedidos</h1>
      </div>
      <div className="space-y-2.5">
        <form className="flex items-center gap-2">
          <span className="text-sn font-semibold">Filtros:</span>
          <Input placeholder="Nome do cliente" className="h-8 w-[328px]" />
        </form>
        <div className="rounded-md border">
            
        </div>
      </div>
    </>
  )
}
