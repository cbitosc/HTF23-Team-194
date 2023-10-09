from flask import Flask, request, jsonify

app = Flask(__name__)

   # Sample shopping list data
shopping_lists = {}

   # Sample store data
nearby_stores = ["Store A", "Store B", "Store C"]

@app.route('/add_item', methods=['POST'])
def add_item():
    data = request.get_json()
    list_name = data.get('list_name')
    item = data.get('item')
       
    if list_name and item:
        if list_name not in shopping_lists:
           shopping_lists[list_name] = []
           shopping_lists[list_name].append(item)
        return jsonify({'message': 'Item added successfully'})
    else:
       return jsonify({'error': 'Invalid data'})

@app.route('/get_stores', methods=['GET'])
def get_stores():
   return jsonify({'stores': nearby_stores})

if __name__ == '__main__':
   app.run(port=5000)

