'use client'

import { Card } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import GranteePost from './GranteePost'
import { useState } from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

interface StatsCardProps {
    title: string
    value: string | number
}

// Mock data interface
interface GranteeData {
    id: number
    avatar: string
    name: string
    username: string
    content: string
    timeAgo: string
    hasThread: boolean
}

// Mock data
const MOCK_GRANTEES: GranteeData[] = [
    {
        id: 1,
        avatar: "/assets/images/avatar/avatar.png",
        name: "Potlock",
        username: "Potlock_",
        content: "Building decentralized funding infrastructure for public goods on NEAR Protocol.",
        timeAgo: "2 Mins Ago",
        hasThread: true
    },
    {
        id: 2,
        avatar: "/assets/images/avatar/avatar.png",
        name: "NearWeek",
        username: "NearWeek_",
        content: "Your trusted source for NEAR Protocol ecosystem news and updates.",
        timeAgo: "5 Mins Ago",
        hasThread: true
    },
    {
        id: 3,
        avatar: "/assets/images/avatar/avatar.png",
        name: "Ref Finance",
        username: "Ref_Finance",
        content: "Leading AMM protocol on NEAR, providing seamless DeFi experiences.",
        timeAgo: "10 Mins Ago",
        hasThread: false
    },
    {
        id: 4,
        avatar: "/assets/images/avatar/avatar.png",
        name: "Paras",
        username: "Paras_NFT",
        content: "Digital art cards marketplace on NEAR Protocol.",
        timeAgo: "15 Mins Ago",
        hasThread: true
    },
    {
        id: 5,
        avatar: "/assets/images/avatar/avatar.png",
        name: "Aurora",
        username: "AuroraNetwork",
        content: "EVM compatibility layer built on NEAR Protocol.",
        timeAgo: "20 Mins Ago",
        hasThread: true
    },
    {
        id: 6,
        avatar: "/assets/images/avatar/avatar.png",
        name: "Octopus Network",
        username: "Octopus_Network",
        content: "Multichain interoperable crypto-network for launching Web3 appchains.",
        timeAgo: "25 Mins Ago",
        hasThread: false
    },
    {
        id: 7,
        avatar: "/assets/images/avatar/avatar.png",
        name: "Mintbase",
        username: "Mintbase_",
        content: "NFT infrastructure provider on NEAR Protocol.",
        timeAgo: "30 Mins Ago",
        hasThread: true
    },
    {
        id: 8,
        avatar: "/assets/images/avatar/avatar.png",
        name: "Human Guild",
        username: "HumanGuild_",
        content: "Supporting game developers building on NEAR Protocol.",
        timeAgo: "35 Mins Ago",
        hasThread: true
    }
]

const StatsCard = ({ title, value }: StatsCardProps) => {
    return (
        <Card className="p-4">
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-semibold">{value}</p>
        </Card>
    )
}

const ITEMS_PER_PAGE = 5

const Grantees = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(MOCK_GRANTEES.length / ITEMS_PER_PAGE)

    // Calculate the current page's data
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    const currentGrantees = MOCK_GRANTEES.slice(startIndex, endIndex)

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    return (
        <div className="space-y-6">
            {/* Stats Section */}
            <div className="grid grid-cols-4 gap-4">
                <StatsCard title="Total Funded" value="$23,081,920" />
                <StatsCard title="Total Grantees" value="200" />
                <StatsCard title="Weekly Payouts" value="$200,000.00" />
                <StatsCard title="Completed Grants" value="177" />
            </div>

            <Tabs defaultValue="latest" className="w-full">
                <TabsList className="py-5 px-1">
                    <TabsTrigger value="latest" className="p-2 px-3">Latest</TabsTrigger>
                    <TabsTrigger value="this-week" className="p-2 px-3">This Week</TabsTrigger>
                    <TabsTrigger value="this-month" className="p-2 px-3">This Month</TabsTrigger>
                    <TabsTrigger value="all-time" className="p-2 px-3">All Time</TabsTrigger>
                </TabsList>
            </Tabs>
            <div className="space-y-4 mt-4 flex flex-col">
                <div className="space-y-3">
                    {currentGrantees.map((grantee) => (
                        <GranteePost
                            key={grantee.id}
                            avatar={grantee.avatar}
                            name={grantee.name}
                            username={grantee.username}
                            content={grantee.content}
                            timeAgo={grantee.timeAgo}
                            hasThread={grantee.hasThread}
                        />
                    ))}
                </div>

                {/* Pagination */}
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious 
                                onClick={() => handlePageChange(currentPage - 1)}
                                className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                            />
                        </PaginationItem>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <PaginationItem key={page}>
                                <PaginationLink
                                    onClick={() => handlePageChange(page)}
                                    isActive={currentPage === page}
                                    className="cursor-pointer"
                                >
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext
                                onClick={() => handlePageChange(currentPage + 1)}
                                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}

export default Grantees