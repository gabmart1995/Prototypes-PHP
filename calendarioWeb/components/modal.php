<div class="modal fade" id="calendarModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      
      <div class="modal-header">
        <h5 class="modal-title" id="tituloEvento"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body">
        <div id="descripcionEvento"></div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-success">Agregar</button>
        <button type="button" class="btn btn-secondary">Modificar</button>
        <button class="btn btn-danger" type="button">Borrar</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">
          Cancelar
        </button>
      </div>

    </div>
  </div>
</div>

<!-- Modal (agregar, modificar, eliminar ) -->
<div class="modal fade" id="modalEventos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      
      <div class="modal-header">
        <h5 class="modal-title" id="tituloEvento"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body">
        <div id="descripcionEvento">
          
          Fecha: <input type="text" name="txtFecha" id="txtFecha"> <br>
          Titulo: <input type="text" name="txtTitulo" id="txtTitulo"> <br>
          Hora: <input type="text" name="txtHora" value="10:30" id="txtHora"> <br>
          Descripcion <textarea id="txtDescription" rows="3" name="txtDescription"></textarea> <br>
          Color: <input type="color" name="txtColor" value="#ff0000" id="txtColor">

        </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-success" id="btnAgregar">Agregar</button>
        <button type="button" class="btn btn-secondary">Modificar</button>
        <button class="btn btn-danger" type="button">Borrar</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">
          Cancelar
        </button>
      </div>

    </div>
  </div>
</div>