# ChatGPT Reloaded

## Introduction

Welcome to the ChatGPT Reloaded repository! This project aims to create a conversational agent similar to OpenAI's GPT model. This is version 1.0.0 of the application, with a mobile-friendly version 1.1.0 coming soon.

## Features

- Generates text based on user input
- Supports multiple conversational contexts
- Trained on a large corpus of text
- Responsive web design

## Needed Credentials

To get ChatGPT Reloaded running with your own API credentials, you will need to provide the folloowing in your .env.local file:

1. Google ID [console.cloud.google.com](https://console.cloud.google.com/apis/credentials?)
2. Google Secret Key [console.cloud.google.com](https://console.cloud.google.com/apis/credentials?)
3. Next Auth Secret
   1. Make up your own strong password
4. OpenAi API Key [openai.com](https://platform.openai.com/account/api-keys)
   1. Create an account for free
   2. Click your profile
   3. Click "View API keys" option from menu
5. Firebase Service Account Key [firebase-php.readthedocs.io](https://firebase-php.readthedocs.io/en/latest/setup.html#google-service-account)
   1. Be sure to use a line break removal tool like [Text Fixer](https://www.textfixer.com/tools/remove-line-breaks.php) to properley format your key for use in authentication
6. Next Auth URL
   1. http://localhost:3000/

## Getting Started

To test the ChatGPT Reloaded, simply navigate to the [website](https://chatgpt.levyloiseau.com/) and start typing! The application will generate text based on your input.

If you want to run the application locally, you will need to follow these steps:

1. Clone the repository
2. Install the required dependencies by running `npm install` or `yarn install`
3. Start the development server by running `npm run dev` or `yarn run dev`

## Usage

The ChatGPT Reloaded can be used in a variety of contexts, such as:

- Customer service chatbots
- Personal assistant applications
- Language learning tools

## Roadmap

- Version 1.1.0: Mobile-friendly version
- Version 1.2.0: Improved model training
- Version 1.3.0: Integration with voice assistants

## Contributing

If you would like to contribute to the ChatGPT Reloaded, please follow these steps:

1. Fork the repository
2. Create a new branch for your changes
3. Make your changes and commit them
4. Push your changes to your forked repository
5. Open a pull request to merge your changes into the main repository

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
