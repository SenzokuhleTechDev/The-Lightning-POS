⚡ Lightning Pay: Local Vendor Micro-Settlement Layer
InnoCode Technologies | Bitcoin Lightning Network Project
⬛ The Vision
Traditional payment rails in South Africa often come with high fees and slow settlement times that hurt small-scale vendors. Lightning Pay is a proof-of-concept application designed to facilitate instant, near-zero-fee BTC transactions for local merchants using the Lightning Network.

🔴 Problem Statement
High Fees: Small transactions (micro-payments) are eaten up by bank charges.

Settlement Delay: Merchants often wait days for funds to clear.

Barriers to Entry: Complex onboarding for digital payments in informal sectors.

🟢 The Solution (Technical Features)
Instant Finality: Utilizing the Lightning Network for sub-second settlement.

Dynamic Invoice Generation: Create BOLT11 invoices on the fly for specific ZAR/SAT amounts.

Low-Cost Infrastructure: Designed to run on lightweight nodes (Raspberry Pi/Polar) to keep overhead low for the vendor.

Sleek UI: High-contrast "Noir" interface (Black/Neon Green/Red) optimized for fast-paced retail environments.

🛠 Tech Stack
Language: Python / JavaScript (React)

Lightning Implementation: LND / Core Lightning (via Polar for testing)

API: REST / WebSockets for real-time payment confirmation.

Wallet Integration: Support for Alby / BlueWallet / Phoenix.

🏗 Architecture
Client Layer: Mobile-responsive frontend for the vendor to input ZAR amount.

Conversion Engine: Real-time BTC/ZAR price fetching.

Node Layer: Communication with the Lightning Node to generate the invoice.


👥 Core Development Team

Brian | Founder & Lead Full Stack Specialist

Core focus: Backend API infrastructure, merchant dashboard, and system-wide integration.

Innocent Senzokuhle Nkosi | Co-Founder & Lead Data Architect

Core focus: Customer Facing Display (CFD) development, Lightning transaction data pipelines, and analytical auditing for transparency.

Verification: Webhook triggers to confirm payment and update the "Paid" status instantly.
