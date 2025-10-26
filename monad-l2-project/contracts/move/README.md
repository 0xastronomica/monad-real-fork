# README for Monad L2 Project - Smart Contracts

## Overview

This directory contains the smart contracts used in the Monad L2 solution. These contracts are essential for managing the interactions and transactions within the Layer 2 environment.

## Deployment Instructions

1. **Prerequisites**: Ensure you have the necessary tools installed, including [Node.js](https://nodejs.org/), [Truffle](https://www.trufflesuite.com/truffle), and [Ganache](https://www.trufflesuite.com/ganache) for local blockchain simulation.

2. **Install Dependencies**: Navigate to the project root and run:
   ```
   npm install
   ```

3. **Compile Contracts**: Compile the smart contracts using Truffle:
   ```
   truffle compile
   ```

4. **Deploy Contracts**: Deploy the contracts to the local blockchain:
   ```
   truffle migrate --network development
   ```

## Contract Interactions

After deployment, you can interact with the contracts using the provided client interface or directly through Truffle console.

### Example Interaction

To interact with a deployed contract, you can use the following commands in the Truffle console:

```javascript
let instance = await YourContractName.deployed();
let result = await instance.yourMethod();
console.log(result);
```

## Testing

Make sure to write tests for your contracts to ensure their functionality. Place your test files in the `contracts/tests` directory and run them using:

```
truffle test
```

## Additional Resources

- [Truffle Documentation](https://www.trufflesuite.com/docs/truffle/overview)
- [Solidity Documentation](https://docs.soliditylang.org/en/v0.8.0/)

For any questions or contributions, please refer to the main project's documentation or contact the development team.