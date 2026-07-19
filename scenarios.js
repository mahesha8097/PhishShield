const scenarios = [
{
    id: 1,
    company: "PayPal",
    sender: "support@paypa1-security.com",
    subject: "Urgent! Verify Your PayPal Account",
    body: `
Dear Customer,

We detected unusual login attempts on your PayPal account.

Your account will be suspended within 24 hours unless you verify your identity immediately.

Click the button below to secure your account.

Regards,
PayPal Security Team
    `,
    link: "Verify Account",
    difficulty: "Easy",
    explanation: "The sender uses 'paypa1' instead of 'paypal'. The email creates urgency to steal your credentials.",
    redFlags: [
        "Misspelled domain",
        "Urgent language",
        "Credential harvesting"
    ]
},

{
    id: 2,
    company: "Microsoft 365",
    sender: "security@micros0ft365.com",
    subject: "Your Microsoft Password Expires Today",
    body: `
Dear User,

Your Microsoft 365 password expires today.

Failure to reset it will disable Outlook, Teams and OneDrive.

Reset your password immediately to avoid interruption.

Microsoft Security
    `,
    link: "Reset Password",
    difficulty: "Medium",
    explanation: "The sender uses 'micros0ft' with a zero instead of the letter 'o'.",
    redFlags: [
        "Fake domain",
        "Password reset request",
        "Creates urgency"
    ]
},

{
    id: 3,
    company: "Gmail",
    sender: "security@gmail-alerts.net",
    subject: "Suspicious Login Detected",
    body: `
Someone attempted to sign into your Gmail account from a new device.

Verify your identity immediately to secure your account.

Failure to verify may result in temporary suspension.
    `,
    link: "Verify Gmail",
    difficulty: "Medium",
    explanation: "Google does not use random domains like gmail-alerts.net.",
    redFlags: [
        "Unofficial sender",
        "Fake security alert",
        "Urgent verification"
    ]
},

{
    id: 4,
    company: "Amazon",
    sender: "refund@amazon-orders.info",
    subject: "Refund Approved - Claim ₹12,499",
    body: `
Congratulations!

A refund of ₹12,499 has been approved for your recent order.

Claim your refund before it expires today.
    `,
    link: "Claim Refund",
    difficulty: "Hard",
    explanation: "Unexpected refunds are a common phishing trick to lure victims.",
    redFlags: [
        "Unexpected refund",
        "Pressure to act quickly",
        "Suspicious sender domain"
    ]
},

{
    id: 5,
    company: "SBI Bank",
    sender: "security@sbi-update.xyz",
    subject: "Your SBI Account Has Been Locked",
    body: `
Dear Customer,

Due to suspicious activity your SBI account has been temporarily locked.

Verify your account immediately to restore access.
    `,
    link: "Unlock Account",
    difficulty: "Easy",
    explanation: "Banks do not use random .xyz domains for customer communication.",
    redFlags: [
        ".xyz domain",
        "Urgency",
        "Verification request"
    ]
},

{
    id: 6,
    company: "HDFC Bank",
    sender: "kyc@hdfc-secure.info",
    subject: "Complete Your KYC Today",
    body: `
Dear Customer,

Your KYC documents have expired.

Complete verification within 24 hours to avoid account suspension.
    `,
    link: "Update KYC",
    difficulty: "Medium",
    explanation: "The sender uses an unofficial domain and pressures the user.",
    redFlags: [
        "Unofficial domain",
        "Urgent KYC request",
        "Threat of suspension"
    ]
},

{
    id: 7,
    company: "Instagram",
    sender: "copyright@instagram-help.net",
    subject: "Copyright Violation Notice",
    body: `
Your Instagram account has received multiple copyright complaints.

Submit an appeal within 24 hours or your account will be permanently deleted.
    `,
    link: "Submit Appeal",
    difficulty: "Medium",
    explanation: "Threatening account deletion is a common phishing tactic.",
    redFlags: [
        "Threatening language",
        "Unofficial domain",
        "Urgent action required"
    ]
},

{
    id: 8,
    company: "LinkedIn",
    sender: "jobs@linkedin-careers.info",
    subject: "Congratulations! You're Selected",
    body: `
A recruiter has shortlisted your profile for a high-paying remote job.

Download the attached job description and complete your application today.
    `,
    link: "Download Offer",
    difficulty: "Hard",
    explanation: "Unexpected job offers with downloads can deliver malware.",
    redFlags: [
        "Unexpected job offer",
        "Attachment download",
        "Fake recruiter domain"
    ]
},

{
    id: 9,
    company: "Netflix",
    sender: "billing@netflix-payments.xyz",
    subject: "Payment Failed",
    body: `
Your Netflix subscription payment has failed.

Update your payment information immediately to continue watching your favorite shows.
    `,
    link: "Update Payment",
    difficulty: "Easy",
    explanation: "Netflix does not use random payment domains like this.",
    redFlags: [
        "Fake billing notice",
        "Urgent payment request",
        "Suspicious sender"
    ]
},

{
    id: 10,
    company: "DHL",
    sender: "tracking@dhl-shipping.info",
    subject: "Package Waiting - Customs Fee Required",
    body: `
Your parcel is waiting at our distribution center.

Pay a customs fee of ₹95 to release your package today.

Track your shipment below.
    `,
    link: "Track Package",
    difficulty: "Hard",
    explanation: "Small customs fee requests are a common phishing scam used to steal payment information.",
    redFlags: [
        "Unexpected payment request",
        "Fake delivery notification",
        "Urgency"
    ]
    },
{
    id: 11,
    company: "Facebook",
    sender: "security@facebook-support.help",
    subject: "Your Facebook Account Will Be Disabled",
    body: `
Dear User,

Your Facebook account has violated our Community Standards.

Verify your account within 24 hours to avoid permanent suspension.
    `,
    link: "Verify Facebook",
    difficulty: "Easy",
    explanation: "Facebook never asks users to verify accounts through unofficial domains.",
    redFlags: [
        "Unofficial domain",
        "Threat of suspension",
        "Urgency"
    ]
},

{
    id: 12,
    company: "Apple",
    sender: "support@apple-idverify.com",
    subject: "Your Apple ID Has Been Locked",
    body: `
Suspicious activity has been detected on your Apple ID.

Verify your account immediately to restore access.
    `,
    link: "Unlock Apple ID",
    difficulty: "Medium",
    explanation: "Apple only communicates using official Apple domains.",
    redFlags: [
        "Fake Apple domain",
        "Urgent request",
        "Credential theft"
    ]
},

{
    id: 13,
    company: "Google Drive",
    sender: "drive@googledrive-share.net",
    subject: "Someone Shared a File With You",
    body: `
You have received an important shared document.

Click below to access it immediately.
    `,
    link: "Open Document",
    difficulty: "Hard",
    explanation: "Attackers often impersonate file-sharing notifications.",
    redFlags: [
        "Unknown sender",
        "Fake sharing notification",
        "Suspicious link"
    ]
},

{
    id: 14,
    company: "Flipkart",
    sender: "offers@flipkart-sale.store",
    subject: "Congratulations! You Won an iPhone",
    body: `
You have been selected to receive a free iPhone.

Claim your reward before midnight.
    `,
    link: "Claim Prize",
    difficulty: "Easy",
    explanation: "Unexpected prizes are classic phishing scams.",
    redFlags: [
        "Too-good-to-be-true offer",
        "Urgency",
        "Unofficial domain"
    ]
},

{
    id: 15,
    company: "WhatsApp",
    sender: "security@whatsapp-update.info",
    subject: "Verify Your WhatsApp Number",
    body: `
Your WhatsApp account requires verification.

Complete verification to avoid losing access.
    `,
    link: "Verify Number",
    difficulty: "Medium",
    explanation: "WhatsApp does not ask users to verify accounts via email.",
    redFlags: [
        "Unexpected verification",
        "Fake domain",
        "Urgency"
    ]
},

{
    id: 16,
    company: "Income Tax Department",
    sender: "refund@incometax-refund.in",
    subject: "Income Tax Refund Approved",
    body: `
Your income tax refund of ₹18,250 is ready.

Submit your bank details to receive the payment.
    `,
    link: "Claim Refund",
    difficulty: "Hard",
    explanation: "Tax refund scams attempt to steal banking information.",
    redFlags: [
        "Unexpected refund",
        "Requests bank details",
        "Suspicious domain"
    ]
},

{
    id: 17,
    company: "UPI",
    sender: "support@upi-payment.help",
    subject: "Payment Failed",
    body: `
Your recent UPI payment has failed.

Verify your UPI PIN to complete the transaction.
    `,
    link: "Verify UPI",
    difficulty: "Hard",
    explanation: "Legitimate services never ask for your UPI PIN by email.",
    redFlags: [
        "Requests PIN",
        "Urgency",
        "Fake payment notice"
    ]
},

{
    id: 18,
    company: "Steam",
    sender: "security@steam-support.xyz",
    subject: "Steam Account Suspended",
    body: `
We detected suspicious activity on your Steam account.

Confirm ownership immediately.
    `,
    link: "Recover Account",
    difficulty: "Medium",
    explanation: "Gaming platforms are frequent targets for phishing attacks.",
    redFlags: [
        ".xyz domain",
        "Urgency",
        "Fake security warning"
    ]
},

{
    id: 19,
    company: "YouTube",
    sender: "copyright@youtube-support.help",
    subject: "Copyright Strike Received",
    body: `
Your YouTube channel has received a copyright strike.

Submit an appeal within 12 hours.
    `,
    link: "Appeal Strike",
    difficulty: "Medium",
    explanation: "Creators are often targeted using fake copyright notices.",
    redFlags: [
        "Threatening language",
        "Unofficial domain",
        "Urgency"
    ]
},

{
    id: 20,
    company: "FedEx",
    sender: "tracking@fedex-delivery.info",
    subject: "Delivery Failed",
    body: `
Your parcel could not be delivered.

Confirm your address and pay a small redelivery fee.
    `,
    link: "Track Shipment",
    difficulty: "Hard",
    explanation: "Fake delivery notifications commonly ask for personal or payment information.",
    redFlags: [
        "Unexpected delivery issue",
        "Payment request",
        "Suspicious sender"
    ]
}

];