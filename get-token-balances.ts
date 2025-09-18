#!/usr/bin/env tsx

import { createPublicClient, http, formatUnits } from 'viem';
import {
    arbitrum,
    avalanche,
    base,
    bsc,
    mainnet as ethereum,
    gnosis,
    linea,
    mantle,
    optimism,
    polygon,
    scroll,
} from 'viem/chains';
import { Chain, Abi } from 'viem';

// ============================================================================
// CUSTOM CHAINS
// ============================================================================

const multicall3Default = {
    address: '0xca11bde05977b3631167028862be2a173976ca11' as `0x${string}`,
    blockCreated: 0,
};

const berachainChain: Chain = {
    id: 80094,
    name: 'Berachain',
    nativeCurrency: { name: 'BERA', symbol: 'BERA', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.berachain.com'] },
        public: { http: ['https://rpc.berachain.com'] },
    },
    blockExplorers: { default: { name: 'Berachain Explorer', url: 'https://explorer.berachain.com' } },
    testnet: false,
    contracts: { multicall3: multicall3Default },
};

const blastChain: Chain = {
    id: 81457,
    name: 'Blast',
    nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.blast.io'] },
        public: { http: ['https://rpc.blast.io'] },
    },
    blockExplorers: { default: { name: 'Blast Explorer', url: 'https://blastscan.io' } },
    testnet: false,
    contracts: { multicall3: multicall3Default },
};

const modeChain: Chain = {
    id: 34443,
    name: 'Mode',
    nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://mainnet.mode.network'] },
        public: { http: ['https://mainnet.mode.network'] },
    },
    blockExplorers: { default: { name: 'Mode Explorer', url: 'https://explorer.mode.network' } },
    testnet: false,
    contracts: { multicall3: multicall3Default },
};

const hyperEvm: Chain = {
    id: 999,
    name: 'HyperEVM',
    nativeCurrency: { name: 'HYPE', symbol: 'HYPE', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.hyperblock.cc'] },
        public: { http: ['https://rpc.hyperblock.cc'] },
    },
    blockExplorers: {
        default: { name: 'HyperEVM Explorer', url: 'https://explorer.hyperblock.cc' },
    },
    testnet: false,
    contracts: {
        multicall3: multicall3Default,
    },
};

const ink: Chain = {
    id: 57073,
    name: 'Ink',
    nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.ink.network'] },
        public: { http: ['https://rpc.ink.network'] },
    },
    blockExplorers: {
        default: { name: 'Ink Explorer', url: 'https://explorer.ink.network' },
    },
    testnet: false,
    contracts: {
        multicall3: multicall3Default,
    },
};

const katana: Chain = {
    id: 747474,
    name: 'Katana',
    nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.katana.com'] },
        public: { http: ['https://rpc.katana.com'] },
    },
    blockExplorers: {
        default: { name: 'Katana Explorer', url: 'https://explorer.katana.com' },
    },
    testnet: false,
    contracts: {
        multicall3: multicall3Default,
    },
};

const plume: Chain = {
    id: 98866,
    name: 'Plume',
    nativeCurrency: { name: 'PLUME', symbol: 'PLUME', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.plume.network'] },
        public: { http: ['https://rpc.plume.network'] },
    },
    blockExplorers: {
        default: { name: 'Plume Explorer', url: 'https://explorer.plume.network' },
    },
    testnet: false,
    contracts: {
        multicall3: multicall3Default,
    },
};

const sei: Chain = {
    id: 1329,
    name: 'Sei',
    nativeCurrency: { name: 'SEI', symbol: 'SEI', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.sei.io'] },
        public: { http: ['https://rpc.sei.io'] },
    },
    blockExplorers: {
        default: { name: 'Sei Explorer', url: 'https://explorer.sei.io' },
    },
    testnet: false,
    contracts: {
        multicall3: multicall3Default,
    },
};

const soneium: Chain = {
    id: 1868,
    name: 'Soneium',
    nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.soneium.io'] },
        public: { http: ['https://rpc.soneium.io'] },
    },
    blockExplorers: {
        default: { name: 'Soneium Explorer', url: 'https://explorer.soneium.io' },
    },
    testnet: false,
    contracts: {
        multicall3: multicall3Default,
    },
};

