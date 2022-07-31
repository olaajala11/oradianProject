var chance = require('chance').Chance();

/**
 * Verifies that a certain JSON object contains a key value, otherwise an error is thrown
 *
 * @param {Object} obj JSON object to verify
 * @param {string} keyValue Key value that is being searched for
 */
export function checkJsonKey(obj, keyValue) {
    if (!obj.hasOwnProperty(keyValue)) {
        throw new Error(`Invalid ${keyName} parameter specified`);
    }
}

/**
 * Obtains the current date
 *
 * @returns CurrentDate in dd/mm/yyyy format
 */
export function getCurrentDate() {
    const date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();

    if (dd.toString().length < 2) {
        dd = '0' + dd; 
    }

    if (mm.toString().length < 2) {
        mm = '0' + mm; 
    }
    
    return dd + '/' + mm + '/' + yyyy;
}

/**
 * Obtains first name randomly
 *
 * @returns First name
 */
export function getRandomFirstName() {
    return chance.first();
}

/**
 * Obtains last name randomly
 *
 * @returns Last name
 */
export function getRandomLastName() {
    return chance.last();
}

/**
 * Obtains phone number randomly
 *
 * @returns Phone number
 */
 export function getRandomPhoneNumber(country = 'uk') {
    let phone = chance.phone({formatted: false, country, mobile: true})
    return phone.slice(1);
}

/**
 * Obtains passport number
 *
 * @returns Passport number
 */
export function getRandomPassportNumber() {
    let number = '';
    let digit = '123456789';
    let digitLength = digit.length;
    for ( var i = 0; i < 7; i++ ) {
      number += digit.charAt(Math.floor(Math.random() * digitLength));
   }
   return 'ABC' + number;
}
/**
 * Obtains a branch name from list of available branches
 *
 * @returns Branch name
 */
export function getBranch() {
    let branchArray = [
        'Alaminos', 'Batangas', 'IAB_Consolidated_GL', 'La Union', 'Lingayen', 'Lucena', 'NCR - Tandem 1',
        'NCR - Tandem 2', 'NCR - Tandem 3', 'NCR - Tandem 4', 'NCR - Trio 1', 'NCR Team 3', 'Palawan',
        'Sta. Cruz', 'Sta. Rosa', 'Team 1', 'Team 2', 'Urdaneta', 'Zambales'
    ];
    let branchIndex = Math.floor(Math.random() * branchArray.length);
    return branchArray[branchIndex];
}

