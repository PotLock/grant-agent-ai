'use client'

import React from 'react';
import { Calendar, ChevronLeft, User, ChevronDown, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"

interface Voter {
  id: string;
  name: string;
  vote: 'Yes' | 'No';
  votePercentage: number;
  voteAmount: string;
}

interface ProposalDetailProps {
  proposal: {
    title: string;
    status: string;
    publisher: {
      address: string;
    };
    voters: Voter[];
    votingPower: {
      amount: string;
      percentage: string;
    };
  };
  onBack?: () => void;
}

const ProposalDetail: React.FC<ProposalDetailProps> = ({ proposal, onBack }) => {
  return (
    <div className="space-y-4 pt-10">
      <Card className='shadow-none'>
        <CardContent className='p-4 space-y-6'>
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <button className="hover:opacity-80" onClick={onBack}>
                <ChevronLeft className="h-6 w-6" />
              </button>
              <div className="flex-1">
                <h1 className="text-xl font-semibold">{proposal.title}</h1>
              </div>
              <Badge variant="outline" className="bg-orange-100 text-orange-500 border border-orange-500 rounded-md px-2 py-1" >
                {proposal.status}
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <User className="h-5 w-5 text-blue-500" />
                <span>Published by</span>
              </div>
              <div className="flex items-center gap-1">
                <Image src="/assets/images/avatar/avatar.png" alt="avatar" width={20} height={20} className="rounded-full" />
                <span className="text-blue-500">{proposal.publisher.address}</span>
              </div>
            </div>
            {/* Tabs */}
            <Tabs defaultValue="voters">
              <TabsList>
                <TabsTrigger value="breakdown">Breakdown</TabsTrigger>
                <TabsTrigger value="voters">Voters</TabsTrigger>
                <TabsTrigger value="info">Info</TabsTrigger>
              </TabsList>
            </Tabs>
        </CardContent>
      </Card>

      {/* Voters List */}
      <div className="grid grid-cols-3 gap-8 pt-10">
        <div className="col-span-2">
          <Card className='shadow-none'>
            <CardHeader className='p-4'>
              <div className="flex items-center justify-between mb-4">
                <CardTitle className='text-xl font-semibold'>
                  Voters ({proposal.voters.length})
                </CardTitle>
              </div>
              <div className="flex w-full">
                <DropdownMenu>
                    <DropdownMenuTrigger className='w-full flex items-center justify-between border border-gray-200 rounded-md px-4 py-1'>
                      <Button className="text-sm outline-none border-none bg-transparent shadow-none hover:bg-transparent text-black p-0">
                        Voted: Yes 
                      </Button>
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" sideOffset={4} className="w-[--radix-dropdown-trigger-width]">
                      <DropdownMenuItem>
                        All Votes
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Yes Votes
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        No Votes
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="p-4 px-2 space-y-2">
              {proposal.voters.map((voter) => (
                <div
                  key={voter.id}
                  className="flex items-center justify-between p-3 bg-white rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center text-white">
                      {voter.name[0].toUpperCase()}
                    </div>
                    <span className="font-medium">{voter.name}</span>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-[#D9F99D] text-[#65A30D] p-2 px-4 rounded-md flex items-center gap-1"
                  >
                    {voter.vote} 
                    <Check className="h-4 w-4" />
                  </Badge>
                  <div className="flex items-center gap-4">
                    <div className="text-left text-sm">
                      <div className="text-gray-500">{voter.votePercentage}%</div>
                      <div className="font-medium">{voter.voteAmount}</div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Voting Section */}
        <div className="space-y-4">
          <Card className="shadow-none">
            <CardContent className='p-4 space-y-4'>
              <Button variant="outline" className="w-full">
                Yes
              </Button>
              <Button variant="outline" className="w-full">
                No
              </Button>
              <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 mt-5">
                Vote
              </Button>
            </CardContent>
          </Card>

          <Card className="mt-8 shadow-none bg-stone-50">
            <CardContent className='p-4 space-y-4'>
              <h3 className="text-sm text-gray-500 mb-2">YOUR VOTING POWER</h3>
              <div className="text-xl font-semibold">{proposal.votingPower.amount}</div>
              <div className="text-sm">
                ({proposal.votingPower.percentage} of total votes)
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProposalDetail;