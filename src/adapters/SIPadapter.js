function adaptarGenerarQR(sipResp) {
  return {
    success: sipResp.data?.codigo === '0000',
    qrId: sipResp.data?.objeto?.idQr ?? null,
    qrImageBase64: sipResp.data?.objeto?.imagenQr ?? null
  };
}

function adaptarEstadoSIP(sipResp) {
  const obj = sipResp.data.objeto ?? {};
  return {
    success: sipResp.data?.codigo === '0000',
    alias: obj.alias ?? null,
    estadoActual: obj.estadoActual ?? null,
    fechaProcesamiento: obj.fechaProcesamiento ?? null,
    idQr: obj.idQr ?? null,
    monto: obj.monto ?? null,
    moneda: obj.moneda ?? null,
    cuentaCliente: obj.cuentaCliente ?? null,
    nombreCliente: obj.nombreCliente ?? null,
    documentoCliente: obj.documentoCliente ?? null
  };
}

function adaptarCancelarSIP(sipResp) {
  return {
    success: sipResp.data?.codigo === '0000',
    message: sipResp.data?.mensaje ?? null
  };
}


module.exports = { adaptarGenerarQR };
