# Token Balance Script

This script allows you to check token balances for any Ethereum address across multiple networks by using the existing fee collector infrastructure.

## Usage

### Using npm script (recommended)
```bash
npm run token-balances <address>
```

## Examples

```bash
# Check balances for a specific address
npm run token-balances 0x0e15a0774307e422a0Dd3001030aB1501D320E63
```

## How It Works

1. **Fetches fee collector balances**: Uses `getFeeCollectorBalancesIndividually()` to get token lists from fee collectors across all networks
2. **Checks target address**: Uses `getTokenBalancesForNetwork()` to check the same tokens for the provided address
3. **Shows results**: Displays only tokens with balances > 0

## Features

- **Multi-network support**: Checks balances across 24+ networks including Ethereum, Arbitrum, Polygon, BSC, Base, Optimism, and more
- **Smart token discovery**: Uses actual fee collector token holdings to determine which tokens to check
- **Efficient**: Uses multicall to batch requests and reduce RPC calls
- **Error handling**: Gracefully handles network errors and continues with other networks
- **Zero balance filtering**: Only shows tokens with actual balances

## Output Format

The script provides a clear, formatted output showing:
- Network name and status
- Token contract addresses with raw balance values
- Error messages for unsupported networks

Example output:
```
Getting token balances for address: 0x0e15a0774307e422a0Dd3001030aB1501D320E63
Fetching fee collector balances to get token lists...
Error for hyperEvm: { error: { message: 'Unsupported network: hyperevm-mainnet' } }
Error for katana: { error: { message: 'Unsupported network: katana-mainnet' } }
Checking token balances for the provided address...

✅ arbitrum: Found 48 tokens
   0x0c880f6761f1af8d9aa9c466984b80dab9a8c9e8: 146253312486944439
   0x13ad51ed4f1b7e9dc168d8a00cb3f4ddd85efa60: 1306666346595927049
   0x2416092f143378750bb29b79ed961ab195cceea5: 87400068846065

✅ base: Found 73 tokens
   0x0484e9fdcccf9d62fad6d4cd7ba085e2efc531a1: 1000000000000000000
   0x04d5ddf5f3a8939889f11e97f8c4bb48317f1938: 11903498846250567868

- avalanche: No tokens found
- berachain: No tokens found
- blast: No tokens found

✅ bsc: Found 34 tokens
   0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82: 334496873785373422
   0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3: 1388223867624191913

❌ hyperEvm: Error - {"error":{"message":"Unsupported network: hyperevm-mainnet"}}
```
