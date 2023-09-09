export type SubmitRequest = {
  transactionId: string
  personal: {
    title: string
    driverFirstName: string
    driverMiddleName: string
    driverLastName: string
    email: string
    phone: string
    previousAliases: {
      firstName: string
      middleName: string
      lastName: string
    }[]
    gender: string
    dob: string
    birtCountry: string
  }
  driver: {
    licenceNumber: string
    expiryDate: string
    hasLicenceForMin6Months: boolean
    hasTerritoryLicence: boolean
    territoryLicenceState?: string[]
    hasDriverAccreditation: boolean
    driverAccreditationNumber?: string
    vehicleClasses: string[]
    tandc: true
  }
  consent: {
    understandInformation: boolean
    informationTrue: boolean
    informationConsidered: boolean
    medicalVicRoadsPoliceCheckConsent: boolean
    consentToDisclosing: boolean
    indemnifyAgaintsLiability: boolean
    acicCheckConsent: boolean
    childrenCheckConsent: boolean
    personalInfoCheckConsent: boolean
    trafficOffences: boolean
    assessAcicCheckConsent: boolean
    criminalOffences: boolean
    licenceCancelledSuspended: boolean
    secOffendersReporting: boolean
    ausWorkRights: boolean
    additionalInformation: string
  }
  payment: {
    creditCardToken: string
  }
}
type PaymentRequest = SubmitRequest["payment"]
type PreviousAliasRequest = SubmitRequest["personal"]["previousAliases"][0] // lookup type
export function getPayment(): PaymentRequest {
  return {
    creditCardToken: "2342342kjldshfksdfasjdf1!@#12jhk",
  }
}
