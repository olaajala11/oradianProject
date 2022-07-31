
import * as clientAccount from '../pageObjects/clientAccountPage';
import * as clientRegistrationObj from '../data/clientRegistrationInfo.json';
import {checkJsonKey, getCurrentDate} from '../common';

/**
 * Login with a valid username and password
 */
export async function loginWithValidCredentials() {
    await clientAccount.signIn();
    await clientAccount.verifyLoggedInUser();
}

/**
 * Enter basic information for a new client
 *
 * @param {Object} clientInfo Client data
 */
export async function enterBasicInfo(clientInfo) {
    await clientAccount.selectGender(clientInfo.gender);
    const firstName = await clientAccount.enterFirstName(clientInfo.firstName);
    await clientAccount.middleNameField.setValue(clientInfo.middleName);
    const lastName = await clientAccount.enterLastName(clientInfo.lastName);
    await clientAccount.motherMaidenNameField.setValue(clientInfo.maidenName);
    await clientAccount.enterDateOfBirth(clientInfo.dateOfBirth);
    await clientAccount.placeOfBirthField.setValue(clientInfo.country);
    await clientAccount.selectMaritalStatus(clientInfo.maritalStatus);
    await clientAccount.selectPrimaryIdType(clientInfo.primaryIdType);
    await clientAccount.enterPrimaryId(clientInfo.primaryId);
    await clientAccount.selectEconomyActivity(clientInfo.economyActivity);

    return {
        firstName,
        lastName
    }
}

/**
 * Enter contact information for a new client
 *
 * @param {Object} clientInfo Client data
 */
export async function enterContactInfo(clientInfo) {
    await clientAccount.streetTextInput.setValue(clientInfo.street);
    await clientAccount.postCodeTextInput.setValue(clientInfo.postCode);
    await clientAccount.cityTextInput.setValue(clientInfo.city);
    await clientAccount.countryTextInput.setValue(clientInfo.country);
    await clientAccount.selectMobileRegionCode(clientInfo.phoneCode);
    await clientAccount.enterPhoneNumber(clientInfo.phoneNumber);
}

/**
 * Enter business information for a new client
 * 
 * @param {Object} clientInfo Client data
 */
export async function enterBusinessInfo(clientInfo) {
    await clientAccount.selectSector(clientInfo.businessSector);
    await clientAccount.createNewBusinessLink.click();
    await clientAccount.ownedBusinessPopup.waitForDisplayed(5000);
    
    // Business Info Popup
    await clientAccount.businessNameTextInput.setValue(clientInfo.businessName);
    await clientAccount.selectBusinessIdType(clientInfo.businessPrimaryIdType);
    await clientAccount.businessPrimaryId(clientInfo.businessPrimaryId);
    await clientAccount.businessStreetTextInput.setValue(clientInfo.street);
    await clientAccount.businessPostCodeTextInput.setValue(clientInfo.postCode);
    await clientAccount.businessCityTextInput.setValue(clientInfo.city);
    await clientAccount.businessStateTextInput.setValue(clientInfo.state);
    await clientAccount.businessCountryTextInput.setValue(clientInfo.country);
    await clientAccount.selectBusinessMobileRegionCode(clientInfo.phoneCode);
    await clientAccount.enterBusinessPhoneNumber(clientInfo.phoneNumber);
    await clientAccount.selectBusinessEconomyActivity(clientInfo.businessEconomy)
    await clientAccount.businessNumberStaff.setValue(clientInfo.staffNumber);
    await clientAccount.businessCreateBtn.click();
    await clientAccount.ownedBusinessPopup.waitForNotDisplayed(5000);
}

/**
 * Enter information relating to branch, credit officer and centre
 * 
 * @param {Object} clientInfo Client data
 */
export async function enterAssignToInfo(clientInfo) {
    await clientAccount.selectBranch(clientInfo.branch);
}

/**
 * Enter client's additional information 
 * 
 * @param {Object} clientInfo Client data
 */
 export async function enterAdditionalInfo(clientInfo) {
    await clientAccount.selectDateCreated();
    await clientAccount.selectEducationalQualification(clientInfo.qualification);
    await clientAccount.memberAdmissionDateField.setValue(getCurrentDate());
    await clientAccount.selectNumberOfChildren(clientInfo.children)
}

/**
 * Create individual client account
 *
 * @param {string} clientRegistrationKey Key name that contains client information to register
 * 
 * @returns {Object} Client Information
 */
export async function createAccount(clientRegistrationKey = 'randomClient') {
    checkJsonKey(clientRegistrationObj, clientRegistrationKey);
    const clientInfo = clientRegistrationObj[clientRegistrationKey];

    const clientName = await enterBasicInfo(clientInfo);
    await enterContactInfo(clientInfo);
    await enterBusinessInfo(clientInfo);
    await enterAssignToInfo(clientInfo);
    await enterAdditionalInfo(clientInfo);
    await clientAccount.submitButton.click();

    return clientName;
}