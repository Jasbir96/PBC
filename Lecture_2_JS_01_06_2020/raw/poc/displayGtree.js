let root = {
    data: "d10",
    isfile:false,
    children: [{
        data: "d20",
        children: [{
            data: "d50",
            children: []
        }, {
            data: "d60",
            children: []
        }]
    }, {
        data: "d30",
        children: []
    }, {
        data: "d40",
        children: [{
            data: "d80",
            children: []
        }]
    }]
};

// process.stdout.write();
function displayGtree(node) {
    // My work
    let menMyFamily = node.data + " => ";
    for (let i = 0; i < node.children.length; i++) {
        let child = node.children[i];
        menMyFamily += child.data + ",";
    }
    console.log(menMyFamily);
    // abstraction
    // faith
    for (let i = 0; i < node.children.length; i++) {
        let child = node.children[i];
        displayGtree(child);
    }
}

displayGtree(root);
