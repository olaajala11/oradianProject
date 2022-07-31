import * as clientAccountDashboard from '../pageObjects/clientAccountDashboardPage';
import assert from 'assert';

/**
 * Verify the client information has been successfully registered
 *
 * @param {Object} clientAcctInfo Client info object to verify
 */
export async function verifyClientAccountInfo(clientAcctInfo) {
    const firstName = await clientAccountDashboard.firstName.getText();
    const lastName = await clientAccountDashboard.lastName.getText();
    assert.equal(firstName, clientAcctInfo.firstName, 'Client first name did not match');
    assert.equal(lastName, clientAcctInfo.lastName, 'Client last name did not match');
}