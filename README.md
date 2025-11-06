# Market Research & Predictive Analytics Model

A comprehensive web-based platform for market research analysis and predictive analytics, built with Next.js and modern web technologies. This application enables data-driven decision making through advanced forecasting models, data management, and automated reporting.

## 🚀 Features

### Dashboard Overview
- **Real-time KPI Monitoring**: Track key metrics like forecast accuracy (94.2%), data points analyzed, and model performance
- **Visual Analytics**: Interactive charts displaying demand forecasts, trend analysis, and market segments
- **Performance Metrics**: Monitor model accuracy, processing time, and active deployments

### Data Management
- **Multi-source Integration**: Support for SQL databases, CSV imports, and API integrations
- **Data Quality Monitoring**: Real-time data quality scoring and validation
- **Source Management**: Track data freshness, record counts, and connection status
- **Data Upload & Export**: Easy data import/export capabilities with validation

### Forecasting & Analytics
- **Multiple ML Models**: 
  - Linear Regression
  - Random Forest Ensemble
  - ARIMA Time Series
  - XGBoost
- **Model Performance Metrics**: 
  - Accuracy tracking
  - RMSE (Root Mean Square Error)
  - MAPE (Mean Absolute Percentage Error)
- **Interactive Visualizations**:
  - Forecast vs Actual comparisons
  - Residual analysis
  - Feature importance charts
- **Model Training & Deployment**: Train, evaluate, and deploy models with a single click

### Reports & Insights
- **Automated Report Generation**: 
  - Quarterly market analysis
  - Monthly demand forecasting summaries
  - Weekly competitive analysis
  - Ad-hoc custom reports
- **Actionable Insights**: AI-generated recommendations and strategic insights
- **Export Capabilities**: Download reports in various formats
- **Key Metrics Dashboard**: Revenue impact, market trends, and growth opportunities

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 16.0.0](https://nextjs.org/) with React 19.2.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.9 with custom animations
- **UI Components**: 
  - Radix UI primitives
  - Custom component library with shadcn/ui
  - Lucide React icons

### Data Visualization
- **Charts**: Recharts for interactive data visualization
- **Components**: Line charts, bar charts, scatter plots, and more

### Form Management
- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **@hookform/resolvers**: Form validation integration

### Additional Libraries
- **date-fns**: Date manipulation and formatting
- **next-themes**: Dark/light theme support
- **Vercel Analytics**: Performance monitoring
- **Sonner**: Toast notifications

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: Version 18.x or higher
- **npm**: Version 10.x or higher (comes with Node.js)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/johaankjis/Market-Research---Predictive-Analytics-Model.git
   cd Market-Research---Predictive-Analytics-Model
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (if required)
   ```bash
   # Create a .env.local file if needed
   # Add any necessary environment variables
   ```

## 💻 Usage

### Development Mode

Start the development server with hot-reload:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Production Build

Create an optimized production build:

```bash
npm run build
```

### Start Production Server

Run the production build:

```bash
npm start
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 📁 Project Structure

```
Market-Research---Predictive-Analytics-Model/
├── app/                          # Next.js app directory
│   ├── data/                     # Data management pages
│   ├── forecasting/              # Forecasting analytics pages
│   ├── reports/                  # Reports and insights pages
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/                   # React components
│   ├── ui/                       # Reusable UI components
│   ├── dashboard-overview.tsx    # Dashboard component
│   ├── data-management.tsx       # Data management component
│   ├── forecasting-analytics.tsx # Forecasting component
│   ├── navigation.tsx            # Navigation component
│   ├── reports-insights.tsx      # Reports component
│   └── theme-provider.tsx        # Theme context provider
├── hooks/                        # Custom React hooks
├── lib/                          # Utility functions
│   └── utils.ts                  # Helper utilities
├── public/                       # Static assets
├── styles/                       # Additional styles
├── components.json               # Component configuration
├── next.config.mjs               # Next.js configuration
├── package.json                  # Dependencies and scripts
├── postcss.config.mjs            # PostCSS configuration
├── tailwind.config.js            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

## 🔧 Configuration

### Next.js Configuration

The project uses custom Next.js configuration (`next.config.mjs`):
- TypeScript build errors are ignored for flexibility
- Image optimization is disabled for better compatibility

### TypeScript Configuration

TypeScript is configured with strict mode and modern ES features:
- Target: ES6
- Module resolution: bundler
- Path aliases: `@/*` maps to project root

## 🎨 Customization

### Theme

The application supports light and dark themes using `next-themes`. Theme toggle is available in the navigation bar.

### Components

UI components are built with Radix UI and can be customized in the `components/ui/` directory.

### Styling

Tailwind CSS classes can be customized in the Tailwind configuration file.

## 📊 Key Features Explained

### 1. Dashboard Overview
The main dashboard provides a comprehensive view of:
- Current forecast accuracy vs baseline models
- Total data points analyzed
- Report generation efficiency
- Active production models

### 2. Data Management
Manage multiple data sources:
- Connect to SQL databases
- Import CSV files
- Integrate with external APIs
- Monitor data quality in real-time

### 3. Forecasting Models
Deploy and compare multiple ML models:
- Choose the best model based on accuracy metrics
- Visualize forecast vs actual performance
- Analyze residuals and feature importance
- Train models on new data

### 4. Automated Reports
Generate professional reports:
- Schedule automatic report generation
- Export in multiple formats
- Include AI-generated insights
- Track key business metrics

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Development Guidelines

- Follow TypeScript best practices
- Use ESLint for code quality
- Write meaningful commit messages
- Test your changes before submitting
- Update documentation as needed

## 🐛 Troubleshooting

### Common Issues

**Build Errors**: If you encounter build errors, try:
```bash
rm -rf node_modules package-lock.json
npm install
```

**Port Already in Use**: Change the port:
```bash
npm run dev -- -p 3001
```

**TypeScript Errors**: The project is configured to ignore TypeScript build errors, but you should still fix them in development.

## 📈 Performance

The application is optimized for performance:
- Server-side rendering with Next.js
- Code splitting and lazy loading
- Optimized bundle size
- Vercel Analytics integration

## 🔒 Security

- No sensitive data is hardcoded
- Environment variables for configuration
- Regular dependency updates recommended
- Input validation with Zod schemas

## 📄 License

This project is available for use under the terms specified by the repository owner.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Charts powered by [Recharts](https://recharts.org/)

## 📧 Contact

For questions or support, please open an issue in the GitHub repository.

---

**Note**: This is a demo application showcasing predictive analytics capabilities. For production use, ensure proper data security, model validation, and testing.
