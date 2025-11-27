const express = require('express');
const router = express.Router();
const { bnbClient, sipClient } = require('../services/bankClients');
const { adaptarGenerarQR: adaptarBNB } = require('../adapters/BNBadapter');
const { adaptarGenerarQR: adaptarSIP } = require('../adapters/SIPadapter');

router.post('/generate', async (req, res) => {
  const { banco } = req.body;
  try {
    if (banco === 'BNB') {
      const r = await bnbClient.post('/QRSimple.API/api/v1/main/getQRWithImageAsync', req.body);
      return res.json(adaptarBNB(r));
    } else if (banco === 'SIP') {
      const r = await sipClient.post('/api/v1/generaQr', req.body);
      return res.json(adaptarSIP(r));
    } else {
      return res.status(400).json({ error: 'Banco no válido' });
    }
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: 'Error comunicándose con el banco mock' });
  }
});

/* ESTADO */
router.post('/status', async (req, res) => {
  const { banco } = req.body;
  try {
    if (banco === 'BNB') {
      const r = await bnbClient.post('/QRSimple.API/api/v1/main/getQRStatusAsync', req.body);
      return res.json(adaptarEstadoQR(r));
    } else if (banco === 'SIP') {
      const r = await sipClient.post('/api/v1/estadoTransaccion', req.body);
      return res.json(adaptarEstadoSIP(r));
    }
    res.status(400).json({ error: 'Banco no válido' });
  } catch (err) {
    res.status(500).json({ error: 'Error comunicándose con el banco mock' });
  }
});


/* CANCELAR */
router.post('/cancel', async (req, res) => {
  const { banco } = req.body;
  try {
    if (banco === 'BNB') {
      const r = await bnbClient.post('/QRSimple.API/api/v1/main/CancelQRByIdAsync', req.body);
      return res.json(adaptarCancelarQR(r));
    } else if (banco === 'SIP') {
      const r = await sipClient.post('/api/v1/inhabilitarPago', req.body);
      return res.json(adaptarCancelarSIP(r));
    }
    res.status(400).json({ error: 'Banco no válido' });
  } catch (err) {
    res.status(500).json({ error: 'Error comunicándose con el banco mock' });
  }
});

module.exports = router;
