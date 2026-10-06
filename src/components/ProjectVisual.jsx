import React, { useState } from "react";
import { 
  AlertTriangle, 
  Bot, 
  MapPin, 
  Mic, 
  Calendar, 
  Clock, 
  UserCheck, 
  TrendingUp, 
  Wallet, 
  ArrowUpRight, 
  Sparkles,
  ShieldAlert,
  Hospital,
  Receipt
} from "lucide-react";

export default function ProjectVisual({ type }) {
  if (type === "civic-ai") {
    return <CivicAIVisual />;
  }
  if (type === "healthcare-queue") {
    return <HealthcareQueueVisual />;
  }
  if (type === "finance-dashboard") {
    return <FinanceDashboardVisual />;
  }
  return null;
}

// 1. Civic TaskForce AI Visual
function CivicAIVisual() {
  const [selectedTab, setSelectedTab] = useState("ai-triage");

  return (
    <div className="w-full h-full bg-neutral-900 text-neutral-100 p-4 sm:p-5 flex flex-col justify-between font-sans select-none border-b border-neutral-200 dark:border-neutral-800">
      {/* Top Bar with UI Label */}
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-neutral-200 tracking-tight">Civic TaskForce AI Dashboard</span>
        </div>
        <span className="text-[11px] text-neutral-400 font-mono">
          AI Triage Engine
        </span>
      </div>

      {/* Middle Interactive / Visual content */}
      <div className="my-3 space-y-3">
        {/* Issue Alert Banner */}
        <div className="p-3 rounded-lg bg-neutral-800/80 border border-neutral-700/60 flex items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-amber-400 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" /> High Severity
              </span>
              <span className="text-neutral-500 text-xs">·</span>
              <span className="text-[11px] text-neutral-400 font-mono">ID #CIV-4892</span>
            </div>
            <p className="text-xs text-neutral-200 font-medium">
              Road Hazard: Deep pothole near Ward 12 Main Junction
            </p>
            <div className="flex items-center gap-3 text-[11px] text-neutral-400 pt-0.5">
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-indigo-400" /> GPS Tagged</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Mic className="w-3 h-3 text-indigo-400" /> Audio Transcript Verified</span>
            </div>
          </div>
          <span className="text-[11px] px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 font-mono font-medium border border-indigo-500/30 shrink-0">
            Assigned: PWD
          </span>
        </div>

        {/* AI Analysis Cards */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2.5 rounded-lg bg-neutral-800/50 border border-neutral-700/40 space-y-1">
            <div className="flex items-center gap-1.5 text-indigo-400 font-medium text-[11px]">
              <Sparkles className="w-3 h-3" />
              <span>Gemini Classification</span>
            </div>
            <p className="font-semibold text-neutral-200 text-xs">Infrastructure / Road</p>
            <p className="text-[10px] text-neutral-400">Confidence: 98.4% · Auto-routed</p>
          </div>

          <div className="p-2.5 rounded-lg bg-neutral-800/50 border border-neutral-700/40 space-y-1">
            <div className="flex items-center gap-1.5 text-emerald-400 font-medium text-[11px]">
              <Bot className="w-3 h-3" />
              <span>Deduplication Check</span>
            </div>
            <p className="font-semibold text-neutral-200 text-xs">Unique Occurrence</p>
            <p className="text-[10px] text-neutral-400">Spatial radius: 50m clear</p>
          </div>
        </div>
      </div>

      {/* Visual Footer Caption */}
      <div className="pt-2.5 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400">
        <span className="flex items-center gap-1.5">
          <ShieldAlert className="w-3 h-3 text-indigo-400" />
          <span>Real-time citizen reporting & officer dispatch</span>
        </span>
        <span className="text-[10px] text-neutral-500 font-mono">Portfolio UI Visual</span>
      </div>
    </div>
  );
}

// 2. QueueLess India Visual
function HealthcareQueueVisual() {
  const [selectedSlot, setSelectedSlot] = useState("10:15 AM");

  const slots = ["09:30 AM", "10:15 AM", "11:00 AM", "02:30 PM"];

  return (
    <div className="w-full h-full bg-slate-900 text-neutral-100 p-4 sm:p-5 flex flex-col justify-between font-sans select-none border-b border-neutral-200 dark:border-neutral-800">
      {/* Top Bar with Hospital Branding */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400">
            <Hospital className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="font-semibold text-neutral-200 tracking-tight">QueueLess India</span>
            <span className="text-[10px] text-slate-400 block -mt-0.5">Hospital Appointment Flow</span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
            <Clock className="w-3 h-3" /> Live Queue
          </span>
        </div>
      </div>

      {/* Middle Interactive / Visual content */}
      <div className="my-3 space-y-3">
        {/* Doctor Profile Mini Card */}
        <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-xs font-semibold text-blue-300">
              Dr. S
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Dr. Alok Sharma</p>
              <p className="text-[11px] text-slate-400">Dept. of Cardiology · OPD Clinic 3</p>
            </div>
          </div>
          <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            Available Today
          </span>
        </div>

        {/* Slot Selection Concept */}
        <div>
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
            <span className="font-medium text-slate-300">Select Time Slot:</span>
            <span>Est. Wait: 10 mins</span>
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            {slots.map((slot) => {
              const isSelected = selectedSlot === slot;
              return (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedSlot(slot)}
                  className={`py-1.5 text-center rounded text-[11px] font-medium transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-blue-600 text-white font-semibold shadow-xs"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  {slot}
                </button>
              );
            })}
          </div>
        </div>

        {/* Digital Queue Token status */}
        <div className="p-2 rounded bg-slate-800/40 border border-slate-700/40 flex items-center justify-between text-[11px]">
          <span className="text-slate-400">Current Serving: <strong className="text-white font-mono">Token #14</strong></span>
          <span className="text-blue-400 font-semibold font-mono">Next Slot: Token #15</span>
        </div>
      </div>

      {/* Visual Footer Caption */}
      <div className="pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
        <span className="flex items-center gap-1.5">
          <UserCheck className="w-3 h-3 text-blue-400" />
          <span>Digital OPD queue & time-slot selection</span>
        </span>
        <span className="text-[10px] text-slate-500 font-mono">Portfolio UI Visual</span>
      </div>
    </div>
  );
}

// 3. SpendWise Visual
function FinanceDashboardVisual() {
  return (
    <div className="w-full h-full bg-neutral-900 text-neutral-100 p-4 sm:p-5 flex flex-col justify-between font-sans select-none border-b border-neutral-200 dark:border-neutral-800">
      {/* Top Bar with Expense Metric */}
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Wallet className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="font-semibold text-neutral-200 tracking-tight">SpendWise Finance</span>
            <span className="text-[10px] text-neutral-400 block -mt-0.5">Budget & Expense Tracker</span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +18.4% Savings
          </span>
        </div>
      </div>

      {/* Middle Interactive / Visual content */}
      <div className="my-3 space-y-3">
        {/* Balance & Spent Row */}
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-lg bg-neutral-800/80 border border-neutral-700/60">
            <p className="text-[11px] text-neutral-400">Monthly Budget</p>
            <p className="text-base font-bold text-white font-mono mt-0.5">$2,400.00</p>
            <div className="w-full bg-neutral-700 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-emerald-500 h-full rounded-full" style={{ width: "68%" }} />
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-neutral-800/80 border border-neutral-700/60">
            <p className="text-[11px] text-neutral-400">Total Spent</p>
            <p className="text-base font-bold text-amber-300 font-mono mt-0.5">$1,632.50</p>
            <p className="text-[10px] text-emerald-400 mt-2 font-mono">68% of budget used</p>
          </div>
        </div>

        {/* Recent Transactions List */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between p-2 rounded bg-neutral-800/40 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-400" />
              <span className="text-neutral-300">Grocery Market</span>
            </div>
            <span className="font-mono text-rose-300 text-[11px]">-$64.20</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded bg-neutral-800/40 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-neutral-300">Freelance Payment</span>
            </div>
            <span className="font-mono text-emerald-400 text-[11px]">+$350.00</span>
          </div>
        </div>
      </div>

      {/* Visual Footer Caption */}
      <div className="pt-2.5 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400">
        <span className="flex items-center gap-1.5">
          <Receipt className="w-3 h-3 text-emerald-400" />
          <span>SQLite Database & Flask backend integration</span>
        </span>
        <span className="text-[10px] text-neutral-500 font-mono">Portfolio UI Visual</span>
      </div>
    </div>
  );
}
