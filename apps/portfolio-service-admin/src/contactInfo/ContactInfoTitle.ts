import { ContactInfo as TContactInfo } from "../api/contactInfo/ContactInfo";

export const CONTACTINFO_TITLE_FIELD = "id";

export const ContactInfoTitle = (record: TContactInfo): string => {
  return record.id?.toString() || String(record.id);
};
