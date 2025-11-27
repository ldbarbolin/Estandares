function adaptarGenerarQR(bnbResp) {
  // adapta la respuesta del BNB mock a la firma estándar
  return {
    success: bnbResp.data?.success ?? true,
    qrId: bnbResp.data?.id ?? null,
    qrImageBase64: bnbResp.data?.qr ?? null
  };
}

function adaptarEstadoQR(bnbResp) {
  return {
    success: bnbResp.data?.success ?? false,
    qrId: bnbResp.data?.id ?? null,
    statusId: bnbResp.data?.statusId ?? null,
    expirationDate: bnbResp.data?.expirationDate ?? null,
    voucherId: bnbResp.data?.voucherId ?? null
  };
}

function adaptarCancelarQR(bnbResp) {
  return {
    success: bnbResp.data?.success ?? false,
    message: bnbResp.data?.message ?? null
  };
}


module.exports = { adaptarGenerarQR };
