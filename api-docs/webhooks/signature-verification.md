---
title: Signature Verification
description: Verify that webhook payloads genuinely come from Waplify using HMAC-SHA256 signatures
sidebar_position: 3
---

# Signature Verification

If you configure a signing **secret** on your webhook endpoint, Waplify signs every payload using HMAC-SHA256 (a security algorithm that creates a unique fingerprint of the data using your secret key). This lets you verify that the request genuinely came from Waplify and wasn't tampered with.

## How it works

1. When you create a webhook endpoint, optionally set a **secret** string
2. For every delivery, Waplify computes `HMAC-SHA256(secret, request_body)` and includes the result in the `X-Webhook-Signature` header
3. Your server recomputes the same HMAC using the raw request body and your secret
4. If the values match, the request is genuine

## Signature header format

```
X-Webhook-Signature: sha256=a1b2c3d4e5f6...
```

The value after `sha256=` is the hex-encoded HMAC digest.

## Verification examples

### Python

```python
import hmac
import hashlib

def verify_signature(body: str, secret: str, signature_header: str) -> bool:
    expected = hmac.new(
        secret.encode("utf-8"),
        body.encode("utf-8"),
        hashlib.sha256
    ).hexdigest()
    received = signature_header.removeprefix("sha256=")
    return hmac.compare_digest(expected, received)

# Usage in a Flask endpoint:
@app.route("/webhook", methods=["POST"])
def handle_webhook():
    body = request.get_data(as_text=True)
    signature = request.headers.get("X-Webhook-Signature", "")

    if not verify_signature(body, "your_secret_here", signature):
        return "Invalid signature", 401

    data = request.get_json()
    # Process the webhook event...
    return "OK", 200
```

### Node.js (Express)

```javascript
const crypto = require("crypto");
const express = require("express");
const app = express();

// IMPORTANT: Use express.raw() for the webhook route to get the raw body.
// Do NOT use express.json() here — it parses the body, which breaks
// signature verification.
app.post("/webhook", express.raw({ type: "application/json" }), (req, res) => {
  const rawBody = req.body.toString("utf-8"); // Buffer → string
  const signature = req.headers["x-webhook-signature"] || "";

  // Verify the signature
  const expected = crypto
    .createHmac("sha256", "your_secret_here")
    .update(rawBody, "utf-8")
    .digest("hex");
  const received = signature.replace("sha256=", "");

  const isValid = crypto.timingSafeEqual(
    Buffer.from(expected),
    Buffer.from(received)
  );

  if (!isValid) {
    return res.status(401).send("Invalid signature");
  }

  const data = JSON.parse(rawBody);
  // Process the webhook event...
  res.status(200).send("OK");
});
```

:::caution Important
Always use **constant-time comparison** (like `hmac.compare_digest` in Python or `crypto.timingSafeEqual` in Node.js) to prevent timing attacks. Do not use `==` or `===` for signature comparison.
:::

## Best practices

- **Always verify signatures** in production — don't skip this step
- **Use a strong secret** — at least 32 random characters
- **Read the raw request body** — verify the signature against the raw body string, not a parsed/re-serialized version
- **Respond quickly** — return a `200` status within 5 seconds. Do heavy processing asynchronously after acknowledging the webhook
- **Handle duplicates** — in rare cases, the same event may be delivered more than once. Design your handler to be safe against duplicates (e.g., check if you've already processed a `message_id`)
