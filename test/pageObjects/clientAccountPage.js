/**
 * This stores basic page functions for the individual client account page
 */

import {
    getRandomLastName, getRandomFirstName, getRandomPassportNumber, getRandomPhoneNumber, getBranch, getCurrentDate
} from '../common';
import Element from '../element';
var browserCommands = require('../browserCommand')

export const page = new Element('h1 > span');
export const usernameTextField = new Element('input#us1');
export const passwordTextField = new Element('input#pw1');
export const signInButton = new Element('button.btn-primary');
export const errorMsg = new Element('.fm_error_msg > li');

// Basic Information Selectors
export const genderDropDown = new Element('[data-qa-element-id="personal.genderID"] span.Select-arrow-zone');
export const genderTextInput = new Element('[data-qa-element-id="personal.genderID"] .Select-input input');
export const femaleGender = new Element('[aria-activedescendant="react-select-2--option-0"]');
export const firstNameField = new Element('input[data-qa-element-id="personal.firstName"]');
export const middleNameField = new Element('input[data-qa-element-id="personal.middleName"]');
export const lastNameField = new Element('input[data-qa-element-id="personal.lastName"]');
export const motherMaidenNameField = new Element('input[data-qa-element-id="personal.motherMaidenName"]');
export const dateOfBirthField = new Element('[data-qa-element-id="personal.dateOfBirth"] input');
export const placeOfBirthField = new Element('input[data-qa-element-id="personal.placeOfBirth"]');
export const maritalStatusDropDown = new Element('[data-qa-element-id="personal.maritalStatusID"] span.Select-arrow-zone');
export const maritalStatusTextInput = new Element('[data-qa-element-id="personal.maritalStatusID"] .Select-input input');
export const genderText = new Element('[data-qa-element-id="personal.genderID"] .Select-value-label');
export const primaryIdTypeDropDown = new Element('[data-qa-element-id="primaryIdentification.identificationDocumentTypeID"] span.Select-arrow-zone');
export const primaryIdTypeTextInput = new Element('[data-qa-element-id="primaryIdentification.identificationDocumentTypeID"] .Select-input input');
export const primaryIdTextInput = new Element('[data-qa-element-id="primaryIdentification.value"]');
export const economyActivityDropDown = new Element('[data-qa-element-id="economicActivityID"] span.Select-arrow-zone');
export const economyActivityTextInput = new Element('[data-qa-element-id="economicActivityID"] .Select-input input');

// Contact Information Selectors
export const streetTextInput = new Element('input[data-qa-element-id="address.street1"]');
export const postCodeTextInput = new Element('input[data-qa-element-id="address.postCode"]');
export const cityTextInput = new Element('input[data-qa-element-id="address.city"]');
export const countryTextInput = new Element('input[data-qa-element-id="address.country"]');
export const mobileRegionCodeDropDown = new Element('[data-qa-element-id="mobile.regionCode"] span.Select-arrow-zone');
export const mobileRegionCodeTextInput = new Element('[data-qa-element-id="mobile.regionCode"] .Select-input input');
export const mobileNumberTextInput = new Element('[data-qa-element-id="mobile.number"]');

// Business Information Selectors
const ownedBusiness = '[data-qa-element-id="Owned Business"]';
export const businessSectorDropDown = new Element('[data-qa-element-id="personal.businessSectorID"] span.Select-arrow-zone');
export const businessSectorTextInput = new Element('[data-qa-element-id="personal.businessSectorID"] .Select-input input');
export const createNewBusinessLink = new Element('[class*="PersonSelect__OwnedBusinessRow"] [class*="PersonSelect__Link"]');
export const ownedBusinessPopup = new Element(`${ownedBusiness}`);
export const businessNameTextInput = new Element(`${ownedBusiness} input[data-qa-element-id="name"]`);
export const businessPrimaryIdTypeDropDown = new Element(`${ownedBusiness} [data-qa-element-id="primaryIdentification.identificationDocumentTypeID"] span.Select-arrow-zone`);
export const businessPrimaryIdTypeTextInput = new Element(`${ownedBusiness} [data-qa-element-id="primaryIdentification.identificationDocumentTypeID"] .Select-input input`);
export const businessPrimaryIdTextInput = new Element(`${ownedBusiness} [data-qa-element-id="primaryIdentification.value"]`);
export const businessStreetTextInput = new Element(`${ownedBusiness} input[data-qa-element-id="address.street1"]`);
export const businessPostCodeTextInput = new Element(`${ownedBusiness} input[data-qa-element-id="address.postCode"]`);
export const businessCityTextInput = new Element(`${ownedBusiness} input[data-qa-element-id="address.city"]`);
export const businessStateTextInput = new Element(`${ownedBusiness} input[data-qa-element-id="address.state"]`);
export const businessCountryTextInput = new Element(`${ownedBusiness} input[data-qa-element-id="address.country"]`);
export const businessMobileRegionCodeDropDown = new Element(`${ownedBusiness} [data-qa-element-id="mobile.regionCode"] span.Select-arrow-zone`);
export const businessMobileRegionCodeTextInput = new Element(`${ownedBusiness} [data-qa-element-id="mobile.regionCode"] .Select-input input`);
export const businessMobileNumberTextInput = new Element(`${ownedBusiness} [data-qa-element-id="mobile.number"]`);
export const businessEconomyActivityDropDown = new Element(`${ownedBusiness} [data-qa-element-id="economicActivityID"] span.Select-arrow-zone`);
export const businessEconomyActivityTextInput = new Element(`${ownedBusiness} [data-qa-element-id="economicActivityID"] .Select-input input`);
export const businessNumberStaff = new Element(`${ownedBusiness} input[data-qa-element-id="corporate.numberStaff"]`);
export const businessCreateBtn = new Element(`${ownedBusiness} button.btn-primary`);

