'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Info, AlertTriangle } from 'lucide-react'

interface TokenConfigurationProps {
  onBack: () => void;
  onNext: () => void;
}

export default function TokenConfiguration({ onBack, onNext }: TokenConfigurationProps) {
  const [launchOption, setLaunchOption] = useState('existing')
  const [maxDeploy, setMaxDeploy] = useState(50)
  
  return (
    <div className="space-y-8">
            <Card className="rounded-xl border p-6">
                <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm text-white">
                    2
                </div>
                <div className="flex items-center gap-2">
                    <h2 className="text-xl font-semibold">Token Configuration</h2>
                    <Info className="h-4 w-4 text-gray-400" />
                </div>
                </div>
                
                <div className="mt-4 text-sm text-gray-600">
                Configure the token settings for your grant agent
                </div>

                <div className="mt-6 space-y-6">
                <div className="space-y-4">
                    <Label>LAUNCH OPTIONS</Label>
                    <RadioGroup value={launchOption} onValueChange={setLaunchOption} className="space-y-3">
                    <div className="flex items-center space-x-3">
                        <RadioGroupItem value="normal" id="normal" />
                        <Label htmlFor="normal" className="font-normal">
                        <div>Normal Launch</div>
                        <div className="text-sm text-gray-500">Launch a new token for your agent</div>
                        </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                        <RadioGroupItem value="existing" id="existing" />
                        <Label htmlFor="existing" className="font-normal">
                        <div>Use Existing Token</div>
                        <div className="text-sm text-gray-500">Must use deployed wallet. Try pasting contract several times if there's an error.</div>
                        </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                        <RadioGroupItem value="none" id="none" />
                        <Label htmlFor="none" className="font-normal">
                        <div>No Token</div>
                        <div className="text-sm text-gray-500">Launch without token</div>
                        </Label>
                    </div>
                    </RadioGroup>
                </div>

                <div className="space-y-1.5">
                    <Label htmlFor="token-address">Token Address</Label>
                    <Input 
                    id="token-address" 
                    placeholder="E.g amichael.near"
                    />
                </div>

                <div className="rounded-lg bg-blue-50 p-4 space-y-3">
                    <div className="flex items-center gap-2 font-medium">
                    <AlertTriangle className="h-5 w-5 text-blue-600" />
                    Token Whitelist Management
                    </div>
                    <div className="text-sm text-gray-600">
                    To Get a token off the payment whitelist, projects can:
                    <ol className="list-decimal ml-5 mt-2 space-y-1">
                        <li>Submit a new proposal in the governance for token removal</li>
                        <li>Demonstrate consistent non compliance with grant terms</li>
                        <li>Show evidence of token misuse or manipulation</li>
                    </ol>
                    </div>
                    <div className="text-sm text-gray-600">
                    The Final decision to remove a token whitelist is typically made through a community vote or by the grant program administrators
                    </div>
                </div>

                <Button variant="outline" className="text-blue-600">+ Add New</Button>

                <div className="space-y-1.5">
                    <Label>Governance Type</Label>
                    <Select defaultValue="admin">
                    <SelectTrigger>
                        <SelectValue placeholder="Select governance type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="admin">Admin-based</SelectItem>
                        <SelectItem value="dao">DAO</SelectItem>
                        <SelectItem value="multisig">Multi-signature</SelectItem>
                    </SelectContent>
                    </Select>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                    <Label>Max Deploy Percentage</Label>
                    <span className="text-sm font-medium">{maxDeploy}%</span>
                    </div>
                    <Slider
                    value={[maxDeploy]}
                    onValueChange={([value]) => setMaxDeploy(value)}
                    min={10}
                    max={100}
                    step={1}
                    className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                    <span>10%</span>
                    <span>50%</span>
                    <span>100%</span>
                    </div>
                </div>

                <div className="space-y-1.5">
                    <Label>Funding Frequency</Label>
                    <Select defaultValue="weekly">
                    <SelectTrigger>
                        <SelectValue placeholder="Select funding frequency" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                    </SelectContent>
                    </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                    <Label htmlFor="min-grant">Minimum Grant Size</Label>
                    <Input 
                        id="min-grant" 
                        type="number"
                        placeholder="10,000"
                    />
                    </div>
                    <div className="space-y-1.5">
                    <Label htmlFor="max-grant">Maximum Grant Size</Label>
                    <Input 
                        id="max-grant" 
                        type="number"
                        placeholder="30,000"
                    />
                    </div>
                </div>
                </div>
            </Card>

        <div className="flex justify-between">
            <Button variant="outline" onClick={onBack}>Back: Basic Information</Button>
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={onNext}>
            Next: Platform Integration
            </Button>
        </div>
    </div>
  )
}

