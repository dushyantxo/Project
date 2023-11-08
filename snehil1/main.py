from flask import Flask, render_template, redirect, url_for
import os

app = Flask(__name__)

@app.route('/')
def index():
    # Redirect to the music player route (e.g., '/music-player')
    return redirect(url_for('music_player'))

@app.route('/music-player')
def music_player():
    return render_template('index1.html')

# Serve your style.css and main.js files under the /static/ route
@app.route('/style.css')
def serve_css():
    return app.send_static_file('index.css')

@app.route('/script.js')
def serve_js():
    return app.send_static_file('index.js')

# Serve music files from the /music/ route
@app.route('/assets/songs/Dusty Reel.mp3')
def serve_music(filename):
    return app.send_static_file('assets/songs/Dusty Reel.mp3')

# Serve image files from the /images/ route
@app.route('/images/<path:filename>')
def serve_images(filename):
    return app.send_static_file(f'images/{filename}')

if __name__ == '__main__':
    # Dynamically generate routes for serving all songs in the music folder
    music_folder = 'static/music'
    for root, dirs, files in os.walk(music_folder):
        for file in files:
            app.add_url_rule(f'/music/{file}', f'serve_music_{file}', view_func=lambda filename=file: serve_music(filename))
    
    app.run(debug=True)

