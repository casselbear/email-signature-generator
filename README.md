# Email Signature Generator

*An Email Signature Generator that takes user inputs and returns pre-formatted HTML ready for Gmail. The signature is previewed in a container, and easily copied using a button.*

## Background
This is a tool I built for my marketing agency. After many past methods for signature entry that proved messy and inconvenient, I wanted a tool that could provide a source of truth for email setup in HTML with no technical knowledge needed for setup. The tool would have to allow users to effectively bypass restrictions for CSS normally imposed by Gmail to achieve a modern look.

This signature generator was created to make the process of creating or updating employee Gmail signatures easy, quick, and foolproof.

## What it does
- Fills in an email-ready HTML template with form inputs provided by user
- Autofills email field 
    - pulling from array in a single-use file so it is easily located for future updates
- 'Return' key triggers form submission
- Provides a preview of the signature
- Copy button copies visual signature to clipboard for use in Gmail

## Notes for use
- Both **Copy** and **Paste** must be performed in Safari Browser. Otherwise links and line spacing styles (among others) will be overridden by Gmail
- email-list.js contains array for email autofill
- Make sure assets are linked through a CDN

## Resources
Some of the techniques used were new to me. Here are the resources I learned and pulled code from.
### Copy to clipboard
https://stackoverflow.com/questions/2044616/select-a-complete-table-with-javascript-to-be-copied-to-clipboard
### Autocomplete
https://www.w3schools.com/howto/howto_js_autocomplete.asp

