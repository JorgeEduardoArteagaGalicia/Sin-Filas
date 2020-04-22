<?php
if($_POST){
  require_once 'includes/classConectionMYSQL.php';

  $NombreNegocio = $_POST['NombreDelNegocio'];
  $TipoDeNegocio = $_POST['TipoDenegocio'];
  $Dueno = $_POST['NombreDelDueno'];
  $Celular = $_POST['Celular'];
  $Correo = $_POST['Correo'];
  $Direccion = $_POST['Direccion'];
  $Dias = $_POST['Diasqueabre'];
  $Hora = $_POST['Horario'];

  $conn = new ConectionMYSQL();
  $pdo = $conn->conection();
  
  $sentencia = $pdo->prepare("INSERT INTO `Negocios` (`ID`, `NombreDelNegocio`, `TipoDeNegocio`, `NombreDelPropietario`, `Telefono`, `Correo`, `DireccionDeNegocio`, `Dias`, `Horario`, `lat`, `lan`)
  VALUES (NULL, :negocio, :tipo, :nombre, :cel, :correo, :dire, :dias, :hora, 12345, 12345);
  ");
  $sentencia->bindParam(":negocio", $NombreNegocio);
  $sentencia->bindParam(":tipo", $TipoDeNegocio);
  $sentencia->bindParam(":nombre", $Dueno);
  $sentencia->bindParam(":cel", $Celular);
  $sentencia->bindParam(":correo", $Correo);
  $sentencia->bindParam(":dire", $Direccion);
  $sentencia->bindParam(":dias", $Dias);
  $sentencia->bindParam(":hora", $Hora);
  
  if( $sentencia->execute()){
  echo "Registro completado exitosamente";
  Echo "<script>window.locationf='index.html'</script>"
}else{
  echo "Error al registrarse";
}



}else{
  header("location: preguntas.html");
}
 ?>
