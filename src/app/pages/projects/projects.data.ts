export const projects = [
  {
    title: 'PII Extraction',
    subtitle: 'Amazon IN Pharmacy',
    description: 'Automated extraction of personally identifiable information (PII) from prescriptions using AWS Textract, Medical Comprehend, and custom ML models.',
    bullets: [
      'Replaced manual pharmacist workflows by extracting patient, doctor, and hospital data using AWS services.',
      'Collaborated with data scientists to train custom ML models for address and phone number extraction.',
      'Integrated models into scalable Java services with Python-driven orchestration.',
      'Built React.js components for pharmacist interaction and operational dashboards.',
      'Reduced processing time from 60 to 10 minutes, improving efficiency by 6x.'
    ],
    tags: ['AWS', 'Textract', 'Comprehend', 'ML', 'Java', 'Python', 'React'],
    icon: 'id-card'
  },
  {
    title: 'Medicine Validation System',
    subtitle: 'Amazon IN Pharmacy',
    description: 'Built a full-stack system to automatically validate medicines in a cart against prescription entries.',
    bullets: [
      'Designed ML pipelines in Python to evaluate and optimize models for accurate medicine matching.',
      'Built intuitive React.js frontend for real-time pharmacist validation UI.',
      'Developed scalable backend services in Java with secure communication and rigorous testing.'
    ],
    tags: ['ML', 'Python', 'Java', 'React', 'Healthcare'],
    icon: 'pills'
  },
  {
    title: 'ML Metrics Platform',
    subtitle: 'Amazon IN Pharmacy',
    description: 'Unified performance monitoring platform for machine learning models across various pharmacy workflows.',
    bullets: [
      'Automated metric generation for prescription segmentation, digitization, and approval workflows.',
      'Created a backend system that simplifies data collection and visualization.',
      'Reduced development overhead for ML engineers and improved model reliability.'
    ],
    tags: ['ML', 'Metrics', 'Backend', 'Data Analysis', 'Monitoring'],
    icon: 'chart-line'
  },
  {
    title: 'Proactive Budgeting',
    subtitle: 'Amazon Business',
    description: 'Scalable event-driven system for automating budget allocations for new group members based on rules.',
    bullets: [
      'Built with AWS SQS, SNS, Lambda, and DynamoDB using CDK/CloudFormation.',
      'Created failure-tolerant, retry-enabled backend with concurrency controls and CloudWatch alarms.',
      'Built React UI to monitor allocation statuses and errors, enabling proactive budget tracking.'
    ],
    tags: ['AWS', 'Lambda', 'DynamoDB', 'React', 'CloudWatch', 'CDK'],
    icon: 'wallet'
  },
  {
    title: 'Business Gifting Platform',
    subtitle: 'Amazon Business',
    description: 'Developed a gifting platform enabling curated employee catalogs, contributing to $3B in revenue.',
    bullets: [
      'Designed React.js UI for catalog browsing and gifting selection.',
      'Built backend services for catalog processing, scaling, and integration.',
      'Led cross-functional collaboration to deliver a successful holiday launch.'
    ],
    tags: ['React', 'Java', 'Microservices', 'Scalability', 'UI/UX'],
    icon: 'gift'
  },
  {
    title: 'Engineering Accomplishments',
    subtitle: 'Amazon',
    description: 'Key contributions beyond core projects to improve resilience, team productivity, and system reliability.',
    bullets: [
      'SAS Risk Owner: Improved operational reliability through issue resolution and audit compliance.',
      'Scrum Master & Initiative Lead: Led Lunch & Learn series and drove agile efficiency.',
      'System Resilience: Developed canary deployments for Tier-1 services to reduce critical downtime.'
    ],
    tags: ['Leadership', 'Reliability', 'Agile', 'DevOps'],
    icon: 'cogs'
  }
];