const sonic: Chain = {
    id: 146,
    name: 'Sonic',
    nativeCurrency: { name: 'SONIC', symbol: 'SONIC', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.sonic.network'] },
        public: { http: ['https://rpc.sonic.network'] },
    },
    blockExplorers: {
        default: { name: 'Sonic Explorer', url: 'https://explorer.sonic.network' },
    },
    testnet: false,
    contracts: {
        multicall3: multicall3Default,
    },
};

const unichain: Chain = {
    id: 130,
    name: 'Unichain',
    nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.unichain.network'] },
        public: { http: ['https://rpc.unichain.network'] },
    },
    blockExplorers: {
        default: { name: 'Unichain Explorer', url: 'https://explorer.unichain.network' },
    },
    testnet: false,
    contracts: {
        multicall3: multicall3Default,
    },
};

const worldchain: Chain = {
    id: 480,
    name: 'Worldchain',
    nativeCurrency: { name: 'WORLD', symbol: 'WORLD', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.worldchain.network'] },
        public: { http: ['https://rpc.worldchain.network'] },
    },
    blockExplorers: {
        default: { name: 'Worldchain Explorer', url: 'https://explorer.worldchain.network' },
    },
    testnet: false,
    contracts: {
        multicall3: multicall3Default,
    },
};

// ============================================================================
// VIEM CLIENTS
// ============================================================================

const rpcUrls: Record<string, string> = {
    arbitrum: 'https://arb1.arbitrum.io/rpc',
    avalanche: 'https://api.avax.network/ext/bc/C/rpc',
    base: 'https://mainnet.base.org',
    berachain: 'https://rpc.berachain.com',
    blast: 'https://rpc.blast.io',
    bsc: 'https://bsc-dataseed.binance.org',
    ethereum: 'https://rpc.ankr.com/eth',
    gnosis: 'https://rpc.gnosischain.com',
    hyperEvm: 'https://rpc.hyperblock.cc',
    ink: 'https://rpc.ink.network',
    katana: 'https://rpc.katana.com',
    linea: 'https://rpc.linea.build',
    mantle: 'https://rpc.mantle.xyz',
    mode: 'https://mainnet.mode.network',
    optimism: 'https://mainnet.optimism.io',
    plume: 'https://rpc.plume.network',
    polygon: 'https://polygon-rpc.com',
    scroll: 'https://rpc.scroll.io',
    sei: 'https://rpc.sei.io',
    soneium: 'https://rpc.soneium.io',
    sonic: 'https://rpc.sonic.network',
    unichain: 'https://rpc.unichain.network',
    worldchain: 'https://rpc.worldchain.network',
};

const chainConfigs: Record<string, any> = {
    arbitrum,
    avalanche,
    base,
    bsc,
    ethereum,
    gnosis,
    linea,
    mantle,
    optimism,
    polygon,
    scroll,
    // Custom chains
    hyperEvm,
    ink,
    katana,
    plume,
    sei,
    soneium,
    sonic,
    unichain,
    worldchain,
    berachain: berachainChain,
    blast: blastChain,
    mode: modeChain,
};

const publicClients: Record<string, any> = Object.fromEntries(
    Object.entries(rpcUrls).map(([network, url]) => [
        network,
        createPublicClient({
            transport: http(url),
            ...(chainConfigs[network] ? { chain: chainConfigs[network] } : {}),
        }),
    ])
);

// ============================================================================
// FEE COLLECTOR BALANCES
// ============================================================================

