# Market Research & Predictive Analytics Model

A modern, data-driven forecasting system for market analysis and demand prediction built with Next.js and TypeScript. This application provides comprehensive tools for market research, predictive analytics, data management, and automated report generation.

## 🚀 Features

### Dashboard Overview
- **Real-time KPI Monitoring**: Track forecast accuracy, data points analyzed, report generation time, and active models
- **Demand Forecasting Visualization**: Interactive charts comparing actual vs. forecast data
- **Market Trends Analysis**: Comprehensive trend analysis with intuitive data visualizations
- **Performance Metrics**: Monitor system performance and model accuracy in real-time

### Data Management
- **Data Import/Export**: Support for multiple data sources including CSV, API, Database, and Cloud Storage
- **Data Quality Metrics**: Track completeness, accuracy, consistency, and timeliness
- **Historical Data Management**: Maintain and analyze historical market data
- **Data Validation**: Automated data quality checks and validation

### Forecasting Analytics
- **Multiple Forecasting Models**:
  - Linear Regression
  - Random Forest (Ensemble)
  - ARIMA Time Series
  - XGBoost
  - Neural Network
  - Prophet
- **Model Performance Metrics**: Track accuracy, RMSE, and MAPE for each model
- **Forecast Visualization**: Interactive charts showing predictions and confidence intervals
- **Model Comparison**: Side-by-side comparison of different forecasting approaches

### Reports & Insights
- **Automated Report Generation**: Generate comprehensive market analysis reports
- **Multiple Report Types**: Quarterly, Monthly, Weekly, and Ad-hoc reports
- **Key Insights Dashboard**: Automated insight extraction and presentation
- **Actionable Recommendations**: Data-driven recommendations for market strategies
- **Export Capabilities**: Download reports in various formats

## 🛠️ Technology Stack

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **UI Framework**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with custom configuration

### UI Components
- **Component Library**: [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful & consistent icon library
- **Charts**: [Recharts](https://recharts.org/) - Composable charting library
- **Form Management**: [React Hook Form](https://react-hook-form.com/) with Zod validation
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/) - Toast notifications

### Styling & Design
- **CSS Utilities**: `class-variance-authority`, `tailwind-merge`, `clsx`
- **Animations**: `tailwindcss-animate`
- **Theme Support**: `next-themes` for dark/light mode

### Development Tools
- **Package Manager**: pnpm
- **Linting**: ESLint with Next.js configuration
- **Build Tool**: Next.js built-in tooling
- **Analytics**: Vercel Analytics

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [pnpm](https://pnpm.io/) (recommended) or npm

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/johaankjis/Market-Research---Predictive-Analytics-Model.git
   cd Market-Research---Predictive-Analytics-Model
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

### Development

Run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

Build the application for production:

```bash
pnpm build
# or
npm run build
```

### Running Production Build

Start the production server:

```bash
pnpm start
# or
npm start
```

### Linting

Run the linter to check code quality:

```bash
pnpm lint
# or
npm run lint
```

## 📁 Project Structure

```
Market-Research---Predictive-Analytics-Model/
├── app/                          # Next.js app directory (App Router)
│   ├── data/                     # Data management page
│   ├── forecasting/              # Forecasting analytics page
│   ├── reports/                  # Reports & insights page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout component
│   └── page.tsx                  # Home page (Dashboard)
├── components/                   # React components
│   ├── ui/                       # Reusable UI components (Radix UI based)
│   ├── dashboard-overview.tsx   # Dashboard component
│   ├── data-management.tsx      # Data management component
│   ├── forecasting-analytics.tsx # Forecasting component
│   ├── navigation.tsx           # Navigation bar component
│   ├── reports-insights.tsx     # Reports component
│   └── theme-provider.tsx       # Theme provider component
├── lib/                          # Utility functions
│   └── utils.ts                 # Helper utilities
├── public/                       # Static assets
│   └── *.svg, *.png             # Images and icons
├── styles/                       # Additional styles
├── components.json               # Shadcn UI configuration
├── next.config.mjs              # Next.js configuration
├── package.json                 # Project dependencies
├── postcss.config.mjs           # PostCSS configuration
├── tailwind.config.js           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

## 🎯 Key Pages

1. **Dashboard (/)**: Overview of key metrics and performance indicators
2. **Data Management (/data)**: Import, manage, and validate data sources
3. **Forecasting (/forecasting)**: Run and compare predictive models
4. **Reports (/reports)**: Generate and access market analysis reports

## 🎨 UI Components

The application uses a comprehensive set of UI components built on Radix UI:

- **Layout**: Card, Sheet, Tabs, Resizable panels
- **Forms**: Input, Select, Checkbox, Radio, Slider
- **Data Display**: Table, Badge, Progress, Charts
- **Feedback**: Toast, Alert Dialog, Tooltips
- **Navigation**: Dropdown Menu, Context Menu, Menubar
- **And many more...**

## 🔧 Configuration

### TypeScript
The project uses TypeScript with strict mode disabled for build flexibility. Configuration can be found in `tsconfig.json`.

### Next.js
Next.js is configured with:
- Image optimization disabled (for static export compatibility)
- TypeScript build errors ignored (for flexible development)

## 📊 Analytics Integration

The application includes Vercel Analytics for monitoring user interactions and performance metrics.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Repository**: [GitHub](https://github.com/johaankjis/Market-Research---Predictive-Analytics-Model)
- **Documentation**: See inline code documentation for component details
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Radix UI Documentation**: [radix-ui.com/docs](https://www.radix-ui.com/docs)

## 👥 Support

For support, please open an issue in the GitHub repository or contact the development team.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
