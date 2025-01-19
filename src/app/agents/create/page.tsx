'use client'

import { useState } from 'react'
import BasicInformation from '@/components/sections/BasicInformation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import TokenConfiguration from '@/components/sections/TokenConfiguration'
import PlatformIntegration from '@/components/sections/PlatformIntegration'
import GrantCanvas from '@/components/sections/GrantCanvas'
import WalletConfiguration from '@/components/sections/WalletConfiguration'
import ProgressSteps from '@/components/custom/ProgressSteps'
import toast from 'react-hot-toast'

interface AgentPreview {
  name: string
  description: string
  image: string
}

const emojis = ["😀", "😄", "🤪", "❤️", "🐻", "🐉", "🐶", "😋", "🐺", "🏃", "🍷"]

const CreateAgent = () => {
    const [step, setStep] = useState<number>(1)
    const [preview, setPreview] = useState<AgentPreview>({
        name: '',
        description: '',
        image: '🤖'
    })
    const [payoutBuffer, setPayoutBuffer] = useState<string|null>(null)

    const handleDeploy = () => {
        toast.success('Agent deployed successfully!')
    }

  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="mb-12 text-center bg-blue-50 py-16 px-32">
          <h1 className="text-4xl font-bold tracking-tight">Create AI Agent</h1>
          <p className="mt-2 text-xl text-gray-600">
            Launch your own grant program on social with an agent governed by token holders
          </p>
        </div>

        <ProgressSteps currentStep={step} />

        {/* <BasicInformation preview={preview} setPreview={setPreview} emojis={emojis} /> */}
        <div className='container mx-auto grid gap-8 lg:grid-cols-[1fr,400px] pb-10'>
            {step === 1 && <BasicInformation preview={preview} setPreview={setPreview} emojis={emojis} onNext={() => setStep(2)} />}
            {step === 2 && <TokenConfiguration onBack={() => setStep(1)} onNext={() => setStep(3)} />}
            {step === 3 && <PlatformIntegration onBack={() => setStep(2)} onNext={() => setStep(4)} />}
            {step === 4 && <GrantCanvas onBack={() => setStep(3)} onNext={() => setStep(5)} />}
            {step === 5 && <WalletConfiguration onBack={() => setStep(4)} onDeploy={handleDeploy} payoutBuffer={payoutBuffer} setPayoutBuffer={setPayoutBuffer} />}

            {/* Preview */}
            <div className="lg:sticky lg:top-8 space-y-4">
                <Card className="rounded-xl border p-6">
                <div className="flex justify-between items-start mb-6">
                    <div className="flex items-start gap-3">
                    <div className="text-3xl leading-none mt-1">{preview.image}</div>
                    <div>
                        <h3 className="font-semibold text-lg">{preview.name || 'AI Research DAO'}</h3>
                        <div className="text-sm text-gray-600">$Token</div>
                    </div>
                    </div>
                    <Button variant="outline" size="sm">Preview</Button>
                </div>

                <p className="text-sm text-gray-600 mb-6">
                    {preview.description || 'Lorem ipsum dolor sit amet consectetur. Magnis tincidunt platea adipiscing diam in. Ut urna sed quis at eu nibh sapien neque quis.'}
                </p>

                <div className="space-y-4">
                    <div className="flex justify-between py-1">
                    <span className="text-sm text-gray-600">Governance Type</span>
                    <span className="text-sm font-medium">Admin-based</span>
                    </div>
                    <div className="flex justify-between py-1">
                    <span className="text-sm text-gray-600">Funding Frequency</span>
                    <span className="text-sm font-medium">Weekly</span>
                    </div>
                    <div className="flex justify-between py-1">
                    <span className="text-sm text-gray-600">Evaluation Type</span>
                    <span className="text-sm font-medium">AI + Human Review</span>
                    </div>
                </div>
                </Card>
            </div>
        </div>
      </main>
    </div>
  )
}

export default CreateAgent;