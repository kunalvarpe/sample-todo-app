from app import app
import os

# If file is called directly called, then run the app in debug mode on the PORT provided defined in ENV or use '3000'.
if __name__ == "__main__":
    app.run("0.0.0.0", port=os.getenv('PORT', 3000), debug=True)
