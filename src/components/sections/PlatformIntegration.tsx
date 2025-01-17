'use client'

import { Info, Trash, Plus } from "lucide-react"
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Switch } from "../ui/switch"
import { useState } from "react"
import Image from "next/image"

interface PlatformIntegrationProps {
  onBack: () => void;
  onNext: () => void;
}

const PlatformIntegration = ({ onBack, onNext }: PlatformIntegrationProps) => {
    const [autoApproveThreshold, setAutoApproveThreshold] = useState<number>(0);
    const [minFollowers, setMinFollowers] = useState<number>(0);
    const [minAccountAge, setMinAccountAge] = useState<number>(0);
    const [apiKey, setApiKey] = useState<string|null>(null);
    const [reviewers, setReviewers] = useState<string[]>([]);
    const [reviewer, setReviewer] = useState<string>('');

    const handleAddReviewer = () => {
        if (reviewer.trim()) {
            setReviewers([...reviewers, reviewer.trim()]);
            setReviewer('');
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddReviewer();
        }
    }

    const handleRemoveReviewer = (reviewer: string) => {
        setReviewers(reviewers.filter(r => r !== reviewer));
    }

    return (
        <div className="space-y-8">
            <Card className="rounded-xl border p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm text-white">
                  3
                </div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold">Platform Integration</h2>
                  <Info className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              
              <div className="mt-4 text-sm text-gray-600">
                Connect your agent to external services and configure integration settings
              </div>

              <div className="mt-6 space-y-8">
                {/* Telegram Section */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-700 uppercase">Telegram Interactions</h3>
                  <p className="text-sm text-gray-600">Configure how your agent interacts on Telegram</p>
                  
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                        <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.75 3.98-1.73 6.64-2.87 7.97-3.44 3.8-1.62 4.58-1.9 5.1-1.91.11 0 .37.03.54.17.14.12.18.28.2.45-.01.05.01.13 0 .22z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Telegram Integration</div>
                        <div className="text-sm text-gray-500">Interact on Telegram</div>
                      </div>
                    </div>
                    <div className="rounded-full bg-amber-50 px-3 py-1 text-xs text-amber-600">
                      Coming Soon
                    </div>
                  </div>
                </div>

                {/* Twitter Section */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-700 uppercase">Twitter Interactions</h3>
                  <p className="text-sm text-gray-600">Configure how your agent interacts on Twitter</p>
                  
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                        <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">X(Twitter) Integration</div>
                        <div className="text-sm text-gray-500">Post, reply, and interact</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="api-key">API Key</Label>
                      <Input 
                        id="api-key" 
                        placeholder="XXXX-XXXX-XXXX-XXXX"
                        value={apiKey || ''}
                        onChange={(e) => setApiKey(e.target.value)}
                      />
                      <p className="text-sm text-red-500">Warning: You will not be able to view this API key again after saving.</p>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="example-tweets">Example Tweets</Label>
                      <Textarea 
                        id="example-tweets"
                        placeholder="Add example tweets to guide your AI's posting style..."
                        className="min-h-[100px]"
                      />
                    </div>
                    {apiKey && (
                      <div className="space-y-2 mt-4">
                        <span>Add Reviewer</span>
                        <div className="flex items-center gap-2">
                            <Input 
                                placeholder="@username" 
                                value={reviewer} 
                                onChange={(e) => setReviewer(e.target.value)}
                                onKeyDown={handleKeyPress}
                            />
                            <Button onClick={handleAddReviewer}><Plus className="h-4 w-4" /></Button>
                        </div>
                      </div>
                    )}
                    {reviewers.length > 0 && (
                      <div className="space-y-2 mt-4">
                        <span>Reviewers</span>
                        <div className="flex flex-col items-start gap-2">
                            {reviewers.map((reviewer, index) => (
                                <div key={index} className="flex items-center gap-2 w-full justify-between">
                                    <div className="flex flex-row gap-2">
                                        <Image src={`https://unavatar.io/${reviewer}`} alt={reviewer} className="rounded-lg h-7 w-7" width={20} height={20} />
                                        <div className="flex items-center gap-2 text-sm font-semibold">@{reviewer}</div>
                                    </div>
                                    <Button className="border border-red-500 hover:bg-red-50" variant="outline" size="sm" onClick={() => handleRemoveReviewer(reviewer)}>
                                        <Trash className="h-4 w-4 text-red-500" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Grantee Whitelist */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Grantee Whitelist</span>
                      <Info className="h-4 w-4 text-gray-400" />
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
                    Projects that do not meet all requirements will be automatically rejected. Qualified projects will be added to the grantee whitelist, but may still require approval based on the configuration below.
                  </div>

                  <div className="space-y-1.5">
                    <Label>Auto Approve Threshold</Label>
                    <Input 
                      type="number"
                      value={autoApproveThreshold}
                      onChange={(e) => setAutoApproveThreshold(Number(e.target.value))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Require Admin Approval</span>
                      <Info className="h-4 w-4 text-gray-400" />
                    </div>
                    <Switch />
                  </div>
                </div>

                {/* Submission Requirements */}
                <div className="space-y-4">
                  <h3 className="font-medium">Submission Requirements</h3>

                  <div className="space-y-1.5">
                    <Label>Minimum Followings</Label>
                    <Input 
                      type="number"
                      value={minFollowers}
                      onChange={(e) => setMinFollowers(Number(e.target.value))}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label>Minimum Account Age</Label>
                    <Input 
                      type="number"
                      value={minAccountAge}
                      onChange={(e) => setMinAccountAge(Number(e.target.value))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Blue Tick (Verified Account)</span>
                      <Info className="h-4 w-4 text-gray-400" />
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Crypto Settings Enabled</span>
                      <Info className="h-4 w-4 text-gray-400" />
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex justify-between">
              <Button variant="outline" onClick={onBack}>Back: Token Configuration</Button>
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={onNext}>
                Next: Grant Canvas
              </Button>
            </div>
        </div>
    )
}

export default PlatformIntegration