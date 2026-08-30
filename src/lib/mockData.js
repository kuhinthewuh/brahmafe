export const MISSION_STATS = {
  activeMissions: 1,
  workersActive: 2,
  recoveries: 1,
  confirmedStateLost: 0,
};

export const WORKER_DISTRIBUTION = [
  { name: 'Created', value: 18, highlight: false },
  { name: 'Completed', value: 11, highlight: false },
  { name: 'Retired', value: 4, highlight: false },
  { name: 'Replaced', value: 2, highlight: true },
  { name: 'Failed', value: 1, highlight: false },
];

export const MOTHER_ACTIVITY_CHART = [
  { time: '09:00', decisionLoad: 40, workerCoordination: 24, evidenceConfidence: 60 },
  { time: '10:00', decisionLoad: 30, workerCoordination: 13, evidenceConfidence: 75 },
  { time: '11:00', decisionLoad: 20, workerCoordination: 50, evidenceConfidence: 80 },
  { time: '12:00', decisionLoad: 27, workerCoordination: 39, evidenceConfidence: 85 },
  { time: '13:00', decisionLoad: 18, workerCoordination: 48, evidenceConfidence: 90 },
  { time: '14:00', decisionLoad: 23, workerCoordination: 38, evidenceConfidence: 87 },
  { time: '15:00', decisionLoad: 34, workerCoordination: 43, evidenceConfidence: 92 },
];

export const RELIABILITY_TREND = [
  { time: '09AM', value: 99.1 },
  { time: '01PM', value: 99.8 },
  { time: '09PM', value: 99.5 },
];

export const MOTHER_TIMELINE = [
  { id: 1, action: 'Requested human authority', time: '14:05', type: 'warning' },
  { id: 2, action: 'Created remediation worker', time: '14:01', type: 'info' },
  { id: 3, action: 'Confirmed root cause', time: '13:59', type: 'success' },
  { id: 4, action: 'Restored worker checkpoint', time: '13:58', type: 'info' },
  { id: 5, action: 'Detected worker failure', time: '13:58', type: 'error' },
  { id: 6, action: 'Pruned network hypothesis', time: '13:45', type: 'info' },
  { id: 7, action: 'Created deployment investigator', time: '13:30', type: 'info' },
  { id: 8, action: 'Ranked incident hypotheses', time: '13:28', type: 'info' },
];

export const WORKERS_LIST = [
  {
    id: 'worker-018',
    role: 'Deployment Investigator',
    status: 'COMPLETED',
    mission: '#042',
    created: '22:53:58',
    lifetime: '43 sec',
    mcpCalls: 4,
    evidenceProduced: 3,
    checkpoint: 'PRESERVED',
  },
  {
    id: 'worker-019',
    role: 'Runtime Investigator',
    status: 'FAILED',
    failure: 'malformed_tool_response',
    mission: '#042',
    created: '22:54:41',
    lifetime: '12 sec',
    mcpCalls: 2,
    evidenceProduced: 0,
    checkpoint: 'PRESERVED',
    replacement: 'worker-020'
  },
  {
    id: 'worker-020',
    role: 'Replacement Investigator',
    status: 'ACTIVE',
    mission: '#042',
    created: '22:54:55',
    lifetime: 'Ongoing',
    mcpCalls: 5,
    evidenceProduced: 2,
    checkpoint: 'ACTIVE',
    restoredFrom: 'worker-019'
  }
];

export const CODE_CHANGES_LIST = [
  {
    id: 'cc-01',
    file: 'requestMatcher.ts',
    mission: '#042',
    status: 'DEPLOYED',
    improvement: '12.2×',
    generatedBy: 'Remediation Worker',
    verifiedBy: 'TRUEFORGE DAYTONA',
    approvedBy: 'HUMAN',
    timestamp: '14:08',
    beforeMetric: '1140 ms',
    afterMetric: '93 ms',
    candidateHash: '8f9a2b4c',
    tests: '5 / 5 PASS',
    funcBenchmarkBefore: '289ms',
    funcBenchmarkAfter: '2ms',
    serviceP95Before: '1140ms',
    serviceP95After: '93ms',
    productionWritesBefore: 0,
    diff: `--- requestMatcher.ts
+++ requestMatcher.ts
@@ -42,7 +42,7 @@
-  const matches = requests.filter(r => r.id === target.id);
+  const matches = requestMap.get(target.id) || [];
`
  }
];
