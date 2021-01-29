## Task-1
### Generate JSON data from square matrix:
 1.  Clone this repository 
 2.  Redirect to cloned directory using ```cd ``` command.
 3. Run ```npm install ```
 4. Run ``` npm start ```

##### You have to write a script to generate data to display square:

- As shown below, JSON data contains two array of objects NODES and EDGES.
- Every node and edge has unique id field.
- Format for Nodeid:
  id should start from capital N
  "N0-0" -> first 0 represent the row and second 0 represent the column in the matrix.

- Every edge has source and target field.
- Source and target fields contain ids of nodes from NODES array.
- Write a code to generate JSON data as shown below .
- Your code should generate data for every possible matrix e.g 2 X 2 , 4 X 4 ,5 X 5 ....(It should be dynamic.)

### [ EXAMPLE ] Data format for 3 X 3 Matrix :

```
{

"nodes": [

{ "data": { "id": "N0-0" } },

{ "data": { "id": "N0-1" } },

{ "data": { "id": "N0-2" } },

{ "data": { "id": "N1-0" } },

{ "data": { "id": "N1-1" } },

{ "data": { "id": "N1-2" } },

{ "data": { "id": "N2-0" } },

{ "data": { "id": "N2-1" } },

{ "data": { "id": "N2-2" } }

],

"edges": [

{ "data": { "id":  "0-0E",  "source":  "N0-0",  "target":  "N0-1" } },

{ "data": { "id":  "0-0S",  "source":  "N0-0",  "target":  "N1-0" } },

{ "data": { "id":  "0-2W",  "source":  "N0-2",  "target":  "N0-1" } },

{ "data": { "id":  "0-2S",  "source":  "N0-2",  "target":  "N1-2" } },

{ "data": { "id":  "1-1E",  "source":  "N1-1",  "target":  "N1-2" } },

{ "data": { "id":  "1-1W",  "source":  "N1-1",  "target":  "N1-0" } },

{ "data": { "id":  "1-1S",  "source":  "N1-1",  "target":  "N2-1" } },

{ "data": { "id":  "1-1N",  "source":  "N1-1",  "target":  "N0-1" } },

{ "data": { "id":  "2-0E",  "source":  "N2-0",  "target":  "N2-1" } },

{ "data": { "id":  "2-0N",  "source":  "N2-0",  "target":  "N1-0" } },

{ "data": { "id":  "2-2N",  "source":  "N2-2",  "target":  "N1-2" } },

{ "data": { "id":  "2-2W",  "source":  "N2-2",  "target":  "N2-1" } },

{ "data": { "id":  "0-1E",  "source":  "N0-1",  "target":  "N0-2" } },

{ "data": { "id":  "0-1W",  "source":  "N0-1",  "target":  "N0-0" } },

{ "data": { "id":  "0-1S",  "source":  "N0-1",  "target":  "N1-1" } },

{ "data": { "id":  "1-0E",  "source":  "N1-0",  "target":  "N1-1" } },

{ "data": { "id":  "1-0S",  "source":  "N1-0",  "target":  "N2-0" } },

{ "data": { "id":  "1-0N",  "source":  "N1-0",  "target":  "N0-0" } },

{ "data": { "id":  "1-2W",  "source":  "N1-2",  "target":  "N1-1" } },

{ "data": { "id":  "1-2S",  "source":  "N1-2",  "target":  "N2-2" } },

{ "data": { "id":  "1-2N",  "source":  "N1-2",  "target":  "N0-2" } },

{ "data": { "id":  "2-1E",  "source":  "N2-1",  "target":  "N2-2" } },

{ "data": { "id":  "2-1W",  "source":  "N2-1",  "target":  "N2-0" } },

{ "data": { "id":  "2-1N",  "source":  "N2-1",  "target":  "N1-1" } }

]

}
```

![3X3 matrix](https://github.com/Training-Rapidops/Javascript-Exam/blob/master/public/img/threeXthree.png)
![3X3 matrix](https://github.com/Training-Rapidops/Javascript-Exam/blob/master/public/img/exam.png)

## Task-2
### Write a script to generate data to display square with diagonals like shown below:

![5X5 matrix](https://github.com/Training-Rapidops/Javascript-Exam/blob/master/public/img/js-exam2.png)
![3X3 matrix](https://github.com/Training-Rapidops/Javascript-Exam/blob/master/public/img/task-2-diagonal.png)

##### hint:

- Generating node array is very easy :)
- To generate edges from generated nodes, you have to count all the adjacent nodes and their direction.
- e.g Edge between N0-0 to N0-1 is :
- `{ "data": { "id": "0-0E", "source": "N0-0", "target": "N0-1" } }`
- Here 0-0E is id of edge which should be unique (E is for East , because edge direction is East. you can put anything here.)
- Number of nodes and edges in N X N matrix should be equal to N^2 and (N^2)x4 - (Nx4) respectively.
- Write your logic inside `/public/js/matrix.js` file
- You can see your generated data inside `/public/js/mapdata.json` file (It'll update automatically when you refresh the page.)
- Take a pen and paper, scratch your head and do some logical calculation before coding...
- have fun 😊
