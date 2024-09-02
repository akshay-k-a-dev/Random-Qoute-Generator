# Random Quote Generator

This is a simple ReactJS project that generates random quotes using the [Ron Swanson Quotes API](https://ron-swanson-quotes.herokuapp.com/v2/quotes).

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Live Demo](#live-demo)
- [Contributing](#contributing)
- [License](#license)

## Features

- Generates random quotes with a single click.
- Uses ReactJS for a dynamic user interface.
- Fetches quotes from an external API.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/akshay-k-a-dev/Random-Qoute-Generator.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd Random-Qoute-Generator
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

4. **Start the development server:**

    ```bash
    npm start
    ```

5. **Open `http://localhost:3000`** in your preferred browser.

## Usage

The application displays a random quote each time the "Generate Quote" button is clicked. The quotes are fetched from the Ron Swanson Quotes API.

### File Structure

```plaintext
Random-Quote-Generator/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

### Key Files

- `src/App.js`: The main component that handles the logic for fetching and displaying quotes.
- `src/index.js`: The entry point of the React application.

## Live Demo

Check out the live demo of the project [here](https://random-qoute-generator-q22yuhlpw-akshay-k-a-devs-projects.vercel.app/).

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

1. **Fork the repository.**
2. **Create a new branch:**

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. **Commit your changes:**

    ```bash
    git commit -m 'Add some feature'
    ```

4. **Push to the branch:**

    ```bash
    git push origin feature/your-feature-name
    ```

5. **Create a pull request.**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
