---
title: Import Contacts
description: Bulk upload contacts from CSV or Excel files into Waplify
sidebar_position: 2
---

## What is Import Contacts?

Waplify lets you import your existing contacts in bulk using a CSV or Excel file. This is the fastest way to add all your customers at once, so you can start sending campaigns right away.

## How to use it

### What you need

- A **CSV** (a simple spreadsheet format) **or Excel file** with your contacts
- Each contact needs at least a **First Name** and **Mobile Number** (with country code, without the "+" sign)
  - Example: `919876543210` for an Indian number
- If a name is not available, you can use a placeholder like "User Not Available"

### Step-by-step import

1. Go to **Contacts** from the sidebar
2. Click the **Bulk Upload** button
<!-- screenshot: Contacts page with Bulk Upload button highlighted -->
3. Download the **sample CSV** or **Excel template** — this shows you the exact format Waplify expects
4. Open the template and fill in your contacts with at least **First Name** and **Mobile Number**
<!-- screenshot: Sample CSV file with example data -->
5. Save the file and upload it on the Bulk Upload page
6. Waplify will **validate** your file and show you a summary — including any errors or duplicates found
<!-- screenshot: Upload validation results showing success and error counts -->
7. Confirm the import to add the contacts to your account

:::info
You can upload up to **10,000 contacts per batch**. There is no limit on total contacts — you can upload as many batches as you need.
:::

### Adding contacts to a group during import

1. Go to **Contact Groups** from the sidebar
2. Open a group and click **Bulk Upload** within that group
3. Upload your CSV file — contacts will be added to the group automatically

## Tips & best practices

- Always use the **sample template** to make sure your file format is correct
- Include the **country code** in phone numbers (e.g., 91 for India, 1 for US) without the "+" sign
- **Duplicates are auto-updated** — if a phone number already exists, the contact info will be updated instead of creating a duplicate
- Clean your data before uploading — remove blank rows and fix formatting issues
- You can also add contacts one by one using the **Add Contact** button on the Contacts page

## Frequently asked questions

### What file formats are supported?

Waplify supports **CSV** (.csv) and **Excel** (.xlsx) files for bulk upload.

### What if some contacts fail to import?

After uploading, Waplify shows a detailed report of which contacts were imported and which failed. Common issues include missing phone numbers, invalid formats, or missing first names. Fix the issues and re-upload just the failed contacts.

### Is there a limit on how many contacts I can have?

There is no limit on the total number of contacts in your account. The only limit is 10,000 contacts per single upload batch.

### What happens if I upload a contact that already exists?

If a contact with the same phone number already exists, their information will be **updated** with the new data. No duplicate will be created.

### Can I export my contacts later?

Yes! You can export all your contacts or filtered contacts as a CSV file from the Contacts page.
