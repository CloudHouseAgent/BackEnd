class Adress {
  constructor(location, floor, city, county, country) {
    this.location = location;
    this.floor = floor;
    this.city = city;
    this.county = county;
    this.country = country;
  }

  static isValid(adress) {
    return (
      adress &&
      typeof adress.location === "string" &&
      typeof adress.floor === "number" &&
      typeof adress.city === "string" &&
      typeof adress.county === "string" &&
      typeof adress.country === "string"
    );
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

  static isValid(propertyInfo) {
    return (
      propertyInfo &&
      typeof propertyInfo.rooms === "number" &&
      typeof propertyInfo.surface === "number" &&
      typeof propertyInfo.year === "number" &&
      typeof propertyInfo.state === "string" &&
      typeof propertyInfo.furnished === "boolean" &&
      typeof propertyInfo.price === "number" &&
      typeof propertyInfo.warranty === "boolean" &&
      typeof propertyInfo.type === "string" &&
      typeof propertyInfo.comfort === "string"
    );
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

  static isValid(facilities) {
    return (
      facilities &&
      typeof facilities.internet === "boolean" &&
      typeof facilities.cableTv === "boolean" &&
      typeof facilities.airConditioning === "boolean" &&
      typeof facilities.centralHeating === "boolean" &&
      typeof facilities.fridge === "boolean" &&
      typeof facilities.stove === "boolean" &&
      typeof facilities.washingMachine === "boolean" &&
      typeof facilities.lift === "boolean" &&
      typeof facilities.parking === "boolean" &&
      typeof facilities.storageSpace === "boolean" &&
      typeof facilities.balcony === "boolean" &&
      typeof facilities.smokeDetector === "boolean" &&
      typeof facilities.gasDetector === "boolean"
    );
  }
}

class OtherInfo {
  constructor(description, freeFrom, petsAllowed) {
    this.description = description;
    this.freeFrom = freeFrom;
    this.petsAllowed = petsAllowed;
  }

  static isValid(otherInfo) {
    return (
      otherInfo &&
      typeof otherInfo.description === "string" &&
      typeof otherInfo.freeFrom === "string" &&
      typeof otherInfo.petsAllowed === "boolean"
    );
  }
}

class Contact {
  constructor(userId, name, email, phone) {
    this.userId = userId;
    this.name = name;
    this.phone = phone;
    this.email = email;
  }

  static isValid(contact) {
    return (
      contact &&
      typeof contact.userId === "string" &&
      typeof contact.name === "string" &&
      //typeof contact.phone === "string" &&
      typeof contact.email === "string"
    );
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

  static isValid(chirie) {
    return (
      chirie &&
      Adress.isValid(chirie.adress) &&
      PropertyInfo.isValid(chirie.propertyInfo) &&
      Facilities.isValid(chirie.facilities) &&
      OtherInfo.isValid(chirie.otherInfo) &&
      Contact.isValid(chirie.contact) &&
      Array.isArray(chirie.images)
    );
  }
}

export { Chirie, Adress, PropertyInfo, Facilities, OtherInfo, Contact };
