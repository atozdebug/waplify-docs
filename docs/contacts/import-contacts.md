---
title: Import Contacts
description: Bulk import WhatsApp contacts from a CSV or Excel file, step by step - upload, match columns, review, then import
sidebar_position: 2
keywords: [import WhatsApp contacts, bulk upload contacts CSV, import contacts Excel, WhatsApp contact list upload]
---

## What is Import Contacts?

Import Contacts lets you add many customers at once from a **CSV or Excel** file, so you can start sending campaigns right away.

Waplify reads your file, asks you to match its columns if it isn't sure, and shows you what will be imported. Nothing is saved until you click **Import**. At the end you get a report of what happened to every row.

## How to use it

### Step 1: Upload your file

1. Go to **Contacts** from the sidebar.
2. Click **Bulk Upload**. (On a small screen this is an icon; point at it to see the name.) The **Import contacts** page opens.
![The Contacts page with the Bulk Upload button](/img/docs/contacts/import-contacts-button.png)
3. Click **Choose a file**, or drag your file onto the box. You can use a **CSV** or **Excel** file (.csv, .xlsx or .xls) with up to 2,000 contacts.
![The upload box with Sample CSV and Sample Excel](/img/docs/contacts/import-contacts-upload.png)

No file yet? Click **Sample CSV** or **Sample Excel** to download one with the right columns, fill it in, and upload it.

Each contact needs at least a **phone number**. It's best to write numbers with the country code (for example `919876543210` for an Indian number), but you can also set a default country code on the review step.

### Step 2: Match your columns (only if needed)

Waplify tries to recognise your columns by their headings. If it can't find the phone number column, it shows a **Columns** step so you can tell it which column is which.
![The Columns step: pick what each column of your file holds](/img/docs/contacts/import-contacts-columns.png)

For each column in your file, pick what it holds, for example:

- **First name**, **Last name**, or **Full name (split into first + last)**
- **Phone number**, and **Country code (separate column)** if the code is in its own column
- **Email**, **Company**, **Industry**, **Website**, **Address**, **Source**
- **Tags** and **Opted in**
- any of your own [custom fields](./custom-fields.md)

Pick **Don't import** for any column you don't need. The phone number column is required. Click **Continue** when you're done.

You can come back to this step any time from the review step with **Edit columns**.

### Step 3: Review and choose your options

The review step shows how many contacts are ready (for example "1,250 contacts ready") and lets you decide how to handle tricky rows.
![The review step: options at the top, rows that will be skipped, and the Import button](/img/docs/contacts/import-contacts-review.png)

- **Default country code:** used for numbers written without a country code.
- **No name:** what to do with rows that have no name.
  - **Skip them** (the default)
  - **Use phone number**
  - **Name them User #123456**
  - **Use one name for all** (for example "Customer")
- **Run automations for new contacts:** shows only if you have automations that start when a contact is added. It is off by default, so nobody is messaged because of this import. Switch it on to run them for new contacts only, at about 60 contacts a minute.

Click **More options** for:

- **Add tags:** add up to 10 tags to everyone in this import, on top of any tags in the file.
- **Opt-in status:** **Use the file**, **Mark all opted in** or **Mark all opted out**. With **Use the file**, contacts without an opt-in value count as opted in.
- **Repeated numbers:** when the same number appears more than once, only one row is imported. Choose **Keep the first row** (the default) or **Keep the last row**.
- **Phone numbers:** **Detect automatically**, **All have a country code**, or all from one country.

Use the **All**, **Skipped** and **Warnings** filters to check the rows. If some rows can't be imported, click **Download problem rows**, fix them in the file, and import them again later.

When everything looks right, click **Import** (for example **Import 1,250 contacts**). Stay on the page until it finishes.

### Step 4: Check the result

When the import is done you see how many contacts are **New**, **Updated** and **Skipped**, and a list of rows that were **Not imported**, with the reason.
<!-- screenshot: the result step with counts and Download report -->

Click **Download report** for a file with every row: the row number, first name, the phone number in your file, the number it was imported as, its status and any problems.

Then click **View contacts** to see them, or **Import more** to upload another file.

:::info
One import can hold up to **2,000 contacts**, and the file must be under **5 MB**. There's no limit from Waplify on how many times you import, so split a bigger list into several files. Your plan's contact limit still applies.
:::

### Adding contacts to a group from a file

1. Go to **Contact Groups** and open the group.
2. Click **Bulk Upload**. The **Add contacts to group** page opens.
3. Follow the same steps as above.

The result also shows how many contacts were **Added to group**, and **Go to group** takes you back to it.

## Who can import

Owners, admins and managers can import contacts.

## Tips & best practices

- **Start from the sample file,** so your columns are recognised straight away and you skip the Columns step.
- **Include the country code** in phone numbers, or set the **Default country code** on the review step.
- **Leave Run automations off** unless you really want every new contact to get your welcome messages now.
- **Tag each import** (for example "expo-2026") with **Add tags**, so you can find and message that list later.
- **Only mark everyone opted in if they really agreed** to get WhatsApp messages from you. Messaging people who didn't agree leads to blocks and a lower quality rating.
- After importing, organise your contacts into [Contact Groups](./contact-groups.md) so you can target them in campaigns.

## Frequently asked questions

### What file formats are supported?

**CSV** (.csv) and **Excel** (.xlsx and .xls) files.

### What happens if I import a contact that already exists?

The existing contact is **updated** with the values in your file, and no duplicate is created. Tags from the file are added to the contact's tags. Custom fields are only changed if your file has a column for them. A contact you deleted earlier comes back.

### What if some contacts fail to import?

They show in the **Not imported** list with the reason, for example a missing or invalid phone number. Click **Download report** (or **Download problem rows** before importing), fix those rows, and import them again.

### Why do I see the Columns step?

Waplify couldn't tell which column holds the phone number. Pick the right column for each heading, or choose **Don't import** for columns you don't need.

### Will importing contacts send them a message?

Not unless you switch on **Run automations for new contacts** on the review step. It is off by default.

### Can I export my contacts later?

Yes. You can export all your contacts, or a filtered list, as a CSV file from the Contacts page.
