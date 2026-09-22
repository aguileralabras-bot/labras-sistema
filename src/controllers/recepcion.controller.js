const path = require('path');
const xlsx = require('xlsx');

exports.getRecepcionFQ = (req, res) => {
    try {
        const filePath = path.join(__dirname, '../../1-GA-RE-38-07 Formulario Recepción de muestras- Fisicoquímica firma JL.xlsx');
        const workbook = xlsx.readFile(filePath);
        const sheetName = workbook.SheetNames[1];
        const sheet = workbook.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });

        res.json({
            tipo: "Fisicoquímica",
            hoja: sheetName,
            estado: "Sin planilla activa",
            totalFilas: data.length,
            filasMuestra: data.slice(0, 15)
        });
    } catch (error) {
        console.error("Error FQ:", error);
        res.status(500).json({ error: "No se pudo leer el archivo FQ" });
    }
};

exports.getRecepcionMB = (req, res) => {
    try {
        const filePath = path.join(__dirname, '../../2- GA-RE-37-06 Formulario Recepcion de muestras - Microbiológico firma JL.xlsx');
        const workbook = xlsx.readFile(filePath);
        const sheetName = workbook.SheetNames[1];
        const sheet = workbook.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });

        res.json({
            tipo: "Microbiológico",
            hoja: sheetName,
            estado: "Liberadas con pendientes",
            totalFilas: data.length,
            filasMuestra: data.slice(0, 15)
        });
    } catch (error) {
        console.error("Error MB:", error);
        res.status(500).json({ error: "No se pudo leer el archivo MB" });
    }
};