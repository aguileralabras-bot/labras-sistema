const db = require('../config/db');

const obtenerDatosDashboard = async (req, res) => {
    try {
        const empresaRes = await db.query('SELECT * FROM empresas LIMIT 1');
        const empresa = empresaRes.rows[0];

        const planillasRes = await db.query(
            'SELECT id, titulo, mes, anio, total_beneficiarias, estado FROM planillas ORDER BY id DESC LIMIT 5'
        );

        const datosDashboard = {
            empresa: empresa ? empresa.nombre_comercial : "Sin empresa",
            estadisticas: {
                beneficiarias_activas: { total: 0, prenatal: 0, lactancia: 0 },
                paquete_asignado: { estado: "Sin paquete asignado", detalle: "Todo al día" },
                liberaciones: { cantidad: 1, estado: "Liberadas con pendientes", detalle: "Pendientes de regularizar" },
                planillas: { estado: "Sin planilla activa", detalle: "Puede generar una nueva" }
            },
            ultimas_planillas: planillasRes.rows
        };

        res.status(200).json(datosDashboard);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los datos de la base de datos" });
    }
};

module.exports = {
    obtenerDatosDashboard
};