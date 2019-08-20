<!-- modal de eventos ( modificar, eliminar, agregar )-->
<div class="modal fade" id="modalEvent" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      
      <div class="modal-header">
        <h5 class="modal-title" id="eventTitle"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body">
          ID: <input type="text" name="txtId" id="txtId"> <br>
          Fecha: <input type="text" name="txtDate" id="txtDate"> <br>
          Titulo: <input type="text" name="txtTitle" id="txtTitle"> <br>
          Hora: <input type="text" name="txtHour" id="txtHour"> <br>
          Descripcion <textarea id="txtDescription" rows="3" name="txtDescription"></textarea> <br>
          Color: <input type="color" name="txtColor" value="#ff0000" id="txtColor">
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-success" id="btnAdd">Agregar</button>
        <button type="button" class="btn btn-info" id="btnModify">Modificar</button>
        <button class="btn btn-danger" type="button" id="btnClear">Borrar</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">
          Cerrar
        </button>
      </div>

    </div>
  </div>
</div>