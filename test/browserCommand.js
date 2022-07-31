
/**
 * Implementation of custom set of commands
 */
module.exports = {
    addedCommands: {
        pressTabKey: async function () {
            return (await this.keys('\uE004'));
        }
    }
}