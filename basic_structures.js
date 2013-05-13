
var stack = [];

function trace_tree_preorder(parent)
{
	if( parent !== null ) {
		var node = parent[1];
		console.log(node.info);

		var children = parent[0];
		stack.push(parent[2]);

		trace_tree_preorder(children);
		trace_tree_preorder(stack.pop());
	}
}

function trace_tree_unorder(parent)
{
	if( parent !== null ) {
		var children = parent[0];
		trace_tree_unorder(children);

		var node = parent[1];

		console.log(node.info);
		stack.push(parent[2]);

		trace_tree_unorder(stack.pop());
	}
}

function trace_tree_postorder(parent)
{
	if( parent !== null ) {
		var children = parent[0];

		stack.push(parent[2]);
		trace_tree_postorder(children);
		trace_tree_postorder(stack.pop());

		var node = parent[1];
		console.log(node.info);
	}
}

function load_tree (node) {
	var other;
	if(	node[1].info === null) {
		node[1].info = prompt("Inserta el valor para el nodo");
	}

	if( confirm("Existe nodo por izquierda " + node[1].info) ) {
		other = prompt("Valor para info del nuevo nodo");
		var left_node = create_node(other);
		node[0] = left_node;
		load_tree(left_node);

	} else {
		node[0] = null;
	}

	if( confirm("Existe nodo por derecha " + node[1].info) ) {
		other = prompt("Valor para info del nuevo nodo");
		var right_node = create_node(other);
		node[2] = right_node;
		load_tree(right_node);
	} else {
		node[2] = null;
	}

	return node;
}

function search_tree (node, info) {
	var left_node = node[0],
			self = node[1],
			right_node = node[2];

	if( info < self.info ) {

		if( left_node === null ) {
			console.log("Node not found in tree");
		}
		else {
			search_tree(left_node, info);
		}
	}
	else if( info > self.info ) {
		if( right_node === null ) {
			console.log("Node not found in tree");
		} else {
			search_tree(right_node, info);
		}
	} else {
		console.log("Node is part of the tree");
	}
}


function another_search_tree (node, info) {

	if ( node !== null )
	{
		var left_node = node[0],
				self = node[1],
				right_node = node[2];

		if( info < self.info ) {
			another_search_tree(left_node, info);
		} else {
			if( info > self.info ) {
				another_search_tree(right_node, info);
			} else {
				console.log(">>> Node is part of the tree <<<");
			}
		}
	} else {
		console.log("Node not found in tree");
	}


}


function create_node (info) {
	return [null, {info:info}, null];
}