const feeCollectors = {
    arbitrum: "0xf791765B58270Eb6DabFf00D9E3bcD8c0C0567a3",
    avalanche: "0x717bC2FeCad574ec68Cc1eb074abFD93AdaAb754",
    base: "0x1337B8Af481f3d7d245De35dFfCF30B825C20836",
    berachain: "0xE12D0CE29B916fbc067f49a8ebC203ffB66E8ded",
    blast: "0x264f55044465A3d8d574D87168F2c2344D1e8c8c",
    bsc: "0xE8746d664059067FD9337eb81CEdD632Ffa4325e",
    ethereum: "0xd718CDD6f19BEb30b50AF96659C309eB85B79535",
    gnosis: "0xDC547D58dBCE66BFd7c35ef7d3394f05C2ec866D",
    hyperEvm: "0xE12D0CE29B916fbc067f49a8ebC203ffB66E8ded",
    ink: "0x4Dc0edb185a4d32B462977da58bb5B619E88F205",
    katana: "0xE12D0CE29B916fbc067f49a8ebC203ffB66E8ded",
    linea: "0xdcf83CC9CCDfa57aE757021f9457567F67BABeA9",
    mantle: "0xdcf83CC9CCDfa57aE757021f9457567F67BABeA9",
    mode: "0xE12D0CE29B916fbc067f49a8ebC203ffB66E8ded",
    optimism: "0xdb629B83681Db277273808A15be68688CE75a94A",
    plume: "0x3Cd13488380e6d1e73CE185919Ac14018A78B844",
    polygon: "0xecD3D10919a77Ef3352A88816Aea379091a0084B",
    scroll: "0xE12D0CE29B916fbc067f49a8ebC203ffB66E8ded",
    sei: "0xE12D0CE29B916fbc067f49a8ebC203ffB66E8ded",
    soneium: "0xE12D0CE29B916fbc067f49a8ebC203ffB66E8ded",
    sonic: "0xe772551F88E2c14aEcC880dF6b7CBd574561bf82",
    unichain: "0x79C7a69499Cf1866734E8D3154200a05aE41c865",
    worldchain: "0xE12D0CE29B916fbc067f49a8ebC203ffB66E8ded"
};

// Map network names to Bungee API chain IDs
const bungeeNetworkMapping = {
    arbitrum: 42161,
    avalanche: 43114,
    base: 8453,
    berachain: 80094,
    blast: 81457,
    bsc: 56,
    ethereum: 1,
    gnosis: 100,
    hyperEvm: 999,
    ink: 57073,
    katana: 747474,
    linea: 59144,
    mantle: 5000,
    mode: 34443,
    optimism: 10,
    plume: 98866,
    polygon: 137,
    scroll: 534352,
    sei: 1329,
    soneium: 1868,
    sonic: 146,
    unichain: 130,
    worldchain: 480
};

// Helper function to check if a token has a non-zero balance
function hasNonZeroBalance(tokenBalance: string): boolean {
    try {
        return BigInt(tokenBalance) > 0n;
    } catch {
        return false;
    }
}

async function fetchWithTimeout(url: string, ms = 12_000): Promise<Response> {
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), ms);
    try {
        return await fetch(url, { signal: controller.signal, headers: { accept: 'application/json' } });
    } finally {
        clearTimeout(t);
    }
}

// Fetch balances using Bungee API
async function getFeeCollectorBalancesIndividually() {
    const results: Record<string, any> = {};

    const windowMs = 2 * 60 * 1000; // 2 minutes
    for (const [networkName, address] of Object.entries(feeCollectors)) {
        const chainId = bungeeNetworkMapping[networkName as keyof typeof bungeeNetworkMapping];

        if (!chainId) {
            console.warn(`No Bungee chain ID mapping found for ${networkName}`);
            continue;
        }

        const url = `https://public-backend.bungee.exchange/api/v1/tokens/list?userAddress=${address}&chainIds=${chainId}&list=full`;
        try {
            console.log(`Fetching balances for ${networkName} (chain ${chainId})...`);
            const response = await fetchWithTimeout(url);
            if (response.status === 429) {
                const retryAfter = Number(response.headers.get('retry-after')) || Math.ceil(windowMs / 1000);
                console.warn(`Rate limited on ${networkName}. Sleeping ${retryAfter}s...`);
                await new Promise(r => setTimeout(r, retryAfter * 1000));
                continue;
            }
            const data = await response.json();

            if (!response.ok) {
                console.error(`Error for ${networkName} with status ${response.status}:`, data);
                results[networkName] = {
                    error: data
                };
                continue;
            }

            if (data?.success && data?.result && data.result[String(chainId)]) {
                const tokens = data.result[String(chainId)];

                // Filter tokens with non-zero balances
                const filteredTokens = tokens.filter((token: any) =>
                    hasNonZeroBalance(token.balance ?? "0")
                );

                // Transform to match expected format
                const processedTokens = filteredTokens.map((token: any) => ({
                    network: networkName,
                    tokenAddress: token.address as `0x${string}`,
                    tokenBalance: token.balance,
                    decimals: token.decimals ?? 18,
                    symbol: token.symbol,
                    name: token.name
                }));

                results[networkName] = {
                    data: {
                        tokens: processedTokens
                    }
                };
            } else {
                results[networkName] = {
                    data: {
                        tokens: []
                    }
                };
            }
        } catch (error) {
            console.error(`Error fetching balances for ${networkName}:`, error);
            results[networkName] = {
                error: error instanceof Error ? error.message : 'Unknown error'
            };
        }
    }

    return results;
}

