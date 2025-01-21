const User = require("../models/User");
const Echipa = require("../models/Echipa");
const Livrabil = require("../models/Livrabil");
const Proiect = require("../models/Proiect");
const Evaluare = require("../models/Evaluare");
const Note = require("../models/Note"); 
const { Op } = require("sequelize");

const evalueazaProiect = async (req, res) => {
  const { idUser } = req.body; 

  try {
    const user = await User.findByPk(idUser);
    if (!user) {
      return res.status(404).json({ message: "Utilizatorul nu există." });
    }

    const echipaUtilizator = user.idEchipa;
    if (!echipaUtilizator) {
      return res
        .status(400)
        .json({ message: "Utilizatorul nu aparține unei echipe valide." });
    }

    let evaluareExistenta = await Evaluare.findOne({ where: { idUser } });
    if (evaluareExistenta) {
      const echipaAleasa = await Echipa.findByPk(evaluareExistenta.idEchipa);
      if (!echipaAleasa) {
        return res
          .status(404)
          .json({ message: "Echipa asignată nu mai există." });
      }

      const proiect = await Proiect.findOne({
        where: { idEchipa: echipaAleasa.idEchipa },
      });

      if (!proiect) {
        return res
          .status(404)
          .json({ message: "Proiectul asociat echipei nu există." });
      }

      const livrabile = await Livrabil.findAll({
        where: { idProiect: proiect.id },
      });

      const livrabileCuNote = await Promise.all(
        livrabile.map(async (livrabil) => {
          const note = await Note.findAll({
            where: { idLivrabil: livrabil.id },
          });
          return {
            ...livrabil.toJSON(),
            note: note.map((n) => ({
              idUser: n.idUser,
              nota: n.nota,
              data: n.dataAdaugare, 
            })),
          };
        })
      );

      return res.json({
        echipa: echipaAleasa,
        proiect,
        livrabile: livrabileCuNote,
      });
    }

    const echipeDisponibile = await Echipa.findAll({
      where: { idEchipa: { [Op.ne]: echipaUtilizator } },
    });

    if (echipeDisponibile.length === 0) {
      return res
        .status(404)
        .json({ message: "Nu există alte echipe de evaluat." });
    }

    const echipaAleasa =
      echipeDisponibile[Math.floor(Math.random() * echipeDisponibile.length)];

    if (!echipaAleasa || !echipaAleasa.idEchipa) {
      return res
        .status(400)
        .json({ message: "Nu a fost aleasă o echipă validă." });
    }

    await Evaluare.create({
      idUser,
      idEchipa: echipaAleasa.idEchipa,
    });

    const proiect = await Proiect.findOne({
      where: { idEchipa: echipaAleasa.idEchipa },
    });

    if (!proiect) {
      return res
        .status(404)
        .json({ message: "Proiectul asociat echipei nu există." });
    }

    const livrabile = await Livrabil.findAll({
      where: { idProiect: proiect.id },
    });

    const livrabileCuNote = await Promise.all(
      livrabile.map(async (livrabil) => {
        const note = await Note.findAll({
          where: { idLivrabil: livrabil.id },
        });
        return {
          ...livrabil.toJSON(),
          note: note.map((n) => ({
            idUser: n.idUser,
            nota: n.nota,
          })),
        };
      })
    );

    res.json({
      echipa: echipaAleasa,
      proiect,
      livrabile: livrabileCuNote,
    });
  } catch (error) {
    console.error("Eroare în evalueazaProiect:", error);
    res
      .status(500)
      .json({ message: "Eroare la asignarea proiectului pentru evaluare." });
  }
};

module.exports = {
  evalueazaProiect,
};
