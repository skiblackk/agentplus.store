"use client"

import { useState } from "react"

export default function ROICalculator() {
  const [hourlyRate, setHourlyRate] = useState(50)
  const [hoursPerWeek, setHoursPerWeek] = useState(10)

  const weeklySavings = hourlyRate * hoursPerWeek
  const monthlySavings = weeklySavings * 4.33
  const yearlySavings = monthlySavings * 12

  const starterCost = 200
  const professionalCost = 499
  const premiumCost = 1000

  const starterROI = yearlySavings - starterCost
  const professionalROI = yearlySavings - professionalCost
  const premiumROI = yearlySavings - premiumCost

  return (
    <section className="py-12 sm:py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Calculate Your ROI
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            See how much time and money Agent Plus can save your business
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Calculator Input */}
          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-2xl p-6 sm:p-8">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <label className="block text-white font-semibold mb-3 text-sm sm:text-base">
                  Your Hourly Rate: ${hourlyRate}
                </label>
                <input
                  type="range"
                  min="10"
                  max="500"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>$10</span>
                  <span>$500</span>
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-3 text-sm sm:text-base">
                  Hours Saved Per Week: {hoursPerWeek}
                </label>
                <input
                  type="range"
                  min="1"
                  max="40"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>1 hour</span>
                  <span>40 hours</span>
                </div>
              </div>

              <div className="bg-black/50 rounded-xl p-4 sm:p-6 border border-purple-500/20">
                <p className="text-gray-400 text-xs sm:text-sm mb-2">Weekly Time Saved</p>
                <p className="text-2xl sm:text-3xl font-bold text-purple-400">{hoursPerWeek} hours</p>
                <p className="text-gray-400 text-xs sm:text-sm mt-2">Worth ${weeklySavings.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* ROI Results */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-xl p-4 sm:p-6 hover:border-purple-500/50 transition-all">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-white font-semibold text-sm sm:text-base">Starter Plan</h3>
                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">$200</span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm mb-3">Annual ROI</p>
              <p className="text-2xl sm:text-3xl font-bold text-green-400">${starterROI.toLocaleString()}</p>
              <p className="text-gray-400 text-xs mt-2">
                Payback in {(starterCost / monthlySavings).toFixed(1)} months
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-2 border-purple-500/50 rounded-xl p-4 sm:p-6 ring-2 ring-purple-500/20">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-white font-semibold text-sm sm:text-base">Professional Plan</h3>
                <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded">Most Popular</span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm mb-3">Annual ROI</p>
              <p className="text-2xl sm:text-3xl font-bold text-green-400">${professionalROI.toLocaleString()}</p>
              <p className="text-gray-400 text-xs mt-2">
                Payback in {(professionalCost / monthlySavings).toFixed(1)} months
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-xl p-4 sm:p-6 hover:border-purple-500/50 transition-all">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-white font-semibold text-sm sm:text-base">Premium Plan</h3>
                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">$1,000</span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm mb-3">Annual ROI</p>
              <p className="text-2xl sm:text-3xl font-bold text-green-400">${premiumROI.toLocaleString()}</p>
              <p className="text-gray-400 text-xs mt-2">
                Payback in {(premiumCost / monthlySavings).toFixed(1)} months
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl p-4 sm:p-6">
          <p className="text-gray-300 text-sm sm:text-base">
            <span className="font-semibold text-purple-400">💡 Pro Tip:</span> Most businesses see ROI within the first
            month. Agent Plus pays for itself through time savings alone.
          </p>
        </div>
      </div>
    </section>
  )
}