// ============================================================================
// MULTICALL BALANCES
// ============================================================================

// FeeCollector ABI fragment for feeMap only, with correct type
const FEECOLLECTOR_ABI: Abi = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "feeToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "feeTaker",
                "type": "address"
            }
        ],
        "name": "feeMap",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
];

// Multicall for a single network
async function getTokenBalancesForNetwork({
    network,
    feeCollector,
    tokens,
    address,
}: {
    network: string;
    feeCollector: `0x${string}` | string;
    tokens: Array<{ tokenAddress: `0x${string}`; decimals: number }>;
    address: `0x${string}`;
}) {
    const client = publicClients[network];
    if (!client) throw new Error(`No public client for network: ${network}`);
    if (!tokens.length) return [];

    // Prepare multicall data (use viem's multicall contract format)
    const calls = tokens.map((token) => ({
        address: feeCollector as `0x${string}`,
        abi: FEECOLLECTOR_ABI,
        functionName: 'feeMap',
        args: [token.tokenAddress, address],
    }));

    // Use viem's multicall
    const multicallResult = await client.multicall({
        contracts: calls,
        allowFailure: true,
    });

    // Map results, filter, convert
    return tokens
        .map((token, i) => {
            const result = multicallResult[i];
            if (!result || result.status !== 'success') return null;
            const raw = result.result as string;
            // Skip zero balances
            try {
                if (BigInt(raw) === 0n) return null;
            } catch (_) {
                return null;
            }
            // Convert to decimal, adjust for decimals
            const value = BigInt(raw);
            const adjusted = formatUnits(value, token.decimals);
            return {
                ...token,
                rawBalance: value.toString(),
                adjustedBalance: adjusted,
            };
        })
        .filter(Boolean);
}

// ============================================================================
// MAIN SCRIPT
// ============================================================================

async function main(): Promise<void> {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.error('Usage: tsx get-token-balances.ts <address>');
        console.error('Example: tsx get-token-balances.ts 0x1234567890123456789012345678901234567890');
        process.exit(1);
    }

    const address = args[0] as `0x${string}`;

    // Basic address validation
    if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
        console.error('Error: Invalid Ethereum address format');
        console.error('Address must be a 42-character hex string starting with 0x');
        process.exit(1);
    }

    try {
        console.log(`Getting token balances for address: ${address}`);

        // Step 1: Get fee collector balances to extract token lists using Bungee API
        console.log('Fetching fee collector balances to get token lists...');
        const feeCollectorBalances = await getFeeCollectorBalancesIndividually();

        // Step 2: Extract tokens from each network and check balances for the provided address
        console.log('Checking token balances for the provided address...\n');

        for (const [network, data] of Object.entries(feeCollectorBalances)) {
            if (data.error) {
                console.log(`❌ ${network}: Error - ${JSON.stringify(data.error)}`);
                continue;
            }

            if (!data.data?.tokens || data.data.tokens.length === 0) {
                console.log(`- ${network}: No tokens found`);
                continue;
            }

            // Extract tokens with their decimals
            const tokens = data.data.tokens.map((token: any) => ({
                tokenAddress: token.tokenAddress as `0x${string}`,
                decimals: token.decimals ?? 18
            }));

            try {
                // Use the existing function to get balances for the provided address
                const balances = await getTokenBalancesForNetwork({
                    network,
                    feeCollector: feeCollectors[network],
                    tokens,
                    address,
                });

                if (balances.length > 0) {
                    console.log(`✅ ${network}: Found ${balances.length} tokens`);
                    balances.forEach((balance: any) => {
                        console.log(`   ${balance.tokenAddress}: ${balance.rawBalance}`);
                    });
                } else {
                    console.log(`- ${network}: No token balances found for given address`);
                }
            } catch (error) {
                console.log(`❌ ${network}: Error - ${error}`);
            }
        }

    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

// Run the script (CJS + ESM/tsx safe)
const isDirectRun =
    (typeof require !== 'undefined' && require.main === module) ||
    (typeof import.meta !== 'undefined' && `file://${process.argv[1]}` === import.meta.url);

if (isDirectRun) {
    main().catch(console.error);
}
