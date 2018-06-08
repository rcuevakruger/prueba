    /*jshint ignore:start*/
    /**
     * 
     * @param {com.cams.ConfirmacionBanco} confirmacionBanco - transaccion para que banco confirme el activo
     * @transaction
     */
    async function confirmacionBanco(confirmacionBanco) {
        confirmacionBanco.Activo.estadoDeActivo = confirmacionBanco.estadoDeActivo;
        confirmacionBanco.Activo.enteBancario = confirmacionBanco.bancoEncargado;
    // Actualizar registro de activo
        const assetRegistry = await getAssetRegistry('com.cams.activo');
        await assetRegistry.update(confirmacionBanco.Activo)
    }

    /**
     * 
     * @param {com.cams.AsegurarActivo} asegurarActivo -transaccion para que la aseguradora pueda asegurar el activo
     * @transaction
     */
    async function asegurarActivo(asegurarActivo) {
        asegurarActivo.Activo.estadoDeActivo = asegurarActivo.estadoDeActivo;
        asegurarActivo.Activo.enteAsegurador = asegurarActivo.aseguradoraEncargada;
        asegurarActivo.Activo.numeroPoliza = asegurarActivo.numeroPoliza;
        asegurarActivo.Activo.fechaSolicitud = asegurarActivo.fechaSolicitud;
        asegurarActivo.Activo.formaPago = asegurarActivo.formaPago;
        asegurarActivo.Activo.vigencia = asegurarActivo.vigencia;
        asegurarActivo.Activo.solicitante = asegurarActivo.solicitante;
        asegurarActivo.Activo.sumaAsegurada = asegurarActivo.sumaAsegurada
    // Actualizar registro de activo    
        const assetRegistry = await getAssetRegistry('com.cams.activo');
        await assetRegistry.update(asegurarActivo.Activo);
    }

    /**
     * 
     * @param {com.cams.ReasegurarActivo} reasegurarActivo - transaccion para que la reaseguradora pueda reasegurar un activo
     * @transaction
     */
    async function reasegurarActivo(reasegurarActivo) {
    reasegurarActivo.Activo.estadoDeActivo = reasegurarActivo.estadoDeActivo;
    reasegurarActivo.Activo.enteReasegurador = reasegurarActivo.reaseguradoraEncargada;
    // Actualizar registro de activo
    const assetRegistry = await getAssetRegistry('com.cams.activo');
    await assetRegistry.update(reasegurarActivo.Activo);
    }

    /**
    * 
    * @param {com.cams.Materializar} materializarActivo - transaccion para que se pueda desmaterializar el activo y ya no este asegurado ni reasegurado
    * @transaction
    */
    async function materializarActivo(materializarActivo) {
    materializarActivo.Activo.estadoDeActivo = materializarActivo.estadoDeActivo;
    // Actualizar registro de activo
    const assetRegistry = await getAssetRegistry('com.cams.activo');
    await assetRegistry.update(materializarActivo.Activo);
    }

    /**
     * 
     * @param {com.cams.Traspaso} traspaso - transaccion para que banco confirme el activo
     * @transaction
     */
    async function traspaso(traspaso) {
        traspaso.Activo.propietario = traspaso.nuevoDueño;
        
    // Actualizar registro de activo
        const assetRegistry = await getAssetRegistry('com.cams.activo');
        await assetRegistry.update(traspaso.Activo)
    }