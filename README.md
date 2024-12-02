TravelEase - Multi-language Travel Booking Platform

TravelEase is a comprehensive travel booking platform with full internationalization support for Japanese, English, and Chinese languages. The application provides a modern, user-friendly interface for booking travel accommodations, featuring promotional campaigns and seasonal offers.

Features

🌐 Multi-language Support (EN/JP/CN)
🎯 Promotional Slider with Seasonal Campaigns
🏨 Comprehensive Booking System
📅 Date Selection Functionality
🎨 Modern, Responsive UI
🔍 Advanced Search Capabilities
📱 Mobile-First Design
Tech Stack

React
TypeScript
i18next for Internationalization
Tailwind CSS
Shadcn UI Components
Vite
Express.js
Prerequisites

Node.js (v20 or later)
npm (v9 or later)
Getting Started

Clone the repository:
git clone https://github.com/kaz005/travel-ease.git
cd travel-ease
Install dependencies:
npm install
Run the development server:
npm run dev
The application will be available at http://localhost:5000.

Project Structure

travel-ease/
├── client/
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── ui/             # Shadcn UI components
│   │   │   ├── BookingWidget/   # Booking functionality
│   │   │   ├── LanguageSelector/# Language switching
│   │   │   └── ...
│   │   ├── i18n/               # Internationalization
│   │   │   ├── locales/        # Translation files
│   │   │   └── config.ts       # i18next configuration
│   │   ├── pages/              # Page components
│   │   └── main.tsx            # Application entry
├── server/                      # Backend server
└── public/                      # Static assets
Internationalization

The application supports three languages:

English (en)
Japanese (jp)
Chinese (cn)
Translation files are located in client/src/i18n/locales/. To add a new language:

Create a new translation file in client/src/i18n/locales/
Add the language to the LanguageSelector component
Update the i18next configuration
Components

Core Components

LanguageSelector: Language switching functionality
SearchBar: Main search interface
BookingWidget: Date and guest selection
PromotionalSlider: Featured deals carousel
CategoryIcons: Travel category navigation
DestinationCard: Destination display cards
WhyChooseUs: Features highlight section
UI Components

The application uses Shadcn UI components for consistent styling and functionality:

Button
Card
Input
Select
Carousel
AspectRatio
Available Scripts

npm run dev: Start development server
npm run build: Build for production
npm run start: Start production server
npm run lint: Run ESLint
npm run format: Format code with Prettier
Environment Variables

Create a .env file in the root directory:

NODE_ENV=development
PORT=5000
Contributing

Fork the repository
Create a feature branch
Commit your changes
Push to the branch
Open a pull request
License

This project is licensed under the MIT License - see the LICENSE file for details.
部分修正