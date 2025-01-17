import React from "react"
import { Card } from "@/components/ui/card"
import { Info } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface AgentPreview {
    name: string
    description: string
    image: string
}

interface BasicInformationProps {
    preview: AgentPreview
    setPreview: React.Dispatch<React.SetStateAction<AgentPreview>>
    emojis: string[]
    onNext: () => void
}

const BasicInformation = ({ preview, setPreview, emojis, onNext }: BasicInformationProps) => {
    return (
        <div className="space-y-8">
            <Card className="rounded-xl border p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm text-white">
                  1
                </div>
                <h2 className="text-xl font-semibold">Basic Information</h2>
              </div>
              
              <div className="mt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Info className="h-4 w-4" />
                  <p>Need help developing your own agent? See the <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">agent_config</code> file for another Grant Agent Token (GAT)</p>
                </div>
              </div>

              <div className="mt-6 space-y-6">
                <div className="space-y-1.5">
                  <Label htmlFor="name">AI Agent Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Agent name"
                    value={preview.name}
                    onChange={(e) => setPreview((p: AgentPreview) => ({...p, name: e.target.value}))}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="description">AI Agent Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe your agent"
                    value={preview.description}
                    onChange={(e) => setPreview((p: AgentPreview) => ({...p, description: e.target.value}))}
                    className="resize-none"
                    rows={4}
                  />
                </div>

                <div className="space-y-3">
                  <Label>AI Agent Image</Label>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Generate with AI</Button>
                    <Button variant="outline" size="sm">Use Emoji</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {emojis.map((emoji) => (
                      <button
                        key={emoji}
                        onClick={() => setPreview((p: AgentPreview) => ({...p, image: emoji}))}
                        className="text-2xl hover:scale-110 transition-transform"
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="prompt">Agent Prompt (LORE)</Label>
                  <div className="text-sm text-gray-500">
                    Example: As the EcoTech Grant AI, you are passionate about funding innovative green technologies. Your tone is enthusiastic yet professional, always encouraging applicants to think big about environmental solutions. You have a deep understanding of climate science and are excited y projects that combine technology with sustainability
                  </div>
                  <Textarea 
                    id="prompt"
                    placeholder="Enter background story and lore details..."
                    className="mt-2 resize-none"
                    rows={4}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="personality">Personality</Label>
                  <div className="text-sm text-gray-500">
                    Example: Friendly, approachable, and knowledgeable. You're enthusiastic about innovative ideas but also analytical and detail-oriented when evaluating proposals. You're patient with applicants and always willing to provide constructive feedback
                  </div>
                  <Textarea 
                    id="personality"
                    placeholder="Describe your AI Agent traits, behavior and demeanor."
                    className="mt-2 resize-none"
                    rows={4}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="style">Style</Label>
                  <div className="text-sm text-gray-500">
                    Example: Professional yet approachable, uses technical terms but explain them clearly
                  </div>
                  <Textarea 
                    id="style"
                    placeholder="Describe your AI Agent response style. Separate by's"
                    className="mt-2 resize-none"
                    rows={4}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="knowledge">Knowledge</Label>
                  <div className="text-sm text-gray-500">
                    Example: Blockchain Technology, DeFi Protocols, Smart Contract development, Tokenomics, Web3 Infrastructure, Cryptography, Sustainable Technology, Renewable Energy
                  </div>
                  <Textarea 
                    id="knowledge"
                    placeholder="Give your agent some knowledge, separate by /'s"
                    className="mt-2 resize-none"
                    rows={4}
                  />
                </div>
              </div>
            </Card>

            <div className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button onClick={onNext} className="bg-blue-600 hover:bg-blue-700">Next: Token Configuration</Button>
            </div>
        </div>   
    )
}

export default BasicInformation;