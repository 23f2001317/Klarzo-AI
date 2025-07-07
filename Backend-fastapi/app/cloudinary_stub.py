import cloudinary
import cloudinary.uploader
import os

# Configure Cloudinary from environment variables or hardcoded (for demo only)
cloudinary.config(
    cloud_name=os.getenv('CLOUDINARY_CLOUD_NAME', 'your_cloud_name'),
    api_key=os.getenv('CLOUDINARY_API_KEY', 'your_api_key'),
    api_secret=os.getenv('CLOUDINARY_API_SECRET', 'your_api_secret')
)

def upload_to_cloudinary(file_path: str) -> str:
    """
    Uploads a file to Cloudinary and returns the secure URL.
    """
    try:
        response = cloudinary.uploader.upload(file_path)
        return response.get('secure_url')
    except Exception as e:
        print(f"Cloudinary upload failed: {e}")
        return None