// Assign To Selectors
export const branchDropDown = new Element('[data-qa-element-id="organisationStructure.branch"] span.Select-arrow-zone');
export const branchTextInput = new Element('[data-qa-element-id="organisationStructure.branch"] .Select-input input');

// Additional Selectors
export const createdDateField = new Element('[data-qa-element-id="createdOn"] input');
export const qualificationDropDown = new Element('[data-qa-element-id="personal.educationQualificationID"] span.Select-arrow-zone');
export const qualificationTextInput = new Element('[data-qa-element-id="personal.educationQualificationID"] .Select-input input');
export const memberAdmissionDateField = new Element('[data-qa-element-id="optionalFields.membershipAdmissionDate"] input');
export const childrenDropDown = new Element('[data-qa-element-id="personal.numberOfChildrenID"] span.Select-arrow-zone');
export const childrenTextInput = new Element('[data-qa-element-id="personal.numberOfChildrenID"] .Select-input input');
export const submitButton = new Element('.dslCreateForm button[type="submit"]');


/**
 * Sign in using user credentials. Loads user credentials from env variables
 */
export async function signIn() {
    await usernameTextField.setValue(process.env.USER_ID);
    await passwordTextField.setValue(process.env.USER_PASSWORD);
    await signInButton.click();
}

/**
 * Verifies user could log in successfully
 * 
 *@throws {error} If user was not able to log in
 */
export async function verifyLoggedInUser() {
    if (await errorMsg.isDisplayed(5000)) {
        throw new Error(await errorMsg.getText());
    }

    if (!await page.isDisplayed(5000)) {
        throw new Error('Unable to login to individual client account creation page successfully')
    }
}


/**
 * Selects gender
 *
 * @param {string} gender Gender to select
 */
export async function selectGender(gender) {
    await genderDropDown.scrollTo();
    await genderDropDown.click();
    await genderTextInput.setValue(gender);
    await browser.pressTabKey();
}

/**
 * Enters first name
 *
 * @param {string} firstName First name to enter
 * 
 * @returns {<Promise> string} First name that was entered
 */
export async function enterFirstName(firstName) {
    let firstNameStr = firstName;
    if (firstNameStr == 'randomFirstName') {
        firstNameStr = getRandomFirstName();
    }
    await firstNameField.setValue(firstNameStr);
    return firstNameStr;
}

/**
 * Enters last name
 *
 * @param {string} firstName Last name to enter
 * 
 * @returns {<Promise> string} Last name that was entered
 */
export async function enterLastName(lastName) {
    let lastNameStr = lastName;
    if (lastNameStr == 'randomLastName') {
        lastNameStr = getRandomLastName();
    }
    await lastNameField.setValue(lastNameStr);
    return lastNameStr;
}

/**
 * Enters date of birth
 * 
 * @param {string} dateOfBirth Date of Birth to enter
 */
export async function enterDateOfBirth(dateOfBirth) {
    await dateOfBirthField.click();
    await dateOfBirthField.setValue(dateOfBirth);
}

/**
 * Selects marital status
 *
 * @param {string} maritalStatus Marital status to select
 */
export async function selectMaritalStatus(maritalStatus) {
    await maritalStatusDropDown.click();
    await maritalStatusTextInput.setValue(maritalStatus);
    await browser.pressTabKey();
}

