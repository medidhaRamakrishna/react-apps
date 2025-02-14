window.onload = function(){
    const heading = React.createElement('div',{
        "title":'Header Title',
        "id":"parent"
    }, [
        React.createElement('div',{id:'child'},
            [React.createElement('h1',{},"I am H1 tag"),React.createElement('h2',{},"I am H2 tag")]
        ),
        React.createElement('div',{id:'child2'},
            [React.createElement('h1',{},"I am H1 tag"),React.createElement('h2',{},"I am H2 tag")]
        )
    ]);
    console.log(heading);
    const root = ReactDOM.createRoot(document.getElementById('root'));
    console.log(root);
    root.render(heading);
}
