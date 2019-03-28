<html>
<head>
    <title>Link Aleatorio</title>
<script>
    var enderecos = new Array("http://www.terra.com.br", "http://www.google.com.br", "http://jbonline.terra.com.br")
    function linkAleatorio(){
       aleat = Math.random() * enderecos.length
       aleat = Math.floor(aleat)
       window.location=enderecos[aleat]
    }
</script>
</head>
 
<body>
<a href="javascript:linkAleatorio()">LinkAleatorio</a>
</body>
</html>