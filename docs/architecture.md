# FreezePad Architecture

FreezePad provides a simple interface for locking tokens used in pump.fun launches.

Components:

Frontend  
User interface for connecting wallets and initiating token locks.

Contracts  
Handles lock configuration and interaction with Streamflow.

Streamflow  
Provides on-chain token locking infrastructure.

Solana  
Underlying blockchain network.

Flow:

User → Connect Wallet → Enter Lock Params → Create Lock → On-chain verification
