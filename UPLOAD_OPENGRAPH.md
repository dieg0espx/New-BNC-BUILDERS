# Upload OpenGraph Image to Cloudinary

## Quick Upload (Recommended)

1. Go to your Cloudinary dashboard: https://cloudinary.com/console
2. Click "Media Library" in the left sidebar
3. Navigate to the `BNC-BUILDERS` folder
4. Click "Upload" button
5. Upload `public/openGraph.png` from this project
6. Make sure it's named `openGraph.png` (no version number)
7. Done! The image will now show on WhatsApp, iMessage, etc.

## Or Use the Upload Script

If you have Cloudinary credentials set up:

```bash
# Set your Cloudinary credentials
export CLOUDINARY_API_KEY="your-api-key"
export CLOUDINARY_API_SECRET="your-api-secret"

# Run the upload script
node scripts/upload-opengraph.js
```

## After Uploading

1. Wait 1-2 minutes for Cloudinary to process the image
2. Clear social media caches:
   - WhatsApp: https://developers.facebook.com/tools/debug/
   - Enter your URL and click "Scrape Again" 3-4 times
3. Test by sharing your URL in WhatsApp

The URL will be:
`https://res.cloudinary.com/dku1gnuat/image/upload/BNC-BUILDERS/openGraph.png`
