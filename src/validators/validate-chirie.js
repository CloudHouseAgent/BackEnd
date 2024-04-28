function mapAndValidateChirie(body) {
  const {
    Adress,
    PropertyInfo,
    Facilities,
    OtherInfo,
    Contact,
    Chirie,
  } = require("../models");

  const { adress, propertyInfo, facilities, otherInfo, contact, images } = body;

  const mappedAdress = Adress.isValid(adress)
    ? new Adress(
        adress.location,
        adress.floor,
        adress.city,
        adress.county,
        adress.country
      )
    : null;

  const mappedPropertyInfo = PropertyInfo.isValid(propertyInfo)
    ? new PropertyInfo(
        propertyInfo.rooms,
        propertyInfo.surface,
        propertyInfo.year,
        propertyInfo.state,
        propertyInfo.furnished,
        propertyInfo.price,
        propertyInfo.warranty,
        propertyInfo.type,
        propertyInfo.comfort
      )
    : null;

  const mappedFacilities = Facilities.isValid(facilities)
    ? new Facilities(
        facilities.internet,
        facilities.cableTv,
        facilities.airConditioning,
        facilities.centralHeating,
        facilities.fridge,
        facilities.stove,
        facilities.washingMachine,
        facilities.lift,
        facilities.parking,
        facilities.storageSpace,
        facilities.balcony,
        facilities.smokeDetector,
        facilities.gasDetector
      )
    : null;

  const mappedOtherInfo = OtherInfo.isValid(otherInfo)
    ? new OtherInfo(
        otherInfo.description,
        otherInfo.freeFrom,
        otherInfo.petsAllowed
      )
    : null;

  const mappedContact = Contact.isValid(contact)
    ? new Contact(contact.name, contact.phone, contact.email)
    : null;

  if (
    !mappedAdress ||
    !mappedPropertyInfo ||
    !mappedOtherInfo ||
    !mappedFacilities ||
    !mappedContact
  ) {
    return null;
  }

  return new Chirie(
    null,
    mappedAdress,
    mappedPropertyInfo,
    mappedFacilities,
    mappedOtherInfo,
    mappedContact,
    images
  );
}

export default mapAndValidateChirie;
