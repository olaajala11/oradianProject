import * as createClientAccountSteps from '../testSteps/createClientAccountSteps';
import * as navigationSteps from '../testSteps/navigationSteps';
import * as clientAccountDashboardSteps from '../testSteps/clientAccountDashboardSteps';

describe('Create a client account', () => {
    it('should create a client account and verify registration info', async () => {
        await navigationSteps.navigateToIndividualClientCreationUrl();
        await createClientAccountSteps.loginWithValidCredentials();
        const clientAcctInfo = await createClientAccountSteps.createAccount();
        await clientAccountDashboardSteps.verifyClientAccountInfo(clientAcctInfo); 
    });
});