'use client'

import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
    <div className="max-w-4xl mx-auto p-4">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button className="hover:opacity-80" onClick={onBack}>
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div className="flex-1">
          <h1 className="text-xl font-semibold">{proposal.title}</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Published by</span>
            <span className="text-blue-500">{proposal.publisher.address}</span>
          </div>
        </div>
        <Badge variant="outline" className="bg-orange-100 text-orange-500 border-orange-200">
          {proposal.status}
        </Badge>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="voters" className="mb-6">
        <TabsList>
          <TabsTrigger value="breakdown">Breakdown</TabsTrigger>
          <TabsTrigger value="voters">Voters</TabsTrigger>
          <TabsTrigger value="info">Info</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Voters List */}
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="space-y-2">
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
                <div className="flex items-center gap-4">
                  <Badge
                    variant="outline"
                    className="bg-green-100 text-green-600 border-green-200"
                  >
                    {voter.vote} ✓
                  </Badge>
                  <div className="text-right">
                    <div className="text-gray-500">{voter.votePercentage}%</div>
                    <div className="font-medium">{voter.voteAmount}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Voting Section */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="w-full">
              Yes
            </Button>
            <Button variant="outline" className="w-full">
              No
            </Button>
          </div>
          <Button className="w-full bg-blue-500 text-white hover:bg-blue-600">
            Vote
          </Button>

          <div className="mt-8">
            <h3 className="text-sm text-gray-500 mb-2">YOUR VOTING POWER</h3>
            <div className="text-xl font-semibold">{proposal.votingPower.amount}</div>
            <div className="text-sm text-gray-500">
              ({proposal.votingPower.percentage} of total votes)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalDetail;