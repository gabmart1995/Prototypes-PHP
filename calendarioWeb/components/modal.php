<!-- modal de eventos ( modificar, eliminar )-->
<div class="modal fade" id="modalEvent" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      
      <div class="modal-header">
        <h5 class="modal-title" id="titleEvent"></h5>
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
          Color: <input type="color" name="txtColor" value="#ff0000" id="txtCol">
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary">Modificar</button>
        <button class="btn btn-danger" type="button">Borrar</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">
          Cerrar
        </button>
      </div>

    </div>
  </div>
</div>

<!-- Modal de fecha ( agregar evento ) -->
<div class="modal fade" id="modalDate" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      
      <div class="modal-header">
        <h5 class="modal-title" id="dateTitle"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body">
          ID: <input type="text" name="txtID" id="txtID"> <br>
          Fecha: <input type="text" name="txtFecha" id="txtFecha"> <br>
          Titulo: <input type="text" name="txtTitulo" id="txtTitulo"> <br>
          Hora: <input type="text" name="txtHora" value="10:30" id="txtHora"> <br>
          Descripcion: <textarea id="txtDescripcion" rows="3" name="txtDescripcion"></textarea> <br>
          Color: <input type="color" name="txtColor" value="#ff0000" id="txtColor">
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-success" id="btnAgregar">Agregar</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">
          Cancelar
        </button>
      </div>

    </div>
  </div>
</div>