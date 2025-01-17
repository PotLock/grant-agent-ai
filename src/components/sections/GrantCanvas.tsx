'use client'

import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { Info } from "lucide-react";
import { useState } from "react";

interface GrantCanvasProps {
    onBack: () => void;
    onNext: () => void;
  }
  
  interface Tag {
    id: string;
    label: string;
  }

const GrantCanvas = ({ onBack, onNext }: GrantCanvasProps) => {
    const [selectedMetrics, setSelectedMetrics] = useState<string[]>([])
    const [selectedCriteria, setSelectedCriteria] = useState<string[]>([])
  
    const metricsOptions: Tag[] = [
      { id: 'community-impact', label: 'Community Impact' },
      { id: 'user-adoption', label: 'User Adoption' },
      { id: 'technical-innovation', label: 'Technical Innovation' },
    ]
  
    const criteriaOptions: Tag[] = [
      { id: 'sanctioned-country', label: 'Sanctioned Country' },
      { id: 'profanity-use', label: 'Profanity Use' },
      { id: 'audience-consensus', label: 'Audience Consensus' },
    ]
  
    const toggleMetric = (id: string) => {
      setSelectedMetrics(prev => 
        prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
      )
    }
  
    const toggleCriteria = (id: string) => {
      setSelectedCriteria(prev => 
        prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
      )
    }
    
    return (
        <div className="space-y-8">
        <Card className="rounded-xl border p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm text-white">
              4
            </div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">Grant Canvas</h2>
              <Info className="h-4 w-4 text-gray-400" />
            </div>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            Define your grant program's objectives and evaluation criteria
          </div>

          <div className="mt-6 space-y-6">
            <div className="space-y-1.5">
              <Label htmlFor="ecosystem-goals">Ecosystem Goals</Label>
              <Input 
                id="ecosystem-goals" 
                placeholder="E.g Increase treasury etc"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="evaluation-criteria">Evaluation Criteria</Label>
              <Textarea 
                id="evaluation-criteria"
                placeholder="Describe how projects will be evaluated (e.g Social Impact, Technical Complexity)"
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="reward-criteria">Reward Criteria</Label>
              <Textarea 
                id="reward-criteria"
                placeholder="Describe the criteria for rewarding projects"
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-1.5">
              <Label>Project Type</Label>
              <Select defaultValue="mvp">
                <SelectTrigger>
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mvp">MVP</SelectItem>
                  <SelectItem value="prototype">Prototype</SelectItem>
                  <SelectItem value="production">Production</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>Metrics Optimizing For</Label>
              <div className="flex flex-wrap gap-2">
                {metricsOptions.map((metric) => (
                  <button
                    key={metric.id}
                    onClick={() => toggleMetric(metric.id)}
                    className={`rounded-full px-3 py-1 text-sm transition-colors ${
                      selectedMetrics.includes(metric.id)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {metric.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Label>Disqualification Criteria</Label>
              <div className="flex flex-wrap gap-2">
                {criteriaOptions.map((criteria) => (
                  <button
                    key={criteria.id}
                    onClick={() => toggleCriteria(criteria.id)}
                    className={`rounded-full px-3 py-1 text-sm transition-colors ${
                      selectedCriteria.includes(criteria.id)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {criteria.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <div className="flex justify-between">
          <Button variant="outline" onClick={onBack}>Back: Platform Integration</Button>
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={onNext}>
            Next: Wallet Configuration
          </Button>
        </div>
      </div>
    )
}

export default GrantCanvas;