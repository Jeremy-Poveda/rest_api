var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Suppliers = require('../models').Suppliers;

router.get('/findAll', function (req, res, next) {

  /* Verificador de autorización */

  const { role } = req.user;

  if (role !== process.env.ADMIN) {
    return res.sendStatus(401);
  }

  Suppliers.findAll({
  })
    .then(suppliers => {
      res.json(suppliers);
    })
    .catch(error => res.status(400).send(error))
});

router.get('/findById/:id', function (req, res, next) {
  let id = parseInt(req.params.id);

  Suppliers.findOne({
    where: {
      [Op.and]: [
        { SupplierID: id }
      ]
    }
  })
    .then(data => {
      res.json(data);
    })
    .catch(error => res.status(400).send(error))
});

router.post('/save', function (req, res, next) {
  let { SupplierName, ContactName, Address, City, PostalCode, Country, Phone } = req.body;
  console.log(SupplierName)
  console.log(ContactName)
  console.log(Address)
  console.log(City)
  console.log(PostalCode)
  console.log(Country)
  console.log(Phone)


  Suppliers.create({
    SupplierName: SupplierName,
    ContactName: ContactName,
    Address: Address,
    City: City,
    PostalCode: PostalCode,
    Country: Country,
    Phone: Phone
  })
    .then(data => {
      res.json(data);
    })
    .catch(error => res.status(400).send(error))
});

/* PUT supplier. */
router.put('/update/:id', function (req, res, next) {
  let id = parseInt(req.params.id);
  let { SupplierName, ContactName, Address, City, PostalCode, Country, Phone } = req.body;


  Suppliers.update({
    SupplierName: SupplierName,
    ContactName: ContactName,
    Address: Address,
    City: City,
    PostalCode: PostalCode,
    Country: Country,
    Phone: Phone
  },
    {
      where: {
        SupplierID: id
      }
    })
    .then(suppliers => {
      res.json(suppliers);
    })
    .catch(error => res.status(400).send(error))
});
/* DELETE supplier */
router.delete('/delete/:id', function (req, res, next) {
  let id = parseInt(req.params.id);

  Suppliers.destroy({
    where: {
      SupplierID: id
    }
  })
    .then(suppliers => {
      res.json(suppliers);
    })
    .catch(error => res.status(400).send(error))
});

module.exports = router;
