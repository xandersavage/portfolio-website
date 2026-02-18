// src/data/projectsData.ts

export interface Metric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnailUrl: string;
  images: string[];
  technologies: string[];
  features: string[];
  challenges?: string[];
  solutions?: string[];
  githubUrl?: string;
  liveUrl?: string;
  streamlitUrl?: string;
  status: "completed" | "in-progress";
  isFeatured: boolean;
  category: string[];
  type: "web" | "ml" | "fullstack";
  metrics?: Metric[];
}

export const projects: Project[] = [
  // ─── WEB PROJECTS ───────────────────────────────────────────────────────────
  {
    id: "palma-wallet",
    title: "Palma Wallet",
    shortDescription:
      "Africa-first non-custodial crypto wallet landing page — empowering Africans with financial sovereignty.",
    fullDescription:
      "Palma Wallet is a secure, non-custodial cryptocurrency wallet built for Africans. I designed and built the landing page for this fintech product, which is live on the Apple App Store. The platform enables users to safely store, send, and receive crypto assets while retaining full control over their private keys. The site showcases the product's mission, key features, leadership team, and download links — built with Next.js, React, and Tailwind CSS, deployed on Vercel.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    features: [
      "Self-custody security — your keys, your crypto",
      "Africa-first design supporting local currencies and payment methods",
      "Mobile-first with offline capabilities",
      "Privacy-protected — no KYC for basic wallet functions",
      "Lightning-fast cross-Africa transactions with minimal fees",
      "App Store live — available on Apple App Store",
    ],
    challenges: [
      "Communicating complex crypto concepts to a non-technical African audience",
      "Designing a mobile-first experience that works in low-connectivity environments",
      "Building trust and credibility for a new fintech product",
    ],
    solutions: [
      "Used clear, jargon-free copy and visual storytelling to explain self-custody",
      "Implemented progressive enhancement and optimized assets for low-bandwidth users",
      "Showcased leadership team, mission, and security principles prominently",
    ],
    githubUrl: "https://github.com/xandersavage/palmawallet",
    liveUrl: "https://apps.apple.com/us/app/palma-wallet/id6747275024",
    status: "completed",
    isFeatured: true,
    category: ["Web", "Fintech", "Landing Page"],
    type: "web",
  },
  {
    id: "portfolio-website",
    title: "This Portfolio",
    shortDescription:
      "Modern developer portfolio showcasing my dual expertise as a Full Stack Developer and ML/AI Engineer.",
    fullDescription:
      "This portfolio website was built to showcase my projects, skills, and professional journey across both web development and machine learning. It features a clean, responsive design with interactive elements including animated sections, a certifications marquee, and a full-screen project overlay. Built with Next.js and Tailwind CSS, incorporating custom animations from MagicUI and Framer Motion. The site is designed to provide visitors with an engaging experience while highlighting my technical capabilities across both disciplines.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1510&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1528&q=80",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MagicUI",
      "Framer Motion",
      "Shadcn UI",
    ],
    features: [
      "Dual-identity positioning for web + ML/AI work",
      "Full-screen project overlay with tabbed details",
      "Category filter for Web and ML/AI projects",
      "Certifications marquee with Udemy certificates",
      "Responsive design with dark/light mode",
      "Animated section transitions and micro-interactions",
    ],
    challenges: [
      "Balancing aesthetics with performance across all devices",
      "Presenting both web and ML work cohesively",
      "Implementing engaging interactive elements without sacrificing load time",
    ],
    solutions: [
      "Used MagicUI and Framer Motion for polished, performant animations",
      "Designed a unified visual language with category-based filtering",
      "Optimized assets and implemented lazy loading throughout",
    ],
    githubUrl: "https://github.com/xandersavage/portfolio-website",
    liveUrl: "https://olomukoro-portfolio.vercel.app/",
    status: "completed",
    isFeatured: true,
    category: ["Web", "Portfolio", "Personal"],
    type: "web",
  },

  // ─── ML / AI PROJECTS ────────────────────────────────────────────────────────
  {
    id: "breast-cancer-microservice",
    title: "Breast Cancer Diagnostic Microservice",
    shortDescription:
      "Production-grade ML microservice with FastAPI backend and Streamlit frontend for tumor classification.",
    fullDescription:
      "An end-to-end production ML system built with a decoupled microservice architecture. The FastAPI backend handles strict data validation with Pydantic v2, feature selection (radius, texture, perimeter), and serves a Random Forest model using a singleton pattern for efficient inference. The Streamlit frontend provides an interactive diagnostic interface. The system is deployed on Render (API) and Streamlit Cloud (frontend), demonstrating real-world ML deployment patterns including service-oriented architecture, input validation, and modular design.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Streamlit",
      "scikit-learn",
      "Pydantic v2",
      "Random Forest",
      "Render",
    ],
    features: [
      "Decoupled FastAPI backend + Streamlit frontend architecture",
      "Strict input validation with Pydantic v2 models",
      "Optimized feature selection (radius, texture, perimeter)",
      "Singleton pattern for efficient model serving",
      "Deployed on Render (API) + Streamlit Cloud (UI)",
      "Interactive diagnostic interface with real-time predictions",
    ],
    challenges: [
      "Designing a clean decoupled architecture for ML serving",
      "Ensuring robust input validation for medical data",
      "Optimizing inference latency on free-tier cloud deployments",
    ],
    solutions: [
      "Implemented service-oriented pattern with clear API contracts",
      "Used Pydantic v2 for strict schema validation at the API boundary",
      "Applied singleton model loading to avoid repeated deserialization",
    ],
    githubUrl: "https://github.com/xandersavage/breast-cancer-model-api",
    streamlitUrl: "https://github.com/xandersavage/breast-cancer-model-streamlit",
    status: "completed",
    isFeatured: true,
    category: ["ML", "Healthcare", "Microservice"],
    type: "ml",
    metrics: [
      { label: "Model", value: "Random Forest" },
      { label: "Architecture", value: "Microservice" },
      { label: "Deployment", value: "Render + Streamlit" },
    ],
  },
  {
    id: "pneumonia-cnn",
    title: "Pneumonia Detection CNN",
    shortDescription:
      "Deep learning CNN classifying pneumonia from 5,800+ chest X-ray images with 97% ROC-AUC.",
    fullDescription:
      "A Convolutional Neural Network built to detect pneumonia from chest X-ray images. The model uses a custom Sequential CNN architecture with Conv2D, BatchNormalization, and MaxPooling blocks (32→64→128→256 filters), followed by Dense layers for binary classification. Training used EarlyStopping, ReduceLROnPlateau, and ModelCheckpoint callbacks. The dataset of 5,800+ images was preprocessed with augmentation (rotation, zoom, flip) to improve generalization. Evaluation includes classification report, confusion matrix, and ROC/AUC curve — achieving 97% ROC-AUC and 99% recall for pneumonia detection.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN",
      "scikit-learn",
      "Plotly",
      "Seaborn",
    ],
    features: [
      "Custom Sequential CNN with 4 Conv2D blocks (32→256 filters)",
      "Data augmentation: rotation, zoom, horizontal flip",
      "EarlyStopping + ReduceLROnPlateau + ModelCheckpoint callbacks",
      "Full evaluation: accuracy, precision, recall, F1, ROC-AUC",
      "Interactive Plotly visualizations of training dynamics",
      "Confusion matrix heatmap and prediction grid",
    ],
    challenges: [
      "Handling class imbalance between NORMAL and PNEUMONIA images",
      "Preventing overfitting on a relatively small medical dataset",
      "Maximizing recall to minimize false negatives in a medical context",
    ],
    solutions: [
      "Applied aggressive data augmentation to increase effective dataset size",
      "Used BatchNormalization and EarlyStopping to regularize training",
      "Optimized decision threshold to prioritize recall for pneumonia class",
    ],
    githubUrl: "https://github.com/xandersavage/cnn-pneumonia-prediction",
    status: "completed",
    isFeatured: true,
    category: ["ML", "Deep Learning", "Healthcare"],
    type: "ml",
    metrics: [
      { label: "ROC-AUC", value: "0.97" },
      { label: "Test Accuracy", value: "83%" },
      { label: "Pneumonia Recall", value: "99%" },
    ],
  },
  {
    id: "telco-churn-pipeline",
    title: "Telco Customer Churn Pipeline",
    shortDescription:
      "End-to-end ML classification pipeline comparing 10+ algorithms with GridSearchCV hyperparameter tuning.",
    fullDescription:
      "A comprehensive classification pipeline for predicting customer churn in a telecom dataset. The project benchmarks 10+ classifiers including KNN, Decision Tree, Random Forest, SVM, Logistic Regression, Naive Bayes, Bagging, AdaBoost, CatBoost, and XGBoost. The pipeline includes full preprocessing (OneHotEncoder, StandardScaler, label encoding, missing value handling), GridSearchCV hyperparameter optimization, and evaluation using accuracy, precision, recall, F1, and confusion matrices. Results are visualized with interactive Plotly charts for clear model comparison.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1415&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80",
    ],
    technologies: [
      "Python",
      "scikit-learn",
      "XGBoost",
      "CatBoost",
      "Plotly",
      "Pandas",
      "GridSearchCV",
    ],
    features: [
      "10+ classifiers benchmarked in a unified pipeline",
      "Full preprocessing: OneHotEncoder, StandardScaler, label encoding",
      "GridSearchCV hyperparameter optimization",
      "Evaluation: accuracy, precision, recall, F1, confusion matrix",
      "Interactive Plotly visualizations for model comparison",
      "Missing value handling and feature engineering",
    ],
    challenges: [
      "Comparing classifiers fairly with consistent preprocessing",
      "Managing the computational cost of GridSearchCV across many models",
      "Interpreting model performance trade-offs for a business context",
    ],
    solutions: [
      "Built a unified sklearn Pipeline for consistent preprocessing across all models",
      "Used StratifiedKFold to ensure balanced evaluation across folds",
      "Created visual comparison charts to communicate results clearly",
    ],
    githubUrl: "https://github.com/xandersavage/end-to-end-classification-with-model-tuning",
    status: "completed",
    isFeatured: false,
    category: ["ML", "Classification", "Business Intelligence"],
    type: "ml",
    metrics: [
      { label: "Models Compared", value: "10+" },
      { label: "Optimization", value: "GridSearchCV" },
      { label: "CV Strategy", value: "StratifiedKFold" },
    ],
  },
  {
    id: "customer-segmentation",
    title: "Customer Segmentation (Clustering)",
    shortDescription:
      "Unsupervised ML clustering analysis using KMeans, Hierarchical, DBSCAN, and MeanShift with PCA visualizations.",
    fullDescription:
      "An end-to-end unsupervised learning project exploring customer segmentation on a Mall Customers dataset. The project implements and compares four clustering algorithms: KMeans, Hierarchical (with dendrogram gap detection), DBSCAN, and MeanShift. Optimal K selection is automated using silhouette analysis and the Calinski-Harabasz index. Results are visualized with 2D and 3D PCA projections, radar charts, and business-friendly cluster profiles. All plots are saved as reproducible outputs for reporting.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1415&q=80",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1415&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80",
    ],
    technologies: [
      "Python",
      "scikit-learn",
      "Plotly",
      "Pandas",
      "NumPy",
      "PCA",
      "Matplotlib",
    ],
    features: [
      "KMeans, Hierarchical, DBSCAN, and MeanShift clustering",
      "Automated K selection via silhouette + Calinski-Harabasz analysis",
      "Dendrogram gap detection for hierarchical clustering",
      "2D and 3D PCA visualizations of cluster structure",
      "Business-friendly radar charts and cluster profiles",
      "Reproducible saved plots for reporting",
    ],
    challenges: [
      "Selecting the optimal number of clusters without ground truth labels",
      "Comparing density-based and centroid-based methods fairly",
      "Translating cluster outputs into actionable business insights",
    ],
    solutions: [
      "Automated K selection using multiple internal validation metrics",
      "Applied PCA for dimensionality reduction before visualization",
      "Created radar charts and cluster profiles for business interpretation",
    ],
    githubUrl: "https://github.com/xandersavage/customer-segmentation-using-clustering-algorithms",
    status: "completed",
    isFeatured: false,
    category: ["ML", "Unsupervised Learning", "Business Intelligence"],
    type: "ml",
    metrics: [
      { label: "Algorithms", value: "4" },
      { label: "Validation", value: "Silhouette + CH" },
      { label: "Visualization", value: "2D + 3D PCA" },
    ],
  },
  {
    id: "energy-load-forecasting",
    title: "Energy Load Forecasting",
    shortDescription:
      "Time series forecasting comparing Prophet vs SARIMAX for 30-day ahead electricity demand prediction.",
    fullDescription:
      "An end-to-end time series forecasting project using Italy's 2016 hourly electricity load dataset with solar generation as an exogenous regressor. The project builds and compares two complementary models: Facebook Prophet (with Italian national holidays and solar as an external regressor) and SARIMAX (order=(2,1,1), seasonal_order=(1,0,1,24)). Data preprocessing includes DST anomaly detection and repair, outlier removal, forward/backward fill, and feature engineering. Models are evaluated on the last 30 days (720 hours) using MAE, RMSE, and MAPE. Prophet achieves ~12% MAPE vs SARIMAX's ~16%.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80",
    ],
    technologies: [
      "Python",
      "Prophet",
      "SARIMAX",
      "statsmodels",
      "Pandas",
      "Plotly",
      "NumPy",
    ],
    features: [
      "Prophet with Italian holidays + solar exogenous regressor",
      "SARIMAX with explicit seasonal structure and exogenous regressors",
      "DST anomaly detection and linear interpolation repair",
      "30-day (720-hour) ahead forecasting",
      "Model comparison using MAE, RMSE, and MAPE",
      "Synthetic data fallback for reproducible pipeline testing",
    ],
    challenges: [
      "Handling DST-related anomalies and corrupted data regions",
      "Tuning SARIMAX seasonal order for hourly electricity data",
      "Comparing fundamentally different forecasting paradigms fairly",
    ],
    solutions: [
      "Implemented visual inspection + linear interpolation for anomaly repair",
      "Used auto_arima as a starting point then refined manually",
      "Evaluated both models on identical held-out test sets with the same metrics",
    ],
    githubUrl: "https://github.com/xandersavage/electric-load-forecasting",
    status: "completed",
    isFeatured: false,
    category: ["ML", "Time Series", "Energy"],
    type: "ml",
    metrics: [
      { label: "Prophet MAPE", value: "~12%" },
      { label: "SARIMAX MAPE", value: "~16%" },
      { label: "Forecast Horizon", value: "30 days" },
    ],
  },
];

export default projects;
