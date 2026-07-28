export const projects = [
  {
    slug: 'trading-infrastructure',
    title: 'Coordinating 50+ trading accounts in under 100 ms',
    shortTitle: 'Distributed Trading Infrastructure',
    eyebrow: 'Production systems · 2025–Present',
    summary:
      'A production-grade distributed MT5 copy-trading platform built for low-latency coordination, consistent execution, and observable failure handling across multiple hosts.',
    context:
      'At DP Consulting, I architected and deployed a distributed copy-trading platform that coordinates more than 50 concurrent MT5 accounts across multiple hosts.',
    challenge:
      'Asynchronous execution, network latency, and partial failures can leave accounts in inconsistent states. The platform needed to replicate signals quickly while making coordination failures and latency anomalies immediately visible.',
    contribution: [
      'Designed the distributed platform and its multi-host execution flow.',
      'Developed state-machine orchestration for explicit, inspectable account transitions.',
      'Implemented compare-and-swap synchronisation to mitigate inconsistent concurrent updates.',
      'Built real-time monitoring and event reporting for execution failures, latency anomalies, and account-state inconsistencies.',
    ],
    result: [
      'Supports more than 50 concurrent accounts across multiple hosts.',
      'Replicates trading signals in under 100 milliseconds.',
      'Improved coordinated execution success from 60% to 95%.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'NATS JetStream',
      'PostgreSQL',
      'TimescaleDB',
      'Docker',
      'MT5',
      'Asynchronous programming',
      'State machines',
      'CAS synchronisation',
    ],
    metrics: [
      { value: '50+', label: 'concurrent accounts' },
      { value: '<100 ms', label: 'signal replication' },
      { value: '95%', label: 'coordinated execution success' },
    ],
    shareImage: '/og/trading-infrastructure.png',
    visual: {
      type: 'trading',
      alt: 'Anonymous distributed trading architecture showing signal, coordination, execution, and monitoring flows.',
      cues: [
        'Signal source and message-stream event flow',
        'Multi-host account workers and state transitions',
        'Compare-and-swap coordination boundary',
        'Latency and execution-failure observability',
      ],
    },
  },
  {
    slug: 'industrial-predictive-modelling',
    title: 'Finding signal in noisy industrial process data',
    shortTitle: 'Industrial Predictive Modelling',
    eyebrow: 'MSc dissertation · 2023–2024',
    summary:
      'A comparative machine-learning study of aluminium-alloy hardness using chemical composition, industrial processing profiles, and anomaly-aware analysis.',
    context:
      'For my MSc dissertation at WMG, University of Warwick, I investigated whether aluminium-alloy hardness could be predicted from chemical composition and industrial production and quality-control data.',
    challenge:
      'Hardness depends on interacting material and processing factors, while real industrial observations contain noise and anomalous ageing behaviour. The work required a defensible comparison of model families and careful analysis of outliers.',
    contribution: [
      'Prepared industrial chemical-composition, processing-profile, and quality-control data for supervised learning.',
      'Developed and evaluated DNN, SVR, decision-tree, and XGBoost regression models.',
      'Applied Local Outlier Factor to identify anomalous observations in the ageing process.',
      'Evaluated how anomalous observations affected predictive performance.',
    ],
    result: [
      'Established a comparative modelling workflow across neural, kernel, tree, and boosted-tree approaches.',
      'Established an anomaly-aware evaluation process to assess how ageing-process observations affected predictive performance.',
    ],
    technologies: [
      'Python',
      'PyTorch',
      'scikit-learn',
      'Keras',
      'DNN',
      'SVR',
      'Decision Tree',
      'XGBoost',
      'Local Outlier Factor',
      'Regression',
    ],
    metrics: [],
    shareImage: '/og/industrial-predictive-modelling.png',
    visual: {
      type: 'industrial',
      alt: 'Industrial predictive modelling workflow from process data through anomaly analysis to regression model comparison.',
      cues: [
        'Chemical composition and processing-profile inputs',
        'Ageing-process anomaly distribution',
        'DNN, SVR, decision-tree, and XGBoost comparison',
        'Predicted versus observed hardness',
      ],
    },
  },
  {
    slug: 'trajectory-intelligence',
    title: 'Turning GPS trajectories into predictable movement patterns',
    shortTitle: 'Trajectory Intelligence',
    eyebrow: 'BSc dissertation · 2022–2023',
    summary:
      'A location-extraction and movement-prediction pipeline for large, noisy, heterogeneous spatio-temporal trajectory data.',
    context:
      'For my Computer Science dissertation at the University of Warwick, I developed location-extraction and movement-prediction models using the GeoLife GPS trajectory dataset.',
    challenge:
      'Raw trajectory data is large, noisy, and irregular in both space and time. Extracting meaningful places efficiently was a necessary foundation for learning useful movement patterns.',
    contribution: [
      'Developed and evaluated k-means and DBSCAN location-extraction models.',
      'Built an LSTM-based movement-prediction pipeline for heterogeneous spatio-temporal trajectories.',
      'Designed trajectory segmentation and preprocessing steps to reduce clustering cost.',
      'Optimised the implementation and evaluated it on the GeoLife dataset.',
    ],
    result: [
      'Reduced clustering runtime by approximately 10× through segmentation, preprocessing, and implementation optimisation.',
      'Produced an end-to-end workflow from raw GPS traces to extracted locations and predicted movement.',
    ],
    technologies: [
      'Python',
      'scikit-learn',
      'Keras',
      'k-means',
      'DBSCAN',
      'LSTM',
      'Trajectory segmentation',
      'Spatio-temporal modelling',
      'GeoLife',
    ],
    metrics: [{ value: '≈10×', label: 'faster clustering runtime' }],
    shareImage: '/og/trajectory-intelligence.png',
    visual: {
      type: 'trajectory',
      alt: 'GPS trajectories transformed into clustered locations and a predicted movement path.',
      cues: [
        'Raw and segmented GPS trajectories',
        'k-means and DBSCAN cluster comparison',
        'Extracted location nodes',
        'Observed and predicted movement sequence',
      ],
    },
  },
];