/**
 * Selects primary ID type
 *
 * @param {string} primaryIdType ID type to select
 */
export async function selectPrimaryIdType(primaryIdType) {
    await primaryIdTypeDropDown.click();
    await primaryIdTypeTextInput.setValue(primaryIdType);
    await browser.pressTabKey();
}

/**
 * Enters ID value
 *
 * @param {string} id ID value to enter
 */
export async function enterPrimaryId(id) {
    let idStr = id;
    if (idStr == 'randomId') {
        idStr = getRandomPassportNumber();
    }
    await primaryIdTextInput.setValue(idStr);
}

/**
 * Selects economy activity
 *
 * @param {string} economyActivity Economy activity to select
 */
export async function selectEconomyActivity(economyActivity) {
    await economyActivityDropDown.click();
    await economyActivityTextInput.setValue(economyActivity);
    await browser.pressTabKey();
}

/**
 * Selects mobile region phone code
 *
 * @param {string} phoneCode Mobile region phone code
 */
export async function selectMobileRegionCode(phoneCode) {
    await mobileRegionCodeDropDown.click();
    await mobileRegionCodeTextInput.setValue(phoneCode);
    await browser.pressTabKey();
}

/**
 * Enters phone number
 *
 * @param {string} phoneNumber Phone number to enter
 */
export async function enterPhoneNumber(phoneNumber) {
    let phoneNumberStr = phoneNumber;
    if (phoneNumberStr == 'randomPhoneNumber') {
        phoneNumberStr = getRandomPhoneNumber();
    }
    await mobileNumberTextInput.setValue(phoneNumberStr);

}

/**
 * Selects business sector
 * 
 * @param {string} sector Sector to select
 */
export async function selectSector(sector) {
    await businessSectorDropDown.click();
    await businessSectorTextInput.setValue(sector);
    await browser.pressTabKey();
}

/**
 * Selects business ID type
 *
 * @param {string} businessIdType ID type to select
 */
export async function selectBusinessIdType(businessIdType) {
    await businessPrimaryIdTypeDropDown.click();
    await businessPrimaryIdTypeTextInput.setValue(businessIdType);
    await browser.pressTabKey();
}

/**
 * Enters ID value
 *
 * @param {string} id ID value to enter
 */
export async function businessPrimaryId(id) {
    let idStr = id;
    if (idStr == 'randomId') {
        idStr = getRandomPassportNumber();
    }
    await businessPrimaryIdTextInput.setValue(idStr);
}


/**
 * Selects business mobile region phone code
 *
 * @param {string} phoneCode Business mobile region phone code
 */
export async function selectBusinessMobileRegionCode(phoneCode) {
    await businessMobileRegionCodeDropDown.click();
    await businessMobileRegionCodeTextInput.setValue(phoneCode);
    await browser.pressTabKey();
}

/**
 * Enters business phone number
 *
 * @param {string} phoneNumber Phone number to enter
 */
export async function enterBusinessPhoneNumber(phoneNumber) {
    let phoneNumberStr = phoneNumber;
    if (phoneNumberStr == 'randomPhoneNumber') {
        phoneNumberStr = getRandomPhoneNumber();
    }
    await businessMobileNumberTextInput.setValue(phoneNumberStr);

}

/**
 * Selects business economy activity
 *
 * @param {string} phoneCode Business economy activity to select
 */
export async function selectBusinessEconomyActivity(economyActivity) {
    await businessEconomyActivityDropDown.click();
    await businessEconomyActivityTextInput.setValue(economyActivity);
    await browser.pressTabKey();
}

/**
 * Selects a branch
 * 
 * @param {string} branch Branch name
 */
export async function selectBranch(branch) {
    let branchStr = branch;
    if (branchStr == 'randomBranch') {
        branchStr = getBranch();
    }
    await branchDropDown.click();
    await branchTextInput.setValue(branchStr);
    await browser.pressTabKey();
}

/**
 * Selects a date
 */
export async function selectDateCreated() {
    await createdDateField.click();
    await createdDateField.setValue(getCurrentDate());
}

/**
 * Selects educational qualification
 * 
 * @param {string} qualification Educational qualification to select
 */
export async function selectEducationalQualification(qualification) {
    await qualificationDropDown.click();
    await qualificationTextInput.setValue(qualification);
    await browser.pressTabKey();
}

/**
 * Selects number of Children
 *
 * @param {string} NoOfChildren Number of children
 */
export async function selectNumberOfChildren(NoOfChildren) {
    await childrenDropDown.click();
    await childrenTextInput.setValue(NoOfChildren);
    await browser.pressTabKey();
}