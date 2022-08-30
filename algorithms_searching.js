// Binary Search

//BFS

class BinarySearchTree {

    constructor(){
        this.root = null;
    }

    breadFirstSearch(){
        let currentNode = this.root;
        let list = [ ];
        let queue = [ ];
        queue.push(currentNode);

        while( queue.lenght > 0){
            currentNode = queue.shift();
            list.push( currentNode.value );

            if (currentNode.left){
                queue.push( currentNode.left )
            }
            if (currentNode.right){
                queue.push( currentNode.right )
            }
        }
    }

}



//     9
//   4 2 0
//1 6 1 5 1 7 0

//BFS [9,4,20,1,6,15,170] O(n)
// + Shortest Path, Closer Nodes
// - More memory

//DFS [9,4,1,6,20,15,170] O(n)
//  + Less memory, does path exists
//  - Can get slow if tree is deep

// If you know a solution is not far from the root of the tree:
//  BFS -> starts searching closes nodes to parent

// If three is very deep and solutions are rare:
// BFS

// If the tree is very wide:
// DFS (BFS will need too much memory)

//If the solutions are frequent but located deep in the tree
// DFS

// Determinin whether a path exists between two nodes:
// DFS

// Finding the shortest path:
// BFS