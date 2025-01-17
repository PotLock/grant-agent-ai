"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowUpDown, Twitter } from 'lucide-react'
import Image from "next/image"
import { useState } from "react"

// Mock data array
const mockData = Array(100).fill(0).map((_, index) => ({
  id: index + 1,
  name: `AI Research DAO ${index + 1}`,
  symbol: `$AIRD${index + 1}`,
  creator: `Creator${index + 1}`,
  marketcap: (2567901 + index * 1000).toFixed(2),
  price: (12.45 + index * 0.1).toFixed(2),
  change24h: ((Math.random() * 2 - 1) * 5).toFixed(2),
  capitalDeployed: (250000 + index * 1000).toFixed(2),
  weeklyPool: (250 + index * 10).toFixed(2),
}))

const ITEMS_PER_PAGE = 8

const FeaturedGrantOperatorAgents = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(mockData.length / ITEMS_PER_PAGE)
  
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1)
    }
  }

  // Calculate current page data
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentData = mockData.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  return (
    <section className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">Featured Grant Operator Agents</h2>
          <p className="text-muted-foreground text-sm">Top ai agent token with AI grant operator agents.</p>
        </div>
        <Input 
          type="search" 
          placeholder="Search Agents" 
          className="w-full sm:max-w-xs"
        />
      </div>

      {/* Desktop Table View */}
      <div className="hidden sm:block border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Agent</TableHead>
              <TableHead>Creator</TableHead>
              <TableHead>
                <Button variant="ghost" size="sm" className="font-semibold">
                  Marketcap
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" size="sm" className="font-semibold">
                  Price
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>24h (%)</TableHead>
              <TableHead>Capital Deployed</TableHead>
              <TableHead>Weekly Pool</TableHead>
              <TableHead>Integrations</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-muted rounded-full">
                        <Image src="/assets/images/avatar/avatar-1.png" alt="Avatar" width={32} height={32} className="object-contain" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{item.name}</div>
                      <div className="text-xs text-muted-foreground">{item.symbol}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-gray-100 rounded-full">
                        <Image src="/assets/images/avatar/avatar.png" alt="Avatar" width={24} height={24} className="object-contain" />
                    </div>
                    <span className="text-sm font-semibold">{item.creator}</span>
                  </div>
                </TableCell>
                <TableCell>${item.marketcap}</TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell className={item.change24h.startsWith('-') ? 'text-red-500' : 'text-green-500'}>
                  {item.change24h.startsWith('-') ? '' : '+'}
                  {item.change24h}%
                </TableCell>
                <TableCell>${item.capitalDeployed}</TableCell>
                <TableCell>${item.weeklyPool}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Twitter className="h-4 w-4" />
                    <Twitter className="h-4 w-4" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Card View */}
      <div className="grid gap-4 sm:hidden">
        {currentData.map((item) => (
          <Card key={item.id} className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 bg-muted rounded-full">
                <Image src="/assets/images/avatar/avatar-1.png" alt="Avatar" width={40} height={40} className="object-contain" />
              </div>
              <div>
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-muted-foreground">{item.symbol}</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Creator:</span>
                <span className="font-medium">{item.creator}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Price:</span>
                <span className="font-medium">${item.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">24h:</span>
                <span className={item.change24h.startsWith('-') ? 'text-red-500' : 'text-green-500'}>
                  {item.change24h.startsWith('-') ? '' : '+'}
                  {item.change24h}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Capital:</span>
                <span className="font-medium">${item.capitalDeployed}</span>
              </div>
              <div className="flex justify-between col-span-2">
                <span className="text-muted-foreground">Weekly Pool:</span>
                <span className="font-medium">${item.weeklyPool}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between py-4 gap-4">
        <div className="text-sm text-muted-foreground order-2 sm:order-1">{currentPage} of {totalPages} Agents.</div>
        <div className="flex gap-2 w-full sm:w-auto order-1 sm:order-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 sm:flex-initial"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 sm:flex-initial"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  )
} 

export default FeaturedGrantOperatorAgents;