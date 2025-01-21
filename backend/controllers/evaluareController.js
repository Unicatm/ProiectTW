const User = require("../models/User");
const Echipa = require("../models/Echipa");
const Livrabil = require("../models/Livrabil");
const Proiect = require("../models/Proiect");
const Evaluare = require("../models/Evaluare"); // Model pentru tabela Evaluare
const Note = require("../models/Note"); // Model pentru tabela Note
const { Op } = require("sequelize");

const evalueazaProiect = async (req, res) => {
  const { idUser } = req.body; // Extrage idUser din corpul cererii

  try {
    // Verifică utilizatorul
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

    // Verifică dacă utilizatorul are deja o echipă asignată pentru evaluare
    let evaluareExistenta = await Evaluare.findOne({ where: { idUser } });
    if (evaluareExistenta) {
      // Găsește detalii despre echipa asignată
      const echipaAleasa = await Echipa.findByPk(evaluareExistenta.idEchipa);
      if (!echipaAleasa) {
        return res
          .status(404)
          .json({ message: "Echipa asignată nu mai există." });
      }

      // Găsește proiectul asociat echipei
      const proiect = await Proiect.findOne({
        where: { idEchipa: echipaAleasa.idEchipa },
      });

      if (!proiect) {
        return res
          .status(404)
          .json({ message: "Proiectul asociat echipei nu există." });
      }

      // Găsește livrabilele asociate proiectului
      const livrabile = await Livrabil.findAll({
        where: { idProiect: proiect.id },
      });

      // Adaugă notele utilizatorului pentru fiecare livrabil
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
              data: n.dataAdaugare, // Adaugăm și data, dacă există
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

    // Găsește echipele disponibile
    const echipeDisponibile = await Echipa.findAll({
      where: { idEchipa: { [Op.ne]: echipaUtilizator } },
    });

    if (echipeDisponibile.length === 0) {
      return res
        .status(404)
        .json({ message: "Nu există alte echipe de evaluat." });
    }

    // Selectează o echipă aleatorie
    const echipaAleasa =
      echipeDisponibile[Math.floor(Math.random() * echipeDisponibile.length)];

    if (!echipaAleasa || !echipaAleasa.idEchipa) {
      return res
        .status(400)
        .json({ message: "Nu a fost aleasă o echipă validă." });
    }

    // Salvează asocierea între utilizator și echipă în tabelul Evaluare
    await Evaluare.create({
      idUser,
      idEchipa: echipaAleasa.idEchipa,
    });

    // Găsește proiectul asociat echipei
    const proiect = await Proiect.findOne({
      where: { idEchipa: echipaAleasa.idEchipa },
    });

    if (!proiect) {
      return res
        .status(404)
        .json({ message: "Proiectul asociat echipei nu există." });
    }

    // Găsește livrabilele asociate proiectului
    const livrabile = await Livrabil.findAll({
      where: { idProiect: proiect.id },
    });

    // Adaugă notele utilizatorului pentru fiecare livrabil
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

    // Răspuns JSON
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
