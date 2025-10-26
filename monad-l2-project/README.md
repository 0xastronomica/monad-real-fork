# Monad L2 Project

## Overview
The Monad L2 Project is a Layer 2 solution designed to enhance the scalability and efficiency of the Monad blockchain. This project includes various components such as a sequencer, prover, relayer, and client, each responsible for specific functionalities within the L2 ecosystem.

## Project Structure
The project is organized into several directories, each serving a distinct purpose:

- **src/**: Contains the source code for the L2 solution.
  - **sequencer/**: Manages transaction sequencing.
  - **prover/**: Generates and verifies transaction proofs.
  - **relayer/**: Handles communication with the Monad blockchain.
  - **client/**: Provides an interface for user interactions.

- **contracts/**: Contains smart contracts and related tests.
  - **move/**: Documentation for smart contracts.
  - **tests/**: Test files for smart contracts.

- **proto/**: Protobuf definitions for inter-component communication.

- **docs/**: Documentation for architecture, development guidelines, and security practices.

- **scripts/**: Scripts for local development and deployment.
  - **start-local.sh**: Starts a local development environment.
  - **deploy.sh**: Deploys the L2 solution to the Monad blockchain.

- **config/**: Configuration files for Docker and default settings.

- **tests/**: Contains unit and integration tests for the solution.

- **tools/**: Tools for fuzz testing the L2 solution.

- **.github/**: GitHub workflows for continuous integration.

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd monad-l2-project
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the local development environment:
   ```
   ./scripts/start-local.sh
   ```

4. Deploy the solution to the Monad blockchain:
   ```
   ./scripts/deploy.sh
   ```

## Usage Guidelines
- Use the `Client` class to interact with the L2 solution.
- The `Sequencer` class is responsible for managing transaction queues.
- The `Prover` class generates proofs for transactions, ensuring their validity.
- The `Relayer` class facilitates communication between the L2 solution and the Monad blockchain.

## Contribution
Contributions are welcome! Please refer to the `docs/developer-guide.md` for guidelines on how to contribute to the project.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.