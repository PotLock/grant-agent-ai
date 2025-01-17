import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"

const FeaturedGrantAgents = () => {
  return (
    <section className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">Featured Grant Agents</h2>
          <p className="text-muted-foreground text-sm">Top ai agent token with AI grant operator agents.</p>
        </div>
        <div className="flex gap-2 self-end sm:self-auto">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {[1, 2].map((i) => (
          <Card key={i} className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="h-20 w-20 sm:h-24 sm:w-24 bg-muted rounded-lg shrink-0 mx-auto sm:mx-0 flex items-center justify-center">
                <Image src="/assets/images/agent-example.svg" alt="AI Research DAO" width={80} height={80} className="object-contain" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <h3 className="font-semibold">AI Research DAO</h3>
                  <span className="text-green-500 text-sm">+28.91%</span>
                </div>
                <p className="text-sm text-muted-foreground text-center sm:text-left">
                  Lorem ipsum dolor sit amet consectetur. Magnis tincidunt platea adipiscing diam in. Ut urna sed quis et eu nibh sapien neque quis.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center sm:text-left">
                    <div className="text-sm text-muted-foreground">Current Treasury</div>
                    <div className="font-semibold">$8,600,213.00</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-sm text-muted-foreground">Weekly Grant Pool</div>
                    <div className="font-semibold">$8,600,213.00</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
} 

export default FeaturedGrantAgents;