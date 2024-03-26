from flask import Flask, redirect, render_template, request, url_for
from sheet import insertdatatosheet

app = Flask(__name__)

name=""
rollno=""
score=""

@app.route('/',methods=['GET', 'POST'])
def start():
    global name,rollno
    if request.method == 'POST':
        name = request.form.get('name')
        rollno = request.form.get('rollno')
        print("Name:", name)
        print("Roll No:", rollno)
        return redirect(url_for('index'))
    else:
        return render_template('start.html')

@app.route('/index', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/score', methods=['POST'])
def score_page():
    global score
    score = request.form.get('score')
    print("Score:", score)
    insertdatatosheet(name,rollno,score)
    return render_template('score.html', score=score)

if __name__ == '__main__':
    app.run(debug=True)