/**
 * CategoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  todas: function(req, res){


    var resultados = [];

    resultados.push(
      {
      icono: "deporte.jpg",
      nombre: "Deportes",
      desc: "Lesiones y accidentes.",
      rangoHoras: true,
      precio: 3400,
      desc_larga: "Cubre casos de accidentes personales, como fracturas, lesiones musculares, y otros daños físicos."
    });
    resultados.push({
      icono: "viaje.jpg",
      nombre: "Viaje",
      rangoDias: true,
      precio: 17000,
      desc: "Riesgos asociados a viajes.",
      desc_larga: "Cubre en casos de robos o perdidas de equipaje, y artículos personales como cámaras de fotos, seguro médico, y reembolso de gastos médicos."
    });
    /*resultados.push({
      icono: "vacacion.jpg",
      nombre: "Vacaciones",
      desc: "Salga de vacaciones tranquilo.",
      desc_larga: "Descripción larga de esta categoría. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
    });*/
    resultados.push({
      icono: "transporte.jpg",
      nombre: "Transporte",
      rangoHoras: true,
      precio: 8000,
      desc: "Accidentes de tránsito y transporte público.",
      desc_larga: "Protege en casos de accidentes de tránsito o actos violentos como robos dentro de metros y microbuses."
    });
    resultados.push({
      icono: "otro.jpg",
      nombre: "Otro evento",
      miscelaneo: true,
      precio: 1500,
      desc: "Seguros misceláneos.",
      desc_larga: "Eventos misceláneos de todo tipo."
    });

    res.ok(resultados);



  }


};
