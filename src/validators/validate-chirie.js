import {
  Chirie,
  Adress,
  PropertyInfo,
  Facilities,
  OtherInfo,
  Contact,
} from "../models.js";

import ValidatorRepsonse from "./validator_response.js";

function mapAndValidateChirie(user, body) {
  const { adress, propertyInfo, facilities, otherInfo, images } = body;

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

  const mappedContact = Contact.isValid({
    userId: user.sub,
    name: user.fullName,
    email: user.email,
    phone: user.phoneNumber,
  })
    ? new Contact(user.sub, user.fullName, user.email, user.phone)
    : null;

  if (!mappedAdress) {
    return new ValidatorRepsonse(false, "Adress is invalid", null);
  } else if (!mappedPropertyInfo) {
    return new ValidatorRepsonse(false, "Property info is invalid", null);
  } else if (!mappedFacilities) {
    return new ValidatorRepsonse(false, "Facilities are invalid", null);
  } else if (!mappedOtherInfo) {
    return new ValidatorRepsonse(false, "Other info is invalid", null);
  } else if (!mappedContact) {
    return new ValidatorRepsonse(false, "Contact is invalid", null);
  }

  return new ValidatorRepsonse(
    true,
    "succes",
    new Chirie(
      null,
      mappedAdress,
      mappedPropertyInfo,
      mappedFacilities,
      mappedOtherInfo,
      mappedContact,
      images
    )
  );
}

export default mapAndValidateChirie;
