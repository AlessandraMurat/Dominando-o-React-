 //No ReactDOM passamos o que é para ser injetado e o alvo(root) que é passando no document.getElementById
 
 ReactDOM.render ( // render para renderizar o conteúdo
     React.createElement ( // Criar elemento 
        'h1',
        null,
        'Hello World'
     ),
    
    
     document.getElementById('root')
 )