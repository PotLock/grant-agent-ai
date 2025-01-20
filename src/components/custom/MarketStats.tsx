const MarketStats = () => {
    return (
      <div className="flex items-center space-x-4 text-sm">
        <div>
          Open <span className="font-medium">408.36</span>
        </div>
        <div>
          High <span className="font-medium">408.36</span>
        </div>
        <div>
          Low <span className="font-medium">408.36</span>
        </div>
        <div>
          Close <span className="font-medium">408.36</span>
        </div>
        <div className="text-green-500">+8.50 +2.14%</div>
        <div>Vol 56,254,781</div>
      </div>
    )
  }
  
export default MarketStats;