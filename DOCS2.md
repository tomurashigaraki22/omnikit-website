# OmniKit SDK - API Reference Guide

## 📦 Package Overview

All packages are published to NPM under `@watchupltd` scope at version `0.1.1`:

- `@watchupltd/omnikit-types` - TypeScript definitions
- `@watchupltd/omnikit` - Core engine  
- `@watchupltd/omnikit-ethereum` - Ethereum adapter
- `@watchupltd/omnikit-solana` - Solana adapter
- `@watchupltd/omnikit-react` - React hooks and providers
- `@watchupltd/omnikit-dev-tools` - Testing and debugging utilities

## 🔧 Core API (`@watchupltd/omnikit`)

### OmniKit Class

```typescript
import { OmniKit } from '@watchupltd/omnikit';

const omnikit = new OmniKit({
  adapters: WalletAdapter[],
  storage?: StorageConfig,
  logging?: LoggingConfig,
  autoConnect?: boolean,
  reconnectOnMount?: boolean
});
```

### Main Methods

```typescript
// Connection Management
await omnikit.connect(chain: string): Promise<void>
await omnikit.disconnect(): Promise<void>
omnikit.isConnected(): boolean

// Wallet Operations  
await omnikit.getAddress(): Promise<string>
await omnikit.getBalance(): Promise<string>
await omnikit.signMessage(message: string): Promise<string>
await omnikit.sendTransaction(tx: any): Promise<string>

// Wallet Generation
await omnikit.createWallet(options: { chain: string }): Promise<GeneratedWallet>
await omnikit.importWallet(chain: string, privateKey: string): Promise<void>

// State Management
omnikit.getActiveWallet(): WalletState | null
omnikit.getAvailableChains(): string[]
omnikit.switchChain(chain: string): Promise<void>

// Event Handling
omnikit.on(event: string, callback: Function): void
omnikit.off(event: string, callback: Function): void
```

### Events

```typescript
// Wallet Events
omnikit.on('connect', (payload: ConnectEventPayload) => {})
omnikit.on('disconnect', (payload: DisconnectEventPayload) => {})
omnikit.on('accountsChanged', (payload: AccountsChangedEventPayload) => {})
omnikit.on('chainChanged', (payload: ChainChangedEventPayload) => {})
omnikit.on('error', (payload: ErrorEventPayload) => {})
```

## ⚛️ React API (`@watchupltd/omnikit-react`)

### Provider Setup

```typescript
import { OmniKitProvider } from '@watchupltd/omnikit-react';

<OmniKitProvider config={OmniKitConfig}>
  <App />
</OmniKitProvider>
```

### Hooks

#### useWallet()
```typescript
const {
  wallet: WalletState,
  connect: (chain: string) => Promise<void>,
  disconnect: () => Promise<void>,
  switchChain: (chain: string) => Promise<void>,
  isConnecting: boolean,
  error: Error | null
} = useWallet();
```

#### useBalance()
```typescript
const {
  balance: string | null,
  isLoading: boolean,
  error: Error | null,
  refetch: () => Promise<void>
} = useBalance();
```

#### useTransaction()
```typescript
const {
  sendTransaction: (tx: any) => Promise<string>,
  isLoading: boolean,
  error: Error | null,
  lastTransaction: string | null
} = useTransaction();
```

#### useWalletGeneration()
```typescript
const {
  generateWallet: (chain: string) => Promise<GeneratedWallet>,
  importWallet: (chain: string, privateKey: string) => Promise<void>,
  isGenerating: boolean,
  error: Error | null
} = useWalletGeneration();
```

#### useWalletEvents()
```typescript
const {
  events: WalletEvent[],
  clearEvents: () => void,
  lastEvent: WalletEvent | null
} = useWalletEvents();
```

#### useChain()
```typescript
const {
  currentChain: string | null,
  availableChains: string[],
  switchChain: (chain: string) => Promise<void>,
  isSwitching: boolean
} = useChain();
```

## 🔗 Ethereum Adapter (`@watchupltd/omnikit-ethereum`)

### Factory

```typescript
import { EthereumAdapterFactory } from '@watchupltd/omnikit-ethereum';

// Create all available Ethereum adapters
const adapters = EthereumAdapterFactory.createAdapters();

// Create specific adapters
const metamask = EthereumAdapterFactory.createMetaMaskAdapter();
const walletConnect = EthereumAdapterFactory.createWalletConnectAdapter({
  projectId: 'your-project-id'
});
```

### Available Adapters

```typescript
// MetaMask Adapter
import { MetaMaskAdapter } from '@watchupltd/omnikit-ethereum';

// WalletConnect Adapter  
import { WalletConnectAdapter } from '@watchupltd/omnikit-ethereum';

// Coinbase Wallet Adapter
import { CoinbaseWalletAdapter } from '@watchupltd/omnikit-ethereum';

// Local Wallet Generator
import { EthereumWalletGenerator } from '@watchupltd/omnikit-ethereum';
```

### Ethereum-Specific Features

```typescript
// Get ETH balance
const balance = await omnikit.getBalance(); // Returns in ETH

// Send ETH transaction
const txHash = await omnikit.sendTransaction({
  to: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6',
  value: '1000000000000000000', // 1 ETH in wei
  gasLimit: '21000',
  gasPrice: '20000000000' // 20 gwei
});

// Sign message
const signature = await omnikit.signMessage('Hello World');

// Generate Ethereum wallet
const wallet = await omnikit.createWallet({ chain: 'ethereum' });
// Returns: { address, privateKey, mnemonic }
```

## 🌟 Solana Adapter (`@watchupltd/omnikit-solana`)

### Factory

```typescript
import { SolanaAdapterFactory } from '@watchupltd/omnikit-solana';

// Create all available Solana adapters
const adapters = SolanaAdapterFactory.createAdapters();

// Create specific adapters
const phantom = SolanaAdapterFactory.createPhantomAdapter();
const solflare = SolanaAdapterFactory.createSolflareAdapter();
```

### Available Adapters

```typescript
// Phantom Adapter
import { PhantomAdapter } from '@watchupltd/omnikit-solana';

// Solflare Adapter
import { SolflareAdapter } from '@watchupltd/omnikit-solana';

// Local Wallet Generator
import { SolanaWalletGenerator } from '@watchupltd/omnikit-solana';
```

### Solana-Specific Features

```typescript
// Get SOL balance
const balance = await omnikit.getBalance(); // Returns in SOL

// Send SOL transaction
const txHash = await omnikit.sendTransaction({
  recipient: 'So11111111111111111111111111111111111111112',
  amount: '1000000000' // 1 SOL in lamports
});

// Sign message
const signature = await omnikit.signMessage('Hello Solana');

// Generate Solana wallet
const wallet = await omnikit.createWallet({ chain: 'solana' });
// Returns: { address, privateKey, mnemonic }
```

## 🧪 Development Tools (`@watchupltd/omnikit-dev-tools`)

### Mock Adapters

```typescript
import { 
  MockWalletAdapter,
  createMockEthereumWallet,
  createMockSolanaWallet,
  createFailingWallet
} from '@watchupltd/omnikit-dev-tools';

// Create mock Ethereum wallet
const mockEth = createMockEthereumWallet({
  address: '0x1234567890123456789012345678901234567890',
  balance: '5.0',
  shouldFailConnection: false,
  shouldFailTransaction: false
});

// Create mock Solana wallet
const mockSol = createMockSolanaWallet({
  address: 'So11111111111111111111111111111111111111112',
  balance: '10.0'
});

// Create failing wallet for error testing
const failingWallet = createFailingWallet('ethereum');
```

### Test Utilities

```typescript
import { walletTestUtils } from '@watchupltd/omnikit-dev-tools';

// Create test OmniKit instance
const testOmniKit = walletTestUtils.createTestOmniKit({
  chains: ['ethereum', 'solana'],
  mockWallets: true,
  autoConnect: false
});

// Run comprehensive test suite
const results = await walletTestUtils.runTestSuite(testOmniKit, ['ethereum']);

// Test specific functionality
await walletTestUtils.testWalletConnection(testOmniKit, 'ethereum');
await walletTestUtils.testTransaction(testOmniKit, 'ethereum');
await walletTestUtils.testMessageSigning(testOmniKit, 'ethereum');
await walletTestUtils.testWalletGeneration(testOmniKit, 'ethereum');

// Wait for specific events
const eventPayload = await walletTestUtils.waitForEvent(testOmniKit, 'connect', 5000);
```

### Debugging Tools

```typescript
import { OmniKitDebugger } from '@watchupltd/omnikit-dev-tools';

// Create debugger instance
const debugger = new OmniKitDebugger({
  enabled: true,
  logLevel: 'debug',
  logEvents: true,
  logStateChanges: true,
  maxLogEntries: 1000
});

// Attach to OmniKit instance
debugger.attach(omnikit);

// Get debug logs
const logs = debugger.getLogs({
  level: 'error',
  category: 'wallet',
  since: new Date(Date.now() - 3600000) // Last hour
});

// Export logs
const exportedLogs = debugger.exportLogs();
```

## 📝 TypeScript Definitions (`@watchupltd/omnikit-types`)

### Core Types

```typescript
// Wallet Adapter Interface
interface WalletAdapter {
  readonly id: string;
  readonly name: string;
  readonly chain: string;
  readonly icon: string;
  
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  getAddress(): Promise<string>;
  getBalance(): Promise<string>;
  signMessage(message: string): Promise<string>;
  sendTransaction(transaction: unknown): Promise<string>;
  
  isConnected?(): Promise<boolean>;
  createWallet?(): Promise<GeneratedWallet>;
  importWallet?(privateKey: string): Promise<void>;
  on?(event: string, listener: (...args: any[]) => void): void;
  off?(event: string, listener: (...args: any[]) => void): void;
}

// Generated Wallet
interface GeneratedWallet {
  address: string;
  privateKey: string;
  mnemonic?: string;
}

// Wallet State
interface WalletState {
  isConnected: boolean;
  address?: string;
  chain?: string;
  adapter?: WalletAdapter;
  connectedAt?: Date;
}

// Configuration Types
interface OmniKitConfig {
  adapters: WalletAdapter[];
  storage?: StorageConfig;
  logging?: LoggingConfig;
  autoConnect?: boolean;
  reconnectOnMount?: boolean;
}

interface StorageConfig {
  type: 'localStorage' | 'sessionStorage' | 'memory' | 'custom';
  prefix?: string;
  customStorage?: CustomStorage;
}

interface LoggingConfig {
  level: 'debug' | 'info' | 'warn' | 'error';
  enabled: boolean;
  prefix?: string;
}
```

### Event Types

```typescript
// Event Payloads
interface ConnectEventPayload {
  address: string;
  chain: string;
  adapter: string;
}

interface DisconnectEventPayload {
  adapter: string;
  reason?: string;
}

interface AccountsChangedEventPayload {
  accounts: string[];
  adapter: string;
}

interface ChainChangedEventPayload {
  chainId: string;
  adapter: string;
}

interface ErrorEventPayload {
  error: Error;
  adapter?: string;
  context?: string;
}
```

## 🔧 Configuration Examples

### Basic Setup
```typescript
import { OmniKit } from '@watchupltd/omnikit';
import { EthereumAdapterFactory } from '@watchupltd/omnikit-ethereum';

const omnikit = new OmniKit({
  adapters: EthereumAdapterFactory.createAdapters()
});
```

### Advanced Configuration
```typescript
const omnikit = new OmniKit({
  adapters: [
    ...EthereumAdapterFactory.createAdapters(),
    ...SolanaAdapterFactory.createAdapters()
  ],
  storage: {
    type: 'localStorage',
    prefix: 'myapp'
  },
  logging: {
    level: 'info',
    enabled: true,
    prefix: 'OmniKit'
  },
  autoConnect: true,
  reconnectOnMount: true
});
```

### React Provider Configuration
```typescript
<OmniKitProvider 
  config={{
    adapters: [
      ...EthereumAdapterFactory.createAdapters(),
      ...SolanaAdapterFactory.createAdapters()
    ],
    storage: { type: 'localStorage' },
    autoConnect: true
  }}
>
  <App />
</OmniKitProvider>
```

This API reference provides a comprehensive overview of all available methods, types, and configurations across the OmniKit ecosystem. All packages are production-ready and available on NPM.