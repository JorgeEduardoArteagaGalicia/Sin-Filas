<?php

class ConectionMYSQL{
  private $host;
  private $user;
  private $password;
  private $db;
  private $pdo;

  public function __construct(){
    require_once "global/conection.php";
    $this->host = HOST;
    $this->user = USER;
    $this->password = PASSWORD;
    $this->db = DB;
  }
  public function conection(){
    $servidor = "mysql:dbname=".$this->db.";host=".$this->host;
    try {
      $this->pdo = new PDO($servidor,$this->user,$this->password,array(PDO::MYSQL_ATTR_INIT_COMMAND=>"SET NAMES utf8"));
      return $this->pdo;
      echo "siiiii";
    } catch (PDOException $e) {
      echo "error";
    }
  }
  public function getDataFromDBAsArray($query){
    $stmt = $this->pdo->prepare($query);
    $stmt->execute();
    $arrayData = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $arrayData;
  }
  public function getRowsAfectedAsNumber($query){
    $stmt = $this->pdo->exec($query);
    return $stmt;
  }

  public function getColumnFromDBAsArray($query, $numberOfColumn){
    $stmt = $this->pdo->prepare($query);
    $stmt->execute();
    $arrayData = $stmt->fetchColumn($numberOfColumn);
    return $arrayData;
  }

}
