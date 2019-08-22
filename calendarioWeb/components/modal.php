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
          
          <!-- Campos ocultos -->  
          <input type="hidden" name="txtId" id="txtId">
          <input type="hidden" name="txtDate" id="txtDate">
        
          <div class="form-row">

            <div class="form-group col-md-8">
              <label>  Titulo: </label>
              <input type="text" name="txtTitle" id="txtTitle" class="form-control"
              placeholder="Titulo del evento">    
            </div>
            
            <div class="form-group col-md-4">
              <label> Hora: </label>

              <div class="input-group clockpicker">
                <input type="text" name="txtHour" id="txtHour" class="form-control">
              </div>
            </div>

            <div class="form-group col-md-12">
              <label> Descripcion: </label>
              <textarea id="txtDescription" rows="3" name="txtDescription"
                 class="form-control" placeholder="descripcion del evento"></textarea> 
            </div>

            <div class="form-group col-md-12">
              <label> Color:  </label>
              <input type="color" name="txtColor" value="#ff0000" id="txtColor" class="form-control" style="height: 36px;">
            </div>

          </div>

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