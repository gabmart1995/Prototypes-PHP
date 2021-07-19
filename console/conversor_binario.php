<?php

  require_once 'array_ascii.php';
  
  function convert_caracter_to_binary( $word ) {

    $binary_chain = "";

    if ( empty( $word ) ) {
      printf("La palabra no debe estar vacia \n");
      return;
    }

    if ( !preg_match( "/^[a-zA-z]+$/", $word ) ) {
      printf( "La palabra %s no coincide con la expresion regular \n", $word );
      return;
    }

    // se separa cada una de las letras
    for ( $i = 0; $i < strlen( $word ); $i++ ) {
      $binary_chain .= get_binary( $word[$i] );
    }

    // var_dump( $binary_chain );

    return $binary_chain;
  }

  function get_binary( $letter ) {

    $array_ascii = $GLOBALS['arrayAscii'];
    $value = 0;
    $binary = "";

    foreach ( $array_ascii as $caracter => $code ) {

      if ( $letter == $caracter ) {

        // genera el binario
        while ( $code > 1 ) {
          $value = $code % 2;
          $binary .= $value;
          $code /= 2;
        }
      }
    }

    // inverte el binario para obtener el valor real
    return strrev( $binary );
  }

  function convert_binary_to_caracter( $binary_chain ) {

    $word = "";

    if ( empty( $binary_chain ) ) {
      printf("La cadena binaria no debe estar vacia \n");
      return;
    }

    if ( !preg_match( "/^[0-1]+$/", $binary_chain ) ) {
      printf( "La cadena %s no coincide con la expresion regular \n", $binary_chain );
      return;
    }

    for ( $i = 0; $i < strlen( $binary_chain ); $i += 7 ) {
      $binary = substr( $binary_chain, $i, 7 );
      $word .= get_caracter( $binary );
    }

    return $word;
  }

  function get_caracter( $binary ) {

    $array_ascii = $GLOBALS['arrayAscii'];
    $exponent = 0;
    $code_binary = 0;
    $letter = "";

    for ( $i = ( strlen( $binary ) - 1 ); $i >= 0; $i-- ) {
      if ( $binary[$i] == "1" ) {
        $code_binary += pow( 2, $exponent );
      }

      $exponent++;
    }

    foreach ( $array_ascii as $caracter => $code ) {
      if ( $code_binary == $code ) {
        $letter = $caracter;
      }
    }

    return $letter;
  }

  $app = true;

  $message = <<<SELECTION
  Que operacion desea realizar:
  1. Convertir palabra a binario
  2. Binario a caracter
  3. Salir de la app \n\n
  SELECTION;

  printf("Bienvenvenido al conversor binario\n\n");

  do {

    printf( $message );

    $option = (int) readline("Ingrese el numero de la opcion: ");

    switch ( $option ) {
      case 1: {
        $word = readline("Ingresa la palabra que desee convertir: ");

        printf("El valor del binario es: %s \n\n", convert_caracter_to_binary( $word ) );

        break;
      }

      case 2: {
        $binary_chain = readline("Ingresa la cadena binaria: ");

        printf( "La palabra generada es: %s \n\n", convert_binary_to_caracter( $binary_chain ) );

        break;
      }

      case 3: {
        // se cierra la app
        $app = false;

        break;
      }

      default: {
        printf("La opcion seleccionada no es valida \n");

        break;
      }
    }

  } while ( $app );

?>
