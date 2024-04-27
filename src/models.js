class Adress {
  constructor(location, floor, city, county, country) {
    this.location = location;
    this.floor = floor;
    this.city = city;
    this.county = county;
    this.country = country;
  }
}

class PropertyInfo {
  constructor(
    rooms,
    surface,
    year,
    state,
    furnished,
    price,
    warranty,
    type,
    comfort
  ) {
    this.rooms = rooms;
    this.surface = surface;
    this.year = year;
    this.state = state;
    this.furnished = furnished;
    this.price = price;
    this.warranty = warranty;
    this.type = type;
    this.comfort = comfort;
  }
}

class Facilities {
  constructor(
    internet,
    cableTv,
    airConditioning,
    centralHeating,
    fridge,
    stove,
    washingMachine,
    lift,
    parking,
    storageSpace,
    balcony,
    smokeDetector,
    gasDetector
  ) {
    this.internet = internet;
    this.cableTv = cableTv;
    this.airConditioning = airConditioning;
    this.centralHeating = centralHeating;
    this.fridge = fridge;
    this.stove = stove;
    this.washingMachine = washingMachine;
    this.lift = lift;
    this.parking = parking;
    this.storageSpace = storageSpace;
    this.balcony = balcony;
    this.smokeDetector = smokeDetector;
    this.gasDetector = gasDetector;
  }
}

class OtherInfo {
  constructor(description, freeFrom, petsAllowed) {
    this.description = description;
    this.freeFrom = freeFrom;
    this.petsAllowed = petsAllowed;
  }
}

class Contact {
  constructor(name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;
  }
}

class Chirie {
  constructor(
    id,
    adress,
    propertyInfo,
    facilities,
    otherInfo,
    contact,
    images
  ) {
    this.id = id;
    this.adress = adress;
    this.propertyInfo = propertyInfo;
    this.facilities = facilities;
    this.otherInfo = otherInfo;
    this.contact = contact;
    this.images = images;
  }
}

module.exports = {
  Adress,
  PropertyInfo,
  Facilities,
  OtherInfo,
  Contact,
  Chirie,
};
