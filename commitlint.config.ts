import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
    /*
     * Resolve and load @commitlint/config-conventional from node_modules.
     * Referenced packages must be installed
     */
    extends: ['@commitlint/config-conventional'],
    /*
     * Functions that return true if commitlint should ignore the given message.
     */
    ignores: [(message) => /^Bumps \[.+]\(.+\) from .+ to .+\.$/m.test(message)],
    /*
     * Custom URL to show upon failure
     */
    helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
};

module.exports = Configuration;
