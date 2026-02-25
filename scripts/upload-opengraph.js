const cloudinary = require('cloudinary').v2;
const path = require('path');

// Configure Cloudinary (update with your credentials)
cloudinary.config({
  cloud_name: 'dku1gnuat',
  api_key: process.env.CLOUDINARY_API_KEY || 'your-api-key',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'your-api-secret'
});

async function uploadOpenGraph() {
  try {
    const result = await cloudinary.uploader.upload(
      path.join(__dirname, '../public/openGraph.png'),
      {
        folder: 'BNC-BUILDERS',
        public_id: 'openGraph',
        overwrite: true,
        resource_type: 'image'
      }
    );

    console.log('✅ Successfully uploaded to Cloudinary:');
    console.log('URL:', result.secure_url);
    console.log('Public ID:', result.public_id);
    console.log('\nUse this URL in your metadata:');
    console.log(result.secure_url);

  } catch (error) {
    console.error('❌ Error uploading:', error.message);
  }
}

uploadOpenGraph();
