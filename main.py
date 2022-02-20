from flask import Flask
from flask import render_template


app = Flask('app',
            static_folder="/home/rshphx/dagnyflask1/static"
            template_folder="/home/rshphx/dagnyflask1/templates")

@app.route('/')
def hello_world():
  return render_template('home.html', title='Welcome', name="Rob")

@app.route('/game')
def game():
  return render_template('game.html', title='Game')

if __name__ == "__main__":
  app.run(host='0.0.0.0', port=8080)