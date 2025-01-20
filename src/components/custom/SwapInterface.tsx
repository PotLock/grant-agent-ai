"use client"

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowDownUp } from "lucide-react"

const SwapInterface = () => {
  return (
    <Card className="p-4">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-medium">Swap</h3>
        <div className="flex items-center space-x-2">
          <Button size="icon" variant="ghost" className="h-8 w-8">
            <span className="sr-only">Settings</span>
            ⚙️
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-lg border bg-muted p-4">
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm text-muted-foreground">From</label>
            <span className="text-sm text-muted-foreground">Balance: 0.00</span>
          </div>
          <div className="flex items-center gap-2">
            <Input value="432.23474782" className="border-0 bg-transparent text-lg" />
            <Button variant="secondary" className="shrink-0">
              $BLACKDRAGON ▾
            </Button>
          </div>
          <div className="mt-1 text-sm text-muted-foreground">$12,095</div>
        </div>

        <div className="flex justify-center">
          <Button size="icon" variant="ghost" className="h-8 w-8">
            <ArrowDownUp className="h-4 w-4" />
          </Button>
        </div>

        <div className="rounded-lg border bg-muted p-4">
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm text-muted-foreground">To</label>
            <span className="text-sm text-muted-foreground">Balance: 0.00</span>
          </div>
          <div className="flex items-center gap-2">
            <Input value="20.2" className="border-0 bg-transparent text-lg" />
            <Button variant="secondary" className="shrink-0">
              $GRANTS ▾
            </Button>
          </div>
          <div className="mt-1 text-sm text-muted-foreground">$12,095</div>
        </div>

        <div className="space-y-2 rounded-lg border p-3">
          <div className="flex justify-between text-sm">
            <span>Rate</span>
            <span>1 $GRANTS=0.1001234 NEAR</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Est network fee</span>
            <span>$0.010</span>
          </div>
        </div>

        <Button className="w-full">Swap</Button>
      </div>
    </Card>
  )
}

export default SwapInterface;